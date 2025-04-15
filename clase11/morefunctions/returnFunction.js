function obtenerFuncionSumar() {
    const suma = function (numero1, numero2) {
        console.log(
        `Resultado de sumar ${numero1} + ${numero2} es ${numero1 + numero2}`
        );
    };

    return suma;
}
// const mostrarSuma = obtenerFuncionSumar();
// mostrarSuma(10, 20);

// Otra forma de ejecturar una funcion dentro de otra
obtenerFuncionSumar()(10, 20);