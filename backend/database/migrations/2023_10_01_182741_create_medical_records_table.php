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
        Schema::create('medical_records', function (Blueprint $table) {
            $table->increments('idMedRec');
            $table->unsignedInteger('idPatient');
            $table->integer('number');
            $table->text('background');
            $table->text('phyExam');
            $table->text('diagnostic');
            $table->text('treatment');
            $table->text('results');
            $table->timestamps();

            $table->foreign('idPatient')->references('idPatient')->on('patients')
            ->onDelete('cascade')
            ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('medical_records');
    }
};
