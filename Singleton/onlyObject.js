/*
 *  JavaScript has no class. So there is no clear 
 *  difinition of singleton. 
 */
 
var obj = {
    myprop : 'my value'
};

var obj2 = {
    myprop : 'my value'
};

console.log(obj === obj2 );
console.log( obj == obj2 );