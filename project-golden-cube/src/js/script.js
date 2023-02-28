"use strict"
const images = document.querySelectorAll('.lazy');
for (let image of images) {

	let img = document.createElement('img');
	img.src = image.dataset.src;
	img.addEventListener('load', ()=>{
		image.src = img.src;
		image.classList.remove('lazy');
    delete image.dataset.src
    // Или так
    // image.removeAttribute('data-src');
		// image.parentElement.classList.add('loaded');
    // console.dir(image);
	})
}