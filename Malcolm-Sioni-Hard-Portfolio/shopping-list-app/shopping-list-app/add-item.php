<?php
	
//open a connection
$dbname = 'qibtdev02';
$link = mysql_connect("166.62.8.2","qibtdev02","dev02@DATABASE") or die("Couldn't make connection.");
$db = mysql_select_db($dbname, $link) or die("Couldn't select database");	


//create and execute SQL statement
$item = $_POST['item'];
$result = mysql_query("insert into abcd1601_Item (item_name) values('$item');") or die(mysql_error());

print('success');

?>