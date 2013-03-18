function Factory() {}

Factory.prototype.commonMethod = function () {
    return 'Hello, I\'m ' + this.name;
};

Factory.factory = function (type) {
    var constr = type, newObj;

    if( typeof Factory[constr] !== 'function' ) {
        throw {
            name : 'Error',
            message : constr + ' doesn\'t exist'
        };
    }

    // There are no inheritance yet
    if( typeof Factory[constr].prototype.commonMethod !== 'function' ) {
        Factory[constr].prototype = new Factory();
    }

    newObj = new Factory[constr]();

    return newObj;
};


Factory.Class1 = function () {
    this.name = 'Class1';
};

Factory.Class2 = function () {
    this.name = 'Class2';
};

Factory.Class3 = function () {
    this.name = 'Class3';
};

/* Test
var cls1 = Factory.factory('Class1');
console.log(cls1.commonMethod());

var cls2 = Factory.factory('Class2');
console.log(cls2.commonMethod());

var cls3 = Factory.factory('Class3');
console.log(cls3.commonMethod());
*/
