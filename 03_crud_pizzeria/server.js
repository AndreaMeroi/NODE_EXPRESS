const express = require('express')
const app = express()
const PORT = 3000
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

app.use(express.static('public'))

app.listen(PORT, () => {
    console.log(`Pizzeria API server started on http://localhost:${PORT}`)
})

// Pizzeria API server routes 

app.get('/', (req, res) => {
    res.send('Welcome to pizzeria!')
})

// CRUD OPERATIONS ON ENTITY PIZZA
// index (Read)
app.get('/api/pizzas', (req, res) => {
    // res.send('show a list of pizzas')
    res.json(menu)
})
// show (Read) 
app.get('/api/pizzas/:id', (req, res) => {

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
app.post('/api/pizzas', (req, res) => {
    res.send('Create a new pizza')
})

// update (Update)
app.put('/api/pizzas/:id', (req, res) => {
    res.send('update the entire pizza wit ID:' + req.params.id)
})

// modify (Update)
app.patch('/api/pizzas/:id', (req, res) => {
    res.send('Partial update for the single pizza with ID:' + req.params.id)
})

// destroy (delete)
app.delete('/api/pizzas/:id', (req, res) => {
    res.send('Delete the single pizza with ID:' + req.params.id)
})

// CRUD OPERATIONS ON ENTITY DRINK
//index
app.get('/api/drinks', (req, res) => {
    res.json(drinks)
})

//show
app.get('/api/drinks/:id', (req, res) => {
    res.send('Show the single dring ID:' + req.params.id)
})

//store 
app.post('/api/drinks', (req, res) => {
    res.send('Create a new drink')
})

//update
app.put('/api/drinks/:id', (req, res) => {
    res.send('update the entire drink wit ID:' + req.params.id)
})

// modify
app.patch('/api/drinks/:id', (req, res) => {
    res.send('update the single drink wit ID:' + req.params.id)
})

//delete
app.delete('/api/drinks/:id', (req, res) => {
    res.send('Delete the single drink with ID:' + req.params.id)
})