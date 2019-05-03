const fs = require('fs');
const http = require('http');

const server = http.createServer();

// server.on('request', (req, res) =>{
//   const data = fs.readFileSync('./bigFile.txt');
//   res.end(data);
// });

// server.on('request', (req, res) =>{
//   fs.readFile('./bigFile.txt', (err, data) => {
//     res.end(data);
//   });
// });

server.on('request', (req, res) =>{
  fs.createReadStream('./bigFile.txt').pipe(res);
});

server.listen('8080');


// Conclusion

// I used a big text file. for readFile and readFileAsync the text started to appear
// in the browser after a while (after the file was loaded completely in the memory)
// but using streams made it appears from the beggining and keep coming

// Also streams consumed very small size of memory comparing to the others which consumed
//memroy equals to the file size
