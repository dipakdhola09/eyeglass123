<?php
/**
 * @access          : public
 * @description     : User Controller
 * @author          : Manan Tanna. <manan@iwebsquare.com>
 * @created date    :  
 * @updated date    : 15/11/2016
 * updated BY       : Pradip valand.
 * @created By      :   
 * @version         : 0.1
 */
namespace App\Http\Controllers;

use Request;
use DB;
//use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use App\Http\Controllers\Controller;
use App\User;
use Session;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Crypt;
use Image;

class UsersController extends Controller {

    public function __construct() {
		  $this->middleware('auth');
        if (Session::get('id') == '') {
            //Redirect::to('admin')->send();
        }
    }

    /*
     * index
     */

    public function index() {
		
        return view('admin.user.index');
    }
	
	
	/*
     * list Users
     */

    public function user() {
		
		$users = DB::table('users')->get();
		
        return view('admin.user.users',['users' => $users]);
    }

    /*
     * get user data
     */

    public function getUser() {
        $data = DB::table('users')->select('*', 'id as id_tmp')->get();
        header("Content-type: application/json");
        echo "{\"data\":" . json_encode($data) . "}";
    }

    /*
     * Add user form
     */

    public function create() {
        return view('admin.user.create');
    }

    /*
     * Add user
     */

    public function store(Request $request) {
		
        //return filled form
        Input::flash();
        $user = Request::all();
        //print_r($user);exit;
        //validation
        $rules = array(
            "email" => "required|email|unique:users,email",
            'password' => 'required|min:6',            
        );
        
        

        $validator = Validator::make($user, $rules);

        //store
        if ($validator->fails()) {            
            return redirect('user/add')->withErrors($validator);
        } 
        else {
			
			$avatar = Request::file('avatar');
			
			if($avatar){
				
				$filename = $user['name'].'_'.time() . '.' . $avatar->getClientOriginalExtension();
				Image::make($avatar)->resize(128, 128)->save( public_path('/uploads/avatars/' . $filename ) );
				$user['avatar'] = $filename;
			}
			
			
           
            $user['password'] = bcrypt($user['password']);
            //insert data in user table
			
            User::create($user);
			
            //get last insert id
            $id = DB::getPdo()->lastInsertId();
            
			//redirect & message
            session()->flash('msg', 'User Created Successfully');

            return redirect('user');
        }
    }

    /*
     * update user form
     */

    public function edit($id) {
        //fetch user data 
        $user = User::find($id);
		
		
        return view('admin.user.edit',['user' => $user]);
    }

    /*
     * update user
     */

    public function update($id, Request $request) {
       
        $user = Request::except('_token');
        if ($user['password'] == "") {
            $user = Request::except('password', '_token');
        } else {
            $user['password'] = bcrypt($user['password']);
        }
        //validation
        $rules = array(
            "email" => "required|email",			
        );

        $validator = Validator::make($user, $rules);		
		
        if ($validator->fails()) {			
            return redirect('user/edit/' . $id)->withErrors($validator);
        } else {
			
			$avatar = Request::file('avatar');
			
			if($avatar){
				
				$filename = $user['name'].'_'.time() . '.' . $avatar->getClientOriginalExtension();
				Image::make($avatar)->resize(128, 128)->save( public_path('/uploads/avatars/' . $filename ) );
				$user['avatar'] = $filename;
			}
			
            User::where('id', $id)->update($user);
			
            session()->flash('msg', 'Record Updated Successfully');
            return redirect('/user/edit/' . $id);
        }
    }

    /*
     *  delete user
     */

    public function destroy($id) {
        
        //DB::table('users')->where('id', $id)->delete();
		User::find($id)->delete();
		
        session::flash('msg', 'Record Deleted Successfully!');

        //redirect to list
        return redirect('/user');
    }

    /**
     * 
     * show forgot password 
     */
    public function forgot_password() {
        return view('User.forgot_password');
    }

    /**
     * check validate - forgot user
     */
    function check_forgot_password(Request $request) {

        //set email 
        $email = Request::all();

        $encrypted_email = Crypt::encrypt($email['email']);

        $rules = array('email' => 'required|email');

        $message = array(
            'email.required' => 'The Email field is required',
        );
        // validate email address
        $validator = Validator::make($email, $rules, $message);

        if ($validator->fails()) {
            return redirect('forgot_password')->withErrors($validator);
        } else {
            //check email address in database
            $email_data = DB::table('users')->where('email', $email['email'])->get();
            //if email existing
            if ((count($email_data)) > 0) {

                //redirect
                return view('User/forgot_pass', ['encrypted_email' => $encrypted_email]);
            } else {
                // incorrect email
                return redirect('forgot_password');
            }
        }
    }

    /**
     * change password
     */
    function change_password(Request $request) {
        $email = Request::segment(2);
        $decode_email_id = Crypt::decrypt($email);
        $password = Request::all();
        $pass = bcrypt($password['password']);
        $rules = array('password' => 'required|min:6|same:cnfrm_password',
            'cnfrm_password' => 'required|min:6');

        $validator = Validator::make($password, $rules);
        if ($validator->fails()) {
            return view('User/forgot_pass', ['encrypted_email' => $email])->withErrors($validator);
        } else {

            User_model::where('email', $decode_email_id)->update(array('password' => $pass));
            return redirect('admin');
            //$update=DB::table('users')->where('email',$decode_email_id)->update('password'=>$password['password']);
        }
    }

    public function view_profile($id) {
        //Session value get
        $data = DB::select("select * from users where id=" . $id);

        return view('user/viewprofile', ['data' => $data]);
    }

}
