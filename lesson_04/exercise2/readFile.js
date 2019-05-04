const fs = require('fs');

function readFile(path) {
  fs.readFile(path, (err, data) => {
    process.send(data.toString());
  });
}

process.on('message', readFile);
