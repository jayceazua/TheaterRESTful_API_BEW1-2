const express = require('express');
const mongo = require('mongodb');
const app = express();
const port =  process.env.PORT || 3000;



app.listen(port, () => {
  console.log(`Action! Server is on at port: ${port}`)
});
