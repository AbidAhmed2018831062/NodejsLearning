console.log("Hello, I am Stream and Buffer Read");

/*const fs=require("fs");
const firstStream=fs.createReadStream(`${__dirname}/abid.txt`);

firstStream.on("data",(data)=>{
    console.log(data.toString());
});*/

const htt=require("http");
const ser=htt.createServer((req,res)=>{
    if(req.url==="/")
    {
        res.write(`<html>
        <head>
        <title>
        Node js Learning
        </title>
        </head>
        <body>
        <form method="post" action="/process">
        <input name="message"/>
        </form>
        </body>
        </html>`)
        res.end();
    }
    else if(req.url==="/process"&&req.method==="POST")
    {
        const dataAr=[];
        req.on("data",(data)=>{
          dataAr.push(data);
        });
        req.on("end",()=>{
            res.write("Thank you for submitting");
            
            console.log("Thank You")
            console.log(Buffer.concat(dataAr).toString());
            res.end();
        });
        
    }
   
});
ser.listen(3000);