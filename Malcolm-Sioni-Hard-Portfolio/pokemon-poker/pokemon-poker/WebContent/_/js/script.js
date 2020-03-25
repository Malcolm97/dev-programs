var max = 16;
var money = 100;

$(document).bind('pageinit', function(ev){
	$('#bet').on('click', function(){
		if(money > 0){
			var num1 = parseInt(Math.random() * max) + 1;	//number from 1 to 16
			var num2 = parseInt(Math.random() * max) + 1;	//number from 1 to 16
			var num3 = parseInt(Math.random() * max) + 1;	//number from 1 to 16
			
			$('#slot-1').html('<img src="images/'+ num1 +'.png" alt />');
			$('#slot-2').html('<img src="images/'+ num2 +'.png" alt />');
			$('#slot-3').html('<img src="images/'+ num3 +'.png" alt />');
			
			if(num1 == num2 && num2 == num3){
				//jackpot
				money += 50;
			}else{
				money -= 2;
			}
			
			$('#info').html('You have: $' + money);
		}else{
			$('#info').html('Get out of the Casino');
		}
		
	});
});
