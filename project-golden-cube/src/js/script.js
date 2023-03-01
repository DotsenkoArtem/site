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



// PAGE PRELOADER FUNCTION
let preloader = document.createElement('div')
preloader.className = 'preloader'
document.body.append(preloader)


window.onload = function() {
	const PRELOADERTRANSITION = 1500
	preloader.style.transition = `opacity ${PRELOADERTRANSITION}ms`
	preloader.classList.add('fade-out')

	setTimeout(function(){
		preloader.remove()
	},PRELOADERTRANSITION)
}
// - - - - - - - - - - - - - - - - - - - 
