<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Customer_model  ;
use DB;


class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
		$customers = Customer_model::paginate(10);
        return view('admin.customer.customer',['customers'=>$customers]);
		
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
          return view('admin.customer.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
		$customer = $request->all();
		$customer['remember_token'] = $customer['_token'];
		 if ($customer['password'] == "") {
           // $customer = Request::except('password', '_token');
        } else {
            $customer['password'] = bcrypt($customer['password']);
        }
		
		
		$rules = array(
            "email" => "required|email|unique:customer,email",
            'password' => 'required|min:6',            
        );
		
		
		 $validator = Validator::make($customer, $rules);		
		  if ($validator->fails()) {         			 
            	return redirect('/admin/customer/create')->withErrors($validator);
        }else{ 
			  
			Customer_model::create($customer);
            $id = DB::getPdo()->lastInsertId();            			
            session()->flash('msg', 'Customer Created Successfully');

            return redirect('/admin/customer/');
			//echo '<pre>==>'; print_r($customer); echo '</pre>'; die;
		 }
		
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
		//echo 'dasdasdas--show'.$id; die;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($customer_id)
    { 
		$customer_data = Customer_model::find($customer_id);		
        return view('admin.customer.edit',['customer'=>$customer_data]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $customer_id)
    {
		
       
       $customer = $request->all();
		
		$customer_id = $customer['customer_id'];
		
		unset($customer['_method']);
		unset($customer['customer_id']);
		unset($customer['cust-password-new']);
		unset($customer['cust-password-new-confirm']);
			$customer['remember_token'] = $customer['_token'];
		unset($customer['_token']);
        if ($customer['password'] == "") {
            //$customer = Request::except('password', '_token');
        } else {
            $customer['password'] = bcrypt($customer['password']);
        }
        //validation
        $rules = array(
            "email" => "required|email",			
        );

        $validator = Validator::make($customer, $rules);		
		
        if ($validator->fails()) {			
            return redirect('/admin/customer/edit/' . $customer_id)->withErrors($validator);
        } else {
			
            Customer_model::where('customer_id', $customer_id)->update($customer);			
            session()->flash('msg', 'Record Updated Successfully');
            return redirect('/admin/customer');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $customer_id)
    {	
		 $customer = $request->all();
		 DB::table('customer')->where('customer_id', $customer_id)->delete();
		//Customer_model::where('customer_id', $customer_id)->update($customer);	
		//Customer_model::find($customer)->delete();
		 $request->session()->flash('msg', 'Record Deleted Successfully!');
        //Session::flash('msg', 'Record Deleted Successfully!');
        return redirect('/admin/customer');
    }
}
