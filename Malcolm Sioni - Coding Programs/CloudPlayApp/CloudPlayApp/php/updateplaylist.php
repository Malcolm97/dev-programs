<?php
	$track = $_POST['track'];
	
	$fp = fopen('data.txt', 'a');
	fwrite($fp, $track . "\n");	
	fclose($fp);

?>