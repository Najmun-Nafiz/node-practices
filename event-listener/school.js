const EventEmitter = require('events');

class School extends EventEmitter {
    startRining() {
        console.log('Competetion Started.');

        setTimeout(() => {
            var name = 'Najmun';
            var lname = 'Nafiz';
            this.emit('startRunning',{
              fname:name,
              lname:lname
            });
          }, 2000);
    };
}

module.exports = School;