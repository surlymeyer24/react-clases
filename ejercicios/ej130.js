/*Crear un documento con el nombre ej130.js

Declarar la siguiente lista de mutantes:

Prof. Charles Francis Xavier
Scott Summers
Dr. Henry Philip "Hank" McCoy
Jean Elaine Grey
Calvin Montgomery Rankin
Kevin Sydney
Lorna Sally Dane
Alexander Summers
Suzanne Chan
James "Logan" Howlett
Ororo Monroe
Ordenar la lista

Revertir el orden de la lista ordenada

Unir los nombres de todos los mutantes utilizando * para separarlos

Mostrar en consola:

Lista original de mutantes
Lista ordenada de mutantes
Lista revertida de mutantes
Nombres de mutantes sepadaros por *
Tener en cuenta que algunos métodos pueden modificar la colección inicial

Para compiar un array se puede usar Array.from(array) */

let mutantes = ["Prof. Charles Francis Xavier",
    "Scott Summers",
    "Dr. Henry Philip 'Hank' McCoy",
    "Jean Elaine Grey",
    "Calvin Montgomery Rankin",
    "Kevin Sydney",
    "Lorna Sally Dane",
    "Alexander Summers",
    "Suzanne Chan",
    "James 'Logan' Howlett",
    "Ororo Monroe"];

console.log(mutantes);
// JOIN -> permite unir los valores de un array en un string. se le puede agregar un string para unir
let mutantesUnidos = mutantes.join(" * ");

// REVERSE -> cambiar orden de una lista de fin a inicio
let mutantesReverse = mutantes.reverse();


console.log();
console.log(mutantesReverse);
console.log();
console.log(mutantesUnidos);




