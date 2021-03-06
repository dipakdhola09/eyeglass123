<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/
/*
$factory->define(App\User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('111111'),
        'remember_token' => str_random(10),
    ];
});
*/
$factory->define(App\Customer_model::class, function (Faker\Generator $faker) {
    static $password;

    return [        
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('111111'),
        'remember_token' => str_random(10),
		'firstname' =>  $faker->firstname(),
		'lastname' =>  $faker->lastname(),
		'phone' =>  $faker->phoneNumber(),
		'fax' =>  $faker->firstname(),
		'customer_level_id' =>  $faker->phoneNumber(),
		//'status' =>  $faker->realText(rand(1,10)),
    ];
});
      