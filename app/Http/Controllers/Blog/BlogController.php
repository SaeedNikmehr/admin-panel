<?php

namespace App\Http\Controllers\Blog;

use App\Http\Controllers\Controller;
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

    public function insert( Request $request )
    {
        return 'insert';
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
