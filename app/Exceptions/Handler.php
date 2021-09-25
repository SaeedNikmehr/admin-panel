<?php

namespace App\Exceptions;

use Illuminate\Database\QueryException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
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
            var_dump( 'ok' );
        } );
    }

    public function render( $request, Throwable $e )
    {

        if( $request->is( 'api/*' ) ) {
            if( $e instanceof ValidationException ) {
                return response()->json( [
                    'status' => 'error',
                    'message' => $e->getMessage(),
                    'type' => 'validation',
                    'data' => [],
                    'errors' => $e->errors()
                ] );
            }

            if( $e instanceof QueryException ) {
                return response()->json( [
                    'status' => 'error',
                    'message' => $e->getMessage(),
                    'type' => 'query',
                    'data' => [],
                    'errors' => []
                ] );
            }

            if( $e instanceof NotFoundHttpException ) {
                return response()->json( [
                    'status' => 'error',
                    'message' => 'آدرس وارد شده اشتباه است',
                    'type' => '404',
                    'data' => [],
                    'errors' => []
                ] );
            }

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
