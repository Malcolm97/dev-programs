<?php

	//grab the users form input
	$courseId = $_GET['thecourse'];
	$mark = $_GET['themark'];
	
	//establish a connection..
	$dbname = 'qibtdev02';
	$link = mysql_connect("182.50.133.173","qibtdev02","dev02@DATABASE") or die("Couldn't make connection.");
	$db = mysql_select_db($dbname, $link) or die("Couldn't select database");	

	//query the database..
	$result = mysql_query("select * from abcd1603_Course where `course_id`='$courseId'") or die(mysql_error());	
	$num = mysql_num_rows($result);

	//iterate through rows..
	for($i = 0; $i < $num; $i++){
		list($id, $name) = mysql_fetch_row($result);
		print("$id / $name</br>");
	}
	
	if($num == 0){
		print("There are no available rooms - please refine your search.");
	}
	
	
?>