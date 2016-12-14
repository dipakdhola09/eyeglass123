<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customer_model extends Model
{
        protected $table = 'customer'; // put your table name here
    	public $timestamps = true;
		protected $primaryKey = 'customer_id'; 
	
	
	 protected $fillable = [
       'firstname',
       'lastname',
       'password',
       'phone',
       'fax',
       'status',
       'fax',
       'email',
	   'remember_token',
		'customer_level_id',
		 
   ];
}
