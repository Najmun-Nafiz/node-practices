
const fs = require('fs');
const sampleText = {};

//To get all the sample text and return to the users...
sampleText.allTexts = function allTexts() {

    const fileContents = fs.readFileSync(`${__dirname}/sample.txt`, 'utf8');
    
    // Turn the string into an array
    const arrayOfText = fileContents.split(/\r?\n/);
    return arrayOfText;

};

//Export tho object...
module.exports = sampleText;