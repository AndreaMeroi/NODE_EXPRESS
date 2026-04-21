const books = require('../data/books')

const index = (req, res) => {
    res.json(books)
}

const show = (req, res) => {
    //recupero il parametro dinamico dall'oggetto req
    const id = parseInt(req.params.id)
    //creo la const che contiene il libro corrispondente all'id 
    const book = books.find(book => book.id === id)
    //SE NON trovo il libro corrispondente all'id mostro messagio d'errore
    if (!book) {
        return res.status(404).json({
            error: true,
            message: 'book not found'
        })
    }
    //altrimento RETURN il libro in json
    res.json(book)
}

const store = (req, res) => {
    console.log(req.body);

    //generate a new id from the existing sequence
    const newId = books[books.length - 1].id + 1
    // destrutturo per salvare le nuove informazioni ognuna in una variabile
    const { title, author, year, genre, description, price } = req.body
    // creo il nuovo oggetto(libro) inserendo le nuove informazioni in newBook
    const newBook = {
        id: newId,
        title,
        author,
        price,
        year,
        genre,
        description
    }
    //pusho il newBook nell'array di obj (books)
    books.push(newBook)
    //restituisco il codice di successo della modifica e il nuovo libro in json
    res.status(201).json(newBook)
    console.log(books);
}

const update = (req, res) => {
    //recupero il parametro dinamico dall'oggetto req
    const id = parseInt(req.params.id)
    //creo la const che contiene il libro corrispondente all'id 
    const book = books.find(book => book.id === id)
    //SE NON trovo il libro corrispondente all'id mostro messagio d'errore
    if (!book) {
        return res.status(404).json({
            error: true,
            message: 'book not found'
        })
    }

    //read from the body request from values form the given obj
    console.log(req.body);

    //creo una costante per ogni chiave dell'oggetto)  
    const { title, author, year, genre, description, price } = req.body
    //aggiorno delle chiavi dell'oggetto con i nuovi valori 
    book.title = title;
    book.year = year;
    book.description = description;
    book.author = author;
    book.price = price;
    book.genre = genre;

    //return the updated obj
    res.json(book)
}

const modify = (req, res) => {
    res.send(`modify a part af the book ${req.params.id}`)
}

const destroy = (req, res) => {
    //recupero il parametro dinamico dall'oggetto req
    const id = parseInt(req.params.id)
    //creo la const che contiene il libro corrispondente all'id 
    const book = books.find(book => book.id === id)
    //SE NON trovo il libro corrispondente all'id mostro messagio d'errore
    if (!book) {
        return res.status(404).json({
            error: true,
            message: 'book not found'
        })
    }

    //remove the given obj from the array 

    books.splice(books.indexOf(book), 1)
    console.log(books);

    res.sendStatus(204)

}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}