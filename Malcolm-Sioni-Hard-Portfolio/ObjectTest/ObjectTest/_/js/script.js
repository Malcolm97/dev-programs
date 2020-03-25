function Order(){
	this.totalAmt = 0;
	this.items = new Array();
	
	this.getTotalCost = function(){
		return (this.totalAmt * 1.1).toFixed(2);
	};
	
	this.addItem = function(item, cost){
		this.totalAmt += cost;
		this.items.push(item);
	};
}

$(document).bind('pageinit', function(ev){
	var robsOrder = new Order();
	robsOrder.addItem('coffee', 4.20);
	robsOrder.addItem('water', 2.50);
	
	console.log(robsOrder.getTotalCost());
});

$(document).bind('pageshow', function(ev){

});


