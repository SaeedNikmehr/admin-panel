<?php

namespace App\Http\Controllers;

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

    public function update( Request $request, $id )
    {
        //update images
//            if( !empty( $_FILES[ 'sales_agency_form_img' ][ 'name' ] ) )
//                $this::uploads( 'sales_agency_form_img', $id );
//            if( !empty( $_FILES[ 'article_a_img' ][ 'name' ] ) )
//                $this::uploads( 'article_a_img', $id );
//            if( !empty( $_FILES[ 'paper_registration_img' ][ 'name' ] ) )
//                $this::uploads( 'paper_registration_img', $id );
//            if( !empty( $_FILES[ 'national_card_img' ][ 'name' ] ) )
//                $this::uploads( 'national_card_img', $id );
//            if( !empty( $_FILES[ 'tax_system_form_img' ][ 'name' ] ) )
//                $this::uploads( 'tax_system_form_img', $id );
//            else{
//
//                $this->session->set_flashdata('error','فایل مربوط به مالیات ارزش افزوده اجباری است');
//                $this->session->set_userdata('redirect',$redirect);
//                return ;
//            }
//            if( !empty( $_FILES[ 'ins_image' ][ 'name' ] ) )
//                $this::uploads( 'ins_image', $id );
//            else{
//                $this->session->set_flashdata('error','فایل مربوط به تصویر بیمه اجباری است');
//                $this->session->set_userdata('redirect',$redirect);
//                return ;
//            }
//
//            if( !empty( $_FILES[ 'company_entry_img' ][ 'name' ] ) )
//                $this::uploads( 'company_entry_img', $id );

        $request->validate(
            [
                'office_name_fa' => 'required',
                'office_name_en' => 'required',
                'state' => 'required',
                'city' => 'required',
                'national_id' => 'required',
                'economic_code' => 'required',
                'manager' => 'required',
                'email' => 'required|email',
                'site' => 'required',
                'yata_code' => 'required',
                'activity_permission' => 'required',
                'foreign_stak' => 'required',
                'sales_agency' => 'required',
                'reservation_system' => 'required',
                'user_id' => 'required'
            ] );

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
        return $result === 1 ? success( [], 'با موفقیت آپدیت شد' ) : error( [], 'آپدیت با خطا مواجه شد' );
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
