function Product(name, price){
	this.name = name;
	this.price = price;
	
	this.print = function(){
		return '<p>' + this.name + ': ' + this.price + '</p>';
	};
}

function Cart(){
	this.products = new Array();
	
	this.addProduct = function(p){
		this.products.push(p);
	};
	
	this.getTotalCost = function(){
		var total = 0;
		
		for(i in this.products){
			total += parseFloat(this.products[i].price);
		}
		
		return total;
	};

	this.getCount = function(){
		return this.products.length;
	};
	
	this.print = function(){
		var carthtml = '';
		
		for(i in this.products){
			carthtml += this.products[i].print();
		}
		
		return carthtml;	
	};
}

//create a cart
var cart = new Cart();

$(document).bind('pageinit', function(ev){

	$('button').on('click', function(){
		//get product name
		var n = $(this).attr('data-product-name');
		
		//get product price
		var p = $(this).attr('data-product-price');
		
		//create product object
		var prod = new Product(n, p);
		
		//add to cart
		cart.addProduct(prod);
		
		//updated cart status
		$('#cart-status').html('Total: $' + parseFloat(cart.getTotalCost()).toFixed(2));
	});
});

$(document).bind('pageshow', function(ev){
	if(ev.target.id = 'checkout'){
		$('#cart-info').html(cart.print());		
	}
});
















