<?php

namespace App\Http\Requests\SignRequest;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
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
                'office_name_fa' => 'required|string',
                'office_name_en' => 'required|string',
                'state' => 'required',
                'city' => 'required',
                'national_id' => 'required',
                'economic_code' => 'required',
                'manager' => 'required',
                'email' => 'required|email',
                // 'site' => 'required|string',
                // 'yata_code' => 'required',
                // 'activity_permission' => 'required',
                // 'foreign_stak' => 'required',
                // 'sales_agency' => 'required',
                // 'reservation_system' => 'required',
                'user_id' => 'required'
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
                'office_name_fa' => 'نام شرکت / دفتر فارسی',
                'office_name_en' => 'نام شرکت / دفتر انگلیسی',
                'state' => 'استان',
                'city' => 'شهر',
                'national_id' => 'کد ملی / شناسه ملی',
                'economic_code' => 'کد اقتصادی',
                'manager' => 'مدیر عامل',
                'email' => 'پست الکترونیکی',
                'site' => 'وب سایت',
                'yata_code' => 'کد یاتا',
                'activity_permission' => 'مجوز فعالیت',
                'foreign_stak' => 'استاک خارجی',
                'sales_agency' => 'نماینده فروش',
                'reservation_system' => 'سیستم رزرواسیون',
                'user_id' => 'یوزر آیدی'
            ];
    }

}
