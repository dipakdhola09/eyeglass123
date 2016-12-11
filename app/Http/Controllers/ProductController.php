<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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

    public function getProduct() {
       /* $data = DB::table('users')->select('*', 'id as id_tmp')->get();
        header("Content-type: application/json");
        echo "{\"data\":" . json_encode($data) . "}";*/
    }

}
