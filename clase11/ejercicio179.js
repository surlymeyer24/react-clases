/*Crear un documento con el nombre ej17.js
Crear una función con el nombre calcularPromedio que 
acepte un sólo parámetro numeros.
No se puede utilizar arguments y se tiene que usar el concepto de rest.
La función calcularPromedio calcula el promedio 
entre todos los números pasados como parámetros.
Calcular y mostrar los promedios de los siguientes números: */

const calcularPromedio = function(...numeros) {
    if (numeros.length === 0) {
        return 0;
    } else {
        let suma = numeros.reduce((contador, numero) => 
            contador + numero, 0);

        return suma / numeros.length;
    }
}
console.log(calcularPromedio(10, 20, 30));