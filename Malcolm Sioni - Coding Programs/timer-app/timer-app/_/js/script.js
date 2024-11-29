$(document).bind('pageinit', function(ev){
	var i = 10;
	var t = 0;

	$('#start').on('click', function(){
		t = setInterval(function(){
			i--;
			$('#timer').html(i + ' seconds');
			
			if(i == 0){
				i = 0;
				clearInterval(t);			
				$('#timer').html('GAME OVER');
			}
		}, 1000);		
	});	
	
	$('#stop').on('click', function(){
		i = 0;
		clearInterval(t);
	});
});
