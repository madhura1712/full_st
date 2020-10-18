const express = require('express');
const app = express();
const  mongo =require('mongodb');
const port = 8900;
const MongoClient = mongo.MongoClient;
const mongoUrl ="mongodb://localhost:27017"
var cors =require('cors');
let db;
app.use(cors());

app.get('/location/:city_name',(req,res)=>{
    var query = {"city name":req.params.city_name}
    db.collection('restaurant').find(query).toArray((err,result)=>
   
    {
        if(err) throw err;
        res.send(result)
    })
})
MongoClient.connect(mongoUrl,(err,client)=>
{
    if(err) console.log(err)
    db = client.db('edux');
    //why including app.listen here
    app.listen(port,(err)=>
    {
        if(err) throw err;
        console.log(`App is running on port ${port}`)

    })
})