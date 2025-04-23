/* const persona = {
    nombre: "Nicolas",
    saludar: function () {
    console.log(this);
    console.log(this.nombre);
    },
};

persona.saludar(); */

/* function saludar() {
    console.log(this); // global de node
}

saludar(); */

/* "use strict";

function saludar() {
console.log(this); // undefined
}

saludar(); */

// call
function calcularPromedio(nota1, nota2) {
    const promedio = (nota1 + nota2) / 2;
    console.log(`El promedio de ${this.nombre} es ${promedio}`);
}

const alumno = {
    nombre: "Martín",
};

calcularPromedio.call(alumno, 10, 6);