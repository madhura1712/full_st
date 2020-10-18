var a=null;
var b = 10;
console.log(a);
//when we dont assign a value to a and print it in nodejs it says undefined, but when we assign null it prints null, as well as -10.
if(a)
{
    console.log(a+b);
}else
{
    console.log(a-b);

}
//null is equivalent to zero, we can assign it to a variable
//undefined is a return type, no point of assigning to a variable
//DOUBT : op in console is -10, but in node js it is NaN,before assigning null to a,  why?
//after assigning null it is printing -10, as a is defined -10 in node js.