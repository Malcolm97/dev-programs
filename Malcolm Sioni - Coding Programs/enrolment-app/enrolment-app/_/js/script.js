$(document).bind('pageinit', function(ev){
	$('#run-query').on('click', function(){
		//grab input
		var courseId = $('#course-id').val();
		var mark = $('#mark').val();
		
		//send to php script
		$.get('search.php', {thecourse : courseId, themark : mark}, function(data){
			//display results in data
			$('#results').html(data);
		});
		

	});
});
