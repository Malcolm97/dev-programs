<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

	<title></title>

	<link rel="shortcut icon" href="_/css/images/apple-touch-icon.ico" type="image/vnd.microsoft.icon">
	<link rel="icon" href="_/css/images/apple-touch-icon.ico" type="image/vnd.microsoft.icon">
	<link rel="apple-touch-icon" href="_/css/images/apple-touch-icon.ico"/>
	<link rel="apple-touch-icon-precomposed" href="_/css/apple-touch-icon.ico"/>

	<!-- custom themes go here -->

	<link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.2/jquery.mobile-1.4.2.min.css" />
	<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
	<script src="http://code.jquery.com/mobile/1.4.2/jquery.mobile-1.4.2.min.js"></script>

	<script src="_/js/script.js"></script>
	<link type="text/css" rel="stylesheet" href="_/css/style.css" />
</head>
<body>
	<div id="home" data-role="page"	data-title="Home">
		<div data-role="header">
			<h1></h1>
		</div>
		<div data-role="content">
			<ul data-role="listview">
			
			<?php
				
				$con = mysqli_connect("localhost", "root", "", "petshop");
				
				if(mysqli_connect_errno())
				{
					echo "Failed to connect: " . mysqli_connect_errno();
				}
				
				$result = $con->query("select * from Product");
				
				if(mysqli_num_rows($result) > 0)
				{
					while($row = mysqli_fetch_assoc($result))
					{
						echo '<li><a href="#"><h1>'. $row['Name'] .'</h1><p>Product ID: '. $row['ProductId'] .'</p><span class="ui-li-count">$'. $row['Price'] .'</span></a></li>';
					}
				}
				else
				{
					echo "No products found.";
				}
			
			?>
			
			</ul>
		</div>
	</div>
</body>
</html>








