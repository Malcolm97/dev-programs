<?php
	session_start();
	
	if($_SESSION['legit'] == true)
	{
?>

<!doctype html>

<html lang="en">

<head>
	<meta charset="utf-8" />
	<title> </title>
	<script></script>
	<style></style>
</head>
<body>
	This is the main page (password protected).
</body>

</html>

<?php
}else{	
?>

<!doctype html>

<html lang="en">

<head>
	<meta charset="utf-8" />
	<title> </title>
	<script></script>
	<style></style>
</head>
<body>
	You are not authorised to access this page. Please <a href="login.html">login</a>.
</body>

</html>
<?php
}
?>