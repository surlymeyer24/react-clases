/*Crear un documento con el nombre ej131.js
Crear un array con el nombre de 5 alumnas del curso
Crear un array con el nombre de 5 alumnos del curso
Crear un array con el nombre de los alumnos y alumnas del curso
Mostrar en consola los siguiente nombres de forma individual (uno por linea):
Nombres de las alumnas (a mano utilizando índices)
Nombres de los alumnos (utilizando while)
Nombres de todos los alumnos del curso (utilizando for) */

let alumnas = ["Surly", "Rocio", "Paola", "Valentina", "Belen"];
let alumnos = ["Luciano", "Lautaro", "Maximiliano", "Juan", "Genaro"];

console.log(alumnas[0]);
console.log(alumnas[1]);
console.log(alumnas[2]);
console.log(alumnas[3]);
console.log(alumnas[4]);
console.log();

let cont = 0;
while (cont < alumnos.length) {
    console.log(alumnos[cont]);
    cont++;    
}
console.log();

let alumnosCurso = alumnas.concat(alumnos);

for (let i = 0; i < alumnosCurso.length; i++) {
    const alumno = alumnosCurso[i];
    console.log(alumno); 
}
