const express = require('express')
const app = express()
const port = 3000

const menu = [
    {
        name: 'margherita',
        img: './public/fe7a9320-abaf-4e08-9080-202bd1f959b5.jpg',
        ingredients: ['pomodoro', 'mozzarella']
    },
    {
        name: 'marinara',
        img: './public/fe7a9320-abaf-4e08-9080-202bd1f959b5.jpg',
        ingredients: ['pomodoro', 'aglio', 'origano']
    },
    {
        name: 'diavola',
        img: './public/fe7a9320-abaf-4e08-9080-202bd1f959b5.jpg',
        ingredients: ['pomodoro', 'mozzarella', 'salame piccante']
    },
    {
        name: 'bufalina',
        img: './public/fe7a9320-abaf-4e08-9080-202bd1f959b5.jpg',
        ingredients: ['pomodoro', 'mozzarella di bufala']
    },
    {
        name: '4 formaggi',
        img: './public/fe7a9320-abaf-4e08-9080-202bd1f959b5.jpg',
        ingredients: ['pomodoro', 'mozzarella', 'gorgonzola', 'parmigiano', 'ricotta']
    }
]
// con questa riga attivo la possibilità di restituire asset statici (es. le immagini) usando .static
app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})

// REST API Routes

app.get('/', (req, res) => {
    res.send('Welcome to pizzeria!')
})

app.get('/menu', (req, res) => {
    res.json(menu)
})


app.get('/menu/:name', (req, res) => {

    console.log(req.params);

    //trovare un item(oggetto in qst caso) che econtiene una specifica pizza nella const menu 
    const pizza_name = req.params.name
    const pizza = menu.find((item) => item.name.toLocaleLowerCase() == pizza_name)

    // attivo un messaggio d'errore da mostrare all'utente SE l'item non viene trovato
    if (!pizza) {
        res.json({
            error: 'pizza not found'
        })
    } else {
        res.json(pizza)
    }

})

/*examples of dynamic routes segments
'menu/margherita'
'menu/diavola'
'menu/bufalina'
'menu/4_formaggi'
'menu/marinara'

'posts/1'
'posts/2'
'posts/3'
'posts/4'
'posts/5'
*/