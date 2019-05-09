const express = require('express');
const { MongoClient } = require('mongodb');
client = new MongoClient('mongodb://localhost/', { useNewUrlParser: true });
let  db = null;

client.connect(err => {
  db = client.db('lesson_08').collection('places');
});

const app = express();

app.use(express.json());

app.post('/locations', (req, res) => {
  db.insert(req.body);
  res.json({info: 'inserted successfully'});
});

app.get('/locations', (req, res) => {
  db.find({}).toArray((err, docs) => {
    res.json(docs);
  });
});

app.get('/find/:category', (req, res) => {
  db.find(
    { coords: {"$near": [-91.9665342, 41.017654]},
      category: {$regex: req.params.category }
    }).limit(3).toArray((err, docs) => {
      res.json(docs);
    });
});

app.listen('4000');
