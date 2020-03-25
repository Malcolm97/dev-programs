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
	<div id="search-results" data-role="page" data-title="Search Results">
		<div data-role="header">			
			<h1>Search Results</h1>
			<a href="index.php" data-icon="search">Search</a>			
		</div>
		<div data-role="content">
			<ul data-role="listview">

<?php
	//grab the users form input
	$campus = $_GET['campus'];
	$capacity = $_GET['capacity'];
	
	//establish a connection..
	$dbname = 'qibtdev02';
	$link = mysql_connect("166.62.8.2","qibtdev02","dev02@DATABASE") or die("Couldn't make connection.");
	$db = mysql_select_db($dbname, $link) or die("Couldn't select database");	

	//query the database..
	$result = mysql_query("SELECT * FROM abcde1503_Rooms WHERE `campus`='".$campus."' AND `capacity`>='".$capacity."' AND `availability`='not-booked'") or die(mysql_error());	
	$num = mysql_num_rows($result);

	//iterate through rows..
	for($i = 0; $i < $num; $i++){
		list($id, $cap, $desc) = mysql_fetch_row($result);
		print('<li><a href="reserve-room.php?roomId='.$id.'"><h3>'.$id.'</h3><p>'.$desc.'</p><span class="ui-li-count">'.$cap.'</span></a></li>');
	}
	
	if($num == 0){
		print("There are no available rooms - please refine your search.");
	}
	
?>
			</ul>
		</div>
	</div>
</body>
</html>

