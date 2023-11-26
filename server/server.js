const express = require("express");
const app = express();
const path = require("path");

require("dotenv").config();

const PORT = process.env.PORT || 3000;

// root path for client public folder containing html files:
const rootPath = path.join(__dirname, "../client/public/");

// middleware
app.use(express.static(rootPath));
app.use(express.json());

// routes to serve static static files (html pages, css, images etc.):
app.get("/", (req, res) => {
  res.sendFile(rootPath + "index.html");
});

app.get("/gaming-pcs", (req, res) => {
  res.sendFile(rootPath + "gaming-pcs.html");
});

// routing for individual product pages (:id needs implementing on api side)
// defaults to pc-one page for now...
app.get("/product-pages/:id", (req, res) => {
  res.sendFile(rootPath + "product-pages/pc-one.html");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
