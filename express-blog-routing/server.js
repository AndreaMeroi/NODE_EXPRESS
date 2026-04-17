const express = require('express')
const app = express()
const PORT = 3000

const postsRouter = require('./routers/posts')

app.listen(PORT, () => {
    console.log(`express-blog-routing app listening on port http://localhost:${PORT}`)
})

app.use('/routers/posts', postsRouter)

