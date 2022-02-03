const http = require('http');
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Hello  Najmun');
        res.write('How are you doing.');
        res.end();
    }else if(req.url === '/about'){
        res.write('This is about page.');
        res.end();
    }else{
        res.write('Not fond !');
        res.end();
    }
})

server.listen(1000);
console.log('Server listening of port 1000');