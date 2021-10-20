<?php

namespace App\Http\Controllers;

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
        return 'save';
    }

    public function update( Request $request, $id )
    {
        return 'update';
    }

    public function delete( $id )
    {
        $category = BlogCategory::findOrFail( $id );
        $category->delete();
        return success( $category );
    }
}
