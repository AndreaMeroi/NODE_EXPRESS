// import express
const express = require('express')
// create the router instance
const router = express.Router()

//copio da questa parte la variabile contenente il menu 
const menu = [
    {
        id: 1,
        name: 'margherita',
        img: './public/fe7a9320-abaf-4e08-9080-202bd1f959b5.jpg',
        ingredients: ['pomodoro', 'mozzarella']
    },
    {
        id: 2,
        name: 'marinara',
        img: './public/fe7a9320-abaf-4e08-9080-202bd1f959b5.jpg',
        ingredients: ['pomodoro', 'aglio', 'origano']
    },
    {
        id: 3,
        name: 'diavola',
        img: './public/fe7a9320-abaf-4e08-9080-202bd1f959b5.jpg',
        ingredients: ['pomodoro', 'mozzarella', 'salame piccante']
    },
    {
        id: 4,
        name: 'bufalina',
        img: './public/fe7a9320-abaf-4e08-9080-202bd1f959b5.jpg',
        ingredients: ['pomodoro', 'mozzarella di bufala']
    },
    {
        id: 5,
        name: '4 formaggi',
        img: './public/fe7a9320-abaf-4e08-9080-202bd1f959b5.jpg',
        ingredients: ['pomodoro', 'mozzarella', 'gorgonzola', 'parmigiano', 'ricotta']
    }
]

// CRUD OPERATIONS ON ENTITY PIZZA

// index (Read)
router.get('/', (req, res) => {
    // res.send('show a list of pizzas')
    res.json(menu)
})
// show (Read) 
router.get('/:id', (req, res) => {

    const { id } = req.params // destrutturo (vedi documentazione)
    console.log(id);

    const pizza = menu.find(item => item.id === parseInt(id)) // parseInt serve in quanto con il triplo uguale anche il tipo di dato deve essere uguale in questo caso avrei altrimenti un numero e un numero letto come stringa
    console.log(pizza);

    if (!pizza) {
        res.status(404).json({
            error: true,
            message: 'Not Found'
        })
    }
    // res.send('Show a single pizza with ID:' + req.params.id)
    res.json(pizza)
})

// store (Create)
router.post('/', (req, res) => {
    res.send('Create a new pizza')
})

// update (Update)
router.put('/:id', (req, res) => {
    res.send('update the entire pizza wit ID:' + req.params.id)
})

// modify (Update)
router.patch('/:id', (req, res) => {
    res.send('Partial update for the single pizza with ID:' + req.params.id)
})

// destroy (delete)
router.delete('/:id', (req, res) => {
    res.send('Delete the single pizza with ID:' + req.params.id)
})

// export router 
module.exports = router

