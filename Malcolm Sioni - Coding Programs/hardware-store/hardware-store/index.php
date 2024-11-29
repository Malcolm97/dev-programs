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
	<div id="home" data-role="page"	data-title="Home">
		<div data-role="header">
			<h1>POS</h1>
		</div>
		<div data-role="content">
			<a href="#customers" data-role="button">Manage Customers</a>
		</div>
	</div>
	<div id="customers" data-role="page"	data-title="Customers">
		<div data-role="header">
			<h1>Manage Customers</h1>
		</div>
		<div data-role="content">
<?php

	$con = mysqli_connect("localhost","root","","hardwarestore");

	// Check connection
	if (mysqli_connect_errno())
	{
		echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}
	
	$result = $con->query("select * from Customer");

	if (mysqli_num_rows($result) > 0) {

		while($row = mysqli_fetch_assoc($result)) {
			echo "Customer ID: " . $row["CustomerId"]. " - Name: " . $row["FirstName"]. " " . $row["LastName"]. "<br />";
		}

	}else{
		echo "0 results";
	}	
				
?>
		</div>
	</div>
</body>
</html>