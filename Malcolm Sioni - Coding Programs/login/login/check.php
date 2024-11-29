<?php
	
	$u = $_POST['username'];
	$p = $_POST['password'];
	
	if($u == 'rob' && $p == '123'){		
		print('ok');
	}else{
		print('not registered');
	}
?>