
const http = require('http');
const {handleReqRes} = require('./handlers/handlerReqRes');

const app = {};
app.config = {
    port: 1000
};

app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`Listening to the port of this server ${app.config.port}`);
    });
}

app.handleReqRes = handleReqRes;

//Run server...
app.createServer();