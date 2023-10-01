<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DiaryPage extends Model
{
    use HasFactory;

    protected $fillable = [
        'idPage',
        'idDiary',
        'date',
        'text',
    ];

    protected $table = 'doctors';
}
