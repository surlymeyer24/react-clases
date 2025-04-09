/*Ejercicio 165
Crear un documento con el nombre ej165.js
Crear una colección de números del 1 al 10
Crear una función con el nombre map que acepte dos parámetros:
Una colección
Una función como parámetro
Llamar a la función map pasando la colección numeros y 
una función que multiplique por 2 los valores de la coleccion.
La idea es crear nuestro propio map sin utilizar el método del Array.
Mostrar la nueva colección en pantalla */

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let map = function (coleccion, funcion) {
    nuevaColeccion = [];
    coleccion.forEach(coleecion => {
        nuevaColeccion.push(funcion(coleccion))
    });
}

let funcionMultiplicar = numero => {
    let resultado = numero * 2;
    return resultado;
}

let nuevaColeccion = map(numeros, funcionMultiplicar)

console.log(numeros);
console.log(nuevaColeccion);


