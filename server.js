const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000; 

// router imports:
const productsRoute = require('./routes/products');
const aboutRoute = require('./routes/about');

// middleware
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json());

/* Home route not needed because express.static('public'),
 * serves index.html by default anyway?? */
// routes:
app.use('/products', productsRoute);
app.use('/about', aboutRoute);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
});