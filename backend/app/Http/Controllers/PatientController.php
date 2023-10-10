<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Patient; 

class PatientController extends Controller
{
    public function getPacientesByIdDoc(string $_idDoc){
        $resultados = DB::table('appointments')
        ->join('patients', 'appointments.idPatient', '=', 'patients.idPatient')
        ->join('users', 'patients.idUser', '=', 'users.id')
        ->select(
            DB::raw('DISTINCT patients.idPatient AS id'),
            'users.name AS nombre',
            'patients.age AS edad',
            'patients.curp AS curp',
            'patients.maritalStatus AS estadoCivil',
            'patients.occupation AS ocupacion',
            'patients.state AS estado',
            'patients.municipality AS municipio',
            'patients.locatlity AS localidad',
            'patients.address AS direccion'
        )
        ->where('appointments.idDoctor', '=', $_idDoc)
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
