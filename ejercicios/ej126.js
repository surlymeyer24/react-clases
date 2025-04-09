/*Crear un documento con el nombre ej126.js
Copiar y pegar el código del ejercicio 125
Ahora los gustos de helado se piden en otro orden del que fueron ingresados
El primer elemento tiene que ser el último y el último el primero
Para agregar los gustos utilizar una función que acepte 
2 parámetros, la colección de gustos de helados y el nuevo gusto
Esta función retorna la lista modificada
Mostrar en consola los gustos de helados */
let gustosNuevoOrden = [];

let gustos = [];

gustos.push("Chocolate", "Vainilla", "Frutilla", "Limon", "Anana", "Cookie", 
    "Americana","Tramontana", "Pistacho", "Dulce de leche");

const ordenGustos = function(gustosNuevoOrden, nuevoGusto) {
    gustosNuevoOrden.unshift(nuevoGusto);
}

for (let i = 0; i < gustos.length; i++) {
    ordenGustos(gustosNuevoOrden, gustos[i]);
}
console.log(gustos);
console.log();
console.log(gustosNuevoOrden);



