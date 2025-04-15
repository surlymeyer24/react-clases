function mostrarIntegrantesDeClase(
    profesor,
    alumnos,
    ...restoDeLosIntegrantes //... -> spread
) {
console.log("Profesor: ", profesor); // Nicolas
console.log("Alumnos", alumnos); // [ 'Juan', 'María' ]
console.log(
"Resto de los que hacen posible un curso:",
restoDeLosIntegrantes
); // [ 'Soledad', 'Pablo' ]
}

mostrarIntegrantesDeClase("Nicolas", ["Juan", "María"], "Soledad", "Pablo");