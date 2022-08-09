// var x=50;
// var y=30;
// console.log(x==y);
// console.log(x===y);
// var x=[];
// var y=[];
// console.log(typeof x);
// console.log(typeof x);

const { createServer } = require("http");
const { Http2ServerRequest } = require("http2");

// var p=18;
// var q=35;
// console.log(p>q);
// console.log(p<q);
// console.log(typeof p);
// console.log(typeof q);
// var a='1234';
// var b="nag";
// console.log(typeof a);
// console.log(typeof b);

// var i=5;
// var j=10;
// console.log(i==j);
// console.log(i===j);
http.createServer((req,res)=>{
    console.log("Hello World 2");
    res.end("Welcome to nodejs server");
}).listen(4100);
console.log("Hello World 3");

