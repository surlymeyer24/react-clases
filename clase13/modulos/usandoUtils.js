// En usandoutils.js importamos la función del módulo utils de la siguiente manera:
import { acortarPalabra } from "./utils.js";

const nombre = "Nicolas";
const palabraAcortada = acortarPalabra(nombre, 4);
const palabraAcortada2 = acortarPalabra("AGUANTE JAVASCRIPT!!!!", 18);

console.log(palabraAcortada);
console.log(palabraAcortada2);