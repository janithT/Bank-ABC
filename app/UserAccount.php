<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserAccount extends Model
{
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'account_number', 'amount'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'amount' => 'integer',
    ];

    /**
     * Users table Relation
     * 
     */
    public function user() 
    {
        return $this->belongsTo(User::class);
    }

    /**
     * User from account number
     * 
     */
    public function userFromAccountNumber($account_number) 
    {
        return $this->where('account_number', $account_number)->first();
    }

}
