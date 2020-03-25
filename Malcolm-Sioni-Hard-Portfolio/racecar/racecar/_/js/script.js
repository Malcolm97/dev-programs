$(document).bind('pageinit', function(ev){
	var left = 0;
	
	$('#car').css('left', left + 'px');
	
	if(window.DeviceMotionEvent){
		window.addEventListener('deviceorientation', function(eventData){
			var tiltLR = eventData.gamma;
			
			left = left + tiltLR;

			if(left >= 0){			
				$('#car').css('left', left + 'px');							
			}
		});
	}
});
