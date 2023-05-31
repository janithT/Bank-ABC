<?php

namespace App\Services;

use App\User;
use Carbon\Carbon;
use App\UserAccount;
use App\TransactionLog;

class TransactionService
{
    private $user;
    private $logs;
    private $useraccount;

    /**
     * Setup user model dependencies
     * 
     * @param User $user
     */
    public function __construct (User $user, TransactionLog $logs, UserAccount $useraccount)
    {
        $this->user = $user;
        $this->logs = $logs;
        $this->useraccount = $useraccount;
    }

    /**
     * Update own transactions
     * 
     *  @param User $user
     *  @param Request $request
     */
    public function updateOwnTransaction(User $user, $request)
    {
        $useraccount = $user->userAccounts;
        $deposit = $request->amount;

        //Update the deposit amount
        $useraccount->update([
            'amount' => $useraccount->amount + $deposit
        ]);

        // Send notification for user email or text message from sns/ses server

        $user->append('avatar');
        $user->load('userAccounts');
        return $user;
    }

    /**
     * Update beneficiary transactions
     * 
     *  @param User $user
     *  @param Request $request
     */
    public function updateBeneficiaryTransaction($user, $request)
    {
        $useraccount = $user->userAccounts;
        $beneficiary_account = $request->beneficiary_account_number;
        $deposit = $request->beneficiary_amount;

        // reduce the deposit amount
        $useraccount->update([
            'amount' => $useraccount->amount - $deposit
        ]);

        // add to the beneficiary account
        $beneficiary_user = $this->useraccount->where('account_number', $beneficiary_account)->first();
        $beneficiary_update  =  $beneficiary_user->update([
                                    'amount' => $beneficiary_user->amount + $deposit
                                ]);

        // Send notification for user email or text message from sns/ses server

        $user->append('avatar');
        $user->load('userAccounts');
        return $user;
    }

    /**
     * Add log own transactions
     * 
     *  @param Request $request
     */
    public function addLogTransaction ($request)
    { 
        $typeArray = ['debit', 'credit'];
        $now = Carbon::now();
        $ben_user = $this->useraccount->userFromAccountNumber($request->beneficiary_account_number);
        
        if (isset($request->beneficiary_account_number)) {
            $logsData = [];
            foreach ($typeArray as $item) {
                $logsData[] = [
                    'user_id' => $item=='debit' ? $request->user()->id : $ben_user->user_id,
                    'from_account' => $request->account_number,
                    'to_account' => $request->beneficiary_account_number,
                    'amount' => $request->beneficiary_amount,
                    'debtor_comment' => $request->debtor_comment,
                    'beneficiary_comment' => $request->beneficiary_comment,
                    'type' => $item,
                    'created_at' => $now
                ];
            }
            return $this->logs->insert($logsData);
        } else {
            return $this->logs->create([
                'user_id' => $request->user()->id,
                'from_account' => $request->account_number,
                'to_account' => $request->account_number,
                'amount' => $request->amount,
                'debtor_comment' => $request->debtor_comment,
                'beneficiary_comment' => $request->debtor_comment,
                'type' => 'credit'
            ]);
        }
    }

    /**
     * Get user deposits
     * 
     *  @param User $user
     */
    public function deposits(User $user)
    {
        $user_account = $user->userAccounts->account_number;
        
        return $this->logs->where('to_account' , $user_account)
                          ->where('type', 'credit')->get();
    }


    /**
     * Get user Transfers
     * 
     *  @param User $user
     */
    public function debited(User $user)
    {
        $user_account = $user->userAccounts->account_number;
        
        return $this->logs->where('from_account' , $user_account)
                          ->where('type', 'debit')->get();
    }

}