<?php

function success( $data = [], $message = '' )
{
    return response()->json( [
        'status' => 'success',
        'message' => $message,
        'type' => 'normal',
        'data' => $data,
        'error' => []
    ] )
        ->header( 'Accept', 'application/json' )
        ->header( 'Content-Type', 'application/json' );
}

function error( $error = [], $message = '' )
{
    return response()->json( [
        'status' => 'error',
        'message' => $message,
        'type' => 'normal',
        'data' => [],
        'error' => $error
    ] )
        ->header( 'Accept', 'application/json' )
        ->header( 'Content-Type', 'application/json' );
}

