<?php

namespace App\Http\Controllers\Auth;

use App\User;
use Validator;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\RegistersUsers;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after login / registration.
     *
     * @var string
     */
    protected $redirectTo = '/admin/dashboard';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|min:6|confirmed',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return User
     */
    protected function create(array $data)
    { 
		
		
		if($data['avatar']){			
			//$image = Input::file($data['avatar']);
			//echo '<pre>-->'; print_r($image); echo '</pre>';
			//die;
			//$upload = base_path().'/media/avatar';
			//$filename = $data['avatar'];
			//$image->move($upload, $filename);
			//$avatar_path = $upload.$filename;
   	 }
		
		
		//echo '<pre>-->'; print_r($data); echo '</pre>';
		//echo '<pre>-->'; print_r($avatar_path); echo '</pre>';
		
		
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
			'lastname' => $data['lastname'],
			'avatar' => $data['avatar'],
			'status' => $data['status'],
        ]);
    }
}
