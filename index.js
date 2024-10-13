const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 8000
const path = require('path');

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.listen(port, () => {
    console.log(`in ${port}`);
})