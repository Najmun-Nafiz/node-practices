//File Read & Write Start...

// const fs = require('fs');

// fs.writeFileSync('myFile.txt', 'Hello Najmun.?');
// fs.appendFileSync('myFile.txt', 'How are you.?');
// const data1 = fs.readFileSync('myFile.txt');
// const data1 = 'myFile.txt';

// fs.readFile('myFile.txt', (err, data) => {
//   console.log(data.toString());
// });

// console.log(data1.toString());


//Event Listener Section Start...
const EventEmitter = require('events');
const emitter = new EventEmitter();

//Call back fruntion..
// emitter.on('startRunning', function(fname, lname){
//   console.log(`Yes this time for running for ${fname} ${lname}`);
// });

emitter.on('startRunning', function({fname, lname}){
  console.log(`Yes this time for running for ${fname} ${lname}`);
});

setTimeout(() => {
  var name = 'Anamul';
  var lname = 'Islam';
  // emitter.emit('startRunning', name,lname);
  emitter.emit('startRunning',{
    fname:name,
    lname:lname
  });
}, 2000);