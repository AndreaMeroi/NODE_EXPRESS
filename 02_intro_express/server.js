//codice copiato da https://expressjs.com/

const express = require('express') //importo la libreria express
const app = express() // invoco funzione express salvandola in una variabile

const port = 3000 //definizione della porta dalla quale il server resta in ascolto

// ordine per mettere in ascolto il server
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})


//routes 
app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/person', (req, res) => {

    res.json({
        name: "Andrea"
    })
})


app.get('/people', (req, res) => {
    //concateno metodi .type e .json
    res.type('json').send({
        number: 10,
        country: "Italy"
    })
})

app.get('/films', (req, res) => {

    res.json([
        {
            title: 'Inception',
            director: "Christopher Nolan",
            year: 2010
        },
        {
            title: 'Inception',
            director: "Christopher Nolan",
            year: 2010
        },
        {
            title: 'Inception',
            director: "Christopher Nolan",
            year: 2010
        }
    ])
})