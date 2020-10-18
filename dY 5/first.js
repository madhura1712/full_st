//either this or that will happen - if /else
var a =10;

if(a%2==0)
{
    console.log("even");
}else
{
    console.log("odd");
}
//VM270:3 even
var a =11;
undefined
if(a%2==0)
{
    console.log("even");
}else
{
    console.log("odd");
}
//VM325:6 odd
undefined
//more than one condition
if(a%2==0)
{
    console.log("even");
}else if(a%3==0)
{
    console.log("divisible by 3");
}else
{
    console.log("odd");
}
//it exits the loop after a condition is satisfied
//VM498:3 even
undefined

var a = true
if(a){
    console.log("first");
}else{
    console.log("second");
}
//it will check if a is there or not
//VM568:3 first
//undefined

var a = false
if(a){
    console.log("first");
}else{
    console.log("second");
}
//VM582:5 second
var a = -1;
if(a){
    console.log("first");
}else{
    console.log("second");
}
//VM600:3 first

var a = 0;
if(a){
    console.log("first");
}else{
    console.log("second");
}

//VM612:5 
//Javascript has divided the data into two sections, one is truthy value, one is falsey value
//false value is 0, false,null,undefined.
//truthy value is everything other than the things mentioned above

var a;
if(a){
    console.log("first");
}else{
    console.log("second");
}

//VM626:5 second

//difference between null and undefined
var a = null
undefined
typeof(a)
"object"
var b = undefined
undefined
typeof(b)
"undefined"

var a;
var b = 10;
if(a)
{
    console.log(a+b);
}else
{
    console.log(a-b);

}
//this will print a-b because here a is a falsy value.
//op -10
//ternary operator
condition ? true:false;
var a =10;
a>10?"hi":"bie";
"bie"
var a =10;
a==10?"hi":"bie";
"hi"
var a =10;
a==10?a-1:a+1;
9

//Date time
Date()
"Thu Aug 13 2020 18:46:48 GMT+0530 (India Standard Time)"
var myd = new Date();
undefined
myd.getDate();
13
myd.getMonth();
7
myd.getFullYear();
2020
myd.getDay();
4 //day is given in number //not feasible for us
//two way of getting the string value
//if else/switch

var name ="John";
switch(name) //name is the value to be compared
{
    case 'AAkash': //like if the name is aakash
        console.log("user");
        break;
    case 'Parrot':
        console.log("Hi");
        break;
    case 'John':
        console.log("Correct");
        break;
    default:
        console.log("idk");

}
//op : Correct
//break it comes out of switch when a condition matches
var a =10;
switch(a%2)
{
    case 0:
        console.log("Even");
        break;
    default:
        console.log("odd");
}
var dy = new Date();
var day = dy.getDay();
 switch(day)
 {
     case 1:
         console.log("mon");
         break;
    case 2:
        console.log("tue");
        break;
    case 3:
        console.log("wed");
        break;
    case 4:
        console.log("thrus");
        break;
    case 5:
        console.log("fri");
        break;
    case 6:
        console.log("sat");
        break;
    case 7:
        console.log("sun");
        break;
    default:
        console.log("wrong input");
 }