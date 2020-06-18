// esversion: 6
/*******************************
 * DOM navigation CHILDREN ELEMENTS
 *******************************/
console.log('/////////////////CHILDREN ELEMENTS//////////////////');
// vamos a seleccionar una lista  desordenada como target de todo el ejercicio
let target_menu = $s('#my_menu');
 /********
 * El metodo childNodes regresa todos los nodos dentro del elemento parent
 * incluyendo los espacios en blanco y saltos de linea
 * y los trata como si fueran un nodo de texto vacio
 * incluso regresa los comentarios <!----> como un nodo independiente
 ********/
console.log('childNodes',target_menu.childNodes);
// seleccionamos el segundo <li> que es el nodo 3 y le cambiamos el estilo
target_menu.childNodes[3].setAttribute(
    'style',
    `color: purple;
     text-decoration: line-through;
     font-style: italic;`
    )
// seleccionamos el nodo 4 que es solo un nodo de texto vacio y cambiamos el valor 
target_menu.childNodes[4].data='Este texto fue remplazado usando el metodo childNodes';

/***********************
 * Los metodos firstChild y lastChild 
 * regesan el primer nodo dentro del target
 * o el último nodo respectivamente
 * al igual que childNodes toman en cuenta todo
 * incluyendo comentarios, saltos de linea y espacios en blanco
 ***********************/
//selecionamos el primer nodo y lo mandamos a la consola
console.log('firstChild', target_menu.firstChild);

//selecionamos el último nodo y lo mandamos a la consola
console.log('lastChild', target_menu.lastChild);

/***********************
 * El metodo children regresa solo elementos HTML
 * ignorando texto plano, saltos de linea y comentarios
 ***********************/
console.log('children', target_menu.children);
// seleccionamos el list item 3 <li> y le cambiamos el contenido por un <a></a>
target_menu.children[2].innerHTML='<a href="#">LINK 3</a>';
// seleccionamos el cuarto item list y le agregamos un evento
target_menu.children[3].addEventListener(
    'click',
    (event)=>{event.target.innerText="Clicked"}
    );


/***************************
 *DOM navigation PARENT ELEMENTS  
 ************************/
console.log('/////////////////PARENT ELEMENTS//////////////////');

// para este ejercicio vamos a seleccionar un elemento
// que este muy anidado dentro de otros elementos
let nested_elem = $s('.menu');

// ahora logeamos su parent
console.log(nested_elem.parentElement);

/************************************
 * el proceso se puede encadenar multiples veces
 * de este modo peudes navegar por todo el documento
 * hasta encontrar econtrar el elemento que deseas
 * NOTA: puedes llegar hasta el <HTML></HTML> depues de eso te dara null 
 **************************************/
// ejemplo podemos subir hasta el div contenedor
console.log(nested_elem.parentElement.parentElement.parentElement.parentElement);
// cambiamos algo al div contenedor
nested_elem.parentElement.parentElement.parentElement.parentElement.setAttribute('style', 'background-color: powderblue;');

// repetimos hasta llegar a <html>
console.log(
    nested_elem.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
);

/**************************************
 * DOM navigation SIBLING ELEMENTS
 * estos son los elementos que residen dentro de un mismo elemento contenedor
 * y que se encuentren antes o despues de nuesto target
 **************************************/
console.log('/////////////////SIBLING ELEMENTS//////////////////');

 // seleccionamos un elemento que este dentro de otro
let target_article = $s('#link3'); 
//navegamos a su hermano anterior
console.log('link3 previousElementSibling',target_article.previousElementSibling);
target_article.previousElementSibling.innerHTML+='  este es el previousElementSibling de Link3';

//navegamos a su hermano siguiente
console.log('link3 nextElementSibling',target_article.nextElementSibling);
target_article.nextElementSibling.innerHTML +=' este es el nextElementSibling de Link3';
 
// de este modo podemos navegar por todos los elementos
// que esten al mismo nivel dentro de un mismo parent
// en este caso todo son <li> dentro de un mismo <ul>

 // se peude repetir igual que parentElement
console.log('link3 nextElementSibling x2', target_article.nextElementSibling.nextElementSibling);
