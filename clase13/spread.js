/* const animales = ["leon", "perro", "gato"];
console.log(animales);
console.log(...animales); // devuelve los valores del array */
/* const animales1 = ["leon", "perro", "gato"];
const animales2 = ["gato", "delfin", "elefante"];

const animales = [...animales1, ...animales2];

console.log(animales); // [ 'leon', 'perro', 'gato', 'gato', 'delfin', 'elefante' ] */
/* 
const persona = {
    nombre: "Nicolas",
    apellido: "Isnardi",
};

const datosUsuario = {
    username: "nisnardi",
    password: "1234",
};

const user = {
    ...persona,
    ...datosUsuario,
};

console.log(user);

// {
//   nombre: 'Nicolas',
//   apellido: 'Isnardi',
//   username: 'nisnardi',
//   password: '1234'
  // } */

// ejemplo sobreescribiendo
/* const persona = {
    nombre: "Nicolas",
    apellido: "Isnardi",
};

const datosUsuario = {
    username: "nisnardi",
    password: "1234",
};

const user = {
    ...persona,
    ...datosUsuario,
    nombre: "Simon",
    username: "mono2019",
};
 */
//console.log(user);

// {
//   nombre: 'Simon',
//   apellido: 'Isnardi',
//   username: 'mono2019',
//   password: '1234'
// }

/* // en funciones
function mostrarDatosEnPantalla(valor1, valor2) {
    console.log(`valor1: ${valor1}, valor2: ${valor2}`);
}

const animales = ["perro", "gato"];

mostrarDatosEnPantalla(...animales); // valor1: perro, valor2: gato
 */

const animales1 = ["leon", "perro", "gato"];
const animales2 = ["delfin", "loro", "mono"];

const animales = [...animales1, ...(false ? animales2 : [])];

console.log(animales); //[ 'leon', 'perro', 'gato' ]

const mostrarOtro = false;
const persona = {
    nombre: "Nicolas",
    apellido: "Isnardi",
};

const datosUsuario = {
    username: "nisnardi",
    password: "1234",
};

const user = {
    ...persona,
    ...datosUsuario,
    ...(mostrarOtro ? { nombre: "Simon", username: "mono2019" } : {}),
};

console.log(user);
// {
//   nombre: 'Nicolas',
//   apellido: 'Isnardi',
//   username: 'nisnardi',
//   password: '1234'
// }
