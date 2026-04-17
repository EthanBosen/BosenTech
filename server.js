const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config(); 

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('Public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Public/home/home.html');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});