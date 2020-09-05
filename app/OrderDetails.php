<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderDetails extends Model
{
    protected $fillable = [
       'id','guest_id','user_id','total_price_for_food','total_price','approved','done','delivery','comments'
    ];
}
