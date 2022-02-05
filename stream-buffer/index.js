const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const myReadStream = fs.createReadStream(`${__dirname}/bigData.txt`, `utf8`);
    myReadStream.pipe(res);
})

server.listen(1000);
console.log('Server listening of port 1000');