//which file to start with, how will the user know??
//package.json contains solution
//when we run npm start automatically the control goes to home.js

const express = require('express');
const app = express();
//we are creating an object to call methods like get post
const port = 8900;
//is port a keyword?
//meaning of slash
app.get('/',(req,res)=>{
    res.status(200).send("Api is running")
}) //200 means things are ok, eg of more status codes are 404, page not found
//.get will run on localhost
// is /about a qeury param?
// '/about is a route
app.get('/about',(req,res)=>{
    res.status(200).send("About page is running")
})

app.listen(port, (err)=>{
    if (err) throw err;
    console.log(`Server is running on ${port}`)
})