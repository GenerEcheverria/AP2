<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DiaryPage;
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
}
