const express = require('express')
const app = express()
const PORT = 3000

const postsRouter = require('./routers/posts')
app.use(express.static('public')) // set static assets to access imgs
app.use(express.json()) // bodyparser per far sì che la nostra app riesca a decifrare il request body

app.listen(PORT, () => {
    console.log(`express-blog-routing app listening on port http://localhost:${PORT}`)
})

app.use('/routers/posts', postsRouter)

