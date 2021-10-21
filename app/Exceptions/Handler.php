<?php

namespace App\Exceptions;

use ArgumentCountError;
use Error;
use ErrorException;
use Illuminate\Contracts\Container\BindingResolutionException;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable( function( Throwable $e ) {
            return false;
        } );
    }

    public function render( $request, Throwable $e )
    {

        if( $request->is( 'api/*' ) ) {

            if( $e instanceof ValidationException ) {
                return response()->json( [
                    'status' => 'error',
                    'message' => $e->getMessage(),
                    'type' => 'ValidationException',
                    'data' => [],
                    'errors' => $e->errors()
                ] );
            }

            if( $e instanceof QueryException ) {
                return response()->json( [
                    'status' => 'error',
                    'message' => $e->getMessage(),
                    'type' => 'QueryException',
                    'data' => [],
                    'errors' => []
                ] );
            }

            if( $e instanceof NotFoundHttpException ) {
                return response()->json( [
                    'status' => 'error',
                    'message' => 'آدرس وارد شده اشتباه است',
                    'type' => 'NotFoundHttpException',
                    'data' => [],
                    'errors' => []
                ] );
            }

            if( $e instanceof ModelNotFoundException ) {
                return response()->json( [
                    'status' => 'error',
                    'message' => $e->getMessage(),
                    'type' => 'ModelNotFoundException',
                    'data' => [],
                    'errors' => []
                ] );
            }

            if( $e instanceof ArgumentCountError ) {
                return response()->json( [
                    'status' => 'error',
                    'message' => $e->getMessage(),
                    'type' => 'ArgumentCountError',
                    'data' => [],
                    'errors' => []
                ] );
            }

            if( $e instanceof ErrorException ) {
                return response()->json( [
                    'status' => 'error',
                    'message' => $e->getMessage(),
                    'type' => 'ErrorException',
                    'data' => [],
                    'errors' => []
                ] );
            }

            if( $e instanceof Error ) {
                return response()->json( [
                    'status' => 'error',
                    'message' => $e->getMessage(),
                    'type' => 'Error',
                    'data' => [],
                    'errors' => []
                ] );
            }


            if( $e instanceof BindingResolutionException ) {
                return response()->json( [
                    'status' => 'error',
                    'message' => $e->getMessage(),
                    'type' => 'BindingResolutionException',
                    'data' => [],
                    'errors' => []
                ] );
            }
//            if( $e instanceof AccessDeniedHttpException ) {
//                return response()->json( [
//                    'status' => 'error',
//                    'message' => $e->getMessage(),
//                    'type' => 'AccessDeniedHttpException',
//                    'data' => [],
//                    'errors' => []
//                ] );
//            }

        }

//        return response()->json( [
//            'errors' => $e->errors(),
//            'getCode' => $e->getCode(),
//            'getLine' => $e->getLine(),
//            'getFile' => $e->getFile(),
//            'getMessage' => $e->getMessage(),
//            'getTrace' => $e->getTrace(),
//            'getPrevious' => $e->getPrevious(),
//            'getTraceAsString' => $e->getTraceAsString(),
//        ], 404 );

        return parent::render( $request, $e );
    }
}
