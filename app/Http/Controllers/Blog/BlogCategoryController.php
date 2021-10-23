<?php

namespace App\Http\Controllers\Blog;

use App\Http\Controllers\Controller;
use App\Http\Requests\BlogCategory\UpsertRequest;
use Illuminate\Http\Request;
use App\Models\BlogCategory;

class BlogCategoryController extends Controller
{
    public function index()
    {
        $categories = BlogCategory::all();
        return success( $categories );
    }

    public function show( $id )
    {
        $category = BlogCategory::findOrFail( $id );
        return success( $category );
    }

    public function insert( UpsertRequest $request )
    {
        BlogCategory::create( $request->all() );
        return success( [], 'با موفقیت افزوده شد' );
    }

    public function update( UpsertRequest $request, $id )
    {
        BlogCategory::findOrFail( $id )->update( $request->all() );
        return success( [], 'با موفقیت ویرایش شد' );
    }

    public function delete( $id )
    {
        BlogCategory::findOrFail( $id )->delete();
        return success( [], 'با موفقیت حذف شد' );
    }
}
