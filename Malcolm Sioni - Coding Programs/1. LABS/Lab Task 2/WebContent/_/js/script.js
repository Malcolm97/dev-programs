var ballTop = 0;
var ballLeft = 0;
var ballBottom = 0;
var ballRight = 0;

var h = window.innerHeight();
var w = window.innerWeight();


var score = 10;


$(document).bind('pageinit', function(ev){
	if(window.DeviceMotionEvent)
	{
		window.addEventListener('deviceorientation', function(eventData)
		{				
				var tiltLR = eventData.gamma;
				var tiltFB = eventData.beta;
				
				ballLeft += (tiltLR /7);
				ballTop += (tiltFB /7);
				
				$('#ball').css('left', ballLeft + 'px');
				$('#ball').css('top', ballTop + 'px');
				
				
				if(ballLeft <= 0)
				{
					alert("Edge");
					
				}
				
				if(ballRight >= w)
				{
					alert("Edge");
					
				}
				
				
				if(ballTop <= 0)
				{
					alert("Edge");
				}

				if(ballBottom >= h)
				{
					alert("Edge");
				}
				$("#score").html("points = " + point);

			/*
			
			var tiltV = eventData.beta;
			ballV += (tiltV /10);
			
			var tiltH = eventData.gamma;
			ballH += (tiltH /10);
			
			if(ballV > 0)
			{
				$('#ball').css('top', ballV + 'px');
			}else if(ballV <= 0)
			{
				ballV += 10;
				$('#ball').css('top', ballV + 'px');
			}else if(ballV > $(window).height())
			{				
			}
		
					
			if(ballH > 0)
			{
				$('#ball').css('left', ballH + 'px');
			}else if(ballH <= 0)
			{
				ballH -= 10;
				$('#ball').css('left', ballH + 'px');
			}else if(ballH > $(window).height())
			{							
		   	}

			*/					
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