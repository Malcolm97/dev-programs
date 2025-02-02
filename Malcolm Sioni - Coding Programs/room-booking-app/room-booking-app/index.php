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
	<div id="find-room" data-role="page" data-title="Find Room">
		<div data-role="header">			
			<h1>Room Search</h1>
		</div>
		<div data-role="content">
			<form action="find-room.php" method="get">
				Capacity:
				<input required type="number" id="capacity" name="capacity" />
				
				Campus:
				<select required id="campus" name="campus">
					<option value="mt-gravatt">
						Mt Gravatt
					</option>
					<option value="gold-coast">
						Gold Coast
					</option>
					<option value="logan">
						Logan
					</option>
					<option value="nathan">
						Nathan
					</option>
					<option value="southbank">
						South Bank
					</option>
				</select>
				
				<button data-icon="search">Search</button>
			</form>
		</div>
	</div>
</body>
</html>