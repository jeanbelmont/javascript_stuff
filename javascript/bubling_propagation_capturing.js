// esversion: 6

/***************************
 * EVENT PROPAGATION - Es el orden en que se disparan los eventos
 * EVENT BUBBLING - comienza en el target y entonces burbujea(bubbling) hacia afuera de documento
 * EVENT CAPTURING - Se dispara en la raíz del cdocmento y continua hasta que encuentra el target
 * En otras palabras es lo contrario de Blubbling, comienza en el window y viaja hacia adentro hasta que encuentra el target
 * STOP PROPAGATION evita que Bubbling o Capturing continuen recorriendo los elementos una vez que encuentra el target
 ****************************/

 // seleccionamos los elementos
 const section = $s('.section');
 const article = $s('.article');
 const ulist = $s('.ulist');
 const li = $s('.li');


function blubbling(event) {
    console.log('target', event.target);
    console.log('currentTarget', event.currentTarget);
}

function propagation(event) {
    console.log('target', event.target);
    console.log('currentTarget', event.currentTarget);
}

// Listeners
//li.addEventListener('click', blubbling);
//ulist.addEventListener('click', blubbling);
//article.addEventListener('click', blubbling);
//section.addEventListener('click', blubbling);
// document.addEventListener('click', blubbling);
 

/*****************************
 * EJERCICIO DE PROPAGATION or (EVENT DELEGATION)
 * es especialmente util cuando creamos elementos dinamicamente 
 * ya que aunque no existan originalmente en el DOM
 * les podemos agregar un event listener a su pàrent contenedor 
 * y de ese modo darles una funcionalidad
 ******************************/

 //comenzamos por crear nuevos elementos con un boton

const elements =  [
    `<span class="span">ClickMe!!</span>`,
    `<button disabled = "disabled" > button</button>`,
    `<div class="circle" ></div>`,
    `<div class="square" ></div>`
];
function new_element() {
    const rnd = Math.floor(Math.random()*4);
    const elem =document.createElement('i');
    elem.innerHTML=elements[rnd];
    //elem.addEventListener('click', random_number);
    $s('.contenedor').appendChild(elem);
}
$s('#new_elem').addEventListener('click', new_element);


const span = $s('.span'); Math.random()

function random_number(e) {
    e.target.innerText = Math.random().toString().slice(2, 9);
}
span.addEventListener('click', random_number);


// THE EVENT DELEGATION

// en vez de poner el event listener en el target lo hacemos en el parent element

function event_delegation(e) {

    if (e.target.classList.contains('span')) {
        e.stopPropagation();
        e.target.innerText = Math.random().toString().slice(2, 9);
    }
}

// hacemos target al contenedor y luego delegamos el evento al target mismo
const contenedor = $s('.contenedor');

contenedor.addEventListener('click', event_delegation);


