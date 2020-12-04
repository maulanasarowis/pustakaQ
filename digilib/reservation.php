<?php 

include 'auth.php';
date_default_timezone_set('Asia/Jakarta');
$date = date('Y-m-d H:i:s');
$biblio = @$_POST['biblio'];

$user = @$_POST['user'];

// pencarian reserver_id
$query = mysqli_query($conn,"SELECT MAX(reserve_id) as kode FROM `reserve`");
$row   = mysqli_fetch_array($query);
$kode = $row['kode'];
$kode_baru = $kode+1;

// pencarian item_code
$query5 = mysqli_query($conn,"SELECT item_code FROM `item` WHERE biblio_id='$biblio' ORDER BY RAND() LIMIT 1");
$row5   = mysqli_fetch_array($query5);
$item_code	 = $row5['item_code'];



// pencarian member id 
$query1 = mysqli_query($conn,"SELECT member_id FROM `member` where member_name = '$user'" );
$row1   = mysqli_fetch_array($query1);
$member = $row1['member_id'];

 $query4 = mysqli_query($conn,"SELECT * FROM `reserve` WHERE member_id = '$member' and biblio_id = '$biblio'");
 if(mysqli_num_rows($query4) < 1){
	$query2= "INSERT INTO `reserve` (`reserve_id`, `member_id`, `biblio_id`, `item_code`, `reserve_date`,`keterangan`) VALUES ('$kode_baru', '$member', '$biblio', '$item_code', '$date','Boking Buku')";
	$hasil2 = mysqli_query($conn,$query2);
	
 }
?>