<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Food;
use App\Category;

class FoodController extends Controller
{
    public function getFoods()
    {
        return Category::with('foods')->get();
    }
}
