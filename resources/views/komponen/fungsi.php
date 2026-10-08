<?php
function base_url(){
    return "http://localhost/sistem_informasi_bintang_arut";
}
function url_segment($segment){
    $url="http://".$_SERVER["SERVER_NAME"]."".$_SERVER['REQUEST_URI'];
    $base=str_replace(base_url(),"",$url);
    $pecah=explode("/",$base);
    if(empty($pecah[$segment])){$dataku="";}
    else{$dataku=$pecah[$segment];}
    return $dataku;
}

function numKeRupiah($nilai){
    return number_format($nilai, 0, ',', '.');
}
?>