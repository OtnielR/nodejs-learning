const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url)

    if (req.url === '/'){
        res.end('<h1> Welcome to our page</h1>')
    }

    else if (req.url === '/about'){
        res.end('<h1>Here is our short history</h1>')
    }
    else {
        res.end(`
            <h1>Oops!</h1>
            <p>We Can't seem to find the page your looking for</p>
            <a href="/">Back Home</a>
            `)
    }

});

server.listen(5000)