<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;

    protected $fillable = [
        'idDPatient',
        'curp',
        'cStatus',
        'ocup',
        'state',
        'munic',
        'locat',
        'address',
        'idMedRec',
        'idDiary',
    ];

    protected $table = 'patients';
}
