var fs = require('fs');
const { isBuffer } = require('util');

//method takes first paramenter as file name, second paramete as content,third parameter is a function aka callback function
//why callback: when i ask the user to write something, who will //tell the task is done?? This response is given by callack, works like a confirmation
/*eg file is created, data is added to the file, the callback function, aka third parameter tells that the task is done*/


/* fs.writeFile('Myfile.txt','Enter what you want to write here',function(err){
    if (err) throw err;
    console.log('File created');
}) */
 //here we are passing a function inside a function with a parameter err
    //this curly brackets are the body of the callback function
//file wont be created second time.
//IF WE UNCOMMENT fs.appendFile, does it keep on creating a file again and again?Cause then the append doesnt work
//CAN WE NOT EDIT DIRECTLY IN THE  TEXT FILE?

//how to keep adding in the same file:solution use append
/*fs.appendFile('Myfile.txt','Enter what you want to write here, pizza \n',function(err)
{
    if (err) throw err;
    console.log('Hi i am appending');
})*/
/* 
//reading a file
fs.readFile('Myfile.txt','utf-8',(err,data)=>{
    if(err) throw err
    console.log(data)
})
*/
fs.readFile('db.json','utf-8',(err,data)=>{
    if(err) throw err
    console.log(data)
})

/*fs.rename('Myfile.txt','Mytext.txt',
(err)=>
{
    if(err) throw err
    console.log("file renamed");
}
) */

fs.unlink('Mytext.txt',(err)=>
{
    if(err) throw err
    console.log("file deleted");
}

)
//we cannot retrieve a deleted file