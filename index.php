<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>NEROFILMS</title>
		<link rel="stylesheet" href="style.css">
		<script src="js/main.js" defer></script>
		<link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon">	
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>	
	</head>

	<body>
	    <div class="start-logo" id="startlogo"><img class="logo1" src="img/nerofilms_logo.png" /></div>
		<div id="wrapper">
			

			<div class="back">
				
				<video class="video-header" autoplay="autoplay" loop="loop" preload="auto" width="1280" height="720">
					<source src="media/wedding.mp4" type="video/mp4; codecs=&quot;avc1.4D401E, mp4a.40.2&quot;">
					<source src="/assets/temp_images/Wedvice_bg_video_v4.ogg" type="video/ogg; codecs=&quot;theora, vorbis&quot;">
					<source src="media/wedding.webm" type="video/webm; codecs=&quot;vp8, vorbis&quot;">
				</video>
			</div>


			<div id="slider">
				<div class="mid-title">
					<a class="one">Мы создаем вашу историю</a>
				</div>
				<a href="" class="logo-cont"><img class="logo" src="img/nerofilms_logo.png" /></a>
				<div class="soc-block">
					<a href="http://vk.com/nerofilms" target="_blank"><img class="vk_icon" src="img/vk_icon.png" /></a>&nbsp&nbsp&nbsp
					<a href="https://instagram.com/nerofilms" target="_blank"><img class="inst_icon" src="img/inst_icon.png" /></a>&nbsp&nbsp&nbsp
					<a href="https://facebook.com/officialnerofilms" target="_blank"><img class="fb_icon" src="img/fb_icon.png" /></a>&nbsp&nbsp&nbsp
					<a href="https://vimeo.com/nerofilms" target="_blank"><img class="vimeo_icon" src="img/vimeo_icon.png" /></a>
				</div>
				<div class="header">

				<div class="arrow_portf"><a id="portf" href="#line"><img src="img/arrow_portf.png" /></a></div>
				<div class="menu">
					<a class="menu-fonts" id="main" href="#wrapper">ГЛАВНАЯ</a>
					<a class="menu-fonts" id="portf" href="#line">ПОРТФОЛИО</a>
					<a class="menu-fonts" id="ourteam" href="#team">НАША КОМАНДА</a>
					<a class="menu-fonts" id="cont" href="#contacts">КОНТАКТЫ</a>
				</div>
				
			</div>

			</div>



			<div id="line"></div>
			<div class="portfolio">
				<div class="showreel">
				</div>
				<ul class="videos">
					<li class="video-preview" id="1" style="background-image: url(img/preview/1.jpg);"><img class="play-btn" src="img/play.png" /></li>
					<li class="video-preview" id="2" style="background-image: url(img/preview/2.jpg);"><img class="play-btn" src="img/play.png" /></li>
					<li class="video-preview" id="3" style="background-image: url(img/preview/3.jpg);"><img class="play-btn" src="img/play.png" /></li>
					<li class="video-preview" id="4" style="background-image: url(img/preview/4.jpg);"><img class="play-btn" src="img/play.png" /></li>
					<li class="video-preview" id="5" style="background-image: url(img/preview/5.jpg);"><img class="play-btn" src="img/play.png" /></li>
					<li class="video-preview" id="6" style="background-image: url(img/preview/6.jpg);"><img class="play-btn" src="img/play.png" /></li>
					<li class="video-preview" id="7" style="background-image: url(img/preview/7.jpg);"><img class="play-btn" src="img/play.png" /></li>
					<li class="video-preview" id="8" style="background-image: url(img/preview/8.jpg);"><img class="play-btn" src="img/play.png" /></li>
					<li class="video-preview" id="9" style="background-image: url(img/preview/9.jpg);"><img class="play-btn" src="img/play.png" /></li>
					<li class="video-preview" id="10" style="background-image: url(img/preview/10.jpg);"><img class="play-btn" src="img/play.png" /></li>
					<li class="video-preview" id="11" style="background-image: url(img/preview/11.jpg);"><img class="play-btn" src="img/play.png" /></li>
					<li class="video-preview" id="12" style="background-image: url(img/preview/12.jpg);"><img class="play-btn" src="img/play.png" /></li>
				</ul>

				<div id="overlay">
					<div id="modal_form">
				    	<span id="modal_close"></span> 
						<div id="l-arrow"></div>
						<div id="r-arrow"></div>
						<div id="modal-ins"></div>
					</div>	
				</div>
			</div>

			<div class="team" id="team">
				<p class="team-title">Наша команда</p>
				<div class="rotator">
					<div id="rot-l-arrow"></div>
					<div id="rot-r-arrow"></div>
					<ul>
						<li class="show1" id="s101" style="background-image: url(img/bg4.jpg); opacity: 1"></li>
						<li id="s102" style="background-image: url(img/rotator/bg2.jpg); opacity: 0"></li>
						<li id="s103" style="background-image: url(img/rotator/bg3.jpg); opacity: 0"></li>
						<li id="s104" style="background-image: url(img/rotator/bg1.jpg); opacity: 0"></li>
						<li id="s105" style="background-image: url(img/rotator/bg5.jpg); opacity: 0"></li>
						<li id="s106" style="background-image: url(img/rotator/s1.jpg); opacity: 0"></li>
						<li id="s107" style="background-image: url(img/rotator/s2.jpg); opacity: 0"></li>
						<li id="s108" style="background-image: url(img/rotator/s3.jpg); opacity: 0"></li>
					</ul>
				</div>
				<div class="rotator-preview">
					<ul>
						<li class="show2" id="s201" style="background-image: url(img/bg4.jpg);"><div class="underline" style="opacity: 1"></div></li>
						<li id="s202" style="background-image: url(img/rotator/preview/bg2.jpg);"><div class="underline"></div></li>
						<li id="s203" style="background-image: url(img/rotator/preview/bg3.jpg);"><div class="underline"></div></li>
						<li id="s204" style="background-image: url(img/rotator/preview/bg1.jpg);"><div class="underline"></div></li>
						<li id="s205" style="background-image: url(img/rotator/preview/bg5.jpg);"><div class="underline"></div></li>
						<li id="s206" style="background-image: url(img/rotator/preview/s1.jpg);"><div class="underline"></div></li>
						<li id="s207" style="background-image: url(img/rotator/preview/s2.jpg);"><div class="underline"></div></li>
						<li id="s208" style="background-image: url(img/rotator/preview/s3.jpg);"><div class="underline"></div></li>
					</ul>
				</div>


				<p class="descr">
					<b>Вместе с вами мы создаем вашу Историю!</b><br /><br />
					Проживая моменты счастья и радости, невероятного позитива и незабываемых эмоций мы даже не задумываемся о том, что это моменты которые быстро проходят и остаются лишь в воспоминаниях…
					Приходит время и нам хочется пережить эти мгновения вновь… для этого есть МЫ! Мы команда видеографов <b>NERO FILMS</b>. <br /><br />
					Мы погружаемся в атмосферу вашего праздника, чтобы потом передать ее на видео…чтобы каждый кадр возвращал вам то настроение... те эмоции...
				</p>
			</div>

			<div class="contacts" id="contacts">
				<p class="cont-title">Контакты</p>
				<img style="position: absolute; left: 50%; margin-left: -250px; top: 100px;" src="img/line.png" />
				
				<p class="cont-descr">С нами можно связаться по телефонам: <br />
				<a style="color: #ff6d04; font-size: 22pt;">+79159233754 &nbsp&nbsp&nbsp +79536503483</a><br />
				Или оставьте заявку и мы с вами обязательно свяжемся!
				</p>
				<form method="POST" id="feedback-form" action="mail.php">
					<input type="text" name="nameFF" required placeholder="ИМЯ" x-autocompletetype="name">
					<input id="phone" type="tel" maxlength="15" name="messageFF" required placeholder="ТЕЛЕФОН" x-autocompletetype="tel">
					<input type="email" name="contactFF" required placeholder="E-MAIL" x-autocompletetype="email">
					<input type="submit" value="ОТПРАВИТЬ">
				</form>
			</div>

		</div>

	</body>

</html>