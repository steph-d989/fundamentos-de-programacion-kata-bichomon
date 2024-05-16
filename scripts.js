console.log(document.title);
/*Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".*/
let titulo = document.getElementById("gen-1");
console.log(titulo.textContent);
titulo.textContent="Generasión 1 Pokimon"
/*Cambia el color de fondo de la primera generación de Pokimon.*/
let pokemon = document.querySelector(".infocard-list");
console.log(pokemon);
pokemon.style.background='pink';
/*Imprime por consola la URL de la página.*/

/*Imprime por consola el dominio de la página.*/

/*Imprime todos los nodos de imagen.*/
let nodosImg = document.querySelectorAll('img');
console.log(nodosImg);
/*Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"*/
const img = [...nodosImg];
