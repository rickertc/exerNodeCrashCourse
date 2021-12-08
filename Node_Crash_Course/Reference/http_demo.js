const http = require('http');

// Create server object
http.createServer((reg, res) => {
    // Write response
    reg.write('Hello World');
    res.end()
}). listen(5000, () => console.log('Server running..'));

