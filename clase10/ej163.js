/*Crear un documento con el nombre ej163.js
Crear una función con el nombre de saludar que acepte los siguientes parámetros:
Un string con el nombre mensaje
Una función con el nombre despedida
La función saludar debe mostrar el mensaje en pantalla y luego llamar a la 
función pasada por parámetro
Llamar a la función saludar con el valor Bienvenidos a JavaScript */

let despedida = function() {
    console.log("Nos vemos!");
    
};

let saludar = function(mensaje, despedida) {
    console.log(mensaje);
    despedida()
};

saludar("Bienvenidos a JavaScript ", despedida)