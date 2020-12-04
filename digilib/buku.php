<?php

include 'auth.php';
$callback = $_REQUEST['callback'];

// Create the output object.
$output = array();
$success = 'false';
$query="SELECT DISTINCT item.biblio_id,biblio.title,biblio.publish_year,biblio.notes,biblio.image,biblio.file_att,biblio.call_number,mst_publisher.publisher_name FROM `item` LEFT JOIN biblio ON item.biblio_id=biblio.biblio_id LEFT JOIN mst_publisher ON biblio.publisher_id=mst_publisher.publisher_id" or die("Cannot access item");
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