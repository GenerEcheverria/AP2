<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        User::create([
            'id' => 1,
            'name' => 'Gener Echeverria',
            "sex" => "Hombre",
            "phone" => "9991732101",
            "email"=>"gener.echeverria@gmail.com",
            // Miembarazo1234
            'password' => '$2y$10$iWAjMLJgMgSARb/ffQOy8.8OU8Qzda5TjqIhLz5PzEFSQsEalT6Vu',
            "role"=>"Doctor",
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        User::create([
            'id' => 2,
            'name' => 'Raul Villanueva',
            "sex" => "Hombre",
            "phone" => "9981732101",
            "email"=>"raul.villanueva@gmail.com",
            // Miembarazo1234
            'password' => '$2y$10$iWAjMLJgMgSARb/ffQOy8.8OU8Qzda5TjqIhLz5PzEFSQsEalT6Vu',
            "role"=>"Doctor",
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
