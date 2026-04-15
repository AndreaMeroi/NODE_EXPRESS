const express = require('express')
const app = express()
const port = 3000

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
    const menu = [
        {
            name: 'andrea',
            img: './public/fe7a9320-abaf-4e08-9080-202bd1f959b5.jpg'
        }


    ]

    res.json(menu)
})