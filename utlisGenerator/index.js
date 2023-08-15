//Import the Express.js library and create an instance of the Express application:
// const express = require("express");
// const app = express();
//Define a route handler for the root URL ("/"). When a user accesses this URL using an HTTP GET request, the server will execute the provided callback function:
// app.get("/", function (req, res) {
//   res.send("Hello World from diwash karki");
// });
//Start the Express server and make it listen on port 3000 for incoming requests:
// app.listen(3000);
// Print a message to the console indicating that the server is running on port 3000:
// console.log("App running on port 3000");

// routing
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World from diwash karki");
});
app.post("/", function (req, res) {
  res.send("Push request is called");
});
app.delete("/", function (req, res) {
  res.send("delete request is called");
});
app.listen(3000);
console.log("App running on port 3000");
