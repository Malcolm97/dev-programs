<?php

	//connect to db
	$dbname = 'qibtdev02';
	$link = mysql_connect('182.50.133.173', 'qibtdev02', 'dev02@DATABASE') or die('Error connecting');
	$db = mysql_select_db($dbname, $link) or die('Error selecting database');
	
	//run query
	$result = mysql_query('SELECT * FROM abcd1602_Pokemon') or die(mysql_error());
	$num = mysql_num_rows($result);
	
	//get query results
	for($i = 0; $i < $num; $i++){
		list($pokemon_id, $name, $damage, $health) = mysql_fetch_row($result);
		print('<li><h2>'.$name.'</h2><p>Damage: '.$damage.'</p><span class="ui-li-count">'.$health.'</span></li>');
	}

	if($num == 0){
		print('You have no pokemon.');
	}

?>