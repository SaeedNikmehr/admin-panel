<?php

namespace Database\Factories;

use App\Models\BlogCategory;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class BlogCategoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = BlogCategory::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition(): array
    {
        $lastRow = BlogCategory::latest()->first();
        return [
            'parent' => $this->faker->numberBetween( 0, $lastRow->id ),
            'title' => $this->faker->word(),
            'title_en' => $this->faker->word(),
        ];
    }
}
