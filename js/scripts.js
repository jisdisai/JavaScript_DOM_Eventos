// querySelector - Selecciona un elemento por su id

const heading = document.querySelector('.header__texto h2'); // retorna 0 o 1 elemento
heading.textContent='Nuevo Heading';
console.log(heading);

// querySelectorAll devuelve una colección de elementos que coinciden con el selector
const enlaces = document.querySelectorAll('.navegacion a');
// console.log(enlaces);
console.log(enlaces[0]);
enlaces[0].textContent='Nuevo Enlace';
//enlaces[0].href='https://www.google.com';
enlaces[0].classList.add('nueva-clase');
// enlaces[0].classList.remove('navegacion__enlace');

/*
// getElementById - Selecciona un elemento por su id
const heading2 = document.getElementById('heading');
console.log(heading2);*/

// Generar un nuevo enlace 
const nuevoEnlace = document.createElement('A');

// Agregar un href
nuevoEnlace.href= 'nuevo-enlace.html';

// Agregar el texto
nuevoEnlace.textContent = 'Tienda Virtual';

// Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

//Agregar al documento 
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

// Eventos 

console.log(1);

window.addEventListener('load', function(){ // load espera a que el Js y los archicvos que dependen de HTML esten Listos
    console.log(2);
});

window.onload = function(){ // onload espera a que el Js y los archicvos que dependen de HTML esten Listos  
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function(){ // DOMContentLoaded espera a que el Js y los archicvos que dependen de HTML esten Listos
    console.log(4);
});

console.log(5);

window.onscroll = function(){ // onscroll espera a que el Js y los archicvos que dependen de HTML esten Listos
    console.log('scrolling');
}
