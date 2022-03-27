const math={};

math.randomNumber=(m,n)=>{
let min=m;
let max=n;

return Math.floor(Math.random() * (max - min + 1) + min);
}
module.exports=math;