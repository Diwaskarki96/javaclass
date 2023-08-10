const QrCode = require('qrcode');
const http = require('http');
http.createServer(async(req,res) =>{
    const url = "https://github.com/Diwaskarki96";
    const qrData = await QrCode.toDataURL(url); //data-image.src...........
    const imgTag = "<img src ='"+qrData+"'/>";

    res.writeHead(200, {'Content-Type': 'text/html'});
   res.write(imgTag);
   res.end();
}).listen(8000);
console.log("surver is running in 8000 port");