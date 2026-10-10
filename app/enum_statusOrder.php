<?php

namespace App;

enum enum_statusOrder : string
{
    const WAIT = "MENUNGGU_PEMBAYARAN";
    const PROSES = "DIPROSES";
    const KIRIM = "DIKIRIM";
    const SELESAI = "SELESAI";
    const BATAL= "DIBATALKAN";
}
