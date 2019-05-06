module.exports = (req, res, next) => {
  // we recieve json on POST or PUT
  if (req.method == 'POST' || req.method === 'PUT') {
    req.on('data', data => {
      try {
        req.body = JSON.parse(data);
        return next();
      } catch(error) {
        res.status(400).send({ error: 'invalid json'});
      }
    });
  } else {
    return next();
  }
}
