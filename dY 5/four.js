// let, var, const, 3 different ways to define a variable
var a =10;
//javascript divides this statement into two parts
/* 
var a; - declaration
a =10 - assignment */
//we can redeclare and reassign values using var keyword
var a =11
a
//op 11
//this can be a problem as a change of valye is not always desirable 
//in es6, we use let and const



let b =10;
undefined
 b
10
 let b =11;
//Uncaught SyntaxError: Identifier 'b' has already been declared
b=6
6
//cannot redeclare, can reassign
const c =11
//undefined
 const c =15
//Uncaught SyntaxError: Identifier 'c' has already been declared
//cannot redclare and cannot reassign
