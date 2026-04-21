const express = require('express')
const app = express()
const PORT = 3000

// ipmorto le rotte dal ROUTER 
const booksRouter = require('./router/books')

//importo la middleware
const logTime = require('./middleware/logtime')
// import serverError middlewaer
const serverError = require('./middleware/serverError')
// import notFound middlewaer
const notFound = require('./middleware/notFound')
//register static assets (global MIDDLEWARE registration)
app.use(express.static('public'))
//registare bodyparser (global MIDDLEWARE registration)
app.use(express.json())



//Global middleware
/*Anonymous function middleware*/
app.use(function (req, res, next) {
    console.log('Hi I am a middlewaer');
    next() //senza next la chiamata potrebbe rimanere in sospeso  
})

//global registration 
//app.use(logTime)
// path registration 
app.use('/api', logTime)


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})

// single route registration middleware (logTime) 
app.get('/', logTime, (req, res) => {
    res.send('Welcome to our books API server')

})

// Add all routes to handle the book entity
//CRUD operations 
app.use('/api/books', booksRouter)


// 404 MIDDLEWARE
/*function notFound(req, res, next) {
    res.status(404).json({
        error: true,
        message: 'endpoint not found. 404'
    })
} */
app.use(notFound)

//SERVER ERROR MIDDLEWARE
/* function servererror(err, req, res, next) {
    res
        .status(500)
        , jsaon({
            error: true,
            message: err.message,
            stack: err.stack
        })
}*/
app.use(serverError)

