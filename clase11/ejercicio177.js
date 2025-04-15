/*Crear un documento con el nombre ej177.js
Crear una función con el nombre de saludar.
Esta función no acepta ningún parámetro.
Al ejecutar la función debe saludar a todos los nombres que sean pasados.
Llamar a la función saludar con los siguientes 
parámetros "Nicolas", "Natalia", "Javier", "Ana". */

const saludar = function() {
    for (let i = 0; i < arguments.length; i++) {
        const nombre = arguments[i];
        console.log(`¡Hola ${nombre}!`);
    } 
}

saludar("Nicolas", "Natalia", "Javier", "Ana")