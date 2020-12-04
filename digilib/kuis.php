<?php

include 'auth.php';
$callback = $_REQUEST['callback'];
$kode_soal = addslashes($_REQUEST['kode_soal']);

// Create the output object.
$output = array();
$success = 'false';
//$query="select * from tbl_soal where kode_soal='$kode_soal'" or die("Cannot access item");
// $query = "SELECT * FROM tbl_soal,tbl_waktu_soal WHERE tbl_waktu_soal.kode_soal=tbl_soal.kode_soal AND tbl_soal.kode_soal='$kode_soal'" or die("Cannot access item");
$query = "SELECT * FROM kuis,kuis_master WHERE kuis.id_kuis_master=kuis_master.id_kuis_master AND kuis_master.kode_kuis='$kode_soal'" or die("Cannot access item");
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