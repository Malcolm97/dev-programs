$(document).bind('pageinit', function(ev){
	$('#library a').on('click', function(){
		$.post("http://qibt.it/demo/updateplaylist.php", { track: $(this).attr('data-track') }, function(data) {
		  alert( "Data Loaded: " + data );
		});
	});
});

$(document).bind('pageshow', function(ev){

});