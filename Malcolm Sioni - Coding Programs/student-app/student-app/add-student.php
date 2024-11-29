<?php

//open a connection
$dbname = 'qibtdev02';
$link = mysql_connect("166.62.8.2","qibtdev02","dev02@DATABASE") or die("Couldn't make connection.");
$db = mysql_select_db($dbname, $link) or die("Couldn't select database");



$studentId = $_POST['studentId'];
$lastName = $_POST['lastName'];
$firstName = $_POST['firstName'];
$type = $_POST['type'];
$country = $_POST['country'];
$grade= $_POST['grade'];

$result = mysql_query("insert into abcd1601_Student (student_id, last_name, first_name, type, country, grade) values('$studentId', '$lastName', '$firstName', '$type', '$country', '$grade');") or die(mysql_error());

print('Student added to database.');

?>