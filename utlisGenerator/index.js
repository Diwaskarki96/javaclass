const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World from diwash karki')
})

app.listen(3000);
console.log("App running on port 3000");