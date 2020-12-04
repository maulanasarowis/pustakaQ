<?php
include 'auth.php';
 $callback = $_REQUEST['callback'];
// $records = json_decode($_REQUEST['records']);
$username = $_REQUEST['username'];
$password = $_REQUEST['password'];

// Create the output object.
$output = array();
$success = 'false';
$query="SELECT * FROM `member` where member_name = '$username' and mpasswd = '$password'" or die("Cannot access item");
$result = mysqli_query($conn, $query); if(mysqli_num_rows($result) > 0){
while($obj = mysqli_fetch_array($result)) {
	$output[] = $obj;
}
$success = 'true';
}

//start output
if ($callback) {
header('Content-Type: text/javascript');
echo	$callback	.	'({"success":'.$success.',	"items":'	. json_encode($output) . '});';
} else {
header('Content-Type: application/x-json'); echo json_encode($output);
}
$conn->close();
?>