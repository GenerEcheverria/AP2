<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Appoinment;

class AppoinmentController extends Controller
{
    public function createAppointment(Request $request)
    {
        $informacionCita = $request->input('informacionCita');

        $data = json_decode($informacionCita, true);
        
        // Crea una nueva cita en la base de datos usando los datos del JSON
        $appointment = new Appoinment([
            'idDoctor' => $data['idDoctor'],
            'idPatient' => $data['idPatient'],
            'date' => $data['date'],
            'time' => $data['time'],
            'summary' => "",
            'prescription' => "",
        ]);

        // Guarda la cita en la base de datos
        $appointment->save();

        // Puedes devolver una respuesta JSON para indicar que la cita se ha creado exitosamente
        return response()->json(['message' => 'Cita creada con éxito'], 201);
    }
}
