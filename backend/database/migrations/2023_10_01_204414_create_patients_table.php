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
        Schema::create('patients', function (Blueprint $table) {
            $table->bigIncrements('idPatient');
            $table->string('curp');
            $table->enum('cStatus', ['Soltera', 'Casada', 'Divorciada', 'Viuda', 'Unión libre']);
            $table->string('ocup');
            $table->string('state');
            $table->string('munic');
            $table->string('locat');
            $table->string('address');
            $table->unsignedBigInteger('idMedRec');
            $table->timestamps();

            $table->foreign('idMedRec')->references('idMedRec')->on('medical_record')
                ->onDelete('cascade')
                ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('patients');
    }
};
