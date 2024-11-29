$(document).bind('pageinit', function(ev){
	$('.start').on('click', function(){
		$('#play').css('display', 'none');
		var t = 0;
		var max = 5;
		var i = 0;
		
		t = setInterval(function(){
			console.log(new Date());
			i++;
			
			$('#status').html('Seconds = ' + i);
			
			if(i >= max){
				clearInterval(t);
				$('#status').html('Game Over');	
				$('#restart').css('display', 'inline');
			}
		}, 1000);
	});
	
	$('#restart').on('click', function(){
		$('#restart').css('display', 'none');
	});
	
});
