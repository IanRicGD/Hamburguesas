$(document).ready(function(){
	$('.sidenav').sidenav();
	$('.slider').slider({
		indicators: false,
		interval: 3000,
		duration: 3000
	});
	$('.tabs').tabs({
		duration:30
	});
	$('.collapsible').collapsible();
	$('input.autocomplete').autocomplete({
	  data: {
	    "Diseño Web": null,
	    "Redes de Datos": null,
	  },
	  minLength:3
	});
});




