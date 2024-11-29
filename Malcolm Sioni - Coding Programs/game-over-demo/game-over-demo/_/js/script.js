$(document).bind('pageinit', function(ev){
	$('#start').on('click', function(){
		var time = 100;
		var t = 0;
		
		t = setInterval(function(){
			time--;
			$('#info').html((time / 10).toFixed(1));
			
			if(time == 0){
				clearInterval(t);
				//display game over
				
				$('#gameover').animate({
					opacity:  '1',
					top:	  '+=200'
				}, 4000, function(){
					//do this after the animation is complete..
				});
			}
		}, 100);
	});
});
