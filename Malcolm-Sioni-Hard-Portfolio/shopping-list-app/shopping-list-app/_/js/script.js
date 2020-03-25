$(document).bind('pageinit', function(ev){
	$('#add-to-cart').on('click', function(){
		var i = $('#item').val().trim();
		if(i != ''){
			//go ahead and submit to db via php script..			
			$.post('add-item.php', {item: i}, function(data){
				console.log(data);
			});
		}
	});
});
