<?php

namespace App\Http\Controllers;

use Log;
use Exception;
use App\Services\UserService;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Resources\UserResource;
use App\Http\Requests\UserStoreRequest;
use Illuminate\Support\Facades\Response;
use App\Http\Requests\UserUpdateRequest;
use App\Http\Requests\PasswordUpdateRequest;


class CurrentUserController extends Controller
{
    /**
     * User Service
     * @var UserService
     * 
     */
    private $user_service;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(UserService $user_service)
    {
        $this->middleware('auth');
        $this->user_service = $user_service;
    }

    /**
     * Get current user's profile
     *
     * @param Request $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index( Request $request ) {

        try {
            $current_user = new UserResource($request->user()->load('userAccounts'));

            return response()->json([
                'status' => 'true',
                'data' => $current_user,
            ],200);
        } catch (Exception $ex) {
            Log::error('User return error : ' . $ex->getMessage());
            return response()->json([
                'status' => 'false',
                'message' => __('responces.user.error.get')
            ],400);
        }
    }

    /**
     * Update current user's profile
     *
     * @param UserUpdateRequest $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function update( UserUpdateRequest $request ) {

        try {
            $update_user = $this->user_service->updateCurrentUser($request);
            return response()->json([
                'status' => 'true',
                'data' => $update_user,
            ],200);

        } catch (Exception $ex) {
            Log::error('User update error : ' . $ex->getMessage());
            return response()->json([
                'status' => 'false',
                'message' => __('responces.user.error.update')
            ],400);
        }        
    }


    /**
     * Update current user's password
     *
     * @param PasswordUpdateRequest $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function updatePassword( PasswordUpdateRequest $request ) {

        try {
            $update_password = $this->user_service->updatePasswordCurrentUser($request);

            return response()->json([
                'status' => 'true',
            ],200);
        } catch (Exception $ex) {
            return response()->json([
                'status' => 'false',
                'message' => __('responces.user.error.updatepassword')
            ],400);
        }
    }
}
