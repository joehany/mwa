const http = require('http');
const url = require('url');
const queryString = require('querystring');
const process = require('child_process');

const server = http.createServer();

server.on('request', (req, res) => {
  const urlObj = url.parse(req.url);

  // ignore favicon request
  if(urlObj.path === '/favicon.ico') {
    res.end();
    return;
  }

  // parsing the query strings
  const qsObj = queryString.parse(urlObj.query);
  const childProcess = process.fork('./readFile');

  childProcess.send(qsObj.url);
  childProcess.on('message', data => {
    res.end(data);
  });
});

server.listen('4000');
