<?php include('server.php') ?>
<!DOCTYPE html>
<html>
<head>
  <title>VR Classroom</title>
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
  <div class="header">
  	<h1>REGISTER</h1>
  </div>
	
  <form method="post" action="register.php">
  	<?php include('errors.php'); ?>
  	<div class="input-group">
  	  <label>Username</label>
  	  <input type="text" name="username" value="<?php echo $username; ?>">
  	</div>
  	<div class="input-group">
  	  <label>Email</label>
  	  <input type="email" name="email" value="<?php echo $email; ?>">
  	</div>
  	<div class="input-group">
  	  <label>Password</label>
  	  <input type="password" name="password_1">
  	</div>
  	<div class="input-group">
  	  <label>Confirm password</label>
  	  <input type="password" name="password_2">
  	</div>
  	<div class="input-group">
  	  <button type="submit" class="btn" name="reg_user">Register</button>
  	</div>
  	<p>
  		Already a member? <a href="login.php">Sign in</a>
  	</p>
  </form>
</body>
</html>
