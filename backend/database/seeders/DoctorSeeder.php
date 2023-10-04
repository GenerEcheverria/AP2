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
            'iCard' => "A1234",
            'idCroom' => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
