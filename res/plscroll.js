var pathName = document.location.pathname;
pathName = pathName.substring(0, pathName.lastIndexOf("/")) + "/"
var isPara = $('#pl-parabody').length;
if(sessionStorage["scrollPosition_" + pathName]) {
	var folders = $('.pl-fthumbbox').length;
	var images = $('.pl-thumbbox').length;
	if(!folders && !images) {
		$(document).ready(function() {
			if(isPara) {
				$('#pl-parabody').scrollTop(sessionStorage.getItem("scrollPosition_" + pathName));
			}
			else {
				$(document).scrollTop(sessionStorage.getItem("scrollPosition_" + pathName));
			}
		});
	}
	else if(folders && !images) {
		$(document).ready(function() {
			$('#pl-fthumbs').justifiedGallery().on('jg.complete', function() {
				if(isPara) {
					$('#pl-parabody').scrollTop(sessionStorage.getItem("scrollPosition_" + pathName));
				}
				else {
					$(document).scrollTop(sessionStorage.getItem("scrollPosition_" + pathName));
				}
			});
		});
	}
	else if(!folders && images) {
		$(document).ready(function() {
			$('#pl-thumbs').justifiedGallery().on('jg.complete', function() {
				if(isPara) {
					$('#pl-parabody').scrollTop(sessionStorage.getItem("scrollPosition_" + pathName));
				}
				else {
					$(document).scrollTop(sessionStorage.getItem("scrollPosition_" + pathName));
				}
			});
		});
	}
	else {
		$(document).ready(function() {
			$('#pl-fthumbs').justifiedGallery().on('jg.complete', function() {
				$('#pl-thumbs').justifiedGallery().on('jg.complete', function() {
					if(isPara) {
						$('#pl-parabody').scrollTop(sessionStorage.getItem("scrollPosition_" + pathName));
					}
					else {
						$(document).scrollTop(sessionStorage.getItem("scrollPosition_" + pathName));
					}
				});
			});
		});
	}
}