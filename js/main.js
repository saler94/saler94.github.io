/* НАЗНАЧАЕМ РАЗМЕРЫ ПОСЛЕ ИЗМЕНЕНИЙ РАЗМЕРОВ ОКНА */
/*-----------------------------------------------------------------------------------------*/


function setSizes() {
	$('#slider, .back').css({
        height: $(window).height() + 'px',
        width: $(window).width() + 'px'
    });
    if (($('.back .video-header').width() - $(window).width()) > 10) {
    	var diff = ($('.back .video-header').width() - $(window).width()) / 2;
    	$('.back .video-header').css ({
    		marginLeft: -diff + 'px'
    	});
    }
    $('.slides').css({
        height: $(window).height() + 'px'
    });

	$('.menu').css({
		marginTop: '-3px',
		marginLeft: '35px'
	});
	

	$('.header').css({
		top: $(window).height() - 70 + 'px'
	});

	var sr = $('.showreel').height();
	if ($(window).width() > 1500){
		var wp = ($(window).width() - 15) / 6;
		var sr_vid = (sr + ((wp / 1.4) * 2));
	} else {
		var wp = ($(window).width() - 9) / 4;
		var sr_vid = (sr + ((wp / 1.4) * 3));
	}
	$('.video-preview').css({
		width: wp + 'px',
		height: wp / 1.4 + 'px'
	});

	if (sr_vid < ($(window).height() - 70)) {
		var ost = ($(window).height() - 70) - sr_vid;
		$('.portfolio').css ({
			height: ($(window).height() - 70) + 'px'
		});
		$('.showreel').css ({
			top: ost / 2 + 'px',
		});
		$('.videos').css ({
			top: sr + ost + 'px',
		});
	}
	else {
		$('.portfolio').css ({
			height: sr_vid + 'px'
		});

		$('.videos').css ({
			top: sr + 'px',
		});
	}

	

	$('.team').css ({
		height: ($(window).height() - 70) + 'px' 
	});
	$('.contacts').css ({
		height: ($(window).height() - 270) + 'px' 
	});

}

setSizes();
$(window).resize(setSizes);



  $(function(){
  // высота "шапки", px
  	var h_hght = $('#slider').outerHeight();
       // высота блока с меню, px
    var h_nav = $('.header').outerHeight();
    var top;
    var toRight = $(window).width() - 540;
       $(window).scroll(function(){
           // отступ сверху
           top = $(this).scrollTop();
           if((h_hght-top) <= h_nav){
               $('.header').css('top','0');
               $('.header').css({background: 'url(img/bg_portf.png)'});
               $('.arrow_portf').css({right: '-60px'});
           }
           else if(top < h_hght && top > 0){
               $('.header').css({'bottom' : top, 'top':''});
               $('.header').css({background: 'url(img/bg_header.png)'});
               $('.arrow_portf').css({right: '40px'});
           }
           else if(top < h_nav){
               $('.header').css({'top':'','bottom':'0'});
           }
       });
   });    



setTimeout (function() {
	$(".start-logo").animate({opacity: "0"}, 500);
	setTimeout (function() {
		var startlogo = document.getElementById('startlogo');
		startlogo.parentNode.removeChild(startlogo);
	}, 600);	
}, 2000);	



/*----------------------------------------------------------------------------------------*/
/* НАВЕДЕНИЕ НА ПРЕВЬЮ */
/*----------------------------------------------------------------------------------------*/

$('.video-preview').hover( function() {
	$(this).animate ({
		backgroundSize: '105%',
		opacity: '1'
	}, 200);
	$('.play-btn', this).animate ({
		opacity: '.7'
	}, 200);},
	function() {
	$(this).animate ({
		backgroundSize: '100%'
	}, 150);
	$('.play-btn', this).animate ({
		opacity: '0'
	}, 150);
});

/*----------------------------------------------------------------------------------------*/
/* МАССИВ ИЗ ВИДЕО */
/*----------------------------------------------------------------------------------------*/
$('#modal_form').css ({
	height: (screen.width * 0.7) / 1.77777 + 'px',
	marginTop: -(((screen.width * 0.7)  / 1.77777) / 2) + 'px',
	marginLeft: -(((screen.width * 0.7)) / 2) + 'px',
});

var mass = [
	'<iframe src="https://player.vimeo.com/video/132936570?color=0afce8&byline=0&autoplay=1&portrait=0" width="' + screen.width * 0.7 + '" height="' + (screen.width * 0.7) / 1.77777 + '" frameborder="1" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>', 
	'<iframe src="https://player.vimeo.com/video/135985108?color=0afce8&byline=0&autoplay=1&portrait=0" width="' + screen.width * 0.7 + '" height="' + (screen.width * 0.7) / 1.77777 + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
	'<iframe src="https://player.vimeo.com/video/151303287?autoplay=1&color=0afce8&portrait=0" width="' + screen.width * 0.7 + '" height="' + (screen.width * 0.7) / 1.77777 + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
	'<iframe src="https://player.vimeo.com/video/141469979?autoplay=1&color=0afce8&portrait=0" width="' + screen.width * 0.7 + '" height="' + (screen.width * 0.7) / 1.77777 + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
	'<iframe src="https://player.vimeo.com/video/140224012?autoplay=1&color=0afce8&portrait=0" width="' + screen.width * 0.7 + '" height="' + (screen.width * 0.7) / 1.77777 + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
	'<iframe src="https://player.vimeo.com/video/149783473?color=0afce8&byline=0&autoplay=1&portrait=0" width="' + screen.width * 0.7 + '" height="' + (screen.width * 0.7) / 1.77777 + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
	'<iframe src="https://player.vimeo.com/video/121283753?color=0afce8&byline=0&autoplay=1&portrait=0" width="' + screen.width * 0.7 + '" height="' + (screen.width * 0.7) / 1.77777 + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
	'<iframe src="https://player.vimeo.com/video/145055120?autoplay=1&color=0afce8&portrait=0" width="' + screen.width * 0.7 + '" height="' + (screen.width * 0.7) / 1.77777 + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
	'<iframe src="https://player.vimeo.com/video/117716140?color=0afce8&byline=0&autoplay=1&portrait=0" width="' + screen.width * 0.7 + '" height="' + (screen.width * 0.7) / 1.77777 + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
	'<iframe src="https://player.vimeo.com/video/120961969?color=0afce8&byline=0&autoplay=1&portrait=0" width="' + screen.width * 0.7 + '" height="' + (screen.width * 0.7) / 1.77777 + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
	'<iframe src="https://player.vimeo.com/video/135852741?color=0afce8&byline=0&autoplay=1&portrait=0" width="' + screen.width * 0.7 + '" height="' + (screen.width * 0.7) / 1.77777 + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
	'<iframe src="https://player.vimeo.com/video/135735688?color=0afce8&byline=0&autoplay=1&portrait=0" width="' + screen.width * 0.7 + '" height="' + (screen.width * 0.7) / 1.77777 + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
	];

/*----------------------------------------------------------------------------------------*/
/* МОДАЛЬНОЕ ОКНО */
/*----------------------------------------------------------------------------------------*/
var video_num;

$(document).ready(function() { 
	$('.video-preview').click( function(){ 
		video_num = Number($(this).attr("id"));
		$('#modal-ins').append(mass[Number($(this).attr("id")) - 1]); 
		$('#overlay').css({zIndex: 200});
		$('#l-arrow').css({zIndex: 250});
		$('#overlay').animate({opacity: '1'}, 200); 
		});
	$('#modal_close').click( function(){  
		$('#overlay').animate({opacity: 0}, 200);
		$('div#modal-ins').empty();
		setTimeout(function() {$('#overlay').css({zIndex: '-1'})}, 200);
	});
});

/*----------------------------------------------------------------------------------------*/
/* ПЕРЕКЛЮЧЕНИЕ ВИДЕО В МОДАЛЬНОМ ОКНЕ */
/*----------------------------------------------------------------------------------------*/

$(document).ready(function() { 
	$('#l-arrow').click( function(){
		if (video_num == 1) return false;
		else {
			$('#modal_form').animate({opacity: 0}, 150);
			$('div#modal-ins').empty();
			$('#modal-ins').append(mass[video_num-2]); 
			$('#modal_form').animate({opacity: 1}, 150);
			video_num--;
		}
	});
	$('#r-arrow').click( function(){
		if (video_num == 12) return false;
		else {
			$('#modal_form').animate({opacity: 0}, 150);
			$('div#modal-ins').empty();
			$('#modal-ins').append(mass[video_num]); 
			$('#modal_form').animate({opacity: 1}, 150);
			video_num++;
		}
	});

});

/*----------------------------------------------------------------------------------------*/
/* СКРОЛЛ САЙТА */
/*----------------------------------------------------------------------------------------*/


$(document).ready(function(){
   $('#portf, #main, #ourteam, #cont').bind("click", function(event){
      
      event.preventDefault();
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top - 69
      }, 900, 'swing');
   });
   return false;
}); 
/*
$(document).ready(function(){
	$(".menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1000);
	});
});*/
/*----------------------------------------------------------------------------------------*/
/* СЛАЙДЕР КАРТИНОК В "НАШЕЙ КОМАНДЕ"" */
/*----------------------------------------------------------------------------------------*/

var s = 1;

$(document).ready(function() { 
	$('#rot-r-arrow').click( function () {
		var current =  $('.rotator ul li.show1');
		var current2 =  $('.rotator-preview ul li.show2');
		if(s != 8) {
			$('.show1').animate({opacity: "0"}, 500);
			$('.show2 .underline').animate({opacity: "0"}, 500);
			$('.show1').next().animate({opacity: "1"}, 500);
			current.next().addClass('show1');
			current2.next().addClass('show2');
			current.removeClass('show1'); 
			current2.removeClass('show2');
			$('.show2 .underline').animate({opacity: "1"}, 500);
			s++;
		} else {
			$('.show1').animate({opacity: "0"}, 500);
			$('.show2 .underline').animate({opacity: "0"}, 500);
			$('#s101').animate({opacity: "1"}, 500);
			$('#s201 .underline').animate({opacity: "1"}, 500);
			$('#s101').addClass('show1');
			$('#s201').addClass('show2');
			current.removeClass('show1'); 
			current2.removeClass('show2'); 
			s = 1;
		}
	});

	$('#rot-l-arrow').click( function () {
		var current =  $('.rotator ul li.show1');
		var current2 =  $('.rotator-preview ul li.show2');
		if(s != 1) {
			$('.show1').animate({opacity: "0"}, 500);
			$('.show2 .underline').animate({opacity: "0"}, 500);
			$('.show1').prev().animate({opacity: "1"}, 500);
			current.prev().addClass('show1');
			current2.prev().addClass('show2');
			current.removeClass('show1'); 
			current2.removeClass('show2');
			$('.show2 .underline').animate({opacity: "1"}, 500);
			s--;
		} else {
			$('.show1').animate({opacity: "0"}, 500);
			$('.show2 .underline').animate({opacity: "0"}, 500);
			$('#s108').animate({opacity: "1"}, 500);
			$('#s208 .underline').animate({opacity: "1"}, 500);
			$('#s108').addClass('show1');
			$('#s208').addClass('show2');
			current.removeClass('show1'); 
			current2.removeClass('show2'); 
			s = 8;
		}
	});
});


$(document).ready(function() { 
	$('.rotator-preview ul li').click( function () {
		$('.show1').animate({opacity: "0"}, 500);
		$('.show2 .underline').animate({opacity: "0"}, 500);
		$('.show1').removeClass('show1');
		$('.show2').removeClass('show2');
		$('#s10' + $(this).attr('id').slice(-1)).animate({opacity: "1"}, 500);
		$('#s10' + $(this).attr('id').slice(-1)).addClass('show1');
		$('#s20' + $(this).attr('id').slice(-1) + ' .underline').animate({opacity: "1"}, 500);
		$('#s20' + $(this).attr('id').slice(-1)).addClass('show2');
		s = Number($(this).attr('id').slice(-1));
	});
});



document.getElementById('feedback-form').addEventListener('submit', function(evt){
  var http = new XMLHttpRequest(), f = this;
  evt.preventDefault();
  http.open("POST", "mail.php", true);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  http.send("nameFF=" + f.nameFF.value + "&contactFF=" + f.contactFF.value + "&messageFF=" + f.messageFF.value);
  http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
      alert(http.responseText + ', Ваше сообщение получено.\nНаши специалисты ответят Вам в течении 2-х дней.\nБлагодарим за интерес к нашей фирме!');    
      f.messageFF.removeAttribute('value'); // очистить поле сообщения (две строки)
      f.messageFF.value='';
    }
  }
  http.onerror = function() {
    alert('Извините, данные не были переданы');
  }
}, false);