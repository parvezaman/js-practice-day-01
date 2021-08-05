var userWant = parseInt(prompt("what type of interest do you want to calculate? 1: simple interest; 2: compound interest"));


// function simpleInterest(p,r,t){
//     var p = parseFloat(prompt("what was your principal?"));
//     var r = parseFloat(prompt("tell me the interest in %"));
//     var p = parseFloat(prompt("what the time period?"));
//     var resultSimpleInterest = p*(r/100)*t;
//     console.log("only simple interst is", resultSimpleInterest);
//     console.log("simple interst with principle", p + resultSimpleInterest);
    
// }

// function compoundInterest(principal, rate, numberOfMultiplication,time){
//     var principal =parseFloat(prompt("tell me the principal amount"));
//     var rate = parseFloat(prompt("interest rate in % ?"));
//     var numberOfMultiplication = parseFloat(prompt("number of times interest is compounded per unit"));
//     var time = parseFloat(prompt("how many year?"));

//     var resultCompoundInterest = principal*(1+(rate/100)/numberOfMultiplication)^(numberOfMultiplication*time);

//     console.log("only compund interst is", resultCompoundInterest);
//     console.log("Compund interst with principle", principal + resultCompoundInterest);
// }

// switch (userWant) {
//     case 1: 
//         simpleInterest(p,r,t);
//         break;

//     case 2:
//         compoundInterest(principal, rate, numberOfMultiplication,time);
//         break;  
    
// }



if (userWant == 1) {
    var p = parseFloat(prompt("what was your principal?"));
    var r = parseFloat(prompt("tell me the interest in %"));
    var t = parseFloat(prompt("what the time period?"));
    var resultSimpleInterest = p*(r/100)*t;
    console.log("only simple interst is", resultSimpleInterest);
    console.log("simple interst with principle", p + resultSimpleInterest);
} else if(userWant == 2) {
    var principal =parseFloat(prompt("tell me the principal amount"));
    var rate = parseFloat(prompt("interest rate in % ?"));
    var numberOfMultiplication = parseFloat(prompt("number of times interest is compounded per year"));
    var time = parseFloat(prompt("how many year?"));

    var resultCompoundInterest = principal*(1+((rate/100)/numberOfMultiplication))**(numberOfMultiplication*time);
    
    console.log("only compund interst is", resultCompoundInterest - principal);
    console.log("Compund interst with principle", resultCompoundInterest);
} else{
    console.log("wrong input");
}