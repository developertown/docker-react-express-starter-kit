"use strict";

const express = require('express');
const fallback = require('express-history-api-fallback');
const api = require('./api');
const morgan = require('morgan');
let app = express();

app.use(morgan('combined'));
app.use('/api', api);

let root = 'frontend'
app.use(express.static(root));
app.use(fallback('index.html', {root: root}));

app.listen(3000, (e) => {
  if (e){
    console.error('failed to bind', e);
    process.exit(1);
  }
  console.log('==> 🌍 listening on 3000');
});
