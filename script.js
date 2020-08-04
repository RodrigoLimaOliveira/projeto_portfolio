var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click" , function(){
    document.querySelector(".container").classList.toggle("show-menu");
});

function abreLink(){
	window.open('https://github.com/RodrigoLimaOliveira/site-bolos');
}
function abreLink2(){
	window.open('https://github.com/RodrigoLimaOliveira/ProjetoLogin');
}