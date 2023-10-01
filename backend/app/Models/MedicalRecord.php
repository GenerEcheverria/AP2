<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicalRecord extends Model
{
    use HasFactory;

    protected $fillable = [
        'idMedRec',
        'number',
        'background',
        'phyExam',
        'diagnostic',
        'treatment',
        'result',
        'personalData',
    ];

    protected $table = 'medical_record';
}
