$(document).bind('pageinit', function(ev){
	$('.play').on('click', function()
	{
		var track = $(this).attr('data-track');

		$('#player').html('<audio autoplay><source src="' + track + '" type="audio/mpeg" /></audio>');
	});
});

$(document).bind('pageshow', function(ev){

});