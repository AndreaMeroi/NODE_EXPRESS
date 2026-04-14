import { createServer } from 'node:http'




const server = createServer((req, res) => {

    // console.log(req);
    console.log(req.method);
    console.log(req.url);


    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome to my server!\n');

})


server.listen(3000, 'localhost', () => {
    console.log('My server is running at http://localhost:3000/');

})