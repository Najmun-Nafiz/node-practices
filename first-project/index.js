
//All the require file...
const mathFile = require('./math');
const textFile = require('./textfile');

const app = {};

//Time interval set...
app.config = {
    timeBetweenQuotes: 1000,
};

//Function that prints a random text
app.printAQuote = function printAQuote() {
    // Get all the text
    const allTexts = textFile.allTexts();
    const numberOfQuotes = allTexts.length;
    const randomNumber = mathFile.getRandomNumber(1, numberOfQuotes);

    console.log(randomNumber);
    // Get the quote at that position in the array (minus one)
    const selectedQuote = allTexts[randomNumber - 1];

    // Print the quote to the console
    console.log(selectedQuote);
};

//Function that loops indefinitely...
app.indefiniteLoop = function indefiniteLoop() {
    // Create the interval, using the config variable defined above
    setInterval(app.printAQuote, app.config.timeBetweenQuotes);
};

// Invoke the loop
app.indefiniteLoop();