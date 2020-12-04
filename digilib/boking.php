<?php 
include 'auth.php';
$date = date('Y-m-d H:i:s');

$nama = @$_POST['member_name'];
$alamat = @$_POST['file_att'];
$pekerjaan = @$_POST['title'];
$gambar = @$_POST['gambar'];
//$keterangan='Boking Buku';
 
$sql= "INSERT INTO `boking` (`member`, `file`, `judul`,`gambar`,`keterangan`,`tanggal_bookmark`) VALUES ('$nama', '$alamat', '$pekerjaan', '$gambar','Buku Baca','$date')";
$result = mysqli_query($conn,$sql);
?>