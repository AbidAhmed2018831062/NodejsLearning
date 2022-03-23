console.log('Hey, I am HttpModule.js');

const ser = require('http');
// when user is getting connected callback function will get called and htt is an event object
const htt = ser.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hey, Welcome to my first server');
    } else if (req.url === '/AboutMe') {
        res.write(
            'My name is Abid Ahmed. Currently studying at Shahjalal University of Science and Technology'
        );
    }
    res.end();
});


htt.listen(3000);
