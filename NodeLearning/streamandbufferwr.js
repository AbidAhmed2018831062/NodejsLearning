console.log("Hello, I am Stream and Buffer Write");
const fs=require("fs");
/*const firstStream=fs.createReadStream(`${__dirname}/abid.txt`,"utf-8");

const firstWriteStream=fs.createWriteStream(`${__dirname}/output.txt`);

/*firstStream.on("data",(data)=>{
firstWriteStream.write(data);
});

//use of pipe

firstStream.pipe(firstWriteStream);*/
const htt = require('http');

const ser=htt.createServer((req,res)=>{
const reqStream=fs.createReadStream(`${__dirname}/abid.txt`);
reqStream.pipe(res);

})
ser.listen(3000);