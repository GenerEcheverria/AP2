<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('age');
            $table->enum('sex', ['Male','Female']);
            $table->integer('phone');
            $table->string('email')->unique();
            $table->string('password');
            $table->enum('role',['Doctor','Patient']);
            $table->integer('idPatient')->nullable();
            $table->unsignedBigInteger('idDoctor')->nullable();
            $table->timestamps();

            $table->foreign('idDoctor')->references('idDoctor')->on('doctors')
                ->onDelete('cascade')
                ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}

