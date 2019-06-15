require('newrelic');
const express = require('express');
const path = require('path');
proxy = require('http-proxy-middleware');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3010;
// const publicDir = path.join(__dirname, './client/public');
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, '../client/public')));
// app.use('/', proxy('http://localhost:3000/'));
// app.use('/', proxy('http://localhost:3001/'));
// app.use('/', proxy('http://localhost:3111/'));
app.use('/api/stocks/:stock/price', proxy('http://localhost:3420/api/stocks/:stock/price'));
app.use('/api/stocks/:stock', proxy('http://localhost:3420/api/stocks/:stock'));
app.use('/api/users/:username/:accountBalance', proxy('http://localhost:3420/api/users/:username/:accountBalance'));

// app.get('/', (req, res) => {
//   res.status(200).sendFile(path.join(__dirname, '/client/public') + '/index.html');
// });

app.listen(port, () => console.log('Listening on Port:', port));