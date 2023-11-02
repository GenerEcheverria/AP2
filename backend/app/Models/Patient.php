<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;
    protected $primaryKey = 'idPatient';

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

    public function user()
    {
        return $this->belongsTo(User::class, 'idUser');
    }
}
