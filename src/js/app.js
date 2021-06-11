// API
const url = "https://picsum.photos/300/300";

// Variables globales
let contenedor = document.querySelector('.imagenes');

// Identificando carga completa de la web
window.addEventListener('load', ()=> {
	let api = 0;

	for (let i = 0; i < 10; i++) {
		let img = document.createElement('img');
		img.src = `https://picsum.photos/300/300?=${api++}`;
		contenedor.append(img);
	}
});