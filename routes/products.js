const express = require('express');
const path = require('path');
const router = express.Router();

let publicPath = path.join(__dirname, '../public');

router.get('/', (req, res) => {
    res.sendFile(`${publicPath}/products.html`);
});

module.exports = router;