const math=require("./math");
const q=require("./quote");


const app={};

app.config={
    timeBetweenQuotes: 1000,
}

app.printQuote=()=>{
    const quo=q.allQuotes();

    const size=quo.length;

    const ma=math.randomNumber(1,size);

    const selectedQuote=quo[ma-1];

    console.log(selectedQuote);
}
app.indefiniteLoop=()=>{
    setInterval(app.printQuote,app.config.timeBetweenQuotes);
}
app.indefiniteLoop();