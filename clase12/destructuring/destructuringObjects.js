// forma tradicional
/* const persona = { nombre: "Marta", edad: 35 };
const nombre = persona.nombre;
const edad = persona.edad;

console.log(nombre); // "Marta"
console.log(edad); // 35 */

// con destructuring
const persona = { nombre: "Marta", edad: 35 };
const { nombre, edad } = persona;

console.log(nombre); // "Marta"
console.log(edad); // 35