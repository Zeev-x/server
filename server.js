const express = require('express');
const path = require('path');
const lilyane = require('./database/lilyane');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(path.resolve('./public')));
app.use(lilyane);
app.use(express.json());
app.set('json spaces',2);

app.listen(port,() => {
  console.log('Server berjalan di http://localhost:'+port);
});