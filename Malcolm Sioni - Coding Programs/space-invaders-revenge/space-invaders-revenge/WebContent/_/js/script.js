var rocketNum = 1;
var rocketWidth = 21;
var difficulty = 10000;
var level = 1;

$(document).bind('pageinit', function(ev){
	setInterval(function(){
		var pos = parseInt(Math.random() * ($(window).width() - rocketWidth));
		
		//insert rocket into page...
		$('#game-area').append('<img id="rocket-' + rocketNum + '" src="images/rocket.gif" alt="" />');
		$('#rocket-' + rocketNum).css({
			position:		'absolute',
			left:			pos + 'px',
			bottom:			'10px'
		});
		
		$('#rocket-' + rocketNum).animate({
			bottom:			$(window).height() + 'px'
		}, difficulty);
		
		rocketNum++;
		
		if(difficulty >= 1000){
			difficulty -= 500;	
			level++;
			$('#status').html('Level ' + level);
		}		
	}, 1000);

		

});
