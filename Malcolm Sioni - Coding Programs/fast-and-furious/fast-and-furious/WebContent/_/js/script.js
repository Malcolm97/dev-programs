var scrollSpeed = 7.25;
var acceleration = 50;
var redCarLeft = $(window).width() / 2;

function startScroll(){
	var posY = 0;
	
	setInterval(function(){
		posY += scrollSpeed;
		$('#road').css('background-position', '0px ' + posY + 'px');
	}, 60);
}

$(document).bind('pageinit', function(ev){
	
	
	$('#play').on('click', function(){
		startScroll();
		$('.dimmable').css('opacity', '0.7');
		$('.dimmable').attr('disabled', 'disabled');		
	});
	
	$('#go-faster').on('mousedown', function(){
		scrollSpeed += acceleration;
	});
	
	$('#go-faster').on('mouseup', function(){
		scrollSpeed -= acceleration;
	});
	
	if(window.DeviceMotionEvent){
		window.addEventListener('deviceorientation', function(eventData){
			var tiltLR = eventData.gamma;					
			
			redCarLeft += tiltLR;
			
			if(redCarLeft > 0 && redCarLeft < $(window).width() - 128){
				$('#red-car').css('left', redCarLeft + 'px');	
			}
			
			if(redCarLeft <= 0){
				redCarLeft = 10;
				$('#red-car').css('left', redCarLeft + 'px');
			}

			if(redCarLeft >= $(window).width() - 128){
				redCarLeft = $(window).width() - 128 - 10;
				$('#red-car').css('left', redCarLeft + 'px');
			}

			
		});
	}
});
