const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Configurations
app.disable('x-powered-by');
app.enable('case sensitive routing');
app.enable('strict routing');
app.enable('trust proxy');

const today = new Date(); // Server start time
const tomorrow = new Date(today.getTime() + 86400 * 1000); //Expiry date

app.get('/users', async (req, res) => {
  // I am not sure if this part is required or not, but this simply checks if 
  // If-Modified-Since matches the date when server started and if so it resposes with 304
  // that allows the browser to show the cached version
  if(req.header('If-Modified-Since') == today) {
    console.log('Not Modified')
    res.status(304);
    res.end();
    return;
  }
  /////////////////////////////////////////////////////////

  const result = await axios.get('https://randomuser.me/api/?results=10');
  res.set({
    'Cache-Control': 'private, max-age=86400',
    'Expires': tomorrow,
    'Last-Modified': today,
    'Link': `<http://localhost:${port}/users?page=3>; rel="next",
            <http://localhost:${port}/users?page=1>; rel="prev",
            <http://localhost:${port}/users?page=1>; rel="first",
            <http://localhost:${port}/users?page=100>; rel="last"`.replace(/\r?\n|\r/g, '') // Remove the new lines
  });
  res.json(result.data);
  res.end();
});

app.listen(port, ()=> {
  console.log(`The server is running in port ${port}`)
});
