var gameOver = false;

var targetX = parseInt(Math.random() * $(window).width());
var targetY = parseInt(Math.random() * $(window).height());

var playerX = 0;
var playerY = 0;

if(targetX > $(window).width() - 100){
	targetX = $(window).width() - 100;
}

if(targetY > $(window).height() - 100){
	targetY = $(window).height() - 100;
}

$(document).bind('pageinit', function(ev){
	$('#player').css({
		position:	'absolute',
		left:		'0px',
		top:		'0px'
	});

	$('#target').css({
		position:	'absolute',
		left:		targetX + 'px',
		top:		targetY + 'px'
	});

	if(window.DeviceMotionEvent){
		window.addEventListener('deviceorientation', function(eventData){

			if(!gameOver){

				var tiltLR = eventData.gamma;
				var tiltFB = eventData.beta;

				playerX += tiltLR;
				playerY += tiltFB;

				$('#player').css({
					left:		playerX + 'px',
					top:		playerY + 'px'
				});

				if(playerX + 100 >= targetX && playerX <= targetX + 100){
					if(playerY + 100 >= targetY && playerY <= targetY + 100){
						$('#status').html('Game Over');
						gameOver = true;
					}
				}

			}
		});
	}

});
