
const http = require('http');
const {hendleRequest} = require('./helpers/hendleRequest');
const environment = require('./helpers/environment');
const data = require('./lib/data');

const app = {};

//To create a new file...
// data.create('test', 'testFile', {'name':'Najmun Nafiz','language':'NodeJs'}, (err) => {
//     console.log('Error is', err);
// });

//To read a file...
// data.read('test', 'testFile', (err, result) => {
//     if(!err){
//         console.log(result);
//     }else{
//         console.log(err);
//     }
// });

//To update a existing file...
data.update('test', 'testFile2', {'name':'Najmun Nafiz','language':'NodeJs, JavaScript','API':'Postman'}, (err) => {
    console.log('Error is', err);
});

app.createServer = () => {
    const server = http.createServer(app.hendleRequest);
    server.listen(environment.port, () => {
        console.log(`Listening to the port ${environment.port}`);
    });
}

app.hendleRequest = hendleRequest;
app.createServer();