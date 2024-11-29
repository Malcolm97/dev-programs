var ballx = 0;
var bally = 0;


$(document).bind('pageinit', function(ev){
	if(window.DeviceMotionEvent){
		
		window.addEventListener('deviceorientation', function(eventData) {
			var tiltLR = eventData.gamma;
			var tiltFB = eventData.beta;
			
			ballx = ballx + tiltLR;
			bally = bally + tiltFB;
			
			$('#ball').css('left', ballx + 'px');
			$('#ball').css('top', bally + 'px');
		});
		
	}
});
