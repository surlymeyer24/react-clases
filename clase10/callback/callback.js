// Se conoce como callback cuando pasamos una función como parámetro a otra función
/*function hacerAlgo(funcionComoParametro) {
    console.log("hacer algo");
    funcionComoParametro();
}

let termino = function () {
console.log("termino");
};

hacerAlgo(termino);*/

/* let termino = function () {
    console.log("termino");
};

function hacerAlgo() {
    console.log("hacer algo");
    termino();
}

hacerAlgo(); */
/* let numero = 0;

function sumar(n, callback) {
    n++;
    callback(n);
}

sumar(numero, function (resultado) {
    console.log(resultado); // 1
});

console.log(numero); // 0 */

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Callback
numeros.forEach(function (numero) {
    console.log(numero);
});

// Callback
let numerosPares = numeros.filter(function (numero) {
    return numero % 2 === 0;
});

// Callback
let resultado = numeros.reduce(function (resultado, numero) {
    return resultado + numero;
});

// Callback
let numerosModificados = numeros.map(function (numero) {
    return numero + 10;
});
