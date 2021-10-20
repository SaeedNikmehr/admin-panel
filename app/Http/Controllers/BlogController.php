<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function index()
    {
        return 'index';
    }

    public function show( $id )
    {
        return 'show';
    }

    public function save( Request $request )
    {
        return 'save';
    }

    public function update( Request $request, $id )
    {
        return 'update';
    }

    public function delete( $id )
    {
        return 'delete';
    }
}
