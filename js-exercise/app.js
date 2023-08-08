// node.js
const http = require("http");//declare library
const date = require("./myModule.js");
const myfunction = (req, res) => {
    const dateTime = date();
    res.end(`Hello World ${dateTime}`);
};
http.createServer(myfunction).listen(3000);
console.log("App is running in port 3000");
