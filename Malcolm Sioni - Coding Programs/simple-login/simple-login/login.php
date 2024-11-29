<?php
	session_start();
	
	$correct_password = 'abc123';
	
	$submitted_password = $_POST['password'];
	
	if($submitted_password == $correct_password){
		$_SESSION['legit'] = true;
		
		header('Location: main.php');
	}else{
		print('Password incorrect. Please <a href="login.html">login</a> again.');
	}
?>