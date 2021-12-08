//console.log('Hello From Node.js...');

//const person = require('./person');

//console.log(person);

//const Person = require('./person');
//const person1 = new Person('John Doe', 30);

//person1.greeting();

//const Logger = require('./logger');

//const logger = new Logger();

//logger.on('message', data => console.log('Called Listener', data));

//logger.log('Hello World');

//const http = require('http');
//const path = require('path');
//const fs = require('fs');

//const server = http.createServer((req, res) => {
    //console.log(req.url);
    //if(req.url === '/api/users') {
        c//onst users = [
            //{ name: 'Bob SMith', age: 40 },
             //{ name: 'John Doe', age: 30 }
        //];
        //res.writHead(200, { 'Content-Type': 'application/json'});
        //res.end(JSON.stringify(users));
    //}
// Build file path
let filePath = path.join(__dirname, 'public', req.url === '/' ?
'index.html' : req.url );
//console.log(filePath);
//res.end();

//Extension of file
let extname = path.extname(filePath);

// Initial content type
let contentType = 'text/html';

// Check ext and set content type
switch(extname) {
    case '.js':
        contentType = 'text/javascript';
        break;
    case '.css':
        contentType = 'text/css';
        break;
    case '.json':
        contentType = 'image/png';
        break;
    case '.jpg':
        contentType = 'image/jpg';
        break;   
}

// Read fil
fs.readFile(filePath, (err, content) => {
    if(err) {
        if(err.code === 'ENOENT') {
            // Page not found
            fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content)
            => {
                resizeBy.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content, 'utf8');
        })
        } else { 
            // Some server error
            res.writeHead(500);
            res.end(`Server Error: ${err.code}`);

        }
    } else {
        // Success
        res.wrteHead(200, { 'Content-Type': 'text.html' });
        res.end(content, 'utf8');
    }
});


const PORT = process.env.PORT  || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
