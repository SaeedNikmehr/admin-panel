<?php

use Illuminate\Http\JsonResponse;

function success( $data = [], $message = '' ): JsonResponse
{
    if ( count( $data ) === 0 && empty( $message ) ) $message = 'با موفقیت انجام شد';
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

function error( $errors = [], $message = 'عملیات با خطا مواجه شد' ): JsonResponse
{
    return response()->json( [
        'status' => 'error',
        'message' => $message,
        'type' => 'normal',
        'data' => [],
        'errors' => $errors
    ] )
        ->header( 'Accept', 'application/json' )
        ->header( 'Content-Type', 'application/json' );
}


