$(document).bind('pageinit', function(ev){
	$('#order').on('click', function(){
		var car = $('#selected-car').val();
		var quantity = $('#quantity').val();
		
		localStorage.setItem('car-data', car);
		localStorage.setItem('quantity-data', quantity);
	});
	
	
	if(ev.target.id == 'confirmation'){
		$('#order-info').html('Your order for ' + localStorage.getItem('quantity-data') + ' ' + localStorage.getItem('car-data') + ' has been processed.');
	}
});