const fs = require('fs');
const path = require('path');

const servicePath = './public/images/services';
const optimizedPath = './public/images/services/optimized';

console.log('📦 Replacing original images with optimized versions...\n');

try {
  const files = fs.readdirSync(optimizedPath);

  files.forEach(file => {
    if (file.endsWith('.jpg')) {
      const optimizedFile = path.join(optimizedPath, file);
      const targetFile = path.join(servicePath, file);

      // Delete original
      if (fs.existsSync(targetFile)) {
        fs.unlinkSync(targetFile);
      }

      // Copy optimized to services folder
      fs.copyFileSync(optimizedFile, targetFile);

      const size = (fs.statSync(targetFile).size / 1024).toFixed(1);
      console.log(`✅ Replaced ${file} (${size}KB)`);
    }
  });

  console.log('\n✅ All images replaced successfully!\n');
  console.log('🗑️  Cleaning up optimized folder...');

  // Remove optimized folder
  fs.rmSync(optimizedPath, { recursive: true, force: true });

  console.log('✅ Cleanup complete!\n');
  console.log('🚀 Your images are now optimized and ready!');
  console.log('\n📋 Next step: Run "npm run dev" to see your site\n');

} catch (error) {
  console.error('❌ Error:', error.message);
}
