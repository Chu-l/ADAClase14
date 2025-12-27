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
/*
const calcularTotal = (cantidad, precio) => {
    let descuento = 0;
    if (cantidad >= 0 && cantidad < 5) {
        descuento = 0;
    } else if (cantidad >= 5 && cantidad < 10) {
        descuento = 0.10;
    } else {
        descuento = 0.20;
    }
    let total = cantidad * precio;
    return total - (total * descuento);
};

let cantidad = parseInt(prompt("Ingrese la cantidad de productos: "));
let precio = parseInt(prompt("Ingrese el precio unitario: "));

console.log("Total con descuento: $" + calcularTotal(cantidad, precio));
*/
/*** Ejercicio 5: Verificar origen del auto
Solicita al usuario ingresar la marca de un auto y utiliza una función flecha para verificar y mostrar si el auto es de origen nacional o importado. Considera que solo los autos de marcas "Chevrolet", "Ford" y "Fiat" son de origen nacional.
✔	Solicita al usuario que ingrese la marca de un auto.
✔	Utiliza una función flecha para determinar si la marca ingresada corresponde a un auto de origen nacional o importado.
✔	Muestra un mensaje indicando si el auto es de origen nacional o importado, basado en la marca ingresada por el usuario.
  ***/
/*
const origenAuto = (marcaAuto) => {
    if (marcaAuto === "CHEVROLET" || marcaAuto === "FORD" || marcaAuto === "FIAT") {
        console.log("El auto es de origen nacional");
    } else {
        console.log("El auto es de origen importado");
    }
};

let marca = prompt("Ingrese la marca del auto: ").toUpperCase();

origenAuto(marca);
*/
/*** Ejercicio 6: El deportista
Para este ejercicio deberán definir un objeto literal “deportista”, con los siguientes atributos: nombre, energía, experiencia.
Ademas queremos poder pedirle al deportista que entrene. Para esto, nuestro trabajo va a ser realizar una función “entrenarHoras.”
La función entrenarHoras tiene las siguientes tres características:
✔	Recibe por parámetro la cantidad de horas.
✔	Resta a su energía (this.energia) la cantidad de horas x 5.
✔	Incrementa su experiencia (this.experiencia) la cantidad de horas x 2.
Una vez definida la función, podemos ejecutar el código y ver cómo va variando la energía y experiencia del deportista por consola. ***/
/*
let deportista = {
    nombre: 'Candela',
    energia: 100,
    experiencia: 10,
    entrenarHoras: function(horas) {
        this.energia -= horas * 5;
        this.experiencia += horas * 2;
    }
};

console.log("Energía inicial: " + deportista.energia);
console.log("Experiencia inicial: " + deportista.experiencia);

deportista.entrenarHoras(3);

console.log("***Despues de 3 horas de entrenamiento***")

console.log("Energía final: " + deportista.energia);      
console.log("Experiencia final: " + deportista.experiencia); 
*/
/*** Ejercicio 7: Libros
Define dos objetos libro1 y libro2 con las siguientes propiedades y valores:
✔	título: una cadena con el título del libro.
✔	autor: una cadena con el nombre del autor del libro.
✔	anioPublicacion: un número con el año de publicación del libro.
Luego, crea una función llamada mostrarLibro que tome un arreglo de libros como parámetro y muestre por consola la información de cada libro en el formato especificado. ***/
/*
let libro1 = {
    titulo: 'Ciclo Pendragon',
    autor: 'Stephen R. Lawhead',
    anioPublicacion: 1987
};
let libro2 = {
    titulo: 'Los Pilares de la Tierra',
    autor: 'Ken Follett',
    anioPublicacion: 1989
};

function mostrarLibro(libros) {
    for (let i = 0; i < libros.length; i++) {
        console.log(
            "Título: " + libros[i].titulo + " | Autor: " + libros[i].autor + " | Año de publicación: " + libros[i].anioPublicacion);
    }
};

let biblioteca = [libro1, libro2];
mostrarLibro(biblioteca);
*/
/*** Ejercicio 8: Funcion backEnd()
Creá la función backEnd() que recibirá 2 números como parámetros. La función deberá imprimir por pantalla los números del 1 al 100, pero teniendo en cuenta los siguientes criterios:
✔	Si el número a imprimir es múltiplo del primer parámetro que se ingresó, deberá mostrar el string “Back” en lugar del número.
✔	Si el número a imprimir es múltiplo del segundo parámetro ingresado, deberá mostrar el string “End” en su lugar del número.
✔	Si el número a imprimir es múltiplo de ambos parámetros, deberá mostrar el string “Back End” en lugar del número.***/
/*
function backend(num1, num2) {
    for (i=0; i<=100; i++) {
        if (i % num1 === 0 && i % num2 === 0) {
            console.log("Back End");
        } else if (i % num1 === 0) {
            console.log("Back");
        } else if (i % num2 === 0) {
            console.log("End");
        } else {
            console.log(i);
        }
    }
};
backend(6, 8);
*/
/*** Ejercicio 9: Última aparición de un modelo de auto
En este ejercicio, trabajaremos con una lista de modelos de autos. Implementa una función llamada ultimaAparicionModeloAuto(modelo) que encuentre y muestre la última posición en la lista donde aparece el modelo específico de auto dado por modelo.
Datos Iniciales:
✔	Utiliza un array llamado modelosAutos que contiene varios modelos de autos, algunos repetidos para demostrar la funcionalidad.
Funcionalidad:
✔	Implementa la función ultimaAparicionModeloAuto(modelo), que toma modelo como parámetro (un string).
✔	Debes recorrer el array de manera manual para encontrar la última aparición del modelo.
✔	Si el modelo se encuentra en el array, la función debe imprimir por consola la posición (índice + 1) en la que aparece (considerando que la numeración es de 1 a N).
✔	Si el modelo no está en el array, debe imprimir un mensaje indicando que el modelo no está presente.***/
/*
let modelosAutos = ["Gol", "Chevrolet", "Ford","Fiat", "Dodge", "Falcon", "BMW", "Porsche", "Fiat", "Gol"];

function ultimaAparicionModeloAuto(modelo) {
    let posicion = -1;

    for (let i = 0; i < modelosAutos.length; i++) {
        if (modelosAutos[i] === modelo) {
            posicion = i + 1;
        }
    }

    if (posicion !== -1) {
        console.log("Última aparición en la posición:", posicion);
    } else {
        console.log("El modelo no está presente");
    }
}
ultimaAparicionModeloAuto("Fiat");
*/
/*** Ejercicio 10: Flores Favoritas
Escribe un programa en JavaScript para contar cuántas veces el usuario menciona sus flores favoritas. Realiza las siguientes acciones:
1.	Inicializa un array vacío para almacenar las flores favoritas.
2.	Pregunta al usuario por sus tres flores favoritas utilizando prompt y agrega cada una al array manualmente (sin usar métodos como push).
3.	Pregunta al usuario por una flor específica y verifica si está entre sus favoritas.
4.	Muestra por consola cuántas de las flores favoritas se mencionaron (esto debe hacerse manualmente). ***/

let floresFavoritas = [];
floresFavoritas[0] = prompt("Escriba la primera flor favorita: ").toUpperCase();
floresFavoritas[1] = prompt("Escriba la segunda flor favorita: ").toUpperCase();
floresFavoritas[2] = prompt("Escriba la tercera flor favorita: ").toUpperCase();

let florBuscar = prompt("Ingresa una flor para buscar: ").toUpperCase();
let contador = 0;
function buscarFlor (flor) {
    for (let i=0; i<floresFavoritas.length; i++) {
        if (floresFavoritas[i]===flor) {
            contador ++
        }
    }
};
buscarFlor(florBuscar);
console.log("Total de menciones: " + contador);