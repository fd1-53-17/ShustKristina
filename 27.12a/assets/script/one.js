var a = 5;
var b = 44;

function min(a, b) {
    console.log(arguments);
    if (a <= b) { return a; }
    else { return b; }
}
console.log(min(a, b));


function max(a, b) {
    if (a >= b) { return a; }
    else { return b; }
}
console.log(max(a, b));
