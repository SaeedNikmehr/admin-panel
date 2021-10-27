<?php

namespace App\Http\Requests\Blog;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpsertRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return
            [
                'title' => 'required|string',
                'slug' => 'required|string',
                'content' => 'required',
                'image' => 'image',
                'tags' => 'string',
                'lang' => 'required|alpha|size:2|' . Rule::in( [ 'en', 'fa', 'ar' ] ),
                'publish_status' => 'required|' . Rule::in( [ 'publish', 'draft' ] ),
                'categories' => 'required|array',
            ];
    }

    /**
     * Get custom attributes for validator errors.
     *
     * @return array
     */
    public function attributes()
    {
        return
            [
                'title' => 'عنوان',
                'slug' => 'خلاصه',
                'content' => 'متن',
                'image' => 'تصویر اصلی',
                'tags' => 'تگ',
                'lang' => 'زبان',
                'publish_status' => 'وضعیت انتشار'
            ];
    }
}
