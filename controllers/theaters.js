const express = require('express');
const router = express.Router();

// CREATE - post a new
router.post('/theaters/new', (req, res) => {
  const new_theater = {
    "_id" : 1,
    "name" : "The Royal",
    "seats" : [
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
    ],
    "seatsAvailable" : 80
}

//  save into mongo database


  res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Part 2.`});
});

module.exports = router;
