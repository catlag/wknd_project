$(document).ready(function(){

    $('.box').addClass('animated bounceIn');
});

	$('.img1').click(function(){
		$('#box2, #box3, #box4, #box5, #box6, #box7, #box8, #box9').addClass('animated fadeOut'),
		$('.covervid-wrapper').removeClass("hidden"),
		$(".vid > p").replaceWith("<iframe width='100%' height='100%'  class='cover-vid-video' src='//www.youtube.com/embed/IR-l_TSjlEo?rel=0&amp;showinfo=0' frameborder='0' allowfullscreen></iframe>").fadeIn(900),
		$('.arrow').removeClass("hidden");
	});

	$('.img1').mouseenter(function(){
		removeClass($('.information > p'));
		var line1_content = $('.line1 > p ').text();
		$('.information > p').text(line1_content).addClass('animated fadeIn');
	});


	$('.img2, .img3').click(function(){
			$('#box1, #box4, #box5, #box6, #box7, #box8, #box9').addClass('animated fadeOut'),
		$('.covervid-wrapper').removeClass("hidden"),
		$(".vid > p").replaceWith("<iframe width='100%' height='100%' class='cover-vid-video' src='//www.youtube.com/embed/ZrXrZ5iiR0o?rel=0&amp;showinfo=0' frameborder='0' allowfullscreen></iframe>").fadeIn(900),
		$('.arrow').removeClass("hidden");	
	});

		$('.img2, .img3').mouseenter(function(){
		removeClass($('.information > p'));
		var line2_content = $('.line2 > p ').text();
		$('.information > p').text(line2_content);
	});


	$('.img4, .img5, .img6').click(function(){
			$('#box1, #box2, #box3, #box7, #box8, #box9').addClass('animated fadeOut'),
		$('.covervid-wrapper').removeClass("hidden"),
		$(".vid > p").replaceWith("<iframe width='100%' height='100%' class='cover-vid-video' src='//www.youtube.com/embed/OwCatikaHNM?rel=0&amp;showinfo=0' frameborder='0' allowfullscreen></iframe>").fadeIn(900),
		$('.arrow').removeClass("hidden");
		
	});

	$('.img4, .img5, .img6').mouseenter(function(){
		removeClass($('.information > p'));
		var line3_content = $('.line3 > p ').text();
		$('.information > p').text(line3_content);
	});


	$('.img7, .img8').click(function(){
			$('#box1, #box2, #box3, #box4, #box5, #box6, #box9').addClass('animated fadeOut'),
		$('.covervid-wrapper').removeClass("hidden"),
		$(".vid > p").replaceWith("<iframe width='100%' height='100%' class='cover-vid-video' src='//www.youtube.com/embed/poDO86TgXPA?rel=0&amp;showinfo=0' frameborder='0' allowfullscreen></iframe>").fadeIn(900),
		$('.arrow').removeClass("hidden");
		
	});

	$('.img7, .img8').mouseenter(function(){
		removeClass($('.information > p'));
		var line4_content = $('.line4 > p ').text();
		$('.information > p').text(line4_content);
	});


	$('.img9').click(function(){
			$('#box1, #box2, #box3, #box4, #box5, #box6, #box7, #box8').addClass('animated fadeOut'),
		$('.covervid-wrapper').removeClass("hidden"),
		$(".vid > p").replaceWith("<iframe width='100%' height='100%' class='cover-vid-video' src='//www.youtube.com/embed/cIpD7V4cG9c?rel=0&amp;showinfo=0' frameborder='0' allowfullscreen></iframe>").fadeIn(900),
		$('.arrow').removeClass("hidden");
		
	});

	$('.img9').mouseenter(function(){
		removeClass($('.information > p'));
		var line5_content = $('.line5 > p ').text();
		$('.information > p').text(line5_content);
	});


	$('.img1, .img2, .img3, .img4, .img5, .img6, .img7, .img8, .img9').mouseleave(function(){
		$('.information > p').addClass('animated fadeOut');
		});


	removeClass = function(txt){
		txt.removeClass('animated fadeIn fadeOut');
	};

	$('.arrow').click(function(){
		location.reload();
	});