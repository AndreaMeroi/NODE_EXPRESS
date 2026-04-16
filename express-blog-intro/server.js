//importo express
const express = require('express')
// invoco la funzione express salvandola in una variabile app
const app = express()
// definisco la porta per il server
const port = 3000
// ordine per mettere in ascolto il server
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
//Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
app.use(express.static('public'))

//Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”
// Routes 

app.get('/', (req, res) => {
    res.send('Server del mio blog');
})

// Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, 
// contenuto, immagine e tags (tags è un array di stringhe)
//Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post.

app.get('/bacheca', (req, res) => {

    const post = [
        {
            titolo: 'Ciao_1',
            contenuto: 'nbvpnvpoinvoijoinokmnèoimnpèoj',
            Img: './ciambellone.jpeg',
            tags: ['kmkm', 'hbib', 'iboioi']
        },
        {
            titolo: 'Ciao_2',
            contenuto: 'nbvpnvpoinvoijoinokmnèoimnpèoj',
            Img: './cracker_barbabietola.jpeg',
            tags: ['kmkm', 'hbib', 'iboioi']
        },
        {
            titolo: 'Ciao_3',
            contenuto: 'nbvpnvpoinvoijoinokmnèoimnpèoj',
            Img: './pane_fritto_dolce.jpeg',
            tags: ['kmkm', 'hbib', 'iboioi']
        },
        {
            titolo: 'Ciao_4',
            contenuto: 'nbvpnvpoinvoijoinokmnèoimnpèoj',
            Img: './pasta_barbabietola.jpeg',
            tags: ['kmkm', 'hbib', 'iboioi']
        },
        {
            titolo: 'Ciao_5',
            contenuto: 'nbvpnvpoinvoijoinokmnèoimnpèoj',
            Img: './torta_paesana.jpeg',
            tags: ['kmkm', 'hbib', 'iboioi']
        }
    ]

    res.json(post);
})

