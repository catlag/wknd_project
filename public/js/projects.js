

$('img').mouseenter(function(){
	var elem = $(this).parent().prev();
	elem.show(1000);
});

$('.description').mouseleave(function(){
	$(this).fadeOut("slow");
}
);