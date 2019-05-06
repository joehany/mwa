const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const app = express();
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'accees.log'), {flags: 'a'});

app.use(cors());
app.use(morgan('combined', { stream: accessLogStream }));

// validate and parse json
app.use(require('./josn_validator'));

// mount grades
app.use('/grades', require('./grades_routes'));

app.listen('4000', () => {
  console.log('Server is up and running at port 4000');
});
