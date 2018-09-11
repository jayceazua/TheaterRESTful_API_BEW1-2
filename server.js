const express = require('express');
const router = express.Router();
const app = express();
const port =  process.env.PORT || 3000;

// MongoDB Connection
require('./mongo-database-connection');

const theaters = require('./controllers/theaters');

router.get('/', (req, res) => {
  res.send('Hi?')
});

router.use('/theaters', theaters);

module.exports = app.listen(port, () => {
  console.log('Action!')
});
