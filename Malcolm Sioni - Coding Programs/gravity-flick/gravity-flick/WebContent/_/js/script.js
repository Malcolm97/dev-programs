$(document).bind('pageinit', function(ev){
	if(window.DeviceMotionEvent){
		console.log("DeviceMotionEvent supported");
		
		window.addEventListener('deviceorientation', function(eventData) {
			var tiltLR = eventData.gamma;
			var tiltFB = eventData.beta;
			
	
		});

		window.addEventListener('devicemotion', function(eventData) {
			var x = eventData.accelerationIncludingGravity.x;
			var y = eventData.accelerationIncludingGravity.y;
			var z = eventData.accelerationIncludingGravity.z;
			
			if((x <= 0 && x >= -1) && (z <= -4 && z >= -6)){
				if(y < -1){
					//move a ball..
					$('#ball').animate({
						bottom:		'+=200'
					}, 1000);
				
				}
			}
		});
	
	
	}
});