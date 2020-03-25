var target = 9;

$(document).bind('pageinit', function(ev){
	if(window.DeviceMotionEvent){
		window.addEventListener('devicemotion', function(eventData) {
			var z = eventData.accelerationIncludingGravity.z;
			
			$('#info').html(z.toFixed(2));
			
			if(z >= target){
				$('#winner').css('display', 'inline');
			}
		});	
	}
});
