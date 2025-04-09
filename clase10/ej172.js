/*Crear un documento con el nombre ej172.js
Completa el código para que al llamar a la función crearMultiplicador retorne 15.
Muestra en pantalla el resultado de ejecutar la función crearMultiplicador.
function crearMultiplicador(numero1) {
return function (numero2) {
// Completar esta función
};
}
TIP: es una función que retoran otra función ;) */

function crearMultiplicador(numero1) {
    return function (numero2) {
        return numero1 * numero2;
    };
}

const resultado = crearMultiplicador(3)(5);
console.log(resultado);
