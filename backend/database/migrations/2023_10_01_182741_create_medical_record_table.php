<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('medical_record', function (Blueprint $table) {
            $table->bigIncrements('idMedRec');
            $table->integer('number')->nullable();
            $table->text('background')->nullable();
            $table->text('phyExam')->nullable();
            $table->text('diagnostic')->nullable();
            $table->text('treatment')->nullable();
            $table->text('results')->nullable();
            $table->text('personalData')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('medical_record');
    }
};
