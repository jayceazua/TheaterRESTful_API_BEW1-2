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


  res.json({'theater': `[${req.originalUrl}] Endpoint works! Replace me in Part 2.`});
});

// create a session POST
    // save the session default status is: inProgress

// update the session if time expires... "only when it does expire: no time session" PUT
    // update in mongo -  change the status
    // update when you successfully purchase a session?

/**********************
theater only and session.

Above theate; below cart
************************/




module.exports = router;
