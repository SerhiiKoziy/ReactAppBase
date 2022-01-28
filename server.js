const express = require('express');
const app = express();
const path = require("path");

// set static directories
app.use(express.static(path.join(__dirname, './public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + './public/index.html'));
});

const port = process.env.PORT || 90;
app.listen(port);
console.log('Listening on port ', port);
