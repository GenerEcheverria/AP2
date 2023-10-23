<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    // Endpoint para iniciar sesión
    Route::post('login', 'App\Http\Controllers\AuthController@login');

    // Endpoint para registrar un usuario
    Route::post('register-patient', 'App\Http\Controllers\AuthController@registerPatient');

    // Endpoint para cerrar sesión
    Route::post('logout', 'App\Http\Controllers\AuthController@logout');

    // Endpoint para refrescar el token de autenticación
    Route::post('refresh', 'App\Http\Controllers\AuthController@refresh');

    // Endpoint para obtener los datos del usuario autenticado
    Route::post('me', 'App\Http\Controllers\AuthController@me');

    // Endpoint para verificar el token de autenticación
    Route::get('check', 'App\Http\Controllers\AuthController@checkToken');
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'account'
], function ($router) {
    Route::get('users', 'App\Http\Controllers\UserController@index');

    // Endpoint para obtener un usuario específico por ID
    Route::get('users/{id}', 'App\Http\Controllers\UserController@show');

    // Endpoint para actualizar un usuario específico por ID
    Route::put('users/{id}', 'App\Http\Controllers\UserController@update');

    // Endpoint para eliminar un usuario específico por ID
    Route::delete('users/{id}', 'App\Http\Controllers\UserController@destroy');
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'appointment'
], function ($router) {
    // Endpoint para crear cita usando id de user
    Route::post('cita/', 'App\Http\Controllers\AppoinmentController@createAppointment');
    Route::get('availableTime/{dateSelectedInfo}', 'App\Http\Controllers\AppoinmentController@getAvailableTimeByIdDoctor');
    Route::get('getCitasPacintesById/{idPaciente}', 'App\Http\Controllers\AppoinmentController@getCitasPacintesById');
    Route::get('getUpcomingAppointment/{idUser}', 'App\Http\Controllers\AppoinmentController@getUpcomingAppointment');
    Route::get('getForDoctor/{idDoctor}/{date}', 'App\Http\Controllers\AppoinmentController@getAppointmentsForDoctor');
    Route::put('setSummary/{idAppointment}', 'App\Http\Controllers\AppoinmentController@setSummary');
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'diario'
], function ($router) {
    // Endpoint para crear cita usando id de user
    Route::get('getHojasDiarioById/{idPaciente}', 'App\Http\Controllers\DiaryPageController@getHojasDiarioById');
    Route::post('paginaDiario/', 'App\Http\Controllers\DiaryPageController@crearPaginaDiario');
    Route::delete('page/{id}', 'App\Http\Controllers\DiaryPageController@destroy');
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'doctor'
], function ($router) {
    Route::get('doctores/', 'App\Http\Controllers\DoctorController@getDoctores');
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'paciente'
], function ($router) {
    Route::get('pacientes/{_idDoc}', 'App\Http\Controllers\PatientController@getPacientesByIdDoc');
    Route::get('info-paciente/{idPaciente}', 'App\Http\Controllers\PatientController@getMedicalInfoById');
});

// Endpoint para obtener los datos del usuario autenticado
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
