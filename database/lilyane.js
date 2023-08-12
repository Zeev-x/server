const express = require('express');
const lilyane = express.Router();

lilyane.get('/',(req,res) => {
  var notFound = {
    status: 404,
    message: 'Error code 404',
    creator: 'Lilyane'
  }
  res.status(404).json(notFound);
});

lilyane.get('/lilyane',(req,res) => {
  var pass = req.query.pass;
  if(pass !== 'lilyane') return res.send('Wrong password');
  if(!pass) return res.json({ message: 'Insert password'});
  res.send('Selamat datang owner');
});

module.exports = lilyane;