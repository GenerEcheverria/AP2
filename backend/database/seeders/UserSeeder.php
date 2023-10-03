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
            'name' => 'Gener Echeverria',
            "age" => 26,
            "sex" => "Hombre",
            "phone" => "9991732101",
            "email"=>"gener.echeverria@gmail.com",
            // Miembarazo1234
            'password' => '$2y$10$iWAjMLJgMgSARb/ffQOy8.8OU8Qzda5TjqIhLz5PzEFSQsEalT6Vu',
            "role"=>"Doctor",
            "idPatient" => null,
            "idDoctor" => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
