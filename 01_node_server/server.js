import { createServer } from 'node:http'




const server = createServer((req, res) => {

    // console.log(req);
    console.log(req.method);
    console.log(req.url === '/');
    console.log(req.url === '/films');

    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Welcome to my server!\n');

    } else if (req.url === '/films') {

        const films = [
            { title: 'Inception', director: "Christopher Nolan", year: 2010 },
            { title: 'Inception', director: "Christopher Nolan", year: 2010 },
            { title: 'Inception', director: "Christopher Nolan", year: 2010 },
        ]

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(films))

    }

})


server.listen(3000, 'localhost', () => {
    console.log('My server is running at http://localhost:3000/');

})