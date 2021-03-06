@extends('admin.index')
@section('content') 

 <div class="content overflow-hidden">
            <div class="row">
                <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
                    <!-- Register Block -->
                    <div class="block block-themed animated fadeIn">
                        <div class="block-header bg-success">
                            <ul class="block-options">
                                <li>
                                    <a href="#" data-toggle="modal" data-target="#modal-terms">View Terms</a>
                                </li>
                                <li>
                                    <a href="base_pages_login.html" data-toggle="tooltip" data-placement="left" title="Log In"><i class="si si-login"></i></a>
                                </li>
                            </ul>
                            <h3 class="block-title">Register</h3>
                        </div>
                        <div class="block-content block-content-full block-content-narrow">
                            <!-- Register Title -->
                            <h1 class="h2 font-w600 push-30-t push-5">Eyeglass123</h1>
                            <p>Please fill the following details to create a new account.</p>
                            <!-- END Register Title -->

                            <!-- Register Form -->
                            <!-- jQuery Validation (.js-validation-register class is initialized in js/pages/base_pages_register.js) -->
                            <!-- For more examples you can check out https://github.com/jzaefferer/jquery-validation -->
                            <form class="form-horizontal" role="form" method="POST" action="{{ url('/register') }}">
                       	 {{ csrf_field() }}
								
						<div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
								<div class="col-xs-12">
									<div class="form-material form-material-success">
										 <input id="name" type="text" class="form-control" name="name" value="{{ old('name') }}" required autofocus>
										<label for="register-username">First Name</label>
									</div>
								</div>

							@if ($errors->has('name'))
								<span class="help-block">
									<strong>{{ $errors->first('name') }}</strong>
								</span>
							@endif
							</div>
								
						 <div class="form-group">
                                    <div class="col-xs-12">
                                        <div class="form-material form-material-success">
                                           <input id="name" type="text" class="form-control" name="lastname" value="{{ old('lastname') }}" required autofocus />
                                            <label for="register-username">Last Name</label>
                                        </div>
                                    </div>
                                </div>
								
						<div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
							<div class="col-xs-12">
								<div class="form-material form-material-success">
									 <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}" required>
									@if ($errors->has('email'))
										<span class="help-block">
											<strong>{{ $errors->first('email') }}</strong>
										</span>
									@endif
									<label for="register-email">Email</label>
								</div>
							</div>
						</div>
								
						<div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
								<div class="col-xs-12">
									<div class="form-material form-material-success">
										    <input id="password" type="password" class="form-control" name="password" required>
										<label for="register-password">Password</label>
									</div>									
                                @if ($errors->has('password'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
								</div>
						</div>
						
						<div class="form-group">
                                    <div class="col-xs-12">
                                        <div class="form-material form-material-success">
                                            <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required>
                                            <label for="register-password2">Confirm Password</label>
                                        </div>
                                    </div>
                                </div>
						<input type="hidden" name="status" value="0" />
						<input type="hidden" name="avatar" value="default.jpg" />		
						<!---		
						<div class="form-group">
								<div class="col-sm-12">
									<label for="profile-avatar">Upload Avatar</label>
									{!! Form::file('avatar','',['id'=>'profile-avatar','class' => 'form-control input-lg']) !!}   
							</div>                                                
						</div>		
						-->		
								
						 <div class="form-group">
							<div class="col-xs-12 col-sm-6 col-md-5">
								<button class="btn btn-block btn-success" type="submit"><i class="fa fa-plus pull-right"></i> Sign Up</button>
							</div>
						</div>
                        
                    </form>
                            <!-- END Register Form -->
                        </div>
                    </div>
                    <!-- END Register Block -->
                </div>
            </div>
        </div>
        <!-- END Register Content -->

        <!-- Register Footer -->
        <div class="push-10-t text-center animated fadeInUp">
            <small class="text-muted font-w600"><span class="js-year-copy"></span> &copy; OneUI 3.0</small>
        </div>
        <!-- END Register Footer -->

        <!-- Terms Modal -->
        <div class="modal fade" id="modal-terms" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-popout">
                <div class="modal-content">
                    <div class="block block-themed block-transparent remove-margin-b">
                        <div class="block-header bg-primary-dark">
                            <ul class="block-options">
                                <li>
                                    <button data-dismiss="modal" type="button"><i class="si si-close"></i></button>
                                </li>
                            </ul>
                            <h3 class="block-title">Terms &amp; Conditions</h3>
                        </div>
                        <div class="block-content">
                            <p>Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>
                            <p>Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>
                            <p>Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>
                            <p>Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>
                            <p>Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-sm btn-default" type="button" data-dismiss="modal">Close</button>
                        <button class="btn btn-sm btn-primary" type="button" data-dismiss="modal"><i class="fa fa-check"></i> I agree</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- END Terms Modal -->


@endsection