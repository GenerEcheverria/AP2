<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    use HasFactory;

    protected $fillable = [
        'idDoctor',
        'idUser',
        'license',
        'idOffice',
    ];

    protected $table = 'doctors';
}
