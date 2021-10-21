<?php

namespace App\Http\Controllers\Blog;

use App\Http\Controllers\Controller;
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

    public function save( Request $request )
    {
        $inputs = $request->input();
        $category = new BlogCategory();
        $category->title = $inputs[ 'title' ];
        $category->title_en = $inputs[ 'title_en' ];
        $category->parent = $inputs[ 'parent' ];
        $category->save();
        return success( [], 'با موفقیت افزوده شد' );
    }

    public function update( Request $request, $id )
    {
        $inputs = $request->input();
        $category = BlogCategory::findOrFail( $id );
        $category->title = $inputs[ 'title' ];
        $category->title_en = $inputs[ 'title_en' ];
        $category->parent = $inputs[ 'parent' ];
        $category->save();
        return success( [], 'با موفقیت ویرایش شد' );
    }

    public function delete( $id )
    {
        $category = BlogCategory::findOrFail( $id );
        $category->delete();
        return success( [], 'با موفقیت حذف شد' );
    }
}
