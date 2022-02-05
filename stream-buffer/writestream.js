const fs = require('fs');
const myReadStream = fs.createReadStream(`${__dirname}/bigData.txt`, `utf8`);
const myWriteStream = fs.createWriteStream(`${__dirname}/outputData.txt`);

// myReadStream.on('data', (chunk) => {
//     myWriteStream.write(chunk);
// })

myReadStream.pipe(myWriteStream);