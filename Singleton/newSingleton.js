function Universe(){
    if( typeof Universe.instance === 'object' ) {
        // However this instance property is public!!
        return Universe.instance;
    }

    this.start_time = 0;
    this.bang = 'Big';

    Universe.instance = this;

    return this;
}



var uni1 = new Universe();
var uni2 = new Universe();
console.log( uni1 === uni2 );