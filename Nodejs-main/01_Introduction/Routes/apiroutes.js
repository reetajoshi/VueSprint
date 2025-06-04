const express = require('express');
const router = express.Router(); // This creates a special 'router' object for your routes


router.get('/list', (req, res) => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    res.json(numbers); 
});


router.get('/ping', (req, res) => {
    res.send('pong'); 
});


router.get('/time', (req, res) => {
    const currentTime = new Date().toISOString();
    res.send(currentTime); 
});



module.exports = router; 

