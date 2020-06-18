// esversion: 6

/****************************************
 * ********* Ejercicio de Classes *************
 ****************************************/
(function () {
let newChar = {id:0};

 // creamos una nueva clase llamada wizzard
 class Wizzard { // las classes son como un object pero empieza por Mayuscula y le precede la palabra class
    // despues tenemos el constructor que será la funcion que acepta nuestros parametros
    constructor(name, gender){
        this.name = name;
        this.gender = gender;
    }

    // ahora el callback que es la funcion que nos regresara el resultado
    callback(){
        newChar.id = newChar.id+1;
        newChar.nombre=this.name;
        newChar.gender=this.gender;
        console.log('new character: ', newChar);
    }
 } // END CLass

 // Ahora extendemos la Class Wizzard

 const arcanista = new Wizzard('Datura Fastuosa', 'female');
 //console.log(arcanista);

function Campos() {
    this.name = document.querySelector('.form_name');
    this.gender = document.querySelector('.form_gender');
}
Campos.prototype.getValue = function () {
    console.log(this.name.value);
    
}
 const test = new Campos();
 test.getValue();
    

} // end IIFE
)(); // call IIFE

