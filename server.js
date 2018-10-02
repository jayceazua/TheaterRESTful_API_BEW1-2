const express = require('express');
const app = express();
const port = 3000;

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

/* Above is Theaters; below is Sessions */

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


app.listen(port, () => {
    console.log(`Action! Server is on at port: ${port}`)
});
