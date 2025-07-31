const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// PDF files to generate previews for
const pdfFiles = [
  'MEDICAL MINDSCAPE 1.pdf',
  'NUMSA Journal (3)_compressed_250420_022657.pdf',
  'NUMSA MAGAZINE 2 (1)_compressed_250420_022813.pdf'
];

// Create previews directory if it doesn't exist
const previewsDir = path.join(__dirname, '../public/assets/images/publications');
if (!fs.existsSync(previewsDir)) {
  fs.mkdirSync(previewsDir, { recursive: true });
}

console.log('Generating PDF preview images...');

pdfFiles.forEach(pdfFile => {
  const pdfPath = path.join(__dirname, '../public/documents/publications', pdfFile);
  const previewName = pdfFile.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/\.pdf$/, '-preview.jpg');
  const previewPath = path.join(previewsDir, previewName);
  
  if (fs.existsSync(pdfPath)) {
    try {
      // Use pdftoppm to convert first page to image
      // This requires poppler-utils to be installed
      execSync(`pdftoppm -jpeg -f 1 -l 1 -scale-to 400 "${pdfPath}" "${previewPath.replace('.jpg', '')}"`, {
        stdio: 'inherit'
      });
      
      // Rename the output file
      const tempFile = previewPath.replace('.jpg', '-1.jpg');
      if (fs.existsSync(tempFile)) {
        fs.renameSync(tempFile, previewPath);
        console.log(`✅ Generated preview for: ${pdfFile}`);
      }
    } catch (error) {
      console.log(`⚠️  Could not generate preview for ${pdfFile}: ${error.message}`);
      console.log('   Install poppler-utils: brew install poppler');
    }
  } else {
    console.log(`❌ PDF file not found: ${pdfPath}`);
  }
});

console.log('\nPreview generation complete!');
console.log('If you don\'t have poppler-utils installed, run: brew install poppler'); 