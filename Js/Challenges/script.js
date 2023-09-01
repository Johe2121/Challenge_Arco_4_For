const chapterOne = document.getElementById("firstChapter");
const chapterTow = document.getElementById("secondChapter");
const chapterThree = document.getElementById("chapter3");
const chapterFor = document.getElementById("chapter4");
const chapterFive = document.getElementById("chapter5");
const chapterSix = document.getElementById("chapter6");
const chapterSeven = document.getElementById("chapter7");
const chapterEight = document.getElementById("chapter8");
/**
 * Aviso
 *
 */
let razonAviso = "Si ve que el titulo de los ejercicios es raro \n Es porque el aprendíz se creia escritor \n No dejaré que lo haga la proxima vez";
setTimeout(() => {
    alert("Palabras del Aprendiz de Bases: \n" + razonAviso);
}, 4000);
/**
 * Challenge 1
 * Imprimir en un alert o un log
 * los elementos de un array
 * con un for normal
 */
function capítuloUno() {
    const postres = ["Pastel de Chocolate", "Flan", "Tres Leches", "Quesillo", "Gelatina"]
    for (let i = 0; i < postres.length; i++) {
        console.log(postres[i]);
        alert(postres[i]);
    }
}
/**
 * Challenge 2
 * Imprimir en un alert o un log
 * los elementos de un array
 * con un for-each
 */
function capítuloDos() {
    const postres = ["Pastel de Chocolate", "Flan", "Tres Leches", "Quesillo", "Gelatina"]
    postres.forEach((t) => {
        console.log(t);
        alert(t);
    });
}
/**
 * Challenge 3
 * Hacer un menú que se repita 
 * hasta ingresar la opción correcta
 * reutilizar parte del código
 * del ejercicio 2 del nivel 3
 */
function capítuloTres() {
    let operation = parseInt(prompt("OPERACIONES MATEMATICAS BÁSICAS: \n Ingresa 1 para sumar. \n Ingresa 2 para restar. \n Ingresa 3 para multiplicar. \n Ingresa 4 para Dividir."));
    while (isNaN(operation) || operation > 4 || operation < 1 || operation === null) {
        alert("Porfavor Ingrese una Opción Valida");
        operation = parseInt(prompt("OPERACIONES MATEMATICAS BÁSICAS: \n Ingresa 1 para sumar. \n Ingresa 2 para restar. \n Ingresa 3 para multiplicar. \n Ingresa 4 para Dividir."));
    }
    let num1 = parseFloat(prompt("Ingrese numero 1"));
    let num2 = parseFloat(prompt("Ingrese numero 2"));
    let result = 0;
    while (isNaN(num1) || isNaN(num2)) {
        alert("Favor ingresar solo numeros");
        num1 = parseFloat(prompt("Ingrese numero 1"));
        num2 = parseFloat(prompt("Ingrese numero 2"));
    }
    switch (operation) {
        case 1:
            result = num1 + num2;
            alert("El resultado de la suma es: " + result);
            break;
        case 2:
            result = num1 - num2;
            alert(result);
            break;
        case 3:
            result = num1 * num2;
            alert("El resultado de la multiplicación es: " + result);
            break;
        case 4:
            if (num2 === 0) {
                alert("No es posible dividir por cero");
            } else {
                result = num1 / num2;
                alert("El resultado de la división es: " + result);
            }
            break;
    }
}
/**
 * Challenge 4
 * Encontrar el número mayor
 * Utilizando un for normal
 * y mostrarlo en un Alert o un log
 */
function capítuloCuatro() {
    let listNumber = [10, 12, 18, 24, 30, 22, 29, 50];
    let bigNumber = listNumber[0];
    for (let i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > bigNumber) {
            bigNumber = listNumber[i]
        }
    }
    alert("El número mayor es: " + bigNumber);
    console.log("El número mayor es: ", bigNumber);
}
/**
 * Challenge 5
 * Sumar los elementos del array
 * Con un for-each
 * y mostrarlos con un alert o un log
 */
function capítuloCinco() {
    let numeros = [2, 6, 7, 8, 12, 18, 21, 24];
    let total = 0
    numeros.forEach(e => {
        total += e
        console.log(total);
        alert(total);
    });
}
/**
 * Challenge 6
 * Multiplicar los elementos del array
 * con un for normal
 * y mostrar los resultados con un 
 * nuevo array
 */
function capítuloSeis() {
    let numeros2 = [2, 6, 7, 8, 12, 18, 21, 24];
    let total = []
    for (let i = 0; i < numeros2.length; i++) {
        let resultado = numeros2[i] * 2;
        total.push(resultado);
        console.log(total)
    }
}
/**
 * Challenge 7
 * Crea un programa que encuentre la suma de los elementos pares (los impares no los suma) en un array usando forEach. Array de ejemplo: [1, 4, 7, 3, 10, 12] -- recuerden que para saber como e sun numero inpar pueden usar (numero % 2 === 0)
 */
function capítuloSiete() {
    const array = [1, 4, 7, 3, 10, 12];
    let suma = 0;
    array.forEach((numero) => {
        if (numero % 2 === 0) {
            suma += numero;
        }
    });
    console.log("La suma de los elementos pares es:", suma);
}
/**
 * Challenge 8
 * Encontar el número mayor que 50
 * en un array 
 * con while
 */
function capítuloOcho() {
    let numeros = [30, 45, 60, 72, 48, 10];
    let indice = 0;
    while (indice < numeros.length && numeros[indice] <= 50) {
        indice++;
    }
    if (indice < numeros.length) {
        console.log("El primer número mayor que 50 es:", numeros[indice]);
    } else {
        console.log("No se encontró ningún número mayor que 50 en el array.");
    }
}
chapterOne.onclick = function() {
    capítuloUno();
}
chapterTow.onclick = function() {
    capítuloDos();
}
chapterThree.onclick = function() {
    capítuloTres();
}
chapterFor.onclick = function() {
    capítuloCuatro();
}
chapterFive.onclick = function() {
    capítuloCinco();
}
chapterSix.onclick = function() {
    capítuloSeis();
}
chapterSeven.onclick = function() {
    capítuloSiete();
}
chapterEight.onclick = function() {
    capítuloOcho();
}