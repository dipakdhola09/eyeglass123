<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

/*---------------------------frontend---------------------------------------------*/

Route::get('/', function () {
    return view('home');
});







/*-------------------------------------admin----------------------------------*/

Auth::routes();

/*****************************users**************************************/

Route::get('/admin/dashboard', 'AdminController@dashboard');
Route::get('/user', 'UsersController@user');
Route::get('/user/add', 'UsersController@create');
Route::post('/user/add', 'UsersController@store');
Route::get('/user/getUser','UsersController@getUser');
Route::get('/user/edit/{id}','UsersController@edit');
Route::post('/user/edit/{id}','UsersController@update');
Route::get('/user/delete/{id}','UsersController@destroy');




/*******************************products******************************/
Route::resource('/admin/customer', 'CustomerController');
Route::get('/admin/customer/{id}/delete','CustomerController@destroy');



