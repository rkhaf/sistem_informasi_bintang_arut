<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Str;

class MigrasiDataLamaSeeder extends Seeder
{
    public function run()
    {
        // 1. Setup koneksi database lama secara on-the-fly (tanpa perlu ubah .env)
        Config::set('database.connections.db_lama', [
            'driver'    => 'mysql',
            'host'      => env('DB_HOST', '127.0.0.1'),
            'port'      => env('DB_PORT', '3306'),
            'database'  => 'db_bintang_arut', // Tembak langsung ke DB lama
            'username'  => env('DB_USERNAME', 'root'),
            'password'  => env('DB_PASSWORD', ''),
            'charset'   => 'utf8mb4',
            'collation' => 'utf8mb4_unicode_ci',
            'strict'    => true,
        ]);

        $dbLama = DB::connection('db_lama');
        $dbBaru = DB::connection('mysql'); // Ini koneksi default ke DB baru (dari .env)
        $now = now();

        $this->command->info('Mulai migrasi data dari db_bintang_arut ke struktur UUID...');

        // --- A. MIGRASI JENIS PRODUK ---
        $jenisLama = $dbLama->table('tb_jenis_produk')->get();
        $mapJenis = [];
        $insertJenis = [];

        foreach ($jenisLama as $j) {
            $uuid = Str::uuid()->toString();
            $mapJenis[$j->id_jenis] = $uuid; // Simpan pemetaan ID Integer ke UUID

            $insertJenis[] = [
                'id_jenis'      => $uuid,
                'nama_jenis'    => $j->nama_jenis,
                'label_display' => $j->label_display,
                'created_at'    => $now,
                'updated_at'    => $now,
            ];
        }
        $dbBaru->table('tb_jenis_produk')->insert($insertJenis);
        $this->command->info('Berhasil migrasi ' . count($insertJenis) . ' Jenis Produk.');


        // --- B. MIGRASI MOTIF ---
        $motifLama = $dbLama->table('tb_motif')->get();
        $mapMotif = [];
        $insertMotif = [];

        foreach ($motifLama as $m) {
            $uuid = Str::uuid()->toString();
            $mapMotif[$m->id_motif] = $uuid;

            $insertMotif[] = [
                'id_motif'   => $uuid,
                'nama_motif' => $m->nama_motif,
                'foto_motif' => $m->foto_motif,
                'created_at' => $now,
                'updated_at' => $now,
            ];
        }
        $dbBaru->table('tb_motif')->insert($insertMotif);
        $this->command->info('Berhasil migrasi ' . count($insertMotif) . ' Motif Batik.');


        // --- C. MIGRASI ETALASE ---
        $etalaseLama = $dbLama->table('tb_etalase')->get();
        $insertEtalase = [];

        foreach ($etalaseLama as $e) {
            $insertEtalase[] = [
                'id_barang'   => Str::uuid()->toString(),
                // Gunakan mapping array agar tersambung ke UUID yang baru dibuat
                'id_motif'    => $mapMotif[$e->id_motif] ?? null,
                'id_jenis'    => $mapJenis[$e->id_jenis] ?? null,
                'nama_produk' => $e->nama_produk,
                'foto_produk' => $e->foto_produk,
                'harga'       => $e->harga,
                'stok'        => $e->stok,
                'ukuran'      => $e->ukuran,
                'bahan'       => $e->bahan,
                'teknik'      => $e->teknik,
                'deskripsi'   => $e->deskripsi,
                'created_at'  => $now,
                'updated_at'  => $now,
            ];
        }
        // Di-insert per bongkahan (chunk) biar memori server nggak ngos-ngosan
        foreach (array_chunk($insertEtalase, 50) as $chunk) {
            $dbBaru->table('tb_etalase')->insert($chunk);
        }
        $this->command->info('Berhasil migrasi ' . count($insertEtalase) . ' Produk Etalase.');


        // --- D. MIGRASI GALERI ---
        $galeriLama = $dbLama->table('tb_galeri')->get();
        $insertGaleri = [];

        foreach ($galeriLama as $g) {
            $insertGaleri[] = [
                'id_galeri'       => $g->id_galeri, // Tetap di-insert karena di DB baru pakai BIGINT auto_increment
                'id_motif'        => $mapMotif[$g->id_motif] ?? null,
                'filosofi'        => $g->filosofi,
                'tahun_pembuatan' => $g->tahun_pembuatan,
                'created_at'      => $now,
                'updated_at'      => $now,
            ];
        }
        foreach (array_chunk($insertGaleri, 50) as $chunk) {
            $dbBaru->table('tb_galeri')->insert($chunk);
        }
        $this->command->info('Berhasil migrasi ' . count($insertGaleri) . ' Postingan Galeri.');
        
        $this->command->info('Selesai! Seluruh data berhasil dipindahkan dengan format UUID.');
    }
}