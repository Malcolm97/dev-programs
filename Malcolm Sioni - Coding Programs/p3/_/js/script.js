var slideIndex = 0;

showSlides();


function showSlides() {
		var i;
		var slides = document.getElementsByClassName("mySlides");
		var dots = document.getElementsByClassName("dot");
		for (i = 0; i < slides.length; i++) {
			 slides[i].style.display = "none";
		}
		slideIndex++;
		if (slideIndex> slides.length) {slideIndex = 1}
		for (i = 0; i < dots.length; i++) {
				dots[i].className = dots[i].className.replace(" active", "");
		}
		slides[slideIndex-1].style.display = "block";
		dots[slideIndex-1].className += " active";
		setTimeout(showSlides, 2000); // Change image every 2 seconds
}

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

	$('#checkout1').html('$' + total.toFixed(2));
	$('#checkout2').html('$' + total.toFixed(2));
	$('#checkout3').html('$' + total.toFixed(2));
	$('#checkout4').html('$' + total.toFixed(2));
	$('#checkout5').html('$' + total.toFixed(2));

	var j = JSON.stringify(cart);
	localStorage.setItem('cart', j);
});


	//search db for pokemon and display in the list
	$.get('prejudice.php', function(data){
		$('#price').html(data);
		$('#price').listview('refresh');

		$('#item').html(data);
		$('#item').listview('refresh');

		$('#name').html(data);
		$('#name').listview('refresh');
		});
});


$(document).bind('pageshow', function(ev){
	var j = localStorage.getItem('cart');
	var arr = JSON.parse(j);

	var total = 0;

	for(i in arr){
		total += parseFloat(arr[i].price);
	}

	$('#info').html('<li>TOTAL CART: ' + total.toFixed(2) + ' AUD</p>');
	$('#cart1').html('<p>Your total cart is: ' + total.toFixed(2) + ' AUD</p>');
	$('#items').html('<p>Items: ' + arr.length + '</p>');

	$('#order').on('click', function(){
			var cart = $('#cart').val();

			var name = $('#name').val();
			var phone = $('#phone').val();
			var email = $('#email').val();
			var snumber = $('#snumber').val();
			var street = $('#street').val();
			var postcode = $('#postcode').val();

			localStorage.setItem('cart-data', cart);

			localStorage.setItem('name-data', name);
			localStorage.setItem('phone-data', phone);
			localStorage.setItem('email-data', email);
			localStorage.setItem('snumber-data', snumber);
			localStorage.setItem('street-data', street);
			localStorage.setItem('postcode-data', postcode);
	});


	if(ev.target.id == 'confirmation'){
			$('#cart-info').html('Your total cart is: $' + localStorage.getItem('cart-data') + ' ' + 'AUD');

			$('#name-info').html('Name: ' + localStorage.getItem('name-data'));
			$('#phone-info').html('Phone: ' + localStorage.getItem('phone-data'));
			$('#email-info').html('Email: ' + localStorage.getItem('email-data'));
			$('#snumber-info').html('Street Number: ' + localStorage.getItem('snumber-data'));
			$('#street-info').html('Street: ' + localStorage.getItem('street-data'));
			$('#postcode-info').html('Postcode: ' + localStorage.getItem('postcode-data'));
		}
});
