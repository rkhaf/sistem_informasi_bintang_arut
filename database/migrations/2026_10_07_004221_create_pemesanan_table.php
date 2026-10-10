<?php

use App\enum_statusOrder;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tb_pemesanan', function (Blueprint $table) {
            $table->id('id_pemesanan');
            $table->foreignUuid('id_user')->constrained('tb_users', 'id_user')->cascadeOnDelete();
            $table->dateTime('tanggal_pemesanan');
            $table->text('alamat_pengiriman');
            $table->string('no_telp_penerima');
            $table->integer('total_harga');
            $table->enum('status_order',
            [
                enum_statusOrder::WAIT,
                enum_statusOrder::PROSES,
                enum_statusOrder::KIRIM,
                enum_statusOrder::SELESAI,
                enum_statusOrder::BATAL,
            ]
            );
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tb_pemesanan');
    }
};
