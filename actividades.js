const prompt = require("prompt-sync")();

/*** Ejercicio 1: Calcular el precio final con IVA
Solicita al usuario el precio de un producto y el porcentaje de IVA. Usa una función flecha para calcular el precio final.
***/

let precio = Number(prompt("Ingrese el precio del producto: "));
let iva = Number(prompt("Ingrese el porcentaje de IVA: "));

const precioFinalConIVA = (precio, iva) => precio + (precio * iva / 100);

console.log("El precio final con IVA es:", precioFinalConIVA(precio, iva));
