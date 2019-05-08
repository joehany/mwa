const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://homework01:homework01@ds233806.mlab.com:33806/homework01');
const express = require('express');

const app = express();

app.get('/secret', (req, res) => {
  client.connect(error => {
    client.db('homework01')
          .collection('data')
          .findOne({}, { projection: { message: 1, key: 1} }, (err, doc) => {
            const encreptor = require('simple-encryptor')(doc.key);
            res.send(encreptor.decrypt(doc.message))
          });
  });
});

app.listen('3000');
