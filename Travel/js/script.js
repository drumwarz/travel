window.addEventListener('DOMContentLoaded',() =>{
	const menu = document.querySelector('.menu__list'),
			nav = document.querySelector('.menu__body'),
			burger = document.querySelector('.burger'),
			overlay = document.querySelector('.overlay'),
			toggler=()=>{
			  menu.classList.toggle('menu__list-active');
			  overlay.classList.toggle('overlay-active');
			  menu.classList.contains('menu__list-active') ? document.body.style.overflow = 'hidden' : document.body.style.overflow ='';
		 };
			  
	burger.addEventListener('click',toggler);
	menu.childNodes.forEach(item=>item.addEventListener('click', toggler));   
	overlay.addEventListener('click',toggler);
});