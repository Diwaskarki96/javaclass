const fs = require("fs");
const file = fs.createReadStream("./data.txt");
file.on("open", () =>{
    console.log("data.txt file is open");
});
// write to file
const data = "Hello World!";
fs.writeFileSync("./data.txt", data);
// add data to file
fs.appendFileSync("./data.txt", data);