var maxSpiders = 10;
var maxInterval = 5000;

$(document).bind('pageinit', function(ev){
	$('#play').on('click', function(){
		$('#game').html('');
		var t;

		var i = 0;
		t = setInterval(function(){
			$('#game').append('<img id="spider-' + i + '" src="images/spider.png" alt="" />');
			$('#spider-' + i).css({
				position: 'absolute',
				left: ($(window).width() * Math.random()) + 'px',
				top: ($(window).height() * Math.random()) + 'px'
			});	
			
			i++;
			
			if(i >= maxSpiders){
				clearInterval(t);
			}
		}, Math.random() * maxInterval);			
	});
});

$(document).bind('pageshow', function(ev){

});