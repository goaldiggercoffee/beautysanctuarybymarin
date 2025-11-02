const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const servicePath = './public/images/services';

// Remaining images that need optimization
const imagesToOptimize = [
  { file: 'cryo-eyes-lifting-thumb.jpg', maxSize: 180 },    // 347K
  { file: 'micro-nano-vitamins-thumb.jpg', maxSize: 180 },  // 284K
  { file: 'body-pack-4-thumb.jpg', maxSize: 180 },          // 222K
];

async function optimizeImage(filename, maxSizeKB) {
  const filePath = path.join(servicePath, filename);
  const tempPath = path.join(servicePath, `temp_${filename}`);

  try {
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(1);

    console.log(`\nOptimizing ${filename} (${sizeKB}KB)...`);

    let quality = 80;
    let tempStats;

    do {
      await sharp(filePath)
        .resize(600, 400, { fit: 'cover' })
        .jpeg({ quality, progressive: true })
        .toFile(tempPath);

      tempStats = fs.statSync(tempPath);

      if (tempStats.size > maxSizeKB * 1024 && quality > 50) {
        quality -= 5;
        fs.unlinkSync(tempPath);
      } else {
        break;
      }
    } while (quality >= 50);

    // Replace original
    fs.unlinkSync(filePath);
    fs.renameSync(tempPath, filePath);

    const newSizeKB = (tempStats.size / 1024).toFixed(1);
    const reduction = ((1 - tempStats.size / stats.size) * 100).toFixed(1);

    console.log(`✅ ${filename}: ${sizeKB}KB → ${newSizeKB}KB (${reduction}% reduction, quality: ${quality})`);
  } catch (error) {
    console.error(`❌ Error optimizing ${filename}:`, error.message);
    // Clean up temp file if exists
    try {
      if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
    } catch (e) {}
  }
}

async function optimizeAll() {
  console.log('🖼️  Optimizing remaining large images...\n');

  for (const img of imagesToOptimize) {
    await optimizeImage(img.file, img.maxSize);
  }

  console.log('\n✅ All images optimized!\n');
}

optimizeAll();
