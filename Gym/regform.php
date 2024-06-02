<?php

 require('connect.php');
//variables 
$name ="";
$email="";
$pass="";

// Assigning POST values to variables.

if (isset($_POST['submit'])) {
	if( $_POST['psw'] === $_POST['psw-repeat'] ){
	
$name = $_POST['name'];
$email = $_POST['email'];
$pass = $_POST['psw'];


$sql = "INSERT INTO users (name, email, pass)VALUES ('$name', '$email', '$pass')"; 
//check 
if (mysqli_query($conn, $sql)) {
  echo "<br>"."New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);

}
else{echo "<script type='text/javascript'>alert('pleas enter the right password')</script>";}
}
?>