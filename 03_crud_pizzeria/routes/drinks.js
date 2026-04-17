const express = require('express')
const router = express.Router()
const drinks = [
    {
        id: 1,
        name: 'Fruit Juice',
        image: 'img/fruit_juice.jpg',
        price: 2
    },
    {
        id: 2,
        name: 'Apple Juice ',
        image: 'img/apple_juce.jpg',
        price: 2
    },
    {
        id: 3,
        name: 'Water',
        image: 'img/water.jpg',
        price: 1
    }
]

//index
router.get('/', (req, res) => {
    res.json(drinks)
})

//show
router.get('/:id', (req, res) => {
    res.send('Show the single dring ID:' + req.params.id)
})

//store 
router.post('/', (req, res) => {
    res.send('Create a new drink')
})

//update
router.put('/:id', (req, res) => {
    res.send('update the entire drink wit ID:' + req.params.id)
})

// modify
router.patch('/:id', (req, res) => {
    res.send('update the single drink wit ID:' + req.params.id)
})

//delete
router.delete('/:id', (req, res) => {
    res.send('Delete the single drink with ID:' + req.params.id)
})





module.exports = router