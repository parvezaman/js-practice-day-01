var obtainedMarks = parseFloat(prompt("tell me how much did you get?"));

if (obtainedMarks< 33){
    console.log("F");
}
else if (obtainedMarks>=33 && obtainedMarks<= 39.9){
    console.log("D");
}
else if (obtainedMarks>=40 && obtainedMarks<= 49.9){
    console.log("C");
}
else if (obtainedMarks>=50 && obtainedMarks<= 59.9){
    console.log("B");
}
else if (obtainedMarks>=60 && obtainedMarks<= 69.9){
    console.log("A-");
}
else if (obtainedMarks>=70 && obtainedMarks<= 79.9){
    console.log("A");
}
else if (obtainedMarks>=80 && obtainedMarks<= 100){
    console.log("A+");
}
else(
    console.log("did you even fill up the admission form?")
)