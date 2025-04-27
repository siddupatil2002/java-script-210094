//"use strict " //it will update to new js versions
// alert(3+3) //error when executed in node in js but it will execute in window browser;

//datatypes

/*
number
bigint
string
boolean
null-stand alone value
symbol-used for unique
undefined

object
*/
let fname;
age=null
console.log(typeof null)
console.log(typeof undefined)

//type of undefined is undefined
// type of null is object


/*
term
dynamically typed lang
let num1=33
num1="siddu"
console.log(num1);  // output : siddu;

statically typed lang
int num1=44
float num2=900.44;

primitive datatypes
1.number
2.string
3.boolean
4.undefined
5.null
6.symbol
7.bigInt

non primitive datatypes

1.object
eg for numbers***********************************
*/
let num1=33
num1=55
console.log(typeof num1, num1) // output number 55

let num2=9/0
console.log(num2) // output infinty


let num3='siddu'/45
console.log(num3)       // output Nan(not a number)


//2. Strings
let myName='siddu patil'
console.log(myName);      //output siddu patil

//boolean
//true or false


//undefined
let name1;
console.log(name1);

// null
let nam=null
console.log(nam)
console.log(typeof nam)

//symbol for unique

/*let myNaame='siddu'
let myNaamm='siddu'
console.log(myNaame==myNaamm) //output true
*/
let myNaame= Symbol('siddu')
let myNaamm='siddu'
console.log(myNaame==myNaamm) //output false

//bigInt

//let n=1233344
//console.log( typeof n) // output number

let n=1233344n
console.log( typeof n) // output bigint

let n1=BigInt(1233344)
console.log( typeof n) // output bigint

// non priitive 

// object - stores differnt types of datatypes values
// object stores value in form of key and value

//creating objects

let myDetails={
    name:"Siddu Patil",
    branch:"CSE",           // name,branch,usn - key
    usn:"3GN21CS094"        // siddu patil,cse,3gn21cs094 - values
}
console.log(myDetails)




