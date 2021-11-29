<?php

namespace Database\Factories;

use App\Models\Blog;
use Illuminate\Database\Eloquent\Factories\Factory;

class BlogFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Blog::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->sentence(),
            'slug' => $this->faker->paragraph(),
            'content' => $this->faker->realText(),
            'image' => $this->faker->word() . '.jpg',
            'tags' => implode( ',', $this->faker->words( 3 ) ),
            'lang' => 'fa',
            'publish_status' => 'publish',
        ];
    }
}
