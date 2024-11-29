<?php
	
	$u = $_POST['username'];
	$p = $_POST['password'];
	
	if($u == 'mal' && $p == '123'){		
		print('ok');
	}else{
		print('not registered');
	}
?>