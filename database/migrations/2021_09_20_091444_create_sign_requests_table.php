<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSignRequestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('site_agent', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('office_name_fa',100)->nullable();
            $table->string('office_name_en',100)->nullable();
            $table->string('state',50)->nullable();
            $table->string('city',50)->nullable();
            $table->string('national_id',11)->nullable();
            $table->string('economic_code',20)->nullable();
            $table->string('manager',50)->nullable();
            $table->string('email',100)->nullable();
            $table->string('activity_permission',50)->nullable();
            $table->string('yata_code',30)->nullable();
            $table->string('foreign_stak',50)->nullable();
            $table->string('sales_agency',50)->nullable();
            $table->string('reservation_system',50)->nullable();
            $table->string('phone',12)->nullable();
            $table->string('verify',10)->nullable();
            $table->string('code',10)->nullable();
            $table->mediumText('sales_agency_form_img')->nullable();
            $table->mediumText('article_a_img')->nullable();
            $table->mediumText('paper_registration_img')->nullable();
            $table->mediumText('national_card_img')->nullable();
            $table->mediumText('tax_system_form_img')->nullable();
            $table->mediumText('company_entry_img')->nullable();
            $table->mediumText('ins_image')->nullable();
            $table->string('type',50)->nullable();
            $table->string('reject_reason',255)->nullable();
            $table->string('request_status',50)->nullable();
            $table->smallInteger('trash')->default(0);
            $table->string('register_code',255)->nullable();
            $table->string('site',50)->nullable();
            $table->mediumText('comment')->nullable();
            $table->mediumInteger('user_id')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('site_agent');
    }
}
