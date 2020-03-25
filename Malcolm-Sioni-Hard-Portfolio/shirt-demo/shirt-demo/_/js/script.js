function TShirt(desc, size, price){
	this.desc = desc;
	this.size = size;
	this.price = price;	
	
}

function Order(){
	this.shirts = new Array();
	
	this.addTShirt = function(s){
		this.shirts.push(s);
	};
	
	this.getTotal = function(){
		var total = 0;
		for(i in this.shirts){
			total += parseFloat(this.shirts[i].price);
		}
		
		return total;
	}
}




$(document).bind('pageinit', function(ev){

	var order = new Order();
	order.addTShirt(new TShirt('blue', 'M', 12.99));
	order.addTShirt(new TShirt('green', 'L', 25.00));
		
	var shirtOrder = JSON.stringify(order.shirts);
	localStorage.setItem('userorder', shirtOrder);

	if(ev.target.id == 'order'){
		$('#product-list').html('');
		
		var orderinfo = JSON.parse(localStorage.getItem('userorder'));
		
		for(i in orderinfo){
			var ord = orderinfo[i];
			
			$('#product-list').append('<li>'+ord.desc+'<p>'+ord.size+'</p></li>');
		}
		

		$('#product-list').listview('refresh');	
		
		$('#total').html('Total Order = $' + order.getTotal().toFixed(2));
	}

});

$(document).bind('pageshow', function(ev){

});