<?php

namespace App;

use App\Processors\AvatarProcessor;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
 
class User extends Authenticatable implements JWTSubject
{
    use Notifiable, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'phone', 'password', 'active'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The attributes that should be append to native types.
     *
     * @var array
     */
    protected $appends = [
        'created',
    ];

    /**
     * Get user Avatar.
     *
     */
    public function getAvatarAttribute() 
    {
        return AvatarProcessor::get($this);
    }

    /**
     * Check user suspended/ user active
     * 
     * @return boolean
     */
    public function isSuspended()
    {
		if($this->active){
            return false;
        }
		return true;
    }

    /**
     * Append created time with readble format
     * 
     * @return date.
     */
    public function getCreatedAttribute() 
    {
        if (empty($this->created_at)) {
            return null;
        }
        return $this->created_at->toFormattedDateString();
    }

    /**
     * UserAccount Relation
     * 
     */
    public function userAccounts() 
    {
        return $this->hasOne(UserAccount::class, 'user_id', 'id');
    }

    /**
     * Transfer logs Relation
     * 
     */
    public function transactionLogs() 
    {
        return $this->hasMany(TransactionLog::class, 'user_id', 'id');
    }

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }
}
