#!/usr/bin/env node
/**
 * Compares the prices and booking links in data/services.ts against what Square
 * actually has live, and reports anything that has drifted.
 *
 *   npm run price-check
 *
 * Square's booking page embeds its whole service catalog as JSON in a `content`
 * attribute, so this needs no API token — just a public URL.
 *
 * That payload is Square's internal page data, NOT a documented API. If Square
 * changes its shape this script MUST fail loudly rather than quietly reporting
 * "all in sync" — a silent pass would be worse than no check at all. Hence the
 * hard exits below when the payload is missing or parses to zero services.
 *
 * Exit codes:  0 = in sync   1 = drift found   2 = script could not run
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const BOOKING_BASE =
  'https://book.squareup.com/appointments/8wjlenaylebqr2/location/992K09NSXT3W7';
const CATALOG_URL = `${BOOKING_BASE}/services`;

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SERVICES_FILE = path.join(ROOT, 'data', 'services.ts');

// Entries that intentionally have no Square counterpart.
const NOT_IN_SQUARE = new Set([
  'virtual-consultation', // free 15-min phone call, not a bookable Square service
  'face-coaching', // contact for pricing
]);

const die = (msg) => {
  console.error(`\n✖ price-check could not run: ${msg}\n`);
  process.exit(2);
};

const money = (cents) => '$' + (cents / 100).toFixed(2).replace(/\.00$/, '');

async function fetchSquareCatalog() {
  const res = await fetch(CATALOG_URL, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  if (!res.ok) die(`Square returned HTTP ${res.status} for ${CATALOG_URL}`);
  const html = await res.text();

  const m = html.match(/content="(\{&quot;id&quot;.*?)"\s*[/>]/s);
  if (!m) {
    die(
      'could not find the embedded catalog JSON on the booking page.\n' +
        '  Square has probably changed its page format. Do NOT assume prices are in sync —\n' +
        '  re-check them by hand and update the parser in scripts/price-check.mjs.'
    );
  }

  const json = m[1]
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');

  let payload;
  try {
    payload = JSON.parse(json);
  } catch (e) {
    die(`the embedded catalog JSON did not parse: ${e.message}`);
  }

  const services = payload?.services;
  if (!Array.isArray(services) || services.length === 0) {
    die('parsed the booking page but found zero services — refusing to report "in sync".');
  }
  return services;
}

function parseWebsiteServices() {
  // Normalize CRLF — the repo checks out with Windows line endings.
  const src = fs.readFileSync(SERVICES_FILE, 'utf8').replace(/\r\n/g, '\n');
  const entries = src
    .split(/\n\s{6}\{\n/)
    .slice(1)
    .map((block) => ({
      id: block.match(/id: '(.*?)',/)?.[1],
      name: block.match(/name: '(.*?)',/)?.[1],
      price: block.match(/price: '([^']+)'/)?.[1],
      squareId: block.match(/\/services\/([A-Z0-9]{20,})/)?.[1] ?? null,
    }))
    .filter((s) => s.id && s.name && s.price);

  if (entries.length === 0) die('parsed zero services out of data/services.ts');
  return entries;
}

const square = await fetchSquareCatalog();
const byId = new Map(square.map((s) => [s.id, s]));
const site = parseWebsiteServices();

const drift = [];
const broken = [];
let checked = 0;

for (const s of site) {
  if (NOT_IN_SQUARE.has(s.id)) continue;

  if (!s.squareId) {
    broken.push({ ...s, why: 'no Square service ID in its bookingUrl' });
    continue;
  }
  const sq = byId.get(s.squareId);
  if (!sq) {
    broken.push({ ...s, why: `booking link points at ${s.squareId}, which is not in Square` });
    continue;
  }

  checked++;

  // Ranges like "$125-$150" are editorial; skip the numeric compare but still
  // verify above that the link resolves.
  if (/[-–]|contact/i.test(s.price)) continue;
  if (sq.price_type !== 'fixed' || sq.price_cents == null) continue;

  const sqPrice = money(sq.price_cents);
  if (sqPrice !== s.price) {
    drift.push({ name: s.name, site: s.price, square: sqPrice, squareName: sq.name });
  }
}

console.log(`Square catalog : ${square.length} services`);
console.log(`Website        : ${site.length} entries (${checked} checked against Square)\n`);

if (!drift.length && !broken.length) {
  console.log('✓ Website prices and booking links all match Square.');
  process.exit(0);
}

if (drift.length) {
  console.log(`✖ ${drift.length} price${drift.length > 1 ? 's' : ''} out of date:\n`);
  const w = Math.max(...drift.map((d) => d.name.length));
  for (const d of drift) {
    console.log(`   ${d.name.padEnd(w)}   site ${d.site.padStart(6)}  →  Square ${d.square.padStart(6)}`);
  }
  console.log();
}

if (broken.length) {
  console.log(`✖ ${broken.length} broken booking link${broken.length > 1 ? 's' : ''}:\n`);
  for (const b of broken) console.log(`   ${b.name} — ${b.why}`);
  console.log();
}

console.log('Update data/services.ts to match Square, or fix the service in Square.');
process.exit(1);
