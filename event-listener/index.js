const School = require('./school');
const school = new School();

school.on('startRunning', function({fname, lname}){
    console.log(`Yes this time is running for ${fname} ${lname}`);
});

school.startRining();