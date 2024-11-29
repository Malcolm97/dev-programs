var celebx = 400;
var celeby = 400;

var targetx = 0;
var targety = 0;

var speed = 2	//1 = slow, 10 = fast

var level = 750;

$(document).bind('pageinit', function(ev){
	var celebw = '100';
	var celebh = '120';
	var t = 0;

	$('#celeb').css('left', celebx);
	$('#celeb').css('top', celeby);

	
	t = setInterval(function(){
		
		celebx = Math.random() * $(window).width();
		celeby = Math.random() * $(window).height();
		
		$('#celeb').css('left', celebx);
		$('#celeb').css('top', celeby);
	}, level);
	
	
	if(window.DeviceMotionEvent){
		window.addEventListener('deviceorientation', function(eventData){
			var tiltLR = eventData.gamma;
			var tiltFB = eventData.beta;
			
			targetx += (tiltLR * speed / 10);
			targety += (tiltFB * speed / 10);
			
			$('#target').css('left', targetx + 'px');
			$('#target').css('top', targety + 'px');
			
			$('#debug').html('Tx = ' + targetx + '<br />Ty = ' + targety + '<br />Cx = ' + celebx + '<br />Cy = ' + celeby + '<br />Cw = ' + celebw + '<br />Ch = ' + celebh);
			
			if(targetx >= celebx && targetx <= celebx + celebw){
				
				if(targety >= celeby && targety <= celeby + celebh){
					//collision...
					$('#status').html('BOOM.. headshot');
					clearInterval(t);
					$('#info').html('Game Over');
				}else{
					$('#status').html('');
				}
			}
		});
	}
	
});
