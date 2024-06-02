


<?php  
require('connect.php');
/**The isset() function checks whether a variable is set, which means that it has to be declared and is not NULL.
This function returns true if the variable exists and is not NULL, otherwise it returns false.**/

/**PHP $_POST is a PHP super global variable which is used to collect form data after submitting an HTML form 
 * with method="post". $_POST is also widely used to pass variables. */

if (isset($_POST['mail']) and isset($_POST['psw']))
{
	
// Assigning POST values to variables.
$email = $_POST['mail'];
$password = $_POST['psw'];

// CHECK FOR THE RECORD FROM TABLE
$query = "SELECT * FROM users WHERE email='$email' and pass='$password' ";
//The query() / mysqli_query() function performs a query against a database

$result = mysqli_query($conn, $query) or die(mysqli_error($con));
$count = mysqli_num_rows($result);
//The mysqli_num_rows() function returns the number of rows in a result set.

if ($count == 1){

echo "Login Credentials verified";
//echo "<script type='text/javascript'>alert('Login Credentials verified')</script>";

}else{


    echo "Invalid Login Credentials";
    //echo "<script type='text/javascript'>alert('Invalid Login Credentials')</script>";
}
}
?>