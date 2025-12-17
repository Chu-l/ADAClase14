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

let nota1 = Number(prompt("Ingresá la primera calificación: "));
let nota2 = Number(prompt("Ingresá la segunda calificación: "));
let nota3 = Number(prompt("Ingresá la tercera calificación: "));
let nota4 = Number(prompt("Ingresá la cuarta calificación: "));
let nota5 = Number(prompt("Ingresá la quinta calificación: "));

const calcularPromedio = (n1, n2, n3, n4, n5) => (n1 + n2 + n3 + n4 + n5) / 5;

let promedio = calcularPromedio(nota1, nota2, nota3, nota4, nota5);

console.log("El promedio es:", promedio);

