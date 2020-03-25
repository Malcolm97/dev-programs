$(document).bind('pageinit', function(ev){
	$('#add-student').on('click', function(){
		$.post('add-student.php', {studentId: $('#student-id').val(), lastName: $('#last-name').val(), firstName: $('#first-name').val(), type: $('#type').val(), country: $('#country').val(), grade: $('#grade').val()}, function(data){
			$('#status').html(data);
		});
	});
});
