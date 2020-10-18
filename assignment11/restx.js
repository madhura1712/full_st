const express = require('express');
const app = express();
const  mongo =require('mongodb');
const port = 8900;
const MongoClient = mongo.MongoClient;
const mongoUrl ="mongodb://localhost:27017"
var cors =require('cors');
let db;
app.use(cors());

app.get('/restuarantd/:id',(req,res)=>{
    console.log(req.params.id) //when we write localhost//restuarantd/1 we get 1 in console
    var query = {_id:req.params.id} //query is predefined keyword??
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