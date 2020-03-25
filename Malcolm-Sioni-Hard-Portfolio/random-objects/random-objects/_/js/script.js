$(document).bind('pageinit', function(ev){
	$('#play').on('click', function(){
		var i = 0;
		
		setInterval(function(){
			
			if(i % 300 == 0){
			
				var randLeft = (Math.random() * $(window).width()) - 200;
				if(randLeft <= 0){
					randLeft += 200;
				}
				
				var obj = '<img style="left:' + randLeft + 'px" src="images/bomb.png" alt class="bomb" id="obj-' + i + '" />';
				$('#game').append(obj);
				
				
			}
			
			i++;

			$('.bomb').css('top', '+=1');
		}, 5);
		
		
	});
});
