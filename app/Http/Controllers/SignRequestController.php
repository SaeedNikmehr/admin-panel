<?php

namespace App\Http\Controllers;

use App\Http\Requests\SignRequest\UpdateRequest;
use Illuminate\Http\Request;
use App\Models\SignRequest;
use Illuminate\Support\Facades\DB;

class SignRequestController extends Controller
{
    public function index()
    {
        $signs = SignRequest::where( 'trash', 0 )->where( 'register_code', '!=', null )->get();
        return success( $signs );
    }

    public function show( $id )
    {
        $detail = SignRequest::where( 'id', $id )->firstOrFail();
        if( is_numeric( $detail->state ) ) {
            $detail->state = DB::table( 'pub_province' )->where( 'id', $detail->state )->first()->name ?? '';
            $detail->city = DB::table( 'pub_city' )->where( 'id', $detail->city )->first()->name ?? '';
        }
        return success( $detail );
    }

    public function update( UpdateRequest $request, $id )
    {
        $inputs = $request->input();
        $update =
            [
                'office_name_fa' => $inputs[ 'office_name_fa' ],
                'office_name_en' => $inputs[ 'office_name_en' ],
                'state' => $inputs[ 'state' ],
                'city' => $inputs[ 'city' ],
                'national_id' => $inputs[ 'national_id' ],
                'economic_code' => $inputs[ 'economic_code' ],
                'manager' => $inputs[ 'manager' ],
                'email' => $inputs[ 'email' ],
                'site' => $inputs[ 'site' ],
                'yata_code' => $inputs[ 'yata_code' ],
                'activity_permission' => $inputs[ 'activity_permission' ],
                'foreign_stak' => $inputs[ 'foreign_stak' ],
                'sales_agency' => $inputs[ 'sales_agency' ],
                'reservation_system' => $inputs[ 'reservation_system' ],
                'user_id' => $inputs[ 'user_id' ]
            ];

        $result = SignRequest::where( 'id', $id )->where( 'trash', 0 )->update( $update );
        return $result === 1 ? success( [], 'با موفقیت آپدیت شد' ) : error( [], 'ویرایش با خطا مواجه شد' );
    }

    public function confirm( $id )
    {
        return success( [], 'متود هنوز حاضر نیست اما درخواست شما صحیح است' );
    }

    public function delete( $id, $userId )
    {
        $sign = SignRequest::findOrFail( $id );
        $sign->trash = 1;
        $sign->user_id = $userId;
        $sign->save();
        return success( [], 'با موفقیت حذف شد' );
    }

    public function toggleImageStatus()
    {

    }

}
