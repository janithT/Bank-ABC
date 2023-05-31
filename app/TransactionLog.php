<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TransactionLog extends Model
{
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'from_account', 'to_account', 'amount', 'debtor_comment','beneficiary_comment', 'type'
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
     * The attributes that should be append to native types.
     *
     * @var array
     */
    protected $appends = [
        'created'
    ];

    /**
     * Append created time with readble format
     *
     */
    public function getCreatedAttribute() 
    {
        if (empty($this->created_at)) {
            return null;
        }
        return $this->created_at->toFormattedDateString();
    }

    /**
     * Users logs table Relation
     * 
     */
    public function user() 
    {
        return $this->belongsTo(User::class);
    }
}
