const express = require('express');

const bodyParser = require('body-parser');

const path = require('path');

const request = require('request');

const stocks = require('./stocks');

const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname,'../client/public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/stocks/:stock/earnings', (req, res) => {
  const newUrl = 'http://52.14.233.205:3000';
  request(`${newUrl}/api/stocks/${req.params.stock}/earnings`).pipe(res);
});

app.get('/api/stocks/:stock/price', (req, res) => {
  const newUrl = 'http://3.17.135.66:3000';
  request(`${newUrl}/api/stocks/${req.params.stock}/price`).pipe(res);
});

app.get('/api/stocks/:stock/paid', (req, res) => {
  const newUrl = 'http://localhost:3003';
  request(`${newUrl}/api/stocks/${req.params.stock}/paid`).pipe(res);
});

app.get('/api/stocks/:stock/prices/:time', (req, res) => {
  const newUrl = 'http://localhost:3004';
  request(`${newUrl}/api/stocks/${req.params.stock}/prices/${req.params.time}`).pipe(res);
});

app.get('/stocks/:stock', (req, res) => {
  res.sendFile(path.join(__dirname,'../client/public/index.html'));
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));