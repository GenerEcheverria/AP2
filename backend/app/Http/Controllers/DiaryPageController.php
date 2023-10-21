<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DiaryPage;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class DiaryPageController extends Controller
{
    public function getHojasDiarioById(string $idPaciente){
        $diaryPages = DB::table('diary_pages')
        ->select('idPage', 'title', DB::raw('DATE(created_at) as fecha'), 'text as informacion')
        ->where('idPatient', $idPaciente)
        ->get();

        return $diaryPages;
    }

    public function crearPaginaDiario(Request $request){
        $informacionDiario = $request->input('informacionDiario');
        $dataPaginaDiario = json_decode($informacionDiario, true);

        $idPatient = User::select('patients.idPatient')
            ->join('patients', 'users.id', '=', 'patients.idUser')
            ->where('users.id', $dataPaginaDiario['idUser'] )
            ->get();

        $paginaDiario = new DiaryPage([
            'idPatient' => $idPatient[0]['idPatient'],
            'title' => $dataPaginaDiario['titulo'],
            'text' => $dataPaginaDiario['comentario'],
        ]);

        $paginaDiario->save();

        return response()->json(['message' => 'La página ha sido agregada a su diario'], 201);
    }

    public function destroy(string $id)
    {
        $page = DiaryPage::findOrFail($id);
        $page->delete();

        return response()->json([
            'message' => 'Successfully deleted',
            'page' => $page
        ], 200);
    }}