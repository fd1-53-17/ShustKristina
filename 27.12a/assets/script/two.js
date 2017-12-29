function SelfCount() {
    var counter = 0;


    function countIncrement() {
        counter++;
        console.log(counter);
    }
    return countIncrement;
}
var myFun = SelfCount();
myFun();
myFun();
myFun();
myFun();

var myFun2 = SelfCount();
myFun2();
myFun2();

myFun();
myFun();