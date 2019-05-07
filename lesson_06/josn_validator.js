module.exports = (req, res, next) => {
  // we recieve json on POST or PUT
  if (req.method == 'POST' || req.method === 'PUT') {
    let data = '';
    req.on('data', chunk => {
      data += chunk;
    });
    req.on('end', () => {
      try {
        req.body = JSON.parse(data);
        return next();
      } catch(error) {
        //res.status(400).send({ error: 'invalid json'});
        return next(new Error('JSON NOT VALID'));
      }
    })
  } else {
    return next();
  }
}
