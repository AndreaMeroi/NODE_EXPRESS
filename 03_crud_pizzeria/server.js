const express = require('express')
const app = express()
const PORT = 3000
//importo pizzaRouter contenuto nel file pizzas.Js che è nella cartella routes
const pizzasRouter = require('./routes/pizzas')
const drinkRouter = require('./routes/drinks')

app.use(express.static('public'))


app.listen(PORT, () => {
    console.log(`Pizzeria API server started on http://localhost:${PORT}`)
})

// Pizzeria API server routes 



// CRUD OPERATIONS ON ENTITY PIZZA
// dico ad app di utilizzare (use) /api/pizzas in pizzaRouter
//perciò elimino /api/pizzas nelle rotte contenute in pizza.js
app.use('/api/pizzas', pizzasRouter)

// CRUD OPERATIONS ON ENTITY DRINK
app.use('/api/drinks', drinkRouter)





