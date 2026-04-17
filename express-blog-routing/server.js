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

app.listen(PORT, () => {
    console.log(`express-blog-routing app listening on port http://localhost:${PORT}`)
})

// CRUD Routes

//index
app.get('/api/menus', (req, res) => {
    //res.send('Lista dei post')
    res.json(menu)
})

//show
app.get('/api/menus/:name', (req, res) => {
    //res.send('mostra il sigolo post')

    const { name } = req.params
    console.log(name);

    const post = menu.find(item => item.name === name)

    //    console.log(item.name);
    if (!post) {
        res.status(404).json({
            error: true,
            message: 'Not Found'
        })
    }
    res.json(post)
})

//store
app.post('/api/menus/', (req, res) => {
    res.send('crea un nuovo post')
})
//update
app.put('/api/menus/:id', (req, res) => {
    res.send('modifica lintero post con id:' + req.params.id)
})
//modify 
app.patch('/api/menus/:id', (req, res) => {
    res.send('modifica parzialmente il post con id:' + req.params.id)
})

//destroy
app.delete('/api/menus/:id', (req, res) => {
    res.send('elimina il post con id:' + req.params.id)
})