const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'Public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public', 'home', 'home.html'));
});

app.get('/catalog', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public', 'catalog', 'catalog.html'));
});

app.get('/services', (req, res) => {                    
  res.sendFile(path.join(__dirname, 'Public', 'services', 'services.html'));
});

// TODO: Add contact form route later if needed

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});