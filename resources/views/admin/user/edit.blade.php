@extends('admin.index')
@section('content') 


<!-- Page Container -->
        <!--
            Available Classes:

            'enable-cookies'             Remembers active color theme between pages (when set through color theme list)

            'sidebar-l'                  Left Sidebar and right Side Overlay
            'sidebar-r'                  Right Sidebar and left Side Overlay
            'sidebar-mini'               Mini hoverable Sidebar (> 991px)
            'sidebar-o'                  Visible Sidebar by default (> 991px)
            'sidebar-o-xs'               Visible Sidebar by default (< 992px)

            'side-overlay-hover'         Hoverable Side Overlay (> 991px)
            'side-overlay-o'             Visible Side Overlay by default (> 991px)

            'side-scroll'                Enables custom scrolling on Sidebar and Side Overlay instead of native scrolling (> 991px)

            'header-navbar-fixed'        Enables fixed header
        -->
        <div id="page-container" class="sidebar-l sidebar-o side-scroll header-navbar-fixed">
            
			@include('admin.sidebar')
            @include('admin.header')

            
			<!-- Main Container -->
            <main id="main-container">
                <!-- Page Content -->
                <div class="content content-boxed">
                    <!-- User Header -->
                    <div class="block">
                        <!-- Basic Info -->
                        <div class="bg-image" style="background-image: url('{{ asset('assets/img/photos/photo3@2x.jpg')}}');">
                            <div class="block-content bg-primary-op text-center overflow-hidden">
                                <div class="push-30-t push animated fadeInDown">
                                    <img class="img-avatar img-avatar96 img-avatar-thumb" src="{{ asset('assets/img/avatars/avatar10.jpg')}}" alt="">
                                </div>
                                <div class="push-30 animated fadeInUp">
                                    <h2 class="h4 font-w600 text-white push-5">{{$user->name}}</h2>
                                    <h3 class="h5 text-white-op">{{$user->email}}</h3>
                                </div>
                            </div>
                        </div>
                        <!-- END Basic Info -->

                    </div>
                    <!-- END User Header -->
					 
					@if(Session::has('msg'))
					<p class="alert alert-success">{{ Session::get('msg') }}</p>
					@endif
                    
                   <!-- Main Content -->
                    {!! Form::open(['url' => '/user/edit/'.$user->id , 'class' => 'form-horizontal']) !!}
            		{!! Form::hidden('remember_token',csrf_token()) !!}
                        <div class="block">
                            <ul class="nav nav-tabs nav-justified push-20" data-toggle="tabs">
                                <li class="active">
                                    <a href="#tab-profile-personal"><i class="fa fa-fw fa-pencil"></i> Personal</a>
                                </li>                                
                            </ul>
							
                            <div class="block-content tab-content">
                                <!-- Personal Tab -->
                                <div class="tab-pane fade in active" id="tab-profile-personal">
                                    <div class="row items-push">
                                        <div class="col-sm-6 col-sm-offset-3 form-horizontal">
                                            <div class="form-group">
												<div class="col-xs-12">
                                                    <label for="profile-email">Email</label>						
													{!! Form::text('email',$user->email,['id'=>'profile-email','class' => 'form-control input-lg' , 'autocomplete' => 'off']) !!}
                                                </div>
												<span class="text-danger col-sm-7 col-sm-push-4">{{ $errors->first('email') }}</span>
                                                <div class="col-xs-6">
                                                    <label for="profile-firstname">Firstname</label>							
													   {!! Form::text('name',$user->name,['id'=>'profile-firstname','class' => 'form-control input-lg','autocomplete' => 'off']) !!}
                                                </div>	
												<div class="col-xs-6">
                                                    <label for="profile-lastname">Lastname</label>
													{!! Form::text('lastname',$user->lastname,['id'=>'profile-lastname','class' => 'form-control input-lg','autocomplete' => 'off','placeholder'=>'Enter your lastname..']) !!}                                                    
                                                </div>
                                            </div>                                                                                        
                                            <div class="form-group">
                                                <div class="col-sm-12">
                                                    <label for="profile-city">Password</label>													
													{!! Form::input('password','password',null,['id'=>'profile-city','class' => 'form-control input-lg', 'autocomplete' => 'off']) !!}
												</div>                                                
												<span id="err_password" class="text-danger col-sm-7 col-sm-push-4">{{ $errors->first('password') }}</span>
                                            </div> 
											<div class="form-group">
											<label class="col-xs-12" for="Status">Status</label>
											<div class="col-xs-12">
												<select class="form-control"  id="status" name="status" size="1">
													<option value="1">Yes</option>
													<option value="0">No</option>                                                    
												</select>
											</div>
										</div>	
											<div class="form-group">
												<div class="col-sm-12">
													<label for="profile-avatar">Upload Avatar</label>
													{!! Form::file('avatar','',['id'=>'profile-avatar','class' => 'form-control input-lg']) !!}   
												</div>                                                
											</div>		
                                        </div>
                                    </div>
                                </div>
                                <!-- END Personal Tab -->                                

                            </div>
                            <div class="block-content block-content-full bg-gray-lighter text-center">								   
								 {!! Form::submit( 'Update Changes', ['class'=>'btn btn-primary btn-rect btn-sm']) !!}
                                <!--<button class="btn btn-primary btn-rect btn-sm" onclick="location.href='pageurl.html';">Back</button>-->
                            </div>
                        </div>
                     {!! Form::close() !!}
                    <!-- END Main Content -->                    
                </div>
                <!-- END Page Content -->
            </main>
            <!-- END Main Container -->
            
           @include('admin.footer')
        </div>
        <!-- END Page Container -->

        <!-- Apps Modal -->
        <!-- Opens from the button in the header -->
        
        <!-- END Apps Modal -->

@endsection