$(document).bind('pageinit', function(ev){
	
	$('#search').on('keydown', function(keyEvent){
		$('#results').html('');
		if(keyEvent.keyCode == 13){
			var game = $('#search').val();
			
			$.getJSON('https://www.youtube.com/iframe_api' + game + '&period=all&limit=20', function(data){
				for(var i = 0; i <data.videos.length; i++){
					$('#results').append('<li><a href="' + data.videos[i].url + '"><img src="' + data.videos[i].thumbnails[0].url + '" alt /><h3>' + data.videos[i].title + '</h3></a></li>');
				}
				
				$("#results").listview('refresh');
			});			
		}
	});
});
