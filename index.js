receivesAFunction= callback=>callback()



function returnsANamedFunction(){
    let x =20;
    function bulk(x) {
        return x/2;
    }
    return bulk;
}


    function returnsAnAnonymousFunction() {
        return function() {
        console.log("anonymous function");
    }
      }