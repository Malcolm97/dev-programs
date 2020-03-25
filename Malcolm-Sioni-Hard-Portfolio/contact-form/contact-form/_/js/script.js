$(document).bind('pageinit', function(ev){
	$('#send').on('click', function(){
		$('#send').attr('disabled', 'disabled');								//always disable first so users can't double post
		var msg = $('#message').val();											//get the message text
		var e = $('#email').val();												//get the user's email address
		$.post('send.php', {message : msg, email : e}, function(data){			//post it to the server using script send.php with payload key:value equal to message:msg and when the server responds, call the anonymous function
			$('#contact').hide();												//hide the form controls
			$('#status').html('<p>Message sent.</p>');							//confirm that the message has been delivered
		});
	});
});
