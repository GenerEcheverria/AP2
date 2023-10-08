<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Models\MedicalRecord;
use App\Models\Patient;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB;


use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'registerPatient', 'checkToken']]);
    }

    /**
     * Attempt to log in the user and generate a JWT token.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $credentials = request(['email', 'password']);
        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        return $this->respondWithToken($token);
    }


    /**
     * Register a new user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */

    public function registerPatient(Request $request)
    {
        // Iniciar una transacción
        DB::beginTransaction();
        try {
            $validator = Validator::make($request->all(), [
                'name' => 'required',
                'age' => 'required',
                'sex' => 'required',
                'phone' => 'required|string|min:10|max:10',
                'email' => 'required|string|email|max:100|unique:users',
                'password' => 'required|string|min:6',
                //Patient data
                'curp' => 'string',
                "cStatus" => 'required|string',
                "ocup" => 'string',
                "state" => 'required|string',
                "munic" => 'required|string',
                "locat" => 'required|string',
                "address" => 'string'
            ]);

            if ($validator->fails()) {
                DB::rollBack();
                return response()->json($validator->errors()->toJson(), 400);
            }

            $medicalRecord = MedicalRecord::create();
            $patient = Patient::create(array_merge(
                $validator->validate(),
                [
                    'idMedRec' => $medicalRecord->id
                ]
            ));
            $user = User::create(array_merge(
                $validator->validate(),
                [
                    'password' => bcrypt($request->password),
                    'role' => 'Patient',
                    'idPatient' => $patient->id
                ]
            ));
            DB::commit();
            return response()->json([
                'message' => 'Successfully created',
                'user' => $user,
                'patient' => $patient,
                'medical record' => $medicalRecord
            ], 201);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['message' => 'Error creating the patient', 'error' => $e->getMessage()], 500);
        }
        
    }


    /**
     * Get the authenticated user.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        $user = auth()->user();
        $role = $user->role;

        return response()->json([
            'idUser' => $user->id,
            'idPatient' => $user->idPatient,
            'idDoctor' => $user->idDoctor,
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'role' => $role
        ]);
    }

    /**
     * Check the validity of a token.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function checkToken(Request $request)
    {
        try {
            $token = JWTAuth::parseToken()->getToken();
            $user = JWTAuth::authenticate($token);
            if (!$user) {
                return response()->json(['valid' => false], 401);
            }
            return response()->json(['valid' => true], 200);
        } catch (\Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            return response()->json(['valid' => false], 401);
        } catch (\Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            return response()->json(['valid' => false], 401);
        } catch (\Tymon\JWTAuth\Exceptions\JWTException $e) {
            return response()->json(['valid' => false], 500);
        }
    }
}
