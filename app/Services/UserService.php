<?php

namespace App\Services;

use App\User;

class UserService
{
    private $user;

    /**
     * Setup user model dependencies
     * 
     * @param User $user
     */
    public function __construct (User $user)
    {
        $this->user = $user;
    }

    /**
     * Update current user
     * 
     *  @param User $user
     */
    public function updateCurrentUser ($request)
    {
        $user = $request->user();
        $user->update($request->only(['name','email']));

        $user->append('avatar');
        return $user;
    }
    
    /**
     * Update current user password
     * 
     *  @param User $user
     */
    public function updatePasswordCurrentUser ($request)
    {
        $user = $request->user();
        $user->password = bcrypt($request->password);
        $user->save();
        return $user;
    }
}