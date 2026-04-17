const express = require('express')
const app = express()
const PORT = 3000

const post = [
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
app.get('/routers/posts', (req, res) => {
    //res.send('Lista dei post')
    res.json(post)
})

//show
app.get('/routers/posts/:name', (req, res) => {
    //res.send('mostra il sigolo post')

    const { name } = req.params // le graffe servono per destrutturare l'oggetto req.params, salvando nella variabile ciò che corrisponde alla chiave name
    console.log(name);

    const singlePost = post.find(item => item.name === name)

    //    console.log(item.name);
    if (!singlePost) {
        res.status(404).json({
            error: true,
            message: 'Not Found'
        })
    }
    res.json(singlePost)
})

//store
app.post('/routers/posts/', (req, res) => {
    res.send('crea un nuovo post')
})
//update
app.put('/routers/posts/:id', (req, res) => {
    res.send('modifica lintero post con id:' + req.params.id)
})
//modify 
app.patch('/routers/posts/:id', (req, res) => {
    res.send('modifica parzialmente il post con id:' + req.params.id)
})

//destroy
app.delete('/routers/posts/:id', (req, res) => {
    res.send('elimina il post con id:' + req.params.id)
})