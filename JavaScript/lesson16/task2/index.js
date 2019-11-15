'export default
var foo = 1;

function bar() {
    if (!foo) {
        var foo = 10;
    }

    return foo;
}

var foo = bar();
'