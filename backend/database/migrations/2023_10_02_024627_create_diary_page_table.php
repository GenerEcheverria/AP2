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
        Schema::create('diary_page', function (Blueprint $table) {
            $table->bigIncrements('idPage');
            $table->unsignedBigInteger('idPatient');
            $table->date('date');
            $table->text('text');
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
        Schema::dropIfExists('diary_page');
    }
};
