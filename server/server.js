const express = require('express');
const app = express();
const path = require('path');

require('dotenv').config();

const PORT = process.env.PORT || 3000; 

// middleware
app.use(express.static(path.join(__dirname, '../client/public')));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
});