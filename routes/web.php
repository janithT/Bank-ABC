<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

 Route::get('/', function () {
    return view('auth/login');
}); 

Auth::routes();

Route::group(["middleware" =>"web"], function(){

Route::get('api/documentation', '\L5Swagger\Http\Controllers\SwaggerController@api')->name('l5swagger.api');
    
    Route::group(["middleware" =>"auth-bank"], function(){
            Route::get('/home', 'HomeController@index')->name('home');
            
            // Auth user routes
            Route::prefix('/user')->group(function () {
                Route::get('', 'CurrentUserController@index');
                Route::patch('', 'CurrentUserController@update');
                Route::patch('/password', 'CurrentUserController@updatePassword');
            });

            Route::prefix('/transactions')->group(function () {
                Route::get('', 'TransactionController@index');
                Route::post('/credit', 'TransactionController@ownTransfer');
                Route::get('/credit/logs', 'TransactionController@creditLogs');
                Route::get('/debit/logs', 'TransactionController@debitLogs');
                Route::post('/beneficiary', 'TransactionController@beneficiaryTransfer');
            });

    });
});

