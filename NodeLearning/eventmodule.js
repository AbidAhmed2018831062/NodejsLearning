console.log('Hey, i am EventModule.js');
const School = require('./school');
/* const Ev = require('events');

const em = new Ev();

em.on('bellring', ({ period, text }) => {
    console.log(`The class ends  ${text} in other words after period ${period}`);
});

em.emit('bellring', {
    period: 1,
    text: 'after first period',
}); */
const sch = new School();

sch.on('bellring', ({ period, text }) => {
    console.log(`The class ends  ${text} in other words after period ${period} I am Abid`);
});

sch.period();
