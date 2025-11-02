const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const servicePath = './public/images/services';
const optimizedPath = './public/images/services/optimized';

// Create optimized directory
if (!fs.existsSync(optimizedPath)) {
  fs.mkdirSync(optimizedPath, { recursive: true });
}

// Images that need optimization with their target sizes
const imagesToOptimize = [
  { file: 'face-coaching-thumb.jpg', maxSize: 150 }, // 15MB -> compress heavily
  { file: 'dermalogica-exo-thumb.jpg', maxSize: 150 }, // 8MB -> compress heavily
  { file: 'slimming-package-thumb.jpg', maxSize: 180 },
  { file: 'crystal-healing-thumb.jpg', maxSize: 180 },
  { file: 'deep-facial-thumb.jpg', maxSize: 180 },
  { file: 'massage-eleni-thumb.jpg', maxSize: 180 },
  { file: 'in-person-consultation-thumb.jpg', maxSize: 180 },
  { file: 'virtual-consultation-thumb.jpg', maxSize: 180 },
];

async function optimizeImage(filename, maxSizeKB) {
  const inputPath = path.join(servicePath, filename);
  const outputPath = path.join(optimizedPath, filename);

  try {
    const stats = fs.statSync(inputPath);
    const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);

    console.log(`\nOptimizing ${filename} (${sizeMB}MB)...`);

    // Start with quality 85
    let quality = 85;
    let tempStats;

    do {
      await sharp(inputPath)
        .resize(600, 400, { fit: 'cover' })
        .jpeg({ quality, progressive: true })
        .toFile(outputPath);

      tempStats = fs.statSync(outputPath);

      if (tempStats.size > maxSizeKB * 1024 && quality > 50) {
        quality -= 5;
        fs.unlinkSync(outputPath);
      } else {
        break;
      }
    } while (quality >= 50);

    const newSizeKB = (tempStats.size / 1024).toFixed(1);
    const reduction = ((1 - tempStats.size / stats.size) * 100).toFixed(1);

    console.log(`✅ ${filename}: ${sizeMB}MB → ${newSizeKB}KB (${reduction}% reduction, quality: ${quality})`);
  } catch (error) {
    console.error(`❌ Error optimizing ${filename}:`, error.message);
  }
}

async function optimizeAll() {
  console.log('🖼️  IMAGE OPTIMIZATION STARTING...\n');
  console.log('📐 Target: 600x400px thumbnails under 200KB each\n');
  console.log('=' .repeat(60));

  for (const img of imagesToOptimize) {
    await optimizeImage(img.file, img.maxSize);
  }

  console.log('\n' + '='.repeat(60));
  console.log('\n✅ OPTIMIZATION COMPLETE!\n');
  console.log('📁 Optimized images saved to: public/images/services/optimized/\n');
  console.log('📋 NEXT STEPS:');
  console.log('   1. Review the optimized images in the "optimized" folder');
  console.log('   2. If they look good, move them to replace the originals:');
  console.log('      • Windows: copy files from optimized/ to services/');
  console.log('      • Or run: node replace-optimized.js (I can create this)');
  console.log('   3. Run: npm run dev');
  console.log('\n');
}

optimizeAll();
