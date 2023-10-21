<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Patient; 

class PatientController extends Controller
{
    //El parametro dice id_doc pero te juro que es idUser del doctor que busca a sus pacientes
    public function getPacientesByIdDoc(string $_idDoc){
        $resultados = DB::table('users')
            ->join('doctors', 'users.id', '=', 'doctors.idDoctor')
            ->join('appointments', 'doctors.idDoctor', '=', 'appointments.idDoctor')
            ->join('patients', 'appointments.idPatient', '=', 'patients.idPatient')
            ->join('users as u', 'patients.idUser', '=', 'u.id')
            ->where('users.id',  $_idDoc)
            ->select(
                'patients.idPatient as id',
                'u.name as name',
                'patients.age as age',
                'patients.curp as curp',
                'patients.maritalStatus as maritalStatus',
                'patients.occupation as occupation',
                'patients.state as state',
                'patients.municipality as municipality',
                'patients.locality as locality',
                'patients.address as address'
            )
            ->distinct()
            ->get();

        
        return response()->json($resultados);
    }

    public function getMedicalInfoById(string $_idPaciente){
        $data = DB::table('appointments')
        ->select(
            'appointments.idAppointment as idCita',
            'appointments.date as date',
            'appointments.time as time',
            'appointments.summary as summary',
            'appointments.prescription as prescription',
            'diary_pages.idPage as idPage',
            'diary_pages.text as text'
        )
        ->join('diary_pages', 'appointments.idPatient', '=', 'diary_pages.idPatient')
        ->where('appointments.idPatient', $_idPaciente)
        ->get();

        $infoMedicaPaciente = [
            'citas' => [],
            'diario' => [],
        ];

        foreach ($data as $item) {
            $cita = [
                'idCita' => $item->idCita,
                'date' => $item->date,
                'time' => $item->time,
                'summary' => $item->summary,
                'prescription' => $item->prescription,
            ];

            $diario = [
                'idPage' => $item->idPage,
                'text' => $item->text,
            ];

            $infoMedicaPaciente['citas'][] = $cita;
            $infoMedicaPaciente['diario'][] = $diario;
        }

        return $infoMedicaPaciente;
    }
}
