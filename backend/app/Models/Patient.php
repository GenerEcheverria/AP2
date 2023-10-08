<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;

    protected $fillable = [
        'idPatient',
        'idUser',
        'age',
        'curp',
        'maritalStatus',
        'occupation',
        'state',
        'municipality',
        'locality',
        'address',
    ];

    protected $table = 'patients';
}
