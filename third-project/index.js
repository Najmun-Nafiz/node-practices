
const http = require('http');
const {hendleRequest} = require('./helpers/hendleRequest');

const app = {};
app.config = {
    port: 1100
};

app.createServer = () => {
    const server = http.createServer(app.hendleRequest);
    server.listen(app.config.port, () => {
        console.log(`Listening to the port ${app.config.port}`);
    });
}

app.hendleRequest = hendleRequest;
app.createServer();