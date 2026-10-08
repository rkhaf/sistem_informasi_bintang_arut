<?php
    $host="localhost";
    $user="root";
    $pass="";
    $database="db_bintang_arut";
    $koneksi=mysqli_connect($host,$user,$pass,$database);
    if ($koneksi->connect_error) {
        die("Koneksi gagal");
    }
?>