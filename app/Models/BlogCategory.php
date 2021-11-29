<?php

namespace App\Models;

use Database\Factories\BlogCategoryFactory;
use DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;

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

    /**
     * Prepare a date for array / JSON serialization.
     *
     * @param  \DateTimeInterface  $date
     * @return string
     */
    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }


}
