/*Ejercicio 186
Crear un documento con el nombre ej186.js
Crear una función con el nombre crearPromesa que acepte un parámetro 
con el nombre mensaje.
La función crearPromesa retorna una nueva Promise que como parámetro 
toma una arrow function y el primer parámetro se llama onSuccess que 
es la función que se va a ejecutar cuando la promesa sea exitosa en el método 
then.
Crear una nuva variable con el nombre promesa y asignar el resultado de 
ejecutar la función crearPromesa.
Llamar al método then de la variable promesa y pasar como parámetro una 
arrow function que acepte como parámetro un mensaje.
Mostrar en pantalla el mensaje obtenido luego que la promise fué exitosa.*/

const crearPromesa = (mensaje) => {
    return new Promise ((onSuccess) => {
        setTimeout(() => {
            onSuccess(mensaje)
        }, 5000);

    });
};

const promesa = crearPromesa("la promesa se ejecutó con exito")
promesa.then((mensaje) => {
    console.log(mensaje);
    
});