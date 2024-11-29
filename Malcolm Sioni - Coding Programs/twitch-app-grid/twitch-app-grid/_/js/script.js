var numCols = 4;
var numRows = 5;
var cols = 'abcde';

$(document).bind('pageinit', function(ev){
	$('#matches').attr('class', 'ui-responsive ui-grid-' + cols.charAt(numCols - 2));
	
	$('#search').on('keydown', function(keyEvent){
		if(keyEvent.which == 13){
			var game = $('#search').val().trim().replace(" ", "+");
			$('#matches').html('');
			
			$.getJSON('https://api.twitch.tv/kraken/videos/top?game=' + game + '&period=all&limit=' + (numCols * numRows), function(data){
				for(i in data.videos){

					var preview = data.videos[i].preview;						
					var animatedPreview = data.videos[i].animated_preview;
					var title = data.videos[i].title;
					var url = data.videos[i].url;
					
/*
					var name = data.videos[i].channel.name;
					var description = data.videos[i].description;
*/
					
					var match = '<div class="ui-block-' + cols.charAt(i % numCols) + '"><a target="_blank" href="' + url + '"><img class="preview" src="' + animatedPreview + '" alt title="' + title + '"/></a>'
// 					 + '<br />' + name + '<br />' + title + '<br />' + description + '</div>';
					$('#matches').append(match);
					
				}
			});
			
		}
	});	
		
});