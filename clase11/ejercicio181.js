/* Crear un documento con el nombre ej181.js
Crear una función con el nombre crearMultiplicador que acepta un 
parámetro factor y retorna una función.
La función retornada tiene un parámetro con el nombre input y 
retorna el resultado de multiplicar input y factor.
Crear una variable con el nombre doble y asignarle el valor 
retornado por la función crearMultiplicador pasando 2 como parámetro.
Ejecutar la función doble pasando como parámetro el número 10.
Mostrar en pantalla el resultado de multiplicar 2 * 10 
utilizando las funciones creadas.
Repetir este proceso para un función con el nombre 
triple a la cual se le asigne el valor retornado al 
ejecutar la función crearMultiplicador pasando como 
parámetro el número 3.
Mostrar el resultado en pantalla de ejecutar la 
función triple pasando el parámetro 4 y el resultado debe ser 12. */

const crearMultiplicador = function(factor) {
    return function(input) {
        return input * factor;
    };
};

let doble = crearMultiplicador(2);
console.log(doble(10));

let triple = crearMultiplicador(3)(10);
console.log(number);
