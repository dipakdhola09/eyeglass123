@extends('admin.index')
@section('content') 

          <!-- Main Container -->
            <main id="main-container">
                <!-- Page Content -->
                <div class="content content-boxed">                  
                    <!-- Main Content -->
                     {!! Form::open(['url' => '/admin/customer/update','autocomplete' => 'off','method' => 'PUT','files'=>'true','class'=>'form-horizontal','enctype'=>'multipart/form-data']) !!}      
            		<input type="hidden" name="customer_id" value="{{ $customer->customer_id}}" />
                        <div class="block">
                            <ul class="nav nav-tabs nav-justified push-20" data-toggle="tabs">
                                <li class="active">
                                    <a href="#tab-profile-personal"><i class="fa fa-fw fa-pencil"></i> Personal</a>
                                </li>
                                <li>
                                    <a href="#tab-profile-password"><i class="fa fa-fw fa-asterisk"></i> Password</a>
                                </li>
                            </ul>
                            <div class="block-content tab-content">
                                <!-- Personal Tab -->
                                <div class="tab-pane fade in active" id="tab-profile-personal">
                                    <div class="row items-push">
                                        <div class="col-sm-6 col-sm-offset-3 form-horizontal">
                                            
                                            <div class="form-group">
                                                <div class="col-xs-12">
                                                    <label for="cust-email">Email Address</label>
                                                    <input class="form-control input-lg" type="email" id="cust-email" name="email" placeholder="Enter your email.." value="{{ $customer->email}}">
													<span class="help-block"><strong class="text-danger">{{ $errors->first('email') }}</strong></span>
                                                </div>
                                            </div>
											
                                            <div class="form-group">
                                                <div class="col-xs-6">
                                                    <label for="cust-firstname">Firstname</label>
                                                    <input class="form-control input-lg" type="text" id="cust-firstname" name="firstname" placeholder="Enter your firstname.." value="{{ $customer->firstname}}">
                                                </div>
                                                <div class="col-xs-6">
                                                    <label for="cust-lastname">Lastname</label>
                                                    <input class="form-control input-lg" type="text" id="cust-lastname" name="lastname" placeholder="Enter your lastname.." value="{{ $customer->lastname}}">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="col-sm-6">
                                                    <label for="cust-phone">Phone</label>
                                                    <input class="form-control input-lg" type="text" id="cust-phone" name="phone" placeholder="Enter your phone.." value="{{ $customer->phone}}">
                                                </div>
                                                <div class="col-sm-6">
                                                    <label for="cust-age">Fax</label>
                                                    <input class="form-control input-lg" type="text" id="cust-fax" name="fax" placeholder="Enter your fax.." value="{{ $customer->fax}}">
                                                </div>
                                            </div>
											<div class="form-group">
                                            <div class="col-xs-6">
                                                <div class="form-material floating open">													
                                                    <select class="form-control" id="cust-status" name="status" >														
                                                       	<option value="1">Enable</option>
														<option value="0">Disable</option>
                                                    </select>
                                                    <label for="cust-status">Status</label>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- END Personal Tab -->

                                <!-- Password Tab -->
                                <div class="tab-pane fade" id="tab-profile-password">
                                    <div class="row items-push">
                                        <div class="col-sm-6 col-sm-offset-3 form-horizontal">
                                            <div class="form-group">
                                                <div class="col-xs-12">
                                                    <label for="cust-password">Current Password</label>
                                                    <input class="form-control input-lg" type="password" id="password" name="password">
													<span class="help-block"><strong class="text-danger">{{ $errors->first('password') }}</strong></span>
                                                </div>
                                            </div>
                                            <hr>
                                            <div class="form-group">
                                                <div class="col-xs-12">
                                                    <label for="profile-password-new">New Password</label>
                                                    <input class="form-control input-lg" type="password" id="password-new" name="cust-password-new">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="col-xs-12">
                                                    <label for="cust-password-new-confirm">Confirm New Password</label>
                                                    <input class="form-control input-lg" type="password" id="password-new-confirm" name="cust-password-new-confirm">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- END Password Tab -->
								<input type="hidden" name="customer_level_id" value="0" >

                            </div>
                            <div class="block-content block-content-full bg-gray-lighter text-center">
                                <button class="btn btn-sm btn-primary" type="update"><i class="fa fa-check push-5-r"></i> Update Changes</button>
                                <button class="btn btn-sm btn-warning" type="reset"><i class="fa fa-refresh push-5-r"></i> Reset</button>
                            </div>
                        </div>                   
                     {!! Form::close() !!}
                    <!-- END Main Content -->
                </div>
                <!-- END Page Content -->
            </main>
            <!-- END Main Container -->
@endsection