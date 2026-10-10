<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class TbJenisProdukTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('tb_jenis_produk')->delete();
        
        \DB::table('tb_jenis_produk')->insert(array (
            0 => 
            array (
                'id_jenis' => '249a6553-5948-4f8f-a189-50f212432eec',
                'nama_jenis' => 'wanita',
                'label_display' => 'Busana Wanita',
                'created_at' => '2026-10-09 01:56:02',
                'updated_at' => '2026-10-09 01:56:02',
            ),
            1 => 
            array (
                'id_jenis' => '297375b4-7a27-46db-933a-c0f6a00c0eba',
                'nama_jenis' => 'aksesoris',
                'label_display' => 'aksesoris',
                'created_at' => '2026-10-09 01:56:02',
                'updated_at' => '2026-10-09 01:56:02',
            ),
            2 => 
            array (
                'id_jenis' => '33fbb642-5eec-47d8-84a5-77b7ab5d5e23',
                'nama_jenis' => 'selendang',
                'label_display' => 'Selendang',
                'created_at' => '2026-10-09 01:56:02',
                'updated_at' => '2026-10-09 01:56:02',
            ),
            3 => 
            array (
                'id_jenis' => '37abf55a-b70f-4d88-8da9-f0bc260b6995',
                'nama_jenis' => 'pria',
                'label_display' => 'Busana Pria',
                'created_at' => '2026-10-09 01:56:02',
                'updated_at' => '2026-10-09 01:56:02',
            ),
            4 => 
            array (
                'id_jenis' => 'b96e4fe5-32c0-4400-ba61-ab37beab8e23',
                'nama_jenis' => 'kain',
                'label_display' => 'Kain Panjang',
                'created_at' => '2026-10-09 01:56:02',
                'updated_at' => '2026-10-09 01:56:02',
            ),
        ));
        
        
    }
}