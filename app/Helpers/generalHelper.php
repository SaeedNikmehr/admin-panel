<?php

function success( $data = [], $message = '' )
{
    return response()->json( [
        'status' => 'success',
        'message' => $message,
        'type' => 'normal',
        'data' => $data,
        'errors' => []
    ] )
        ->header( 'Accept', 'application/json' )
        ->header( 'Content-Type', 'application/json' );
}

function error( $error = [], $message = 'عملیات با خطا مواجه شد' )
{
    return response()->json( [
        'status' => 'error',
        'message' => $message,
        'type' => 'normal',
        'data' => [],
        'errors' => $error
    ] )
        ->header( 'Accept', 'application/json' )
        ->header( 'Content-Type', 'application/json' );
}


