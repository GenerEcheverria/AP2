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
            $table->increments('idPatient');
            $table->unsignedBigInteger('idUser');
            $table->unsignedInteger('age');
            $table->string('curp');
            $table->enum('maritalStatus', ['Soltera', 'Casada', 'Divorciada', 'Viuda', 'Unión libre']);
            $table->string('occupation');
            $table->string('state');
            $table->string('municipality');
            $table->string('locatlity');
            $table->string('address');
            $table->timestamps();

            $table->foreign('idUser')->references('id')->on('users')
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
