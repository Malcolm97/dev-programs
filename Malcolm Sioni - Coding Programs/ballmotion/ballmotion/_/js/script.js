var ballLeft = 200;
var ballTop = 200;

$(document).bind('pageinit', function(ev){
	
	if(window.DeviceMotionEvent){
		window.addEventListener('deviceorientation', function(eventData){

			var tiltLR = eventData.gamma;
			var tiltFB = eventData.beta;
			
			ballLeft += tiltLR;
			ballTop += tiltFB;
			
			$('#ball').css('left', ballLeft + 'px');
			$('#ball').css('top', ballTop + 'px');
			
			if(ballLeft <= 0){
				alert('Game Over');
			}
		});
	}
});
