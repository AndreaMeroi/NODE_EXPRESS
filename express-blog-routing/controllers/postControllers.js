const posts = require('../data/posts')

const index = (req, res) => {

    let filteredPosts = posts

    if (req.query.tags) {
        filteredPosts = posts.filter(post => post.tags.includes(req.query.tags))
    }

    console.log(filteredPosts);

    //res.send('Lista dei post')
    res.json(filteredPosts)
}

const show = (req, res) => {
    //res.send('mostra il sigolo post')

    const { name } = req.params // le graffe servono per destrutturare l'oggetto req.params, salvando nella variabile ciò che corrisponde alla chiave name
    console.log(name);

    const singlePost = posts.find(item => item.name === name)

    //    console.log(item.name);
    if (!singlePost) {
        res.status(404).json({
            error: true,
            message: 'Not Found'
        })
    }
    res.json(singlePost)
}

const store = (req, res) => {
    res.send('crea un nuovo post')
}

const update = (req, res) => {
    res.send('modifica lintero post con id:' + req.params.id)
}

const modify = (req, res) => {
    res.send('modifica parzialmente il post con id:' + req.params.id)
}

const destroy = (req, res) => {

    const { id } = req.params // le graffe servono per destrutturare l'oggetto req.params, salvando nella variabile ciò che corrisponde alla chiave id
    console.log(id);

    const singlePost = posts.find(item => item.id === parseInt(id))

    //    console.log(item.id);
    if (!singlePost) {
        return res.status(404).json({
            error: true,
            message: 'Not Found'
        })
    }

    posts.splice(posts.indexOf(singlePost), 1)

    console.log(posts);

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