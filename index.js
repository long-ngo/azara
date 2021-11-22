const express = require('express');
const app = express();

//use env
require('dotenv').config();

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
