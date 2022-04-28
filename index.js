require('dotenv').config();
const PORT = process.env.PORT || 3000;

const express = require('express');
const app = express();

app.use(express.json());

// Database
require('./database');

// studentRouter is DataBase name
const studentRouter = require('./routes/api/students');
app.use('/students', studentRouter)


// Path html
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile('./public/index.html', { root: __dirname });
});

// Listen
app.listen(PORT, () => console.log(`Server is runnung on port ${PORT}`));

module.exports = app;
