// formula: (°C × 9/5) + 32 = °F
// (°F − 32) × 5/9 = °C

function celToFah(n){
    let resultFah = (n * 9/5) +32;
    return resultFah;
}

console.log(celToFah(1));

function fahToCel (n){
    let resultCel = (n - 32) * (5/9);
    return resultCel;
}

console.log(fahToCel(1));