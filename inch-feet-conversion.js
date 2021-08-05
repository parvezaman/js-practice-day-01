function feetCal(n){
    let feet = n/12;
    return feet;
}
var n = 60;
let resultFeet = console.log("converted feet from", n, "inch is",feetCal(60), "feet");

function inchCal(n) {
    let inch = n * 12;
    return inch; 
}
var n = 5;
let resultInch = console.log("converted inch from ", n, "feet is",inchCal(5), "inch");