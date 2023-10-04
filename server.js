const express = require('express');
const app = express();

const PORT = 3000; 

// middleware
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('products').status(200);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
});