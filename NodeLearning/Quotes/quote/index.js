const fs=require("fs");

const q={};

q.allQuotes=()=>{
const al=fs.readFileSync("G:/Node/NodeLearning/Quotes/quote.txt",'utf-8');

const a=al.split(/\r?\n/);

return a;
}

module.exports=q;