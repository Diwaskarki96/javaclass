// 1. use "upper-case" package and create a function to convert user input to upper case 

const http = require('http');
const uc = require('upper-case');

http.createServer(function(req, res) {
   res.write(uc.upperCase("hello"));
   res.end();
}).listen(3000);