require('dotenv').config();
const express = require('express');
const router = express.Router();
const app = express();
const port =  process.env.PORT || 3000;

// MongoDB Connection
require('./mongo-database-connection');

const theaters = require('./controllers/theaters');
router.use('/theaters', theaters);

// Example stub:
app.get('/', (req, res) => {
  res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Part 2.`});
});



module.exports = app.listen(port, () => {
  console.log(`Action! Server is on at port: ${port}`)
});
