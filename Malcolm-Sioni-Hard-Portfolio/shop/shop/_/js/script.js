function Product(description, price){
	this.description = description;
	this.price = price;
}

var cart = new Array();

$(document).bind('pageinit', function(ev){
	$('.buy').on('click', function(){
		var p = $(this).attr('data-price');
		var d = $(this).attr('data-description');
		
		var prod = new Product(d, p);
		cart.push(prod);
		
		var total = 0;
		
		for(i in cart){
			total += parseFloat(cart[i].price);
		}
		
		$('#checkout').html('Cart Total $' + total.toFixed(2));
		
		var j = JSON.stringify(cart);
		localStorage.setItem('cart', j);
	});
});

$(document).bind('pageshow', function(ev){
	var j = localStorage.getItem('cart');
	var arr = JSON.parse(j);
	
	var total = 0;
		
	for(i in arr){
		total += parseFloat(arr[i].price);
	}

	$('#info').html('<p>Items = ' + arr.length + '</p><p>Total = $' + total.toFixed(2) + '</p>');
});