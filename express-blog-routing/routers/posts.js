const express = require('express');
const router = express.Router();

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

// CRUD Routes

//index
router.get('/', (req, res) => {
    //res.send('Lista dei post')
    res.json(post)
})

//show
router.get('/:name', (req, res) => {
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
router.post('/', (req, res) => {
    res.send('crea un nuovo post')
})
//update
router.put('/:id', (req, res) => {
    res.send('modifica lintero post con id:' + req.params.id)
})
//modify 
router.patch('/:id', (req, res) => {
    res.send('modifica parzialmente il post con id:' + req.params.id)
})

//destroy
router.delete('/:id', (req, res) => {
    res.send('elimina il post con id:' + req.params.id)
})



module.exports = router
