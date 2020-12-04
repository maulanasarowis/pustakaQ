<?php
include 'auth.php';
date_default_timezone_set('Asia/Jakarta');
$callback = $_REQUEST['callback'];
$records = json_decode($_REQUEST['records']);
$tanggal = date('Y-m-d');
$waktu = date('H:i:s');
// $kode_nilai = $records->{"kode_nilai"};
$nilai1 = $records->{"id_siswa"};
$nilai2 = $records->{"id_kuis"};
$nilai3 = $records->{"score"};

//$divisi = $records->{"divisi"};

// Create the output object.
$output = array();
$success = 'false';
//$query="INSERT INTO `tbl_nilai` (`id_siswa`, `id_kuis`, `score`, `date`) VALUES ('$nilai1', '$nilai2', '$nilai3', '$date')";
//$query = "INSERT INTO `nilai`(`id_siswa`, `id_kuis`, `score`, `date`, `time`) VALUES ('$nilai1','$nilai2','$nilai3','$tanggal','$waktu')";
$query="INSERT INTO `nilai` (`id`, `id_siswa`, `id_kuis`, `score`, `date`, `time`) VALUES (NULL, '$nilai1', '$nilai2', '$nilai3', '$tanggal', '$waktu')";
// $query="INSERT INTO `tbl_nilai` (`kode_nilai`, `nilai`) VALUES ('$kode_nilai', '$nilai');";
if ($conn->query($query) === TRUE) {
    $success = 'true';
}
else{
	$success = 'false';
	$error = $conn->error;
}

//start output
if ($callback) {
    header('Content-Type: text/javascript');
    echo $callback . '({"success":'.$success.', "items":' . json_encode($output) . '});';
} else {
    header('Content-Type: application/x-json');
    echo json_encode($output); 
}
$conn->close();
?>