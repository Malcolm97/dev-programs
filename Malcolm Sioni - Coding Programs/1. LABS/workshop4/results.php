<?php

	//connect to db
	$dbname = 'qibtdev02';
	$link = mysql_connect('182.50.133.173', 'qibtdev02', 'dev02@DATABASE') or die('Error connecting');
	$db = mysql_select_db($dbname, $link) or die('Error selecting database');

	//run query
	$result = mysql_query('SELECT * FROM siomdd1601_contact WHERE first_name; last_name; phone') or die(mysql_error());
	$num = mysql_num_rows($result);

	//get query results

		list($contact_id, $first_name, $last_name, $phone) = mysql_fetch_row($result);
		print('<li><p>First Name: '.$first_name.'</p><p>Last Name: '.$last_name.'</p><p>Phone: '.$phone.'</p></li>');

	if($num == 0){
		print('Contact found.');
	}

?>
