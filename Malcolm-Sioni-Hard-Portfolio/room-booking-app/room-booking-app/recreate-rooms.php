<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="mobile-web-app-capable" content="yes" />
	
	<title> </title>

	<link rel="shortcut icon" href="_/css/images/apple-touch-icon.ico" type="image/vnd.microsoft.icon">
	<link rel="icon" href="_/css/images/apple-touch-icon.ico" type="image/vnd.microsoft.icon">		
	<link rel="apple-touch-icon" href="_/css/images/apple-touch-icon.ico"/>
	<link rel="apple-touch-icon-precomposed" href="_/css/apple-touch-icon.ico"/>

	<link type="text/css" rel="stylesheet" href="http://code.jquery.com/mobile/1.4.3/jquery.mobile-1.4.3.min.css" />
	<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
	<script src="http://code.jquery.com/mobile/1.4.3/jquery.mobile-1.4.3.min.js"></script>

	<script src="_/js/script.js"></script>
	<link type="text/css" rel="stylesheet" href="_/css/style.css" />
</head>
<body>
	<div id="confirmation" data-role="page" data-title="Confirmation">
		<div data-role="header">			
			<h1>Confirmation</h1>
			<a href="index.php" data-icon="search">Search</a>
			<a href="reset-rooms.php" data-icon="refresh">Reset</a>
		</div>
		<div data-role="content">

<?php

	//establish a connection..
	$dbname = 'qibtdev02';
	$link = mysql_connect("166.62.8.2","qibtdev02","dev02@DATABASE") or die("Couldn't make connection.");
	$db = mysql_select_db($dbname, $link) or die("Couldn't select database");	
	
	//udpate the database...	
	$campus = ['mt-gravatt','gold-coast','logan','nathan','southbank'];
	$numrooms = 50;
	
	for($i = 0; $i < $numrooms; $i++){
		$result = mysql_query("insert into abcde1503_Rooms (roomId, capacity, campus, availability) values('".rand(1,10).".".rand(10,99)."', '".rand(10,120)."', '".$campus[rand(0,count($campus) - 1)]."', '');") or die(mysql_error());			
	}

	
	print("$numrooms rooms have been created.");
	
?>

		</div>
	</div>
</body>
</html>

