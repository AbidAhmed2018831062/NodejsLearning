console.log('Abid');
const os = require('os');
const path = require('path');

const fs = require('fs');

fs.writeFile('abid.txt', 'Hello, I am Abid', () => {
    console.log('Finished');
});

fs.readFile('abid.txt', (error, data) => {
    console.log(data.toString());
});

console.log(path.basename('index.js'));

const p = require('./index');

console.log(p.a);
console.log(p.p);

console.log(os.cpus());
