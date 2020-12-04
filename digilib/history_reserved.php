<?php

include 'auth.php';
 $callback = $_REQUEST['callback'];
 $username = $_REQUEST['user_name'];


// pencarian kelas user
$query = mysqli_query($conn,"SELECT member_id FROM `member` WHERE member_name ='$username'");
$row   = mysqli_fetch_array($query);
$kode = $row['member_id'];

// Create the output object.
$output = array();
$success = 'false';
$query="SELECT biblio.title, reserve.reserve_date,reserve.keterangan FROM reserve,biblio WHERE biblio.biblio_id=reserve.biblio_id And reserve.member_id='$kode'" or die("Cannot access item");
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