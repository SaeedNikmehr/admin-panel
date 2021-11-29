<?php

namespace App\Http\Controllers\Blog;

use App\Http\Controllers\Controller;
use App\Http\Requests\Blog\UpsertRequest;
use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function index()
    {
        $blogs = Blog::all();
        return success( $blogs );
    }

    public function show( $id )
    {
        $blog = Blog::findOrFail( $id );
        return success( $blog );
    }

    public function insert( UpsertRequest $request )
    {
        $result = Blog::create( $request->all() );
        Blog::findOrFail( $result->id )->categories()->attach( $request->categories );
        return success();
    }

    public function update( UpsertRequest $request, $id )
    {
        $blog = Blog::findOrFail( $id );
        $updateResult = $blog->update( $request->all() );
        if ( $updateResult === true ) {
            $blog->categories()->sync( $request->categories );
            return success();
        }
        return error();
    }

    public function delete( $id )
    {
        Blog::findOrFail( $id )->delete();
        return success();
    }

    public function uploadImage( Request $request, $id )
    {
        $blog = Blog::findOrFail( $id );

    }


}
