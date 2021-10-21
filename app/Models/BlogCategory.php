<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class BlogCategory extends Model
{
    use HasFactory, softDeletes;

    protected $table = 'blog_categories';

    /**
     * The attributes that are mass assignable.
     *
     */
    protected $fillable = [ 'title', 'title_en', 'parent' ];

    /**
     * The blogs that belong to the category.
     */
    public function blogs()
    {
        return $this->belongsToMany( Blog::class, 'blog_article_category', 'category_id', 'article_id' );
    }
}
