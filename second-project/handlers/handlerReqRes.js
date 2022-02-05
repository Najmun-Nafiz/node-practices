
const { StringDecoder } = require('string_decoder');
const url = require('url');
const routes = require('../routes');
const {notFoundHandler} = require('../helpers/routeHandlers/notFoundHandler');


const handler = {};

handler.handleReqRes = (req, res) => {
    const parseUrl = url.parse(req.url, true);
    const path = parseUrl.pathname;
    //To remove unwanted / from path url from start to bottom...
    const trimPath = path.replace(/^\/+|\/+$/g,'');
    const method = req.method.toLowerCase();
    const queryStringObject = parseUrl.query;
    const headerObject = req.headers;

    //To store all the headers property into the object...
    const requestProperties = {
        parseUrl,
        path,
        trimPath,
        method,
        queryStringObject,
        headerObject
    };

    const decoder = new StringDecoder('utf-8');
    let currentData = '';

    //To check the route path...
    const checkingHandler = routes[trimPath] ? routes[trimPath] : notFoundHandler;
    checkingHandler(requestProperties, (statusCode, payload) => {
        statusCode = typeof statusCode === 'number' ? statusCode : 500;
        payload = typeof payload === 'object' ? payload : {};

        const payloadString = JSON.stringify(payload);

        // return the final response
        res.writeHead(statusCode);
        res.end(payloadString);
    })

    req.on('data', (buffer) => {
        currentData += decoder.write(buffer);
    })
    
    req.on('end', (buffer) => {
        currentData += decoder.end();
        console.log(currentData);
        res.end();
    })


}

module.exports = handler;