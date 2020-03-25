var ballTop = 255;
var ballLeft = 157;

var score = 10;

var w = window.outerWidth;
var h = window.outerHeight;


$(document).bind('pageinit', function(ev)
{

if(window.DeviceMotionEvent){
		window.addEventListener('deviceorientation', function(eventData)
		{

	
		var tiltLR = eventData.gamma;
		var tiltFB = eventData.beta;
			
		ballLeft += tiltLR/7;
		ballTop += tiltFB/7;

		$('#ball').css('left', ballLeft + 'px');
		$('#ball').css('top', ballTop + 'px');
			
		if(ballLeft <= 0)
		{
			score = score  -1;
			$('#score').html('Score: ' + score);

			ballTop = 255;
			ballLeft = 157;

			if(score <= 0)
			{
				alert('Game Over');
				alert('Game Will Restart');
				location.reload();
			}
		}
	
		if(ballLeft >= w){
			score = score  -1;
			$('#score').html('Score: ' + score);

			ballTop = 255;
			ballLeft = 157;

			if(score <= 0)
			{
				alert('Game Over');
				alert('Game Will Restart');
				location.reload();		
			}

		}

		if(ballTop <= 0)
		{
			score = score  +1;
			$('#score').html('Score: ' + score);

			ballTop = 255;
			ballLeft = 157;
		}

		if(ballTop >= h)
		{
			score = score  +1;
			$('#score').html('Score: ' + score);

			ballTop = 255;
			ballLeft = 157;
		}
							
		});
	}

});

$(document).bind('pageshow', function(ev){


});