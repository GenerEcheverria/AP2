<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Appoinment;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class AppoinmentController extends Controller
{
    public function createAppointment(Request $request)
    {
        $informacionCita = $request->input('informacionCita');

        $data = json_decode($informacionCita, true);

        $idPatient = User::select('patients.idPatient')
            ->join('patients', 'users.id', '=', 'patients.idUser')
            ->where('users.id', $data['idPatient'] )
            ->get();

        $appointment = new Appoinment([
            'idDoctor' => $data['idDoctor'],
            'idPatient' => $idPatient[0]['idPatient'],
            'date' => $data['date'],
            'time' => $data['time'],
            'summary' => "",
            'prescription' => "",
        ]);

        $appointment->save();

        return response()->json(['message' => 'Cita creada con éxito'], 201);
    }

    public function getAvailableTimeByIdDoctor(string $dateSelectedInfo)
    {
        $dateTimeSelected = json_decode($dateSelectedInfo, true);
        
        $horarios = Appoinment::where('idDoctor', $dateTimeSelected['idDoc'])
            ->where('date', $dateTimeSelected['dateValue'])
            ->select('time as hora')
            ->get();

        $horasOcupadas = [];

        foreach ($horarios as $horario) {
            $horasOcupadas[] = $horario['hora'];
        }
    
        return $horasOcupadas;
    }

    public function getCitasPacintesById(string $idPaciente){
        $resultados = DB::table('appointments')
        ->select(
            'appointments.idAppointment as idCita',
            'appointments.date as fecha',
            'appointments.time as hora',
            'appointments.summary',
            'appointments.prescription'
        )
        ->where('appointments.idPatient', '=', $idPaciente)
        ->get();

        return $resultados;
    }
}
