<?php

namespace App\Http\Controllers;

use Log;
use App\User;
use App\UserAccount;
use Illuminate\Http\Request;
use App\Services\TransactionService;
use App\Http\Requests\TransactionsUpdateRequest;

class TransactionController extends Controller
{
    /**
     * Transaction Service 
     * @var TransactionService
     * 
     */
    private $transaction_service;

     /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(TransactionService $transaction_service)
    {
        $this->middleware('auth');
        $this->transaction_service = $transaction_service;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function ownTransfer(TransactionsUpdateRequest $request)
    {
        $user = $request->user();

        try{
            $update_user_account = $this->transaction_service->updateOwnTransaction($user, $request);
            $add_log = $this->transaction_service->addLogTransaction($request);
            return response()->json([
                    'status' => "true",
                    'message' => __('responces.transaction.success.update'),
                    'data' => $update_user_account
            ],200);
        } catch (Exception $ex) {
            Log::error('Transfer update error : ' . $ex->getMessage(). '- on user:'. $user->id);
            return response()->json([
                'status' => 'false',
                'message' => __('responces.transaction.error.update')
            ],400);
        }
        
    }
    
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function beneficiaryTransfer(TransactionsUpdateRequest $request)
    {
        $user = $request->user();

        try{
            $update_user_account = $this->transaction_service->updateBeneficiaryTransaction($user, $request);
            $add_log = $this->transaction_service->addLogTransaction($request);

            return response()->json([
                    'status' => "true",
                    'message' => __('responces.transaction.success.update'),
                    'data' => $update_user_account
            ],200);
        } catch (Exception $ex) {
            Log::error('Transfer update error : ' . $ex->getMessage(). '- on user:'. $user->id);
            return response()->json([
                'status' => 'false',
                'message' => __('responces.transaction.error.update')
            ],400);
        }
        
    }

    /**
     * Get specified resource from storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function creditLogs( Request $request )
    {
        $user = $request->user();
        $transaction_own_logs = $this->transaction_service->deposits($user);

        return response()->json([
            'status' => "success",
            'data' => $transaction_own_logs
        ]);
    }

    /**
     * Get specified resource from storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function debitLogs( Request $request )
    {
        $user = $request->user();
        $transaction_own_logs = $this->transaction_service->debited($user);

        return response()->json([
            'status' => "success",
            'data' => $transaction_own_logs
        ]);
    }
    
}
