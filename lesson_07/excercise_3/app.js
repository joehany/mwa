const express = require('express');
const mongo = require('mongodb');
const app = express();

app.use(express.json());
app.use(require('./db-connector'));

app.get('/lectures', (req, res) => {
  req.db.find({}).toArray((err, docs) => {
    res.json(docs);
  });
})

app.post('/lectures', (req, res)=> {
  req.db.insertOne(req.body, (err, doc) => {
    res.json({ info: 'inserted successfully'});    
  });
});

app.get('/lectures/:id', (req, res) => {
  const id = new mongo.ObjectId(req.params.id);
  console.log(id)
  req.db.findOne({ _id: id }, (err, doc) => {
    res.json(doc);
  });
})

app.put('/lectures/:id', (req, res)=> {
  const id = new mongo.ObjectId(req.params.id);
  req.db.updateOne({ _id: id }, { $set: req.body }, (err, doc) => {
    res.json({ info: 'updated successfully'});
  });
});

app.delete('/lectures/:id', (req, res)=> {
  const id = new mongo.ObjectId(req.params.id);
  req.db.deleteOne({ _id: id }, (err, doc) => {
    res.json({ info: 'deleted successfully'});
  });
});

app.post('/search/:q', (req, res) => {
  req.db.find({ lecture: { $regex: req.params.q } }).toArray((err, docs) => {
    res.json(docs);
  });
})

app.listen('4000', () => {
  console.log('App is running at port 4000!');
});
