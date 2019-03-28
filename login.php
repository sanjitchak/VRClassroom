<?php include('server.php') ?>
<!DOCTYPE html>
<html>
<head>
  <title>Registration</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<style>
body{
	background-image: url("https://cdn.uploadvr.com/wp-content/uploads/2017/03/rsi-ctt-GearVRLookOutwardScene-1440-VirtualReality-072916.jpeg");
	background-size:100%;
}

h1{
color:red;
padding:10px;
}

.btn{
width:40%;
border-radius:40px;
}

form{
opacity:0.9
}
</style>
<body>
	 
  <form method="post" action="login.php">
  	<?php include('errors.php'); ?>

        <h1><center>VR Classroom</center></h1>
  	<div class="input-group">
  		<label>Username</label>
  		<input type="text" name="username" >
  	</div>
  	<div class="input-group">
  		<label>Password</label>
  		<input type="password" name="password">
  	</div>
  	<div class="input-group">
  		<button type="submit" class="btn" name="login_user">Login</button>
  	</div>
  	<p>
  		Not yet a member? <a href="register.php">Sign up</a>
  	</p>
  </form>
</body>
</html>
