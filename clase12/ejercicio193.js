/*Crear un documento con el nombre ej193.js
Crear la colección dias con los siguientes valores Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo.
Usando destructuring definir las variables lunes, miercoles y viernes y asignarle los valores que le corresponde a la colección dias.
Utizar console.log en las variables lunes, miercoles y viernes.*/
const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

const [lunes, , miercoles, , viernes] = dias;

console.log(lunes);
console.log(miercoles);
console.log(viernes);

