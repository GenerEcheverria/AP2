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
        Schema::create('appointments', function (Blueprint $table) {
            $table->bigIncrements('idAppointment');
            $table->unsignedInteger('idPatient');
            $table->unsignedInteger('idDoctor');
            $table->date('date');
            $table->time('time');
            $table->text('summary');
            $table->text('prescription');
            $table->timestamps();

            $table->foreign('idPatient')->references('idPatient')->on('patients')
                ->onUpdate('cascade');
            $table->foreign('idDoctor')->references('idDoctor')->on('doctors')
                ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('appointments');
    }
};
