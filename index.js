const http = require("http");
const fs = require("fs");
const host = Math.floor(Math.random()*10000);

http.createServer(function(req,res){
  fs.readFile("index.html",(err,data) => {
    if(err)throw err;
    res.writeHead(200,{"Content-Type" : "Text/html"});
    res.write(data);
    res.end();
  });
}).listen(host);
console.log(`Server runing on port http://localhost:${host}`);