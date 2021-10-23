<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    protected $table = 'blog_articles';

    /**
     * The attributes that are mass assignable.
     *
     */
    protected $fillable = [ 'title', 'slug', 'content', 'lang', 'publish_status', 'image', 'tags' ];

    /**
     * The categories that belong to the blog.
     */
    public function categories()
    {
        return $this->belongsToMany( BlogCategory::class, 'blog_article_category', 'article_id', 'category_id' );
    }
}
