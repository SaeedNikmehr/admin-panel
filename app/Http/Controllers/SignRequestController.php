<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SignRequest;
use Illuminate\Support\Facades\DB;

class SignRequestController extends Controller
{
    public function index()
    {
        $signs = SignRequest::where( 'trash', 0 )->where( 'register_code', '!=', null )->get();
        return success( $signs );
    }

    public function show( $id )
    {
        $detail = SignRequest::where( 'id', $id )->first();
        if( !$detail ) return error( [], 'موردی یافت نشد' );
        if( is_numeric( $detail->state ) ) {
            $detail->state = DB::table( 'pub_province' )->where( 'id', $detail->state )->first()->name ?? '';
            $detail->city = DB::table( 'pub_city' )->where( 'id', $detail->city )->first()->name ?? '';
        }
        return success( $detail );
    }

    public function edit( Request $request )
    {
        $validated = $request->validate( [
            'title' => 'required',

        ] );
    }

    public function confirm( $id )
    {

    }

    public function delete( $id )
    {

    }

    public function toggleImageStatus()
    {

    }

}
