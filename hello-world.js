// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
const test = require('./test');
console.log("Hello World");



console.log(test.sayHello('adit'));
console.log(test.angka);

const a = new test.Person()
console.log(a);

const total = test.sum(20, 20);
console.info(total);