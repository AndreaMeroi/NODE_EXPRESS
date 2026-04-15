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
    res.send('Hello World!')
})

app.get('/films', (req, res) => {
    res.send('Show a list of movies')
})