// Codigo bloqueante
/* function usandoCallbacks(callback) {
    console.log("Antes del for");
    for (let index = 0; index <= 10000000000; index++) {}
    callback();
}

usandoCallbacks(() => {
    console.log("Fin del for");
});
console.log("El código sigue funcionando"); */

/* // Codigo no bloqueante
function usandoCallbacks(callback) {
    console.log("Antes del for");
    for (let index = 0; index <= 10000000000; index++) {}
    callback();
}

usandoCallbacks(() => {
    console.log("Fin del for");
});

console.log("El código sigue funcionando"); */

const promesa = new Promise((resolve) => {
    resolve("Se resolvió con éxito la promesa");
});

    promesa.then((mensaje) => {
    console.log(mensaje);
    console.log(promesa);
});

  // Se resolvió con éxito la promesa
  // Promise { 'Se resolvió con éxito la promesa' }