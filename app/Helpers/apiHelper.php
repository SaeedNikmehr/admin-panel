<?php

use Illuminate\Support\Facades\Http;

function sendRequest( $input = [] )
{
    $method = $input[ 'method' ] ?? 'no-method';
    $data = $input[ 'data' ] ?? [];
    $httpMethod = $input[ 'httpMethod' ] ?? 'post';
    $log = $input[ 'log' ] ?? true;
    $tokenInfo = extractTokenInfo( $input[ 'token' ] ?? null );
    $headers = headers( $tokenInfo );
    $url = env( 'BASE_API_URL' ) . $method;

    $result = match ( $httpMethod ) {
        'get' => Http::timeout( 60 )->withHeaders( $headers )->get( $url ),
        'post' => Http::timeout( 60 )->withHeaders( $headers )->post( $url, $data ),
    };

    if ( $log === true ) saveLogRequest( $method, $data, $result, $headers, $tokenInfo );
    //_json_dump( $result->json() );
    return $result->json();

}

function extractTokenInfo( $token = null )
{
    return [ 'clientToken' => '', 'userToken' => '' ];
}

function headers( $tokenInfo )
{
    return
        [
            "cache-control" => "no-cache",
            "content-type" => " application/json",
            "Accept" => " application/json",
            "Client-Token" => $tokenInfo[ 'clientToken' ],
            "User-Token" => $tokenInfo[ 'userToken' ],
            "language" => 'fa',
            "user" => env( 'API_USERNAME' ),
            "password" => env( 'API_PASSWORD' )
        ];
}

function saveLogRequest( $method, $data, $result, $headers, $tokenInfo )
{
    return true;
}