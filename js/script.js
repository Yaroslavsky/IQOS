$(document).ready(function(){
	$('.pop-up__text').hide();
	$('.four').click(function(){
		$('.pop-up__text').slideToggle('slow');
		$('.two').toggleClass('questions-title__active');
		$('.four').toggleClass('background-active');
	})
})