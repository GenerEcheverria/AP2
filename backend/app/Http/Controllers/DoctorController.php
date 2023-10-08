<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Doctor;

class DoctorController extends Controller
{
    public function getDoctores(){
        $doctores = Doctor::join('users', 'doctors.idUser', '=', 'users.id')
        ->select('doctors.idUser', 'doctors.idDoctor', 'users.name', 'doctors.license', 'doctors.idOffice')
        ->get();

         return $doctores;
    }
}
