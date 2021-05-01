document.onkeydown = function(e) {
	e = e || window.event;
	switch(e.which || e.keyCode) {
		case 27:
		case 36:
		case 37:
		case 38: goindex(); break;
		default: return;
	}
	e.preventDefault();
}
function goindex() {
	window.location.href=window.location.search.substring(1);
}
function fixTitlebar() {
	if(window.innerWidth < 650) {
		var navH = $('#pl-navleftip').outerHeight(false);
		if(navH > 32) {
			$('#pl-navleftip, #pl-navrightip').css({'height': '32px'});
			$('#pl-navleftip img').css({'height': '32px', 'width': '32px'});
			navH = 32;
		}
		$('#pl-navleftip, #pl-navrightip').css({'width': 'auto'});
		$('.pl-pagetitleip').css({'padding-top': (5 + navH).toString() + 'px'});
	}
};
function topScroll() {
	$(window).scroll(function(){
		if($(window).scrollTop() > 400) {
			$('#pl-pagetop').fadeIn(700);
		}
		else {
			$('#pl-pagetop').fadeOut(700);
		}
	});
	$('#pl-pagetop').click(function(){
		$('body,html').animate({scrollTop:0},700);
		return false;
	});
};
function init() {
	fixTitlebar();
	topScroll();
};
$(document).ready(init);
