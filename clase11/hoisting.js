saludar();
console.log(saludarExpresion);
saludarExpresion();

// Hoisted
function saludar() {
    console.log("Hola");
}

// saludarExpresion is not a function
var saludarExpresion = function () {
    console.log("Hola");
};
