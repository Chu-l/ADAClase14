const prompt = require("prompt-sync")();

/*** Ejercicio 1: Calcular el precio final con IVA
Solicita al usuario el precio de un producto y el porcentaje de IVA. Usa una función flecha para calcular el precio final.
***/
/*
let precio = Number(prompt("Ingrese el precio del producto: "));
let iva = Number(prompt("Ingrese el porcentaje de IVA: "));

const precioFinalConIVA = (precio, iva) => precio + (precio * iva / 100);

console.log("El precio final con IVA es:", precioFinalConIVA(precio, iva));
*/
/*** Ejercicio 2: Calcular promedio de calificaciones. Solicita al usuario cinco calificaciones y usa una función flecha para calcular el promedio.***/
/*
let nota1 = Number(prompt("Ingresá la primera calificación: "));
let nota2 = Number(prompt("Ingresá la segunda calificación: "));
let nota3 = Number(prompt("Ingresá la tercera calificación: "));
let nota4 = Number(prompt("Ingresá la cuarta calificación: "));
let nota5 = Number(prompt("Ingresá la quinta calificación: "));

const calcularPromedio = (n1, n2, n3, n4, n5) => (n1 + n2 + n3 + n4 + n5) / 5;

let promedio = calcularPromedio(nota1, nota2, nota3, nota4, nota5);

console.log("El promedio es:", promedio);
*/
/*** Ejercicio 3: Clasificación de edades
Solicita al usuario una edad y usa una función flecha para clasificarla en niño, adolescente, adulto o adulto mayor.***/
/*
const clasificarEdad = (edad) => {
    if (edad >= 0 && edad <= 12) {
        return "Niño";
    } else if (edad >= 13 && edad <= 17) {
        return "Adolescente";
    } else if (edad >= 18 && edad <= 64) {
        return "Adulto";
    } else if (edad >= 65) {
        return "Adulto mayor";
    } else {
        return "Edad inválida";
    }
};

let edadUsuario = parseInt(prompt("Ingrese una edad: "));
console.log(clasificarEdad(edadUsuario));
*/
/*** Ejercicio 4: Calcular descuento por cantidad
Solicita al usuario la cantidad de productos comprados y el precio unitario. Usa una función flecha para calcular el total con descuento según la cantidad. ***/

const calcularTotal = (cantidad, precio) => {
    let descuento = 0;
    if (cantidad >= 0 && cantidad < 5) {
        ;
    } else if (cantidad >= 5 && cantidad < 10) {
        ;
    } else {
        ;
    }
};

let cantidad = parseInt(prompt("Ingrese la cantidad de productos: "));
let precio = parseInt(prompt("Ingrese el precio unitario: "));

console.log("Total con descuento: $" + calcularTotal(cantidad, precio));