const express = require('express');

const bodyParser = require('body-parser');

const path = require('path');

const request = require('request');

const app = express();

const PORT = 3002;

app.use(express.static(path.join(__dirname,'../client/public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/stocks/:stock/earnings', (req, res) => {
  const newUrl = 'http://localhost:3000';
  request(`${newUrl}/api/stocks/${req.params.stock}/earnings`).pipe(res);
});

app.get('/api/stocks/:stock/price', (req, res) => {
  const newUrl = 'http://localhost:3001';
  request(`${newUrl}/api/stocks/${req.params.stock}/price`).pipe(res);
});

app.get('/stocks/:stock', (req, res) => {
  res.sendFile(path.join(__dirname,'../client/public/index.html'));
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));