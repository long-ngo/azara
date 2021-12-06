const express = require('express');
const path = require('path');
const app = express();
const db = require('./api/config/db/mongo');
const route = require('./api/routes/mainRoute');
const cors = require('cors');

//use env
require('dotenv').config();

//connect database
db.connect();

//enable cors
var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

//router api
route(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
