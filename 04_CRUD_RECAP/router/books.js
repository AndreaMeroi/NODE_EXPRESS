const express = require('express')
const router = express.Router()
const bookController = require('../controllers/booksController')
// Add all routes to handle the book entity
//CRUD operations 

//index
router.get('/', bookController.index)

//show
router.get('/:id', bookController.show)

//store 
router.post('/', bookController.store)

//update
router.put('/:id', bookController.update)

//modify
router.patch('/:id', bookController.modify)

//destroy
router.delete('/:id', bookController.destroy)


module.exports = router 