const {Router} = require('express');
const router = new Router();

let listItems = ['apple', 'banana', 'cherry', 'date']; 

router.get('/fruits', (req, res) => {
    console.log('GET /fruits - Request received for all fruits');
    res.json(listItems);
});


router.post('/fruits', (req, res) => {
    const newItem = req.body.item;
    console.log('POST /fruits - New fruit received:', newItem);

    listItems.push(newItem);
    res.status(201).json({
        currentList: listItems
    });
});


router.put('/fruits/:index', (req, res) => {
    const index = parseInt(req.params.index);
    const updatedValue = req.body.item;
    console.log(`PUT /fruits/${index} - Request received to update fruit at index ${index} with:`, updatedValue);

    listItems[index] = updatedValue;
    res.status(200).json({
        
        currentList: listItems
    });
});

router.delete('/fruits/:index', (req, res) => {
    const index = parseInt(req.params.index);
    console.log(`DELETE /fruits/${index} - Request received to delete fruit at index ${index}`);
    const deletedItem = listItems.splice(index, 1);
    res.status(200).json({
        currentList: listItems
    });
});

module.exports = router;










// const express = require('express');
// const router = express.Router(); 

// router.get('/list', (req, res) => {
//     const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     res.json(numbers); // Use res.json() for JSON responses
// });

// router.get('/ping', (req, res) => {
//     res.send('pong');
// });

// router.get('/time', (req, res) => {
//     const currentTime = new Date().toISOString();
//     res.send(currentTime); 
// });

// module.exports = router; 













