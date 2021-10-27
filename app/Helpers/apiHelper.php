<?php

use Illuminate\Support\Facades\Http;

function sendRequest( $input = [] )
{
    $method = $input[ 'method' ] ?? 'no-method';
    $data = $input[ 'data' ] ?? [];
    $httpMethod = $input[ 'httpMethod' ] ?? 'post';
    $log = $input[ 'log' ] ?? true;
    list( $clientToken, $userToken ) = extractToken( $input[ 'token' ] ?? null );

    $response = Http::post( 'http://example.com/users', [
        'name' => 'Steve',
        'role' => 'Network Administrator',
    ] );
}

function extractToken( $token = null )
{

}
