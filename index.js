require('dotenv').config();
const PORT = process.env.PORT || 3000;

const express = require('express');
const app = express();

// Database
require('./database');

// Path html
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));


// Listen
app.listen(PORT, () => console.log(`Server is runnung on port ${PORT}`));

module.exports = app;
