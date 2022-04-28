require('dotenv').config();
const PORT = process.env.PORT || 3000;

const express = require('express');
const app = express();

app.use(express.json());

// Database
require('./database');

// Path html
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// studentRouter is DataBase name
const studentRouter = require('./routes/api/api');
app.use('/api', studentRouter)

// Listen
app.listen(PORT, () => console.log(`Server is runnung on port ${PORT}`));

module.exports = app;
