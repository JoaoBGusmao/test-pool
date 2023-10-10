const express = require('express');
const resolveRota1 = require('./arquivo1');
const resolveRota2 = require('./arquivo2');

const app = express();

app.get('/rota1', resolveRota1);
app.get('/rota2', resolveRota2);

app.get('/rota3', (req, res) => {
  const resolveRota3 = require('./arquivo3');

  resolveRota3(req, res);
});

app.listen(3000);
