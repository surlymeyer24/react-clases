/*Crear un documento con el nombre ej128.js
Copiar y pegar el código del último ejercicio 127
Eliminar los 2 últimos gustos de la lista de helados
Asignar los gustos eliminados en el array de gustos que no tienen stock
Mostrar la lista de gustos que quedó
Mostrar la lista de gustos sin stock */

let gustosNuevoOrden = [], 
    gustos = [],
    gustosSinStock = [];

// PUSH -> agregar elementos al final
gustos.push("Chocolate", "Vainilla", "Frutilla", "Limon", "Anana", "Cookie", 
    "Americana","Tramontana", "Pistacho", "Dulce de leche");

// UNSHIFT -> agregar elementos al inicio
const ordenGustos = function(gustosNuevoOrden, nuevoGusto) {
    gustosNuevoOrden.unshift(nuevoGusto);
}

for (let i = 0; i < gustos.length; i++) {
    ordenGustos(gustosNuevoOrden, gustos[i]);
}
// POP -> eliminar primer elemento y recuperarlo en una variable
gustosSinStock.push(gustosNuevoOrden.pop())
gustosSinStock.push(gustosNuevoOrden.pop())

// SHIFT -> eliminar ultimo elemento y recuperarlo en una variable
gustosSinStock.push(gustosNuevoOrden.shift())
gustosSinStock.push(gustosNuevoOrden.shift())



console.log(gustos);
console.log();
console.log(gustosNuevoOrden);
console.log();
console.log(gustosSinStock);



