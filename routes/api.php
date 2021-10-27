<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SignRequestController;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use App\Http\Controllers\Blog\BlogController;
use App\Http\Controllers\Blog\BlogCategoryController;
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

/*
 * Sign requests
 */
Route::prefix( 'signs' )->group( function() {
    Route::get( '/', [ SignRequestController::class, 'index' ] );
    Route::get( '{id}', [ SignRequestController::class, 'show' ] );
    Route::post( '{id}/confirm', [ SignRequestController::class, 'confirm' ] );
    Route::post( '{id}/toggle-image-status', [ BlogController::class, 'toggleImageStatus' ] );
    Route::put( '{id}', [ SignRequestController::class, 'update' ] );
    Route::put( '{id}/update-image', [ BlogController::class, 'updateImage' ] );
    Route::delete( '{id}/{userId}', [ SignRequestController::class, 'delete' ] );
} );

/*
 * Blog
 */
Route::prefix( 'blog' )->group( function() {
    Route::get( '/', [ BlogController::class, 'index' ] );
    Route::get( '{id}', [ BlogController::class, 'show' ] );
    Route::post( '/', [ BlogController::class, 'insert' ] );
    Route::put( '{id}', [ BlogController::class, 'update' ] );
    Route::delete( '{id}', [ BlogController::class, 'delete' ] );
} );

/*
 * Blog category
 */
Route::prefix( 'blog-category' )->group( function() {
    Route::get( '/', [ BlogCategoryController::class, 'index' ] );
    Route::get( '{id}', [ BlogCategoryController::class, 'show' ] );
    Route::post( '/', [ BlogCategoryController::class, 'insert' ] );
    Route::put( '{id}', [ BlogCategoryController::class, 'update' ] );
    Route::delete( '{id}', [ BlogCategoryController::class, 'delete' ] );
} );

Route::middleware( 'auth:sanctum' )->get( '/user', function( Request $request ) {
    return $request->user();
} );

Route::any( '/{a?}/{b?}/{c?}', function() { throw new NotFoundHttpException( '' ); } );
