const QrCode = require('qrcode');
const http = require('http');

http.createServer(async (req, res) => {
  const url = "https://github.com/Diwaskarki96";
  
  // Generate the data URL for the QR code
  const qrData = await QrCode.toDataURL(url);

  // Create an HTML <img> tag with the QR code data URL
  const imgTag = "<img src='" + qrData + "'/>";

  // Set the response's content type to 'text/html'
  res.writeHead(200, {'Content-Type': 'text/html'});

  // Write the <img> tag to the response
  res.write(imgTag);

  // End the response
  res.end();
}).listen(8000);

// Log a message to the console indicating the server is running
console.log("Server is running on port 8000");
