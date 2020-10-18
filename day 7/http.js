//to make the application live we need servers, servers are created with http package
var http = require('http');
var server = http.createServer(function(req,res){
    res.write('<h1>Hi to node js</h1>')
    res.end()
})
//to generate url we need servers, servers are created using http
//we need to specify which port no this will run
server.listen(3500);
//react cant talk to database, therefore wew use API

