<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SignRequest;

class SignRequestController extends Controller
{
    public function index()
    {
        $signs = SignRequest::where( 'trash', 0 )->where( 'register_code', '!=', null )->get();
        return success( $signs );
    }

    public function show( $id )
    {

    }

    public function edit( Request $request )
    {
        $validated = $request->validate([
            'title' => 'required',

        ]);
    }

    public function confirm( $id )
    {

    }

    public function delete( $id )
    {

    }

    public function toggleImgStatus()
    {

    }

}
