// esversion: 6
(function () {
    class Employee {
        //constructor
        constructor(id) {
            this.id = id;
        }
        //Method
        showId() {
            console.log(`My ID number is ${this.id}`);
        }
    }
    const johnTitor = new Employee(23);
    johnTitor.showId()



    class Manager {
        //constructor
        constructor(nombre, depto) {
            this.nombre = nombre;
            this.depto = depto;
        }

        //Method
        meeting() {
            console.log(`Hola soy ${this.nombre}, y destruire a ${this.depto}`);
        }
    }
    const sarah = new Manager('Sarah Connor', 'SkyNet');
    sarah.meeting()

}
)();

/*********************************
 * PARA HEREDAR DE OTRA CLASE SE USA extends + classe
 * (el nombre de la clase desde donde quieres heredar algo)
 * despues dentro del constructor se usa SUPER(propiedad);
 * el parametro de super() es la propiedad que queremos heredar de la clase original o parent
 * "super()" se debe de usar antes que "this."
 *********************************/
(function () {
 class Arcanista {
     // constructor
     constructor(nombre){
         this.nombre = nombre;
     }

     //callback
     character(){
         console.log(
                    `Creaste un nuevo Arcanista con el nombre: ${this.nombre}`
        );
         
     }

 }
 const daturaFastuosa = new Arcanista('Datura Fastuosa');
 daturaFastuosa.character();

 /// Ahora creamos una variante del Arcanista extendiendo la clase
class ArcClase extends Arcanista {
     // constructor
    constructor(nombre, branch, skills){
        super(nombre);
        this.branch=branch;
        this.skills=skills;
     }

     // callback
     habilidades(){
         let skills2='';
         this.skills.forEach(s => {
             skills2+= s+', '
         });
         console.log(`
         Hola ${this.nombre}!! Escogiste la clase de ${this.branch}!
         tus nuevas habilidades son:
         ${skills2}
         `);
     }
 }
const datura = new ArcClase('Fiery Rose', 'Fuego', ['Fireball', 'Meteor', 'Burning Hands']);
datura.habilidades()

//dispatchEvent();
}
) ();

//////////////// Ejercicio Formulario con Funcion Constructor
(function () {

    // check fields and hide the submit when document finish load
    document.addEventListener('DOMContentLoaded', ()=>{
        // Constructor
        const display = new Display();
        display.checkFields();
        display.hideSubmit();
    }); // END DOMContentLoaded

    ///////////////        (constructor function)     /////////////////
    // esta funcion constructor nos sirve para seleccionar todos los campos
    // la ventaja de hacerlo de este modo es que si mas adelante
    // tenemos que acceder a las propiedades de los campos
    // ya no las tenemos que volver a seleccionar simplemente usamos un prototype
    ////////////////////////////////////////////////////////////////
    function Display() {
        this.nombre = document.querySelector('#nombre');
        this.curso = document.getElementById('curso');
        this.autor = document.querySelector('#autor');
        this.clientes = document.querySelector('.clientes');
    }
    
    
    ////////////////      (prototypes para el constructor)        /////////////////
    // aqui creamos un prototype(checkfields) para nuestro constructor(Display)
    // y podemos ver que en vez de seleccionar los campos solo escribimos this.element
    // es decir en cada linea nos ahorramos hacer una variable
    // ejemplo: var nombre = document.querySelector('element')
    // y despues usarla:  nombre.addEventListener...blah blah blah    
    ///////////////////////////////////////////////////////////////////////////
    Display.prototype.checkFields = function () {

        
        this.nombre.addEventListener('blur', this.validateField);
        this.curso.addEventListener('blur', this.validateField);
        this.autor.addEventListener('blur', this.validateField);
        this.clientes.addEventListener('blur', this.validateField);        
    } ///// end checkFields
    // vemos como el 'protoype' de arriba en vez de llamar a una funcion

    // llama a otro 'prototype' (el de abajo) que contiene la logica de validación
    Display.prototype.validateField = function () {

        // primero checamos si lso values estan vacios y cambiamos la clase dependiendo del resultado
        if (this.value === ''){
            this.classList.remove('complete');
            this.classList.add('fail');
        } else{
            this.classList.add('complete');
            this.classList.remove('fail');
        }
// ahora contamoos cuantos campos con la calse complete existen
// si hay 3 quiere decir que todos los campos estan llenos
        const complete = document.querySelectorAll('.complete');
        if (complete.length >= 3) {
            document.querySelector('.submitBtn').disabled=false;
        } else { document.querySelector('.submitBtn').disabled=true;}
    }//////// end validateField

    //
    Display.prototype.hideSubmit = function () {
        const boton = document.querySelector('#submitBtn');
        boton.disabled = true;
    }

})(); // END IIFE'

