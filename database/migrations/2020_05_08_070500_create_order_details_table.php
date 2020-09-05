<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_details', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('guest_id');
            $table->foreign('guest_id')->references('id')->on('unregistered_users');
            $table->unsignedBigInteger('user_id')->default(false);
            $table->foreign('user_id')->references('id')->on('users');
            $table->integer('total_price_for_food');
            $table->integer('total_price')->default(false);;
            $table->boolean('approved')->default(false);
            $table->boolean('done')->default(false);
            $table->boolean('delivery')->default(false);
            $table->text('comments')->nullable();
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
        Schema::dropIfExists('order_details');
    }
}
