<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicalRecord extends Model
{
    use HasFactory;
    protected $primaryKey = 'idPatient';

    protected $fillable = [
        'idMedRec',
        'idPatient',
        'number',
        'background',
        'phyExam',
        'diagnostic',
        'treatment',
        'result',
    ];

    protected $table = 'medical_records';
}
