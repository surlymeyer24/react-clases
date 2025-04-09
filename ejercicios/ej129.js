/*Crear un documento con el nombre ej129.js
Copiar y pegar el código del ejercicio 125
Recorrer la lista de gustos de helados y mostrarlos en 
consola uno a uno utilizando console.log()
De inicio a fin
De fin a inicio */
let gustos = [];

gustos.push("Chocolate", "Vainilla", "Frutilla", "Limon", "Anana", "Cookie", 
    "Americana","Tramontana", "Pistacho", "Dulce de leche");


for (let i = 0; i < gustos.length; i++) {
    const gusto = gustos[i];
    console.log(gusto);    
}

console.log();

for (let i = gustos.length - 1; i >= 0; i--) {
    const gusto = gustos[i];
    console.log(gusto);    
}


