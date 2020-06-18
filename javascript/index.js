//jshint  esversion: 6


// Generar numeros aleatorios  inseguros
let randomNumber = Math.ceil(Math.random() * 99999);

console.log('Math.random', randomNumber);


/// generar numeros aleatorios seguros
var array = new Uint32Array(2);
window.crypto.getRandomValues(array);
let total ='';
console.log("crypto.getRandomValues");
for (var i = 0; i < array.length; i++) {
    total += array[i].toString();
    if (i == array.length - 1) {
        console.log(total);
        total = '';
    }
}

/**    Nueva  FECHA puede ser en el pasado o futuro tipo int
 * se pasan hasta 7 parametros (puedes omitir milisegundos segundos minutos y horas)
 * Año: completo
 * Mes: 0 al 11 (por alguna razón empieza en 0 Enero y termina en 11 Diciembre)
 * Día: 1 al 31
 * Horas: 0 a 23 /// 0 = las 12:00am 
 * Minutos: 0 - 59
 * Segundos: 0 - 59
 * Milisegundos: 0 - 999
 * */
// Ejemplo:
new Date(2020, 2, 31, 16, 10, 19, 999);
// Regresa: Tue Mar 31 2020 16:10:19 GMT-0600 (hora estándar central)
// Ejemplo 2:
new Date(2020, 2, 30, 13, 19);
// Regresa: Mon Mar 30 2020 13:19:00 GMT-0600 (hora estándar central)


/**    Nueva  FECHA puede ser en el pasado o futuro tipo string
 * Se pasan hasta 8 parametros (puedes omitir segundos minutos horas y zona horaria)
 * Año: completo
 * Mes: 01 al 12 
 * Día: 01 al 31
 * separador de fehca y hora con una T
 * Horas: 00 a 23 /// 00 = las 12:00am
 * Minutos: 00 - 59
 * Segundos: 00 - 59
 * Zona UTC: -06:00 para México
 * */
// Ejemplo:
new Date("2020-03-31T16:10:19-06:00");
// Regresa: Tue Mar 31 2020 16:10:19 GMT-0600 (hora estándar central)

// Date Parse the ayuda a convertir una fecha en miliseconds desde el unix epoc
//Ejemplo:
Date.parse("2020-03-31T16:10:19-06:00");
// Regresa: 1585692619000
//si pasas los milisegundos como parametro en un new Date te regesa la misma fecha
// Ejemplo: 
new Date(1585692619000);
// Regresa: Tue Mar 31 2020 16:10:19 GMT-0600 (hora estándar central)

//////////////////////////////////////////////////////		CONSOLE.DIR		///////////////////////////////////////////////////////////////
// Despliega una lista interactiva de las propiedades del objeto JavaScript especificado. 
// El resultado es presentado como un listado jerárquico con triángulos de despliegue
//  que te dejan ver los contenidos de los objetos hijos.
//Ejemplo:
//console.dir(window);
//console.dir(document);
// let element = document.getElementByID('cualquier_elemento');
//console.dir(element);

console.log('asdasdas');


/*******************************
 * IIFE's INMEDIATE INVOKED FUNCTION EXPRESSIONs ! 
 *******************************/

 // Las function expression se ven así 
var msg = "Hello, World!";
var sayHi = function () {
    console.log(msg);
};
// basicamente son una variabel con una funcion anonima como valor
sayHi(); // shows "Hello, World!" as alert in browser.
// de ese modo puedes llamar a la funcion por medio de la variable agregando parentesis ();



!function () {
    console.log("! Hello from IIFE");
}();
// Shows the alert "Hello from IIFE!"

-function () {
    console.log("- Hello from IIFE");
}();

+function () {
    console.log("+ Hello from IIFE");
}();

~function () {
    console.log("~ Hello from IIFE");
}();

void function () {
    console.log("Void Hello from IIFE");
}();


/*************************
 * Remember this!
 * You need a function expression to form an IIFE.
 * Function statements/definitions are never used for creating IIFEs.
 *************************/
(function () {
    console.log("( Hello from IIFE ) ();");
})();


 /*************************
  * IIFEs with parameters
  * IFE has two formal parameters named msg, times respectively.
  * When we execute the IIFE instead of the empty parentheses ()
  * We are now passing arguments to the IIFE.
  *************************/

(function IIFE(msg, times) {
    n = 0;
    for (var i = 1; i <= times; i++) {
        n++
        console.log(msg+n);
    }
}("Hello!", 5));
// This is a really powerful pattern and we see this often
// in jQuery code and in other libraries as well.
