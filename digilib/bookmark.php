<?php

include 'auth.php';
$callback = $_REQUEST['callback'];
// $records = json_decode($_REQUEST['records']);
$username = $_REQUEST['user_name'];

// Create the output object.
$output = array();
$success = 'false';
$query="SELECT * FROM `boking` where member='$username'" or die("Cannot access item");
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