<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableCustomer extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
         Schema::create('customer', function (Blueprint $table) {
            $table->increments('customer_id');
			$table->string('email')->unique();
			$table->string('password'); 
            $table->string('firstname');
			$table->string('lastname');
			$table->string('phone'); 
			$table->string('fax'); 
			$table->string('customer_level_id');  
			$table->rememberToken();
			$table->enum('status', ['1', '0']);            
            $table->timestamps();
        });
		
		Schema::create('customer_level', function (Blueprint $table) {
            $table->increments('customer_level_id');			
        });
		
		Schema::create('customer_bill_address', function (Blueprint $table) {
            $table->increments('cust_bill_add_id');
			$table->string('customer_id');			
            $table->string('firstname');
			$table->string('lastname');
			$table->string('address1'); 
			$table->string('address2'); 
			$table->string('city_id');
			$table->string('zipcode');  
			$table->string('phone');
			$table->enum('status', ['1', '0']);             
			$table->rememberToken();
            $table->timestamps();
        });
		
		Schema::create('customer_ship_address', function (Blueprint $table) {
            $table->increments('cust_ship_add_id');
			$table->string('customer_id');			
            $table->string('firstname');
			$table->string('lastname');
			$table->string('address1'); 
			$table->string('address2'); 
			$table->string('city_id');
			$table->string('zipcode');  
			$table->string('phone');
			$table->enum('status', ['1', '0']);             
			$table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('customer');
		Schema::drop('customer_bill_address');
		Schema::drop('customer_ship_address');
    }
}
