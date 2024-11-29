$(document).bind('pageinit', function(ev){
	//search db for pokemon and display in the list
	$.get('search.php', function(data){
		$('#pokedex').html(data);
		$('#pokedex').listview('refresh');
	});
	
});
