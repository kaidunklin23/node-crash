const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);


    res.setHeader('Content-Type', 'text/plain');

    let path = './views';
    switch(req.url) {
        case '/':
        path += 'index.html';
        res.requireCode = 200;
        break;
        case '/about':
        path += 'about.html'
        res.requireCode = 200;
        break;
        case '/about-me':
        res.statusCode = 301
        res.setHeader('Location', '/about');
        res.end();
        break;
        default:
        path += '404.html';
        res.requireCode = 404;
        break;
    }

    // res.write('<head><link rel="stylesheet" href="#"></head>');
    // res.write('<p>hello, ninjas</p>');
    // res.write('<p>hello again, ninjas</p>');
    // res.end()
    fs.readFile('./views/index.html', (path, err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }else {
            // res.write(data);
            res.statusCode = 200
            res.end();
        }
    })
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
})