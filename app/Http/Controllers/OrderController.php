<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Order;
use App\UnregisteredUser;
use App\OrderDetails;
use Illuminate\Support\Facades\Auth;
use Validator;

class OrderController extends Controller
{
    public function placeOrder(Request $request){
        $input = $request->all();

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'phone' => 'required',
            'address' => 'required',
            'totalprice' => 'required',
            'carts' => 'required',
            'delivery'=>'required'

        ]);
        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 422);
        }
        $clientIP = request()->ip();
        if($clientIP){
        $user = UnregisteredUser::create([
            "customer_name" => $input["name"],
            "phone" => $input["phone"],
            "address" => $input["address"]
        ]);
        $order_details=OrderDetails::create([
            "guest_id" => $user->id,
            "comments"=>$input['comments'],
            "total_price_for_food"=>$input['totalprice'],
            "delivery"=>$input['delivery']
        ]);
        foreach ($request['carts'] as $cart){ 
            $order=Order::create([
                "food_id" =>$cart['id'] ,
                "count" => $cart["amount"],
                "order_details_id"=>$order_details->id,

            ]);
        } 
        
        }
    }
}
