
const math = {};

//To get a random integer number between two numbers...
math.getRandomNumber = function getRandomNumber(min, max) {
    min = typeof min === 'number' ? min : 0;
    max = typeof max === 'number' ? max : 0;
    return Math.floor(Math.random() * (max - min + 1) + min);
};

//Export tho object...
module.exports = math;