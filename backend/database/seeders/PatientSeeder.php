<?php

namespace Database\Seeders;

use App\Models\Appoinment;
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


        #Ejemplo 2 solo para llenar datos
        User::create([
            'id' => 4,
            'name' => 'Robin Paola Chi Suaréz',
            "sex" => "Mujer",
            "phone" => "9981792122",
            "email"=>"robin@gmail.com",
            // Miembarazo1234
            'password' => '$2y$10$iWAjMLJgMgSARb/ffQOy8.8OU8Qzda5TjqIhLz5PzEFSQsEalT6Vu',
            "role"=>"Patient",
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        $patient = Patient::create([
            'idPatient' => 2,
            'idUser' => 4,
            'age' => 30,
            'curp' => 'GAPM950101MDFRNR00',
            'maritalStatus' => 'Soltera', 
            'occupation' => 'Historiadora',
            'state' => 'Yucatán',
            'municipality' => 'Mérida',
            'locality' => 'Mérida',
            'address' => 'Calle 90 por 17 #221 Américas',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        MedicalRecord::create([
            'idMedRec' => 2,
            'idPatient' => 2,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        Appoinment::create([
            'idAppointment' => 1,
            'idPatient' => 2,
            'idDoctor' => 2,
            'date' => '2023-11-17',
            'time' => '19:00:00',
            'summary' => '',
            'prescription' => '',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        Appoinment::create([
            'idAppointment' => 2,
            'idPatient' => 2,
            'idDoctor' => 2,
            'date' => '2023-11-18',
            'time' => '19:30:00',
            'summary' => '',
            'prescription' => '',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
