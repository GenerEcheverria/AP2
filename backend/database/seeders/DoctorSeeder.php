<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DoctorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table("doctors")->insert([
            'idDoctor' => 1,
            'idUser' => 1,
            'license' => "A1234",
            'idOffice' => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table("doctors")->insert([
            'idDoctor' => 2,
            'idUser' => 2,
            'license' => "B1234",
            'idOffice' => 2,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
