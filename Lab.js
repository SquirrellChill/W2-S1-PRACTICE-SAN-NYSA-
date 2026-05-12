// ----- Lab2.1: The Ping Server -----
const http = require('http');

const server = http.createServer((req, res) =>{ 
    console.log('A request was recieved!');
    res.end('Pong');
});

server.listen(3000, () => {
    console.log('Warm-up 1 running on http://localhost:3000');
});

// ----- Lab 2.3: Inspecting the Guest -----
const http = require('http');

const server = http.createServer((req, res) => {
    // Code 
    console.log(req.url);
    console.log(req.method);
    res.end('Check your terminal to see the request detail.');
});

server.listen(3000);

// ----- Lab 2.4: Setting the Vibe -----
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 404;
    res.end('Status Code is set to 404');
});

server.listen(3000, () => {
    console.log('Page not found!')
})

// ----- Lab2.5: Text vs HTML -----
const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    // Send response content
    res.write('<h1>Hello!</h1><p>Is this rendered as HTML?</p>');
    res.end();
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});


// ----- Lab 2.6: The Live Clock -----
const http = require('http');

const server = http.createServer((req, res) =>{
    const currentTime = new Date().toLocaleTimeString();

    res.setHeader('Content-Type', 'text/html');
    res.write(`<h1>Server Time</h1>`);
    res.write(`<p>The Current Time is: ${currentTime}</p>`);
    res.end();
});

server.listen(3000);

// ------ Lab 2.7: Ananlyze -----
const http = require('http');

const server = http.createServer((req, res) => {
 res.write('Hello, World!');
 return res.end(); // Bug here
});
server.listen(3000, () => {
 console.log('Server running on http://localhost:3000');
});
