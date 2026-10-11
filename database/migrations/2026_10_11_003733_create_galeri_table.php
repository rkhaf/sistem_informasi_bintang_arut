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
        Schema::create('tb_galeri', function (Blueprint $table) {
            $table->id('id_galeri');
            $table->foreignUuid('id_motif')->constrained('tb_motif', 'id_motif')->cascadeOnDelete();
            $table->text('filosofi');
            $table->foreignUuid('id_tag')->constrained('tb_tag_galeri', 'id_tag')->cascadeOnDelete();
            // $table->string('tag');
            $table->date('tahun_pembuatan');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tb_galeri');
    }
};
