<?php

function _json_dump( $result )
{
    if ( is_array( $result ) or is_object( $result ) ) {
        $output = json_encode( $result, JSON_UNESCAPED_SLASHES );
    } else {
        $output = json_decode( $result, true );
        if ( json_last_error() == JSON_ERROR_NONE ) {
            $output = json_encode( $output, JSON_UNESCAPED_SLASHES );
        } else {
            $output = json_encode( [ $result ], JSON_UNESCAPED_SLASHES );
        }
    }
    header( 'Content-Type: application/json' );
    echo $output;
    die();
}

function _var_dump( $result )
{
    ini_set( "xdebug.var_display_max_children", -1 );
    ini_set( "xdebug.var_display_max_data", -1 );
    ini_set( "xdebug.var_display_max_depth", -1 );
    echo "<pre>";
    var_dump( $result );
    die();
}