function Pet(name, type){
	this.name = name;
	this.type = type;
	
	this.info = function(){
		return this.name + ', ' + this.type;
	}
}



$(document).bind('pageinit', function(ev){
		var pets = new Array();
	
	pets.push(new Pet('boon', 'Dog'));
	pets.push(new Pet('josh', 'Cat'));
	pets.push(new Pet('josh', 'Fish'));
	pets.push(new Pet('jacob', 'Parrot'));
	pets.push(new Pet('wally', 'Turtle'));
	pets.push(new Pet('ashley', 'Tiger'));
	pets.push(new Pet('lance', 'Goldfish'));
	
	var j = JSON.stringify(pets);
	
	console.log(j);
	
});

$(document).bind('pageshow', function(ev){

});