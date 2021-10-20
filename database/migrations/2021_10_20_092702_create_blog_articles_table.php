<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBlogArticlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create( 'blog_articles', function( Blueprint $table ) {
            $table->id();
            $table->string( 'title', 255 )->nullable();
            $table->text( 'slug' )->nullable();
            $table->longText( 'content' )->nullable();
            $table->string( 'image', 255 )->nullable();
            $table->string( 'tags', 255 )->nullable();
            $table->enum( 'lang', [ 'fa', 'en', 'ar' ] )->default( 'fa' )->nullable();
            $table->enum( 'publish_status', [ 'publish', 'draft' ] )->default( 'draft' )->nullable();
            $table->timestamps();
        } );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists( 'blog_articles' );
    }
}
