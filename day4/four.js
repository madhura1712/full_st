var city ="amsterdam"
undefined
city.toUpperCase();
"AMSTERDAM"

var citi="aMeSterDam"
//index of first character
citi[0]
"a"
citi.length
10
//character at xyz position
citi.charAt(3)
"S"
//extracting each char from a string
var i;
for(i=0;i<citi.length;i++)
{
    console.log(citi.charAt(i));
}
/*
o/p
a
VM2119:4 M
VM2119:4 e
VM2119:4 S
VM2119:4 t
VM2119:4 e
VM2119:4 r
VM2119:4 D
VM2119:4 a
VM2119:4 m
*/

//slicing
city.slice(1)
"msterdam"
city.slice(1,4)
"mst" //doesnt consider the upper limit
city.slice(-1)
"m"
city.slice(1)
"msterdam"
city.slice(1,-1)
"msterda"
city.slice(-1,-2)
"" //why empty??
city.slice(-3,-2)
"d"
//to convert the first letter to caps and all other letters to lowercase
city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()
"Amsterdam"
//city.slice(1).toLowerCase() city.slice(1) removes the first character from the string and prints all other characters


//triming
var citx ="Paris      "
undefined
citx.trim()
"Paris"
citx.trim().length //this statement is called piping 

//replace()
var data ="Iam learning JS"
undefined
data.replace("JS","Javascript");
"Iam learning Javascript"

//if a user searches for JavaScript in the search bar, then it wont give user the desired op, casue S is in upper case in
//our db, so it is always recommended to convert the case of the input to the matching case in our db.
var dx ="Javascript i am learning Javascript";
dx.toLowerCase().replace("javascript","JS");
"JS i am learning javascript"
//replaces changes the first occurence only
//no function as replaceall
dx.toLowerCase().replace(/javascript/g,"JS");
"JS i am learning JS"
//whatever we want to globally replace put it inside two backslashes and add a g. g stands for global.

//Math function
Math.random()
Math.random()
0.5374886642015724
Math.random()*10 //for whole numbers
1.5297671968777382

Math.floor(9.8)
9
Math.ceil(0.1)
1
Math.round(10.6)
11
Math.round(10.5)
11
Math.round(Math.random()*1000)
762

//how to generate a random no in a given range
var max = 20;
undefined
var min =10;
undefined
Math.floor(Math.random()*(max-min))+min
18
Math.PI
3.141592653589793
Math.PI.toFixed(3)
"3.142"