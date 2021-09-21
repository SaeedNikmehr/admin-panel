<?php

namespace App\Exceptions;

use Illuminate\Database\QueryException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Validation\ValidationException;
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
        //return $e;
        if($e instanceof ValidationException){
            var_dump('validation error');
        } if($e instanceof QueryException){
            var_dump('database error');
        }
        return response()->json($e->getResponse(), 404 );
        var_dump( $e->getCode() );
        var_dump( $e->getLine() );
        var_dump( $e->getFile() );
        var_dump( $e->getMessage() );
        var_dump( $e->getTrace() );
        //var_dump( $e->getPrevious() );
        //var_dump( $e->getTraceAsString() );
//        if( $request->is( 'api/*' ) ) {
//            return response()->json( [
//                'message' => 'Record not found.'
//            ], 404 );
//        }

        return parent::render( $request, $e );
    }
}
