// 1 mile = 1.60934 km

for (var i = 0; i<=5; i++ ){
    var userWant = parseInt(prompt("1: mile to km; 2: km to mile; 3: to exit the loop"));

    if (userWant==1){
        var inputMile = parseFloat(prompt("input mile"));
        var resultKm = console.log(inputMile," mile =",inputMile * 1.60934, "KM");
    }
    else if (userWant == 2){
        var inputKm = parseFloat(prompt("input Km"));
        var resultMile = console.log(inputKm, "Km =", inputKm / 1.60934, "mile");
    }
    else if(userWant == 3){
        break;
    }
    else{
        console.log("you entered wrong integer");
    }
}