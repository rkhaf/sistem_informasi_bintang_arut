<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TbTagGaleriTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \DB::table('tb_tag_galeri')->delete();

        \DB::table('tb_tag_galeri')->insert(array(
            array(
                'id_tag'=>'38a35e76-a5e2-4af2-a27f-a35b1d88806c',
                'tag_label'=>'Motif Batik'
            ),
            array(
                'id_tag'=>'bf4203b3-3e49-46e0-807f-84ca1b3b44e8',
                'tag_label'=>'Proses Pembuatan'
            ),
            array(
                'id_tag'=>'6c1ecf9e-3862-4aea-8172-39587956f566',
                'tag_label'=>'Detail Tekstur'
            ),
            array(
                'id_tag'=>'0e2dff16-3b25-463b-a59b-274d1e4e4d85',
                'tag_label'=>'Busana Modern'
            ),
            array(
                'id_tag'=>'ff967d32-be3b-4133-854c-6f2adddf7da3',
                'tag_label'=>'Sentra Paoman'
            ),
        ));
    }
}
