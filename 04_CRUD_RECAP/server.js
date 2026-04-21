const express = require('express')
const app = express()
const PORT = 3000

// ipmorto le rotte dal ROUTER 
const booksRouter = require('./router/books')

//set assets MIDDLEWARE
app.use(express.static('public'))
app.use(express.json()) //bodyparser per far sì che la nostra app riesca a decifrare il request body
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})

app.get('/', (req, res) => {
    res.send('Welcome to our books API server')
})

// Add all routes to handle the book entity
//CRUD operations 
app.use('/api/books', booksRouter)
