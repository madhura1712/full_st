function greet(){
    return "Say hi"
}
console.log(greet()); 

//iffi
(function () 
{
    console.log("hi");
} ())
//how does iffi work?

function loopx(usevalue){
    for(var i=0;i<usevalue;i++)
    {
        console.log(i);
    }
}

/*loopx(10)
VM75:4 0
VM75:4 1
VM75:4 2
VM75:4 3
VM75:4 4
VM75:4 5
VM75:4 6
VM75:4 7
VM75:4 8
VM75:4 9
undefined */

//es6 generator function
function * loopx(usevalue){
    for(i=0;i<usevalue;i++)
    {
        yield i;
    }
}
//undefined
loopx(9)
//oopx {<suspended>} </suspended> . nothing happens loop suspended
var data =loopx(5); //creating method but why?
data.next() //prints the next value
//using this function the control of the printing is in our hands
data.next();
//{value: 0, done: false}
data.next()
//{value: 1, done: false}
data.next()
//{value: 2, done: false}
data.next()
//{value: 3, done: false}