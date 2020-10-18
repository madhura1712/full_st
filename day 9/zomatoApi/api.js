const express = require('express');
const app = express();
const  mongo =require('mongodb');
const port = 8900;
const bodyParser = require ('body-parser');//required for post calls
const MongoClient = mongo.MongoClient;
const mongoUrl ="mongodb://localhost:27017"
var cors =require('cors');
let db;
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//restuarant on the basis on id
//i search a restuarant on the basis on city,
//i click on a restuarant, then how will i know how to display the correct details of the restaurant
//we want detail of restuarant

 //filtering on the basis of city, passing city id as a direct queery here

app.get('/restuaranthome',(req,res)=>{
    var query= []
    //only city as filter
    if(req.query.city && req.query.mealtype){
        query= {city:req.query.city,"type.mealtype":req.query.mealtype}
    } //both mealtype and cityname
    else if(req.query.mealtype)
    {
        
        var query = {"type.mealtype":req.query.mealtype}
    }    
    else if(req.query.city)
    {
        
        var query = {city:req.query.city}
        
    }
    db.collection('restaurant').find(query).toArray((err,result)=>
    //why curly braces inside find
    {
        if(err) throw err;
        res.send(result)
    })
})
app.get('/restuarantsx',(req,res)=>{
    db.collection('restaurant').find({}).toArray((err,result)=>
    //why curly braces inside find
    {
        if(err) throw err;
        res.send(result)
    })
})  //code to print all restos
//showing restos basis on id
//id is param here
//after question mark query param

app.get('/restuarantd/:id',(req,res)=>{
    console.log(req.params.id) //when we write localhost//restuarantd/1 we get 1 in console
    var query = {_id:req.params.id} //query is predefined keyword??
    db.collection('restaurant').find(query).toArray((err,result)=>
   
    {
        if(err) throw err;
        res.send(result)
    })
})

//pass city and mealtype in this api
app.get('/reshome/:city/:mealtype',(req,res)=>{
    var query=[]
    var sort = {cost:1}
    //sort a keyword or function?

   if(req.query.cuisine && req.query.lost && req.quert.hcost && req.query.sort)
   {
    query = {city:req.params.city,"type.mealtype":req.params.mealtype,"Cuisine.cuisine":req.query.cuisine, cost:{$gt:parseInt(req.query.hcost),$lt:parseInt(req.query.hcost)}}
    sort={cost:parseInt(req.query.sort)}
    }
   else if(req.query.cuisine && req.query.lost && req.query.hcost)
   {
    query = {city:req.params.city,"type.mealtype":req.params.mealtype,"Cuisine.cuisine":req.query.cuisine, cost:{$gt:parseInt(req.query.hcost),$lt:parseInt(req.query.hcost)}}
   }
   else if(req.query.cuisine && req.query.sort)
   {
    query = {city:req.params.city,"type.mealtype":req.params.mealtype,"Cuisine.cuisine":req.query.cuisine}
    sort={cost:parseInt(req.query.sort)}
    }
   else if(req.query.lcost && req.query.hcost && req.query.sort)
   {
    query = {city:req.params.city,"type.mealtype":req.params.mealtype,cost:{$gt:parseInt(req.query.hcost),$lt:parseInt(req.query.lcost)}}
    sort={cost:parseInt(req.query.sort)}
    }


   else if(req.query.cuisine)
   { 
       //what if multiple cusines?
       query = {city:req.params.city,"type.mealtype":req.params.mealtype,"Cuisine.cuisine":req.query.cuisine}
   } 
   else if(req.query.lcost && req.query.hcost)
   { //locost and hcost predefined?
    query = {city:req.params.city,"type.mealtype":req.params.mealtype,cost:{$lt:parseInt(req.query.hcost),$gt:parseInt(req.query.lcost)}}
   } 
   else if(req.query.sort)
   {
       sort={cost:parseInt(req.query.sort)}
      
   }
   else{
    query = {city:req.params.city,"type.mealtype":req.params.mealtype}
       sort = {cost:1}
   }
   db.collection('restaurant').find(query).sort(sort).toArray((err,result)=>{
    if(err) throw err;
    res.send(result)
   })
 
})

app.get('/location',(req,res)=>{
    db.collection('city').find({}).toArray((err,result)=>
    //why curly braces inside find
    {
        if(err) throw err;
        res.send(result)
    })
})
app.get('/cusine',(req,res)=>{
    db.collection('cuisine').find({}).toArray((err,result)=>
    //why curly braces inside find
    {
        if(err) throw err;
        res.send(result)
    })
})
app.post('/placeOrder',(req,res)=>{
    console.log(req.body)
     //its console.log will print on node js console
    var data ={
        _id:req.body.order_id,
        name:req.body.name,
        phone : req.body.phone,
        email : req.body.email,
        address : req.body.address,
        rest_id :req.body.rest_id,
        person: req.body.person
    }
     db.collection('orders').insert(req.body,(err,result)=>
    {
        if(err) 
        {throw err
        }else{
            console.log('Order Placed')
        }

    }
    )
})
app.get('/mealtype',(req,res)=>{
    db.collection('mealtype').find({}).toArray((err,result)=>
    //why curly braces inside find
    {
        if(err) throw err;
        res.send(result)
    })
})

app.get('/ordersx',(req,res)=>{
    db.collection('orders').find({}).toArray((err,result)=>
    //why curly braces inside find
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