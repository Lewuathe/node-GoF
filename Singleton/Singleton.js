/*
 *  This is the best of singleton pattern
 */

function Singleton(){
    // Cached instance
    var instance;

    // Convert constructor
    Singleton = function(){
        return instance;
    };

    Singleton.prototype = this;

    // Make instance
    instance = new Singleton();

    // Resetting constructor
    instance.constructor = Singleton;

    // below your properties 
    // instance.prop = 'prop';

    return instance;
}

/* Test
var uni = new Singleton();
var uni2 = new Singleton();

console.log( uni === uni2 );
*/