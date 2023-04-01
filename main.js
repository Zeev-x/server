const http = require("http");
const host = Math.floor(Math.random()*10000);
const web = `<!DOCTYPE HTML>
<html>
  <head>
    <title>Hello world</title>
  </head>
  <body>
    <script>
      const url = "https://zeev-x.github.io/zee/json/ecchi.json";
      const height = "700";
      const output = "result";
    </script>
    <script src="https://zeev-x.github.io/zee/main.js"></script>
    <h1>W E L C O M E</h1>
    <fieldset class="content">
      <legend><h3>Image</h3></legend>
      <div id="result"></div><br>
      <button onclick="document.location.reload(true)">CHANGE</button>
    </fieldset>
    <style>
      body {
        text-align: center;
      }
      fieldset.content {
        width: 50%;
        margin: auto;
        border: black 5px solid;
        border-radius: 25px;
      }
      button {
        padding: 5px 10px;
        font-family: Monospace;
        font-size: 150%;
        border: black 3px solid;
        border-radius: 10px;
        background-color: black;
        color: red;
      }
    </style>
  </body>
</html>`

http.createServer(function(req,res){
  res.writeHead(200,{"Content-Type" : "Text/html"});
  res.write(web);
  res.end();
}).listen(host);
console.log(`link : http://localhost:${host}`)