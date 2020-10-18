//functions
var a;
var b;
function add(a,b){
    return a+b;
}
add(2,4);
6

//5 ways to write a function:
//function
//generator
//arrow function
//method
//iffi
function iseven(useri){
    var out;
    if(useri%2==0)
    {
        out = `Number ${useri} is even`;
    }
    else
    {
        out=`Number ${useri} is odd`;
    }
    return out;
}

iseven(23);
"Number 23 is odd"

//function asssigned to a variable is called method, this is needed for objects
var add=function(a,b)
{
    return a+b;
}
add(2,3);
5
//arrow
let add1 = (a,b)=>{return a+b};
add1(2,3)
5
