var size = 100;
var numEnemies = 5;

function Enemy(){
	this.posX = (Math.random() * ($(window).width() - size));
	this.posY = (Math.random() * ($(window).height() - size));
}


function Player(){
	this.posX = (Math.random() * ($(window).width() - size));
	this.posY = (Math.random() * ($(window).height() - size));
}

function Base(){
	this.posX = (Math.random() * ($(window).width() - size));
	this.posY = (Math.random() * ($(window).height() - size));
}


var swarm = new Array();



$(document).bind('pageinit', function(ev){
	//create enenies...
	for(var i = 0; i < numEnemies; i++){
		var e = new Enemy();
		swarm.push(e);
		
		$('#space').append('<img src="images/enemy.gif" alt="" style="position: absolute; left: ' + e.posX + 'px; top: ' + e.posY + 'px;"/>');
	}
	
	//create player...
	var p = new Player();
	$('#space').append('<img id="player" src="images/player.png" alt="" style="position: absolute; left: ' + p.posX + 'px; top: ' + p.posY + 'px;"/>');
	
	//create base...
	var b = new Base();
	$('#space').append('<img src="images/base.png" alt="" style="position: absolute; left: ' + b.posX + 'px; top: ' + b.posY + 'px;"/>');
	
	
	if(window.DeviceMotionEvent){
		window.addEventListener('deviceorientation', function(orientationEvent){
			var tiltLR = orientationEvent.gamma;
			var tiltFB = orientationEvent.beta;
			
			$('#player').css({
				left:		'+=' + tiltLR + 'px',
				top:		'+=' + tiltFB + 'px',
			});
			
			p.posX = parseFloat($('#player').css('left'));
			p.posY = parseFloat($('#player').css('top'));
			
			
			//check for base collision...
			if(p.posX + size >= b.posX){
				//console.log('player right side >= base left');
				if(p.posX <= b.posX + 100){
					//console.log('player left side <= base right');
					if(p.posY <= b.posY + 100){
						//console.log('player top <= base bottom');	
						if(p.posY + 100 >= b.posY){
							//console.log('player bottom >= base top');	
							$('#status').html('Game Over - You Won!');
							//play a sound
							
							numEnemies += 5;
							
							//refresh..
						}
					}
				}
			}
			
			
			//check for enemy collision...
			for(i in swarm){
				var e = swarm[i];
				if(p.posX + size >= e.posX){
					//console.log('player right side >= enemy left');
					if(p.posX <= e.posX + 100){
						//console.log('player left side <= enemy right');
						if(p.posY <= e.posY + 100){
							//console.log('player top <= enemy bottom');	
							if(p.posY + 100 >= e.posY){
								//console.log('player bottom >= enemy top');	
								$('#status').html('Game Over - You Lose!');
							}
						}
					}
				}
				
			}
			
			
			
		});
		
	}

});

$(document).bind('pageshow', function(ev){

});