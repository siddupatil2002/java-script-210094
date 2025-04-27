/*{
    // scope

    js has two main types of  scopes
    1.global scope-variables declared outside any block or function 
                   they are accessibles throughout the entire  script

    2.local scope- variables declared within function or block 
                   they are only accesible within function or block ;

    3.but js it has  two additionl scopes 
    1.function scope - var keyword;
    2. block scope- let and const keyword;


}*/

/*var a=23
 function globalScope(){
    console.log(a);               // globalscope
 }
 globalScope() //23
 console.log(a)  //23
 */

 //local scope

 /*function localScope(){
    var d=45
    console.log(d)               // local scope executed  only inside in a function or block

}
 localScope()
 */

 /*function localScope(){
    var d=45
                              // error local scope can't be executed outside the function
 }
 localScope()
 console.log(d);
 */

 /*
 function scope-  variables declared with var keyword having function scope,
 meaning they are only accessible within function where they are defined;

 block scope- variables declared with let  and  const keyword having block scope
 they are limited to block (enclosed within curly braces) in which they are defined
 */
 function functionScope(){
    if(true){
        var a =45
        console.log(a);

    }
    console.log(a)
 }
functionScope()


//block scope

function blockScope(){
    if(true){
        let a =45
        const b=80
        console.log(a);
        console.log(b);
        

    }
    //console.log(a)
 }
blockScope()

