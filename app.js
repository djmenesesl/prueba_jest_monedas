const sum = (a, b) => {
    return a + b
}
console.log(sum(7, 3))

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromEuroToDollar(euro) {
    return euro * oneEuroIs.USD;
}
console.log(fromEuroToDollar(2));

function fromDollartoYen(dollar) {
    let oneDollarisJPY = 1 / oneEuroIs.USD * oneEuroIs.JPY;
    return dollar * oneDollarisJPY.toFixed(2)
}

console.log(fromDollartoYen(2))

function fromYentoPound(yen) {
    let oneYenisGBP = 1 / oneEuroIs.JPY  * oneEuroIs.GBP;
    return yen * oneYenisGBP.toFixed(5)
}

console.log(fromYentoPound(500))
module.exports = { sum, fromEuroToDollar, fromDollartoYen, fromYentoPound }