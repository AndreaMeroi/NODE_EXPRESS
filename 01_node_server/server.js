import { createserver } from 'node:http'

const server = createserver((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, world!\n');

})

server.listen(300, 'localhost', () => {
    console.log('server is running at http://localhost:300/');

})