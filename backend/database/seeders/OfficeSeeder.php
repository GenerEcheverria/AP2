<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OfficeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table("offices")->insert(
            [
                'idOffice' => 1,
                'name' => "1",
                'area' => "Obstetricia",
                'created_at' => now(),
                'updated_at' => now(),
            ]
        );
        DB::table("offices")->insert(
            [
                'idOffice' => 2,
                'name' => "2",
                'area' => "Obstetricia",
                'created_at' => now(),
                'updated_at' => now(),
            ]
        );
    }
}
