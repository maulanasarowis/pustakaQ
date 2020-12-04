<?php

include 'auth.php';
$callback = $_REQUEST['callback'];

// Create the output object.
$output = array();
$success = 'false';
$query="select kode_kuis from kuis_master " or die("Cannot access item");
$result = mysqli_query($conn, $query); if(mysqli_num_rows($result) > 0){
while($obj = mysqli_fetch_array($result)) {
	$output[] = $obj;
}
$success = 'true';
}
//
$data=['data'=>$output, 'jumlah'=> count($output)];


//start output
if ($callback) {
header('Content-Type: text/javascript');
echo	$callback	.	'({"success":'.$success.',	"items":'	. json_encode($data) . '});';
} else {
header('Content-Type: application/x-json'); echo json_encode($data);
}
$conn->close();
?>