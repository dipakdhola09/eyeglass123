<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Session;
use DB;


class ProductController extends Controller
{
    public function __construct() {
        
    }
	
	/*
     * list Users
     */

    public function list() {

        return view('admin.product.list');
    }
	
	/*
     * get user data
     */

    public function getMasterProductsList() {
        $data = DB::table('product_master')->select('product_id', 'image', 'name', 'sku', 'cost', 'stock', 'status', 'updated_at', 'updated_by', 'product_id')->get();
        header("Content-type: application/json");
        echo "{\"data\":" . json_encode($data) . "}";
    }

}
