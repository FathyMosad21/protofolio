<html>
<head>
	<title>test</title>
</head>
<body>

<?php
$sql = "INSERT INTO user (id, email, pass)VALUES ('1', 'ayasaber', '012')";

if (mysqli_query($conn, $sql)) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
// Create connection
//$conn = new mysqli($servername, $username, $password);

$conn = mysqli_connect('localhost', 'root','', 'formhandle');

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
  //The die() function is an alias of the exit() function.
  // mysqli_connect_error() function returns the error description from the last connection error, if any
}
echo "Connected successfully";
?> 
</body>
</html>


$sql = "INSERT INTO user (id, email, pass)VALUES ('1', 'ayasaber', '012')";

if (mysqli_query($conn, $sql)) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}