function compressSpace() {
	if(window.innerHeight < 500 || window.innerWidth < 500) {
		$('#pl-fthumbs, #pl-thumbs, .pl-thumbbox').css({'padding-left': '5px', 'padding-right': '5px'});
		$('#pl-thumbs > div, #pl-fthumbs > div').css({'margin': '2px'});
	}
};

function fixTitlebar() {
	var iconCount = $('#pl-navleft img').length;
	if(window.innerWidth < 650 && iconCount > 0) {
		var navH = $('#pl-navleft').outerHeight(false);
		if(navH > 32) {
			$('#pl-navleft, #pl-navright').css({'height': '32px'});
			$('#pl-navleft img').css({'height': '32px', 'width': '32px'});
			navH = 32;
		}
		if(!$('#pl-parabody').length) {
			$('#pl-navleft, #pl-navright').css({'width': 'auto'});
			$('.pl-pagetitle').css({'padding-top': (5 + navH).toString() + 'px'});
		}
	}
};

function checkCaptions() {
	var maxfHeight = 0;
	if(maxfCapt != 0 && $('.pl-fthumbcaption').length) {
		$('.pl-fthumbcaption').each(function(){
			maxfHeight = $(this).height() > maxfHeight ? $(this).height() : maxfHeight;
		});
		maxfHeight = Math.min(maxfHeight, maxfCapt);
		if(maxfHeight > 0 && window.innerHeight >= 500 && window.innerWidth >= 500 && maxfCapt != -1) {
			$('.pl-fthumbcaption').css({'min-height': maxfHeight.toString() + 'px'});
		}
	}
	if(maxfCapt == 0 || maxfHeight == 0) {
		$('.pl-fthumbcaption').css({'display': 'none'});
	}
	else {
		$('#pl-fthumbs > div').css({'margin-top': '0px', 'margin-bottom': '0px'});
	}
	var maxHeight = 0;
	if(maxCapt != 0 && $('.pl-thumbcaption').length) {
		$('.pl-thumbcaption').each(function(){
			maxHeight = $(this).height() > maxHeight ? $(this).height() : maxHeight;
		});
		maxHeight = Math.min(maxHeight, maxCapt);
		if(maxHeight > 0 && window.innerHeight >= 500 && window.innerWidth >= 500 && maxCapt != -1) {
			$('.pl-thumbcaption').css({'min-height': maxHeight.toString() + 'px'});
		}
	}
	if(maxCapt == 0 || maxHeight == 0) {
		$('.pl-thumbcaption').css({'display': 'none'});
	}
	else {
		$('#pl-thumbs > div').css({'margin-top': '0px', 'margin-bottom': '0px'});
	}
};

function topScroll() {
	if($('#pl-parabody').length) {
		$('#pl-parabody').scroll(function(){
			if($('#pl-paracontent').position().top < -150){
				$('#pl-pagetop').fadeIn(700);
			}
			else {
				$('#pl-pagetop').fadeOut(700);
			}
		});
		$('#pl-pagetop').click(function(){
			$('#pl-parabody').animate({scrollTop:0},700);
			return false;
		});
	}
	else {
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
	}
};

$(document).ready(compressSpace);
$(document).ready(fixTitlebar);
$(document).ready(checkCaptions);
$(document).ready(topScroll);
