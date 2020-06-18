// eseversion: 6
/**********************************
 * CREAR ELEMENTOS DINAMICAMENTE EN EL DOM 
 * se crean en el document y no se muestran en pantalla
 * hasta que se colocan en el documento mediante appendChild() prepend() insertBefore() o replaceChild()
 * crear un elemento es muy sencillo,
 * usamos el metodo createElement y le pasamos como parametro 
 * el TAG NAME del elemento que queremos puede cualquiera
 * por ejemplo un 'div' una imagen 'img' etc... 'input' 'section' 'nav' 'footer'
 **********************************/

// para ahcer mas facil el manejo creamos una variavle
// que contenga el elemento que vamos a crear en este caso un div
let newElem = document.createElement('div');
// veamos nuestro elemento nuevo

// agregamos texto en un paragraph a nuestro recien creado elemento
newElem.innerHTML = '<p>This is a new Element</p>';

// una vez creado podemos manipularlo como cualquier elemento ya existente en el DOM
// es decir, podemos agregar o quitar atributos como classes IDs href style cualquier cosa
// incluso podemos agregar eventos
newElem.classList.add('special_class');
newElem.setAttribute('title', 'Element created using Javascript');
newElem.setAttribute('style', 'color:#555;font-weight:bold;');


// ahora logueamos nuestro elemento completo 
console.log('Elemento Recien creado', newElem);

/**********************
 * Usaremos los METODOS APPEND CHILD Y PREPEND para mostrar newElem dentro de la pagina
 * appendChild() agrega el elemeto creado dentro del elemento target
 * al final de todos los elementos ya existentes dentro del mismo
 * 
 * preppend() agrega el elemeto creado dentro del elemento target
 * pero antes de todos los elementos ya existentes dentro del mismo
 **********************/

 // colocamos el newElem dentro de nuestro body USANDO appendChild();
document.body.appendChild(newElem); 

/*********************
 * si vuelves a utilizar appendChild(), prepend() ó insertBefore()
 * Usando el mismo elemento pero con otro target
 * no creará un nuevo elemento dentro del nuevo target,
 * tomara el elemento ya existente y lo movera a la nueva posición
 * si quieres mostrar varios elementos deberas crear nuevos o utilizar cloneNode()
 ********************/

// usamos appendChild() para colocar el elemento dentro de otro target
// seleccionamos el target
let target_div = $s('#my_div');
// usamos appendChild()
target_div.appendChild(newElem);

// como no podemos usar el mismo elemento para mostralo con prepend()
// vamos a crear uno nuevo y despues  usamos prepend()
// para colocar el elemento clonado dentro del mismo target
let newElem2 =  document.createElement('div');
newElem2.innerHTML = '<p>Prepended new Element</p>';
newElem2.classList.add('special_class');
newElem2.setAttribute('style', 'color:#555;font-weight:bold;');

target_div.prepend(newElem2);


/************** INSERT BEFORE
 * insertBefore() coloca el elemento deseado justo antes del target  
 * lleva 2 parametros: (elemento que queremos insertar , el target que servira de referencia) 
 *************************/

 //comenzamos creando un nuevo elemento
let elemBefore = document.createElement('p');
elemBefore.innerText = 'Insert Before';
elemBefore.setAttribute(
    'style',
    'color:tomato; font-size:2rem; text-shadow: 2px 2px 3px #333'
    );

// Seleccionamos un target de referencia 
let target_section = $s('#my_section');
target_section.insertBefore(elemBefore, $s('#my_section>p'));
/******************* NOTA !!!
 * insertBefore se tiene que utilizar en un ELEMENTO
 * que este al mismo nivel del los demas elementos dentro del target
 * si se utiliza en un children (elemento que esté dentro de otro elemento) dara error * 
*************************/
document.body.insertBefore(elemBefore, target_section);


/**********************
 * REMPLAZAR UN ELEMENTO
 * Se usa el metodo replaceChild(new, old); lleva 2 parametros
 * El nuevo elemento que queremos colocar
 * Y el elemento que sera replazado
 * como el nombre lo dice el elemento que sera remplazado debe de ser un children
 ***********************/
// primero seleccionamos la lista
let target_list = $s('#my_list');

//ahora creamos un nuevo elemento
let replaceElem = document.createElement('h5');

//le ponemos contenido al elemento
replaceElem.innerText = 'This H5 will replace something';

// remplazamos alguno de los nodos
// usando childNodes firstChild lastChild o Children
target_list.replaceChild(replaceElem, target_list.children[3]);


/********************************
 * CLONAR ELEMENTOS
 * al clonar un elemento este pierde los attached Events
 * asi que debemos agregarlos de nuevo
 * cloneNode() no solo funcioan con elementos recien creados
 * Tambien se puede utilizar en elementos ya existentes dentro del DOM
 * 
 * cloneNode() lleva un parametro true or false
 * TRUE clona el elemento con todos los children dentro del mismo
 * 
 * FALSE clona solo el elemento sin nada dentro
 * esto es util cuando  solo quieres copiar el contenedor y sus estilos
 * pero deseas agregar nuevo contenido
 ********************************/

 //seleccionaremos un elemento ya existente
let boldtext = $s('.strongtext');
// clonamos el elemento seleccionado
let clonedElem = boldtext.cloneNode(true);
// lo colocamos dentro del parent del mismo
boldtext.parentElement.appendChild(clonedElem);

// ahora crearemos un elemento nuevo 
let newButton = document.createElement('button');
newButton.innerText='Click Me!';
newButton.classList.add('special_class');
newButton.setAttribute('style', 'margin:10px');
function replace_content(event) {
    event.target.innerText = 'Clicked !!';
}
newButton.addEventListener('click', replace_content);

// lo agregaremos a un target 
$s('#my_article').appendChild(newButton);

// y despues lo clonaremos
let clonedBtn = newButton.cloneNode(true);
// y lo agregamos al mismo target
$s('#my_article').appendChild(clonedBtn);
/////////// NOTA
// cuando clonas un elemento pierde todos los attached events
// y se deben agregar despues de colocar el elemento en el document

let clone2 = newButton.cloneNode(true);
$s('#my_article').appendChild(clone2).addEventListener('click', replace_content);



/*******************
 * REMOVE ELEMENTS y REMOVE CHILD
 * es muy simple solo seleccionas un target y aplicas un metodo
 * remove() removeChild()
 ******************/

 // empezamos or seleccionar un elemento
let item4 = $s('#item4');
// aplicamos remove() asi de facil
item4.remove()

// remove child es igual de sencillo
let o_list = $s('#o_list');

o_list.removeChild(o_list.children[1]);

