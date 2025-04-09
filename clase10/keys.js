const persona = {
    nombre: "Nico",
    edad: 38,
};
// Object.keys -> muestra todas las propiedades de un objeto
const propiedades = Object.keys(persona);

propiedades.forEach(function (propiedad) {
console.log(persona[propiedad]);
});