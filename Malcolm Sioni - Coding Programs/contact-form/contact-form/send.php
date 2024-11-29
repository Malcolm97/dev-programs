<?php
	$msg = $_POST['message'];								//get the posted message using the key
	$subject = 'web site message';							//create subject line and other header fields for the email
	$from = $_POST['email'];
	$to = 'rob.baltrusch@gmail.com';
	$headers = 'From: ' . $from . "\r\n" . 'Reply-To: ' . $to . "\r\n" . 'X-Mailer: PHP/' . phpversion();
	mail($to, $subject, $msg, $headers);					//send the email	
?>