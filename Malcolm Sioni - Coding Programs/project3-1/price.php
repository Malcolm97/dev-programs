<?php

	//connect to db
	$dbname = 'qibtdev02';
	$link = mysql_connect('182.50.133.173', 'qibtdev02', 'dev02@DATABASE') or die('Error connecting');
	$db = mysql_select_db($dbname, $link) or die('Error selecting database');

	//run query
	$result = mysql_query('SELECT * FROM SIOMDD1601_Prejudice') or die(mysql_error());
	$num = mysql_num_rows($result);

	//get query results

		list($prejudice_id, $name, $price, $items) = mysql_fetch_row($result);
		print('<li><p>Items: '.$items.'</p></li>');
    print('<li><p>$'.$price.'</p></li>');

	if($num == 0){
		print('Item cannot be found.');
	}

?>
