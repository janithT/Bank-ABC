<?php

namespace App\Http\Middleware;

use Closure;
use JWTAuth;
use Exception;
use App\Models;
use Universe;
use Auth;
use Tymon\JWTAuth\Http\Middleware\BaseMiddleware;

class JwtAuthM extends BaseMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (!Auth::check()){
            if(Request::wantsJson())
                return App::abort(403);
            return redirect()->route ( "login");
        }

        $user = Auth::user();
        
        if ($user == null || $user->isSuspended() ) {
            Auth::logout ();
            if(Request::wantsJson())
                return App::abort(403);
            return redirect()->route ( "login");
        }
        
        return $next($request);
    }
}
