// En el archivo utils.js declaramos y exportamos la siguiente función:
    export function acortarPalabra(palabra, cantidadDeCaracteres, simbolo = ".") {
    if (palabra.length > cantidadDeCaracteres) {
    const palabraAcortada = palabra
        .slice(0, cantidadDeCaracteres)
        .concat(simbolo.repeat(3));
    return palabraAcortada;
    }

    return palabra;
    }