var http = require('http');
var fs = require('fs')

var server = http.createServer(function(req,res){
    fs.readFile('db.json','utf-8',(err,data)=>{
        if(err) throw err;
        res.write(data)
        res.end()
    })
   
    
})

server.listen(3400);

//logic of this prog, explaination?
//what does node api.js exactly do?
//to generate url we need servers, servers are created using http
//we need to specify which port no this will run