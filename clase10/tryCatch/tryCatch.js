function funcionQueTiraError() {
    throw new Error("Prueba que podemos tirar un error en JavaScript");
}

try {
    funcionQueTiraError();
} catch (error) {
    console.log(`Mostramos el error: ${error}`);
}

console.log("Linea luego del error");