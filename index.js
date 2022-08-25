
var http = require('http');
  
async function startServer(){
    var server = http.createServer(function (req, res) {
        console.log(req.url);
        let status = 200;

        res.writeHead(status, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({status: "CALLABLE"}));

        res.end();
    });
    server.listen(process.env.PORT);
    console.log(`Node.js web server at port ${port} is running.`);
}
startServer();
