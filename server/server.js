const express = require('express');
const app = express();
const path = require('path');

require('dotenv').config();

const PORT = process.env.PORT || 3000; 

// root path for client public folder containing html files:
const rootPath = path.join(__dirname, '../client/public/');

// middleware
app.use(express.static(rootPath));
app.use(express.json());

app.get('/pc', (req, res) => {
    res.sendFile(rootPath + 'pc.html');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
});