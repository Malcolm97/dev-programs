var chopperTop = 0;


$(document).bind('pageinit', function(ev){
	if(window.DeviceMotionEvent)
	{
		window.addEventListener('deviceorientation', function(eventData)
		{
			var tiltFB = eventData.beta;
			chopperTop += (tiltFB /10);
			
			
			if(chopperTop > 0)
			{
				$('#chopper').css('top', chopperTop + 'px');
			}else if(chopperTop <= 0)
			{
				chopperTop += 10;
				$('#chopper').css('top', chopperTop + 'px');
			}else if(chopperTop > $(window).height())
			{
				
			}
		});
	}
});

$(document).bind('pageshow', function(ev){

	var posY = 0;
	
	setInterval(function()
	{
		$('#level').css('backgroundPosition', posY + 'px');
		posY--;
	}, 10);
});