console.log('Hey, I am School.js');
const Ev = require('events');

class School extends Ev {
    period() {
        console.log('Hey, we have arrived in school');
        this.emit('bellring', {
            period: 1,
            text: 'after first period',
        });
    }
}

module.exports = School;
