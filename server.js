require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;

// mongodb connection
// Paste this at the top of `server.js`
const dbuser = process.env.DB_UN
const dbpass = process.env.DB_PW
const dbName = process.env.DB_N;
const url = `mongodb://${dbuser}:${dbpass}@ds153552.mlab.com:53552/${dbName}`;



// Theater SHOW:
app.get('/theaters', (req, res) => {
    res.json({
        'Theaters': `[${req.originalUrl}] Endpoint works! Replace me in Part 2.`
    });
});

// Theater CREATE:
app.post('/theaters', (req, res) => {
    res.json({
        'Theaters': `[${req.originalUrl}] Endpoint works! Replace me in Part 2.`
    });
});

// Theaters UPDATE
app.put('/theaters/:id', (req, res) => {
    res.json({
        'Theaters': `[${req.originalUrl}] Endpoint works! Replace me in Part 2.`
    });
});

// Theaters DELETE
app.delete('/theaters/:id', (req, res) => {
    res.json({
        'Theaters': `[${req.originalUrl}] Endpoint works! Replace me in Part 2.`
    });
});

/* Above is Theaters;

    Below is Sessions */

// Sessions SHOW all:
app.get('/theaters/:id/sessions', (req, res) => {
    res.json({
        'Sessions': `[${req.originalUrl}] Endpoint works! Replace me in Part 2.`
    });
});

// Sessions CREATE:
app.post('/theaters/:id/sessions', (req, res) => {
    res.json({
        'Sessions': `[${req.originalUrl}] Endpoint works! Replace me in Part 2.`
    });
});

// Sessions UPDATE: - switch from active to cancel
app.put('/theaters/:id/sessions/:id', (req, res) => {
    res.json({
        'Sessions': `[${req.originalUrl}] Endpoint works! Replace me in Part 2.`
    });
});

// Sessions DELETE:
app.delete('/theaters/:id/sessions/:id', (req, res) => {
    res.json({
        'Sessions': `[${req.originalUrl}] Endpoint works! Replace me in Part 2.`
    });
});

// TODO: CARTS


app.listen(port, () => {
    console.log(`Action! Server is on at port: ${port}`);
});
