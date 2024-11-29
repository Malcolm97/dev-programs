$(document).bind('pageinit', function(ev){
	if(window.DeviceMotionEvent){
		window.addEventListener('deviceorientation', function(eventData){
			var tiltLR = eventData.gamma;
			var tiltFB = eventData.beta;
			var dir = eventData.alpha;
	
			$('#gamma').html('Tilt LR = ' + tiltLR.toFixed(2) + '&deg;');				
			$('#beta').html('Tilt FB = ' + tiltFB.toFixed(2) + '&deg;');				
			$('#alpha').html('Direction = ' + dir.toFixed(2) + '&deg;');				
			
		});
		
		
		window.addEventListener('devicemotion', function(eventData){
			var x = eventData.accelerationIncludingGravity.x;
			var y = eventData.accelerationIncludingGravity.y;
			var z = eventData.accelerationIncludingGravity.z;			
			
			$('#x').html('X = ' + x.toFixed(2) + 'm/s<sup>2</sup>');
			$('#y').html('Y = ' + y.toFixed(2) + 'm/s<sup>2</sup>');
			$('#z').html('Z = ' + z.toFixed(2) + 'm/s<sup>2</sup>');
		});
		
	}else{
		//display no accelerometer message...
	}
});