/* const saludar = function () {
    console.log("hola");
};

setTimeout(saludar, 5000); */

const saludar = function () {
    console.log("hola");
};

const id = setInterval(saludar1, 1000);

// se corta la ejecución
const cortar = setTimeout(function() {
    clearInterval(id)}, 5000);
