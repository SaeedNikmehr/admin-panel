<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SignRequestController;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//
Route::get( '/signs', [ SignRequestController::class, 'index' ] );
Route::put( '/signs', [ SignRequestController::class, 'edit' ] );

Route::middleware( 'auth:sanctum' )->get( '/user', function( Request $request ) {
    return $request->user();
} );

Route::any( '/{a?}/{b?}/{c?}', function() { throw new NotFoundHttpException(''); } );
