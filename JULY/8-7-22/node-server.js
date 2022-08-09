//import library http.
const http = require("http"); //module/library.

console.log("hello world 1");
//create server.
http.createServer((req,res)=>{

    //we are ending response and returnig it to client.
    console,log("Hello world 2");
    res.end("welcome to NodeJs Server");
}).listen(8080);
console.log("Hello World 3");


//localhost:4000
//what is server,type of server=>
    //web server => webclients [HTTP]
    //need to send url,port,req method, body,headers.


