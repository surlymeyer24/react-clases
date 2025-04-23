function Vehiculo(marca, modelo, cantidadDePuertas, anio, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.cantidadDePuertas = cantidadDePuertas;
    this.anio = anio;
    this.color = color;
    this.toString = function () {
        console.log(`${this.marca} ${this.modelo} ${this.anio}`);
    },
    this.getColor = function () {
        return this.color;
    };
};
const vehiculo = new Vehiculo("Toyota","Rav4", 4, 2024, "Black");
vehiculo.toString();
console.log(vehiculo.getColor());

const vehiculo1 = new Vehiculo("Honda", "Pilot", 4, 2025, "DarkBlue");
vehiculo1.toString();
console.log(vehiculo1.getColor());