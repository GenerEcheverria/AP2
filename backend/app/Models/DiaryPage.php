<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DiaryPage extends Model
{
    use HasFactory;
    protected $primaryKey = 'idPage';

    protected $fillable = [
        'idPage',
        'idPatient',
        'title',
        'text',
    ];

    protected $table = 'diary_pages';
}
