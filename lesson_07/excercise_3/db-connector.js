const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(
                  'mongodb+srv://joehany:new-user_31@mwa-cfwy8.mongodb.net/test?retryWrites=true',
                { useNewUrlParser: true });

//const client = new MongoClient('mongodb://localhost/', { useNewUrlParser: true });

let db = null;

module.exports = function(req, res, next) {
  if(db == null) {
    client.connect(error => {
      db = client.db('lesson_07').collection('lectures');
      req.db = db;
      return next();
    });
  } else {
    req.db = db;
    return next();
  }
}

