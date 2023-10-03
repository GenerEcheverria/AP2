<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table("rooms")->insert(
            [
                'idCroom' => 1,
                'Croom' => "1",
                'area' => "Obstetricia",
                'created_at' => now(),
                'updated_at' => now(),
            ]
        );
    }
}
