"use strict";
function print(val) {
    console.log(val);
}
print('message erro');
function printOrNot(flag) {
    if (flag === void 0) { flag = false; }
    var str = flag ? "flag is true" : "flag is false";
    console.log(str);
}
printOrNot();
//função anonima
var sunAnonymous = function (n1, n2) {
    console.log("sum: " + (n1 + n2));
};
sunAnonymous(1, 2);
sumNotAnonymous(5, 3);
function sumNotAnonymous(n1, n2) {
    console.log("sum: " + (n1 + n2));
}
sumNotAnonymous(5, 3);
//areo function
var sumArrow1 = function (n1, n2) { return n1 + n2; };
var sumArrow2 = function (n1, n2) { return n1 + n2; };
console.log(sumArrow2(1, 2));
console.log(sumArrow1(2, 5));
