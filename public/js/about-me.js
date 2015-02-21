

$('.arrow').click(function(){
location.reload();
});

console.log("hello");

var randomColor = Math.floor(Math.random()*16777215).toString(16);

function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.round(Math.random() * 15)];
        }
        console.log(color);
        return color;
    }

// getRandomColor();


getLinks = function(){
	$(".links").each(function(){
		$(this).css("color", getRandomColor());
	});
};

getLinks();