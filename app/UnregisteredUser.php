<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UnregisteredUser extends Model
{
    protected $fillable = [
        'customer_name','phone','address','ip'
    ];
}
