<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Patient;
use App\Models\MedicalRecord;

class PatientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Crear un paciente de ejemplo
        User::create([
            'id' => 3,
            'name' => 'María Fernanda García Pérez',
            "sex" => "Mujer",
            "phone" => "9981732122",
            "email"=>"test@gmail.com",
            // Miembarazo1234
            'password' => '$2y$10$iWAjMLJgMgSARb/ffQOy8.8OU8Qzda5TjqIhLz5PzEFSQsEalT6Vu',
            "role"=>"Patient",
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        $patient = Patient::create([
            'idPatient' => 1,
            'idUser' => 3,
            'age' => 25,
            'curp' => 'GAPM950101MDFRNR00',
            'maritalStatus' => 'Casada', 
            'occupation' => 'Maestra',
            'state' => 'Yucatán',
            'municipality' => 'Mérida',
            'locality' => 'Mérida',
            'address' => 'Calle 80 por 17 Yucalpetén',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        MedicalRecord::create([
            'idMedRec' => 1,
            'idPatient' => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

    }
}
