/*function receivesAFunction (cb) {
    return cb();
} */

receivesAFunction = cb => cb();

receivesAFunction(function (){
    return 'This is a callback';
})

function returnsANamedFunction () {
    return function name(){
        'Returning a named function'
    }
}

function returnsAnAnonymousFunction () {
    return function (){
        'I am anonymous'
    }
}