<?php

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
        Schema::create('tb_etalase', function (Blueprint $table) {
            $table->uuid('id_barang')->primary();
            $table->foreignUuid('id_motif')->constrained('tb_motif', 'id_motif')->cascadeOnDelete();
            $table->foreignUuid('id_jenis')->constrained('tb_jenis_produk', 'id_jenis')->cascadeOnDelete();
            $table->string('nama_produk');
            $table->string('foto_produk');
            $table->integer('harga');
            $table->integer('stok');
            $table->string('ukuran');
            $table->string('bahan');
            $table->string('teknik');
            $table->text('deskripsi');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tb_etalase');
    }
};
