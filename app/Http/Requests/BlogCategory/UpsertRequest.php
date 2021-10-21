<?php

namespace App\Http\Requests\BlogCategory;

use Illuminate\Foundation\Http\FormRequest;

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
                'title_en' => 'required|string',
                'parent' => 'required'
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
                'title_en' => 'عنوان انگلیسی',
                'parent' => 'والد'
            ];
    }
}
