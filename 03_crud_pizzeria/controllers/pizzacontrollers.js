//import menu 

const menu = require('../data/pizzas')

//index
const index = (req, res) => {
    // res.send('show a list of pizzas')
    // per poter filtrare l'intero menu salvo il menu in una variabile let 'filtered_menu'
    let filtered_menu = menu

    //SE l'oggertto della richiesta contiente un valore in query alla chiave ingrediente
    if (req.query.ingredient) {
        filtered_menu = menu.filter(pizza => pizza.ingredients.includes(req.query.ingredient))
    }
    console.log(filtered_menu);


    res.json(filtered_menu)

}

//show
const show = (req, res) => {

    const { id } = req.params // destrutturo (vedi documentazione)
    console.log(id);

    const pizza = menu.find(item => item.id === parseInt(id)) // parseInt serve in quanto con il triplo uguale anche il tipo di dato deve essere uguale in questo caso avrei altrimenti un numero e un numero letto come stringa
    console.log(pizza);

    if (!pizza) {
        res.status(404).json({
            error: true,
            message: 'Not Found'
        })
    }
    // res.send('Show a single pizza with ID:' + req.params.id)
    res.json(pizza)
}

//store
const store = (req, res) => {
    res.send('Create a new pizza')
}

//update
const update = (req, res) => {
    res.send('update the entire pizza wit ID:' + req.params.id)
}

//modify
const modify = (req, res) => {
    res.send('Partial update for the single pizza with ID:' + req.params.id)
}

//destroy 
const destroy = (req, res) => {

    //copio la logica di SHOW 
    const { id } = req.params // destrutturo (vedi documentazione)
    console.log(id);

    const pizza = menu.find(item => item.id === parseInt(id)) // parseInt serve in quanto con il triplo uguale anche il tipo di dato deve essere uguale in questo caso avrei altrimenti un numero e un numero letto come stringa
    console.log(pizza);

    if (!pizza) {
        return res.status(404).json({
            error: true,
            message: 'Not Found'
        })
    }

    //aggiungo lo Splice per creare il nuovo array 
    menu.splice(menu.indexOf(pizza), 1)

    console.log(menu);

    //rispondo con uno status, in quanto non ho una vera risposta se non la conferma della cancellazione 
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