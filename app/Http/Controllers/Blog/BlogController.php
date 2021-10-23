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
        Blog::create( $request->all() );
        return success( [], 'با موفقیت افزوده شد' );
    }

    public function update( UpsertRequest $request, $id )
    {
        Blog::findOrFail( $id )->update( $request->all() );
        return success( [], 'با موفقیت ویرایش شد' );
    }

    public function delete( $id )
    {
        Blog::findOrFail( $id )->delete();
        return success( [], 'با موفقیت حذف شد' );
    }
}
