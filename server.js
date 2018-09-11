const express = require('express');
const router = express.Router();

const app = express();
const port =  process.env.PORT || 3000;

const theaters = require('./controllers/theaters');

app.use('/theaters', theaters);

module.exports = app.listen(port, () => {
  console.log('Alive!')
});
