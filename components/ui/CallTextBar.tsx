'use client';

import { PHONE_TEL, PHONE_SMS, PHONE_DISPLAY } from '@/data/contact';

/**
 * Sticky Call / Text bar, mobile only.
 *
 * On a phone there was previously no way to reach Carmen without scrolling all the
 * way to the footer. Texting in particular converts well for this clientele — it's
 * one tap and no one has to work up to a phone call.
 *
 * Hidden on lg+ where the header already carries a Call link.
 */
export default function CallTextBar() {
  return (
    <>
      {/* Spacer so the fixed bar never covers the last of the page content. */}
      <div className="h-[72px] lg:hidden" aria-hidden="true" />

      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        <div className="flex gap-2 border-t border-white/10 bg-dark-bg/95 px-3 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur">
          <a
            href={PHONE_TEL}
            aria-label={`Call Beauty Sanctuary at ${PHONE_DISPLAY}`}
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-accent-primary px-4 py-3.5 font-semibold text-gray-900 transition-colors active:bg-accent-hover"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Call
          </a>

          <a
            href={PHONE_SMS}
            aria-label={`Text Beauty Sanctuary at ${PHONE_DISPLAY}`}
            className="flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-accent-primary px-4 py-3.5 font-semibold text-accent-primary transition-colors active:bg-accent-primary active:text-gray-900"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Text
          </a>
        </div>
      </div>
    </>
  );
}
