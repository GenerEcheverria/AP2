<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appoinment extends Model
{
    use HasFactory;
    protected $primaryKey = 'idAppointment';

    protected $fillable = [
        'idAppoinment',
        'idDoctor',
        'idPatient',
        'date',
        'time',
        'summary',
        'prescription',
    ];
    protected $table = 'appointments';

    public function patient()
    {
        return $this->belongsTo(Patient::class, 'idPatient');
    }

}
