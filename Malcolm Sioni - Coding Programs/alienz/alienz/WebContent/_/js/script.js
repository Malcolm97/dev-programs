var goodguyX = 0;
var goodguyY = 0;
var baseX = 0;
var baseY = 0;
var tolerance = 5;
var speed = 10;
var objectWidth = 80;
var objectHeight = 80;
var numBadGuys = 7;
var badGuyArray = new Array();
var gameOver = false;

function BadGuy(id){
	this.x = parseInt(Math.random() * ($(window).width() - objectWidth));
	this.y = parseInt(Math.random() * ($(window).height()- objectHeight));	
	this.id = id;
	
	this.init = function(){
		var i = document.createElement('img');
		i.setAttribute('id', 'badguy' + this.id);
		i.setAttribute('src', 'images/badguy.png');
		i.setAttribute('style', 'position: absolute; left: ' + this.x + 'px; top: ' + this.y + 'px;');
		$('body').append(i);
	}
}

$(document).bind('pageinit', function(ev){
	for(var j = 0; j < numBadGuys; j++){
		var b = new BadGuy(j);
		b.init('badguy' + j);
		badGuyArray.push(b);
	}
	
	baseX = parseInt(Math.random() * ($(window).width() - objectWidth));
	baseY = parseInt(Math.random() * ($(window).height()- objectHeight));	
	$('#base').css('left', baseX + 'px');
	$('#base').css('top', baseY + 'px');
	
	$('#replay').hide();  	

	if(window.DeviceMotionEvent){
		window.addEventListener('deviceorientation', function(eventData) {
			//get data from accelerometer
			var leftright = eventData.gamma;
			var frontback = eventData.beta;
			
			//move the good guy
			if(!gameOver){
				if(leftright > tolerance){
					goodguyX += speed;
				}else if(leftright < -tolerance){
					goodguyX -= speed;
				}
				
				if(frontback > tolerance){
					goodguyY += speed;
				}else if(frontback < -tolerance){
					goodguyY -= speed;
				}
				
				$('#goodguy').css('left', goodguyX + 'px');	
				$('#goodguy').css('top', goodguyY + 'px');
			}else{
				//game over
				$('#goodguy').fadeOut(500);
			}
			
			//detect collision with bad guy		
			for(k in badGuyArray){
				var b = badGuyArray[k];
				
				if((goodguyX + objectWidth >= b.x && goodguyX <= b.x + objectWidth) &&
				   (goodguyY + objectHeight >= b.y && goodguyY <= b.y + objectHeight)){
				   //$('#badguy' + k).fadeOut(500);
				   $('#message').html('GAME OVER: You were sucked into a black hole...');				   				   
				   $('#replay').show();
				   gameOver = true;				   
				}
			}
			
			
			//detect landing on base
			if((baseX + objectWidth >= goodguyX && baseX <= goodguyX + objectWidth) &&
				   (baseY + objectHeight >= goodguyY && baseY <= goodguyY + objectHeight)){
				   $('#message').html('Congratulations - you landed safely...');
				   $('#replay').show();
				   gameOver = true;				   
			}

		});
	}	


	
	$('#replay').on('click', function(){
		parent.location.href = 'index.html';
	});	
	
});
