const PDFDocument = require('pdfkit');
const fs = require('fs');
const doc = new PDFDocument();
const text = "Hello World";
const imagePath ="./download.jpeg" 
// Generate
doc.pipe(fs.createWriteStream('output.pdf'));
// Test
doc
  .font('fonts/PalatinoBold.ttf')
  .fontSize(25)
  .text(text, 100, 100);
// Img
  doc.image('path/to/image.png', {
    fit: [250, 300],
    align: 'center',
    valign: 'center'
  });
  doc.end();
  