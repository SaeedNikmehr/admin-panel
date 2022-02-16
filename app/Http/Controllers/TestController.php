<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\BlogCategory;
use Illuminate\Http\Request;

class TestController extends Controller
{
    public function createFakeData()
    {
        $r = BlogCategory::factory()->count( 10 )->create();
        $r = Blog::factory()->count( 10 )->create();

        _json_dump( $r );
    }
}
