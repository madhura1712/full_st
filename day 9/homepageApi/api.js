//which file to start with, how will the user know??
//package.json contains solution
//when we run npm start automatically the control goes to home.js

const express = require('express');
const app = express();
const mongo = require('mongodb');
const port = 8900;
const MongoClient = mongo.MongoClient;//doubt
//we need a url for the database as mongodb runs on port no 27..
const bodyParser = require ('body-parser');//required for post calls
//data will come through body parser
const mongourl = "mongodb://localhost:27017"; //doubt
let db;
let col_name = "movies";

//every database has its own client
//means edux will have his own client
app.get('/',(req,res)=>{
    res.status(200).send("Api is running")
}); //just a test api
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//will help to read our data 
app.get('/movies',(req,res)=>
{
    db.collection(col_name).find().toArray((err,result)=>
    {

        if(err) throw err;
        res.send(result)
    })
    //response we get is in the form of array
    //db.nodeat.find() <<< above statement similar to
    //collection is a keyword in the above statement
});
app.post('/addMovies',(req,res)=>{
    console.log(req.body) //its console.log will print on node js console
    db.collection(col_name).insert(req.body,(err,result)=>
    {
        if(err) throw err;
        res.send('Data addded')
    }
    )
})
app.put('/updateUser',(req,res)=>{
    db.collection(col_name).update({_id:req.body._id},{
        $set:{
            name :req.body.name,
            language : req.body.language,
            rate: req.body.rate,
            type:req.body.type,
            imageUrl : req.body.imageUrl

        }
    },(err,result)=>{
        if(err){
            throw err
        }else{
            res.send('Data updated')
        }

    }
    )
});
app.delete('/deleteUser',(req,res)=>{
    db.collection(col_name).remove({_id:req.body._id},(err,result)=>{
        if(err){
            throw err
        }else{
            res.set('Data')
        }
        
    })
}) //not happening

/* above explaination
we are calling app. get having two parameters,
one is /movies, the input parameter, and the other is an output parameter in the form of funtion,
 with req and res as parameters, after entering this function, we seek a collection and
 print the result in the form of array, but there can be an error too, so we again call a function with err, result. */
//now, we will ask mongodb to connect with mongourl
MongoClient.connect(mongourl,(err,client)=>
{
    if (err) throw err;
    db = client.db('edux')  
    //what does client do exactly?
    app.listen(port, (err)=>{
        if (err) throw err;
        console.log(`Server is running on ${port}`)
    });
})

