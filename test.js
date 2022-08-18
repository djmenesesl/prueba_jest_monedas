const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function () {
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One dollar should be 106.58 japan yen", function () {
    // importo la funcion desde app.js
    const { fromDollartoYen } = require('./app.js')

    // hago mi comparacion (la prueba)
    expect(fromDollartoYen(2)).toBe(213.16); //1 dolar son 106.58 yen, entonces 2 dolares deberian ser = (2 * 106.58)
})

test("One Yen should be 0.0063 british pound", function () {
    // importo la funcion desde app.js
    const { fromYentoPound } = require('./app.js')

    // hago mi comparacion (la prueba)
    expect(fromYentoPound(500)).toBe(3.125); //1 yen son 0.00625 yen, entonces 500 yen deberian ser = (500 * 0.00625)
})