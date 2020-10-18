//scripting language
//internal following of oops concepts
//datatypes: 
//string :double quotes or single quotes, "" ' cant do this
//number : 545,245.2243,3354
//boolean : true/false
// Es6 latest, BASE or STANDARD of JavaScript, just like for english requires grammar
//we using es6, cause react and angular are based in es6
//tyoescript is superscript of javascript
 
/*declaring a variable:
we use var.
var marks = 99;
var pass = true;
var is the keyword, marks and paas variable name. 99 and true is value.

inbuilt method to detect the type: typeof(marks)

*/


var name="John";
//undefined
typeof(name);
//"string"


var a =10;
 var b =20;
 a+b;
 a-b;
 a*b;
 a/b;
 a%b;
 20%30 
 //op20
 2%3
 //op2
 3%2
 //op1
 4%2
 //op0


 //concatenation
 var a ="hi"
 var b ="javascript"
 a+b
 // op: "hijavascript"
 a-b
 //NaN
 a*b
 //NaN
 a/b
// NaN
 a%b
// NaN
//string+string = string
//string+sno=string
//no+string = string
//no + no = no

10+'10'+10
//o/p 101010
10+10+'10'
// op : 2010
'10'+10+10
// op : 101010

10+'10'+10-1
//op: 101009
//reason
10+10+'10'-1
// op: 2009
'10'+10+10-1
//101009
'a'-'1'
//NaN
'10'-'a'
//NaN
//Pure numeric strings operations:
//but whats the reason?? How numeric operations are performed on strings??
'10'+'1'
//op:101
'10'-'4'
//op: 6
//when there are numbers in the form of string then this works both sides
'hi'-'javascript'
NaN
'10'*'4'
//40
'10'/'4'
//2.5

//BOOLEAN
true=1;
false=0;

var a = true;
undefined
var b = false;
undefined
a+b;
1
a-b;
1
a*b;
0
a/b;
Infinity
a%b;
NaN
a+a;
2
a+8;
9
a-5;
-4
a+"hi"
"truehi" //concat

//the next whole part, doubt
//how does true and 5 give an op?
var a =true;
undefined
var b = 5;
undefined
a-b;
-4
var c = "hi"
undefined
a-c
NaN
a-b-c
NaN
