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
                    
					 @if(Session::has('msg'))
					<p class="alert alert-success">{{ Session::get('msg') }}</p>
					@endif
                    <!-- Main Content -->
                     {!! Form::open(['action' => 'UsersController@store','autocomplete' => 'off','files'=>'true','class'=>'form-horizontal','enctype'=>'multipart/form-data']) !!}      
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
													 {!! Form::text('email',null,['id'=>'profile-email','class' => 'form-control input-lg' , 'autocomplete' => 'off','placeholder'=>'Enter your email..']) !!}                                    
                                                </div>
												<span class="text-danger col-sm-7 col-sm-push-4">{{ $errors->first('email') }}</span>
                                                <div class="col-xs-6">
                                                    <label for="profile-firstname">Firstname</label>
													{!! Form::text('name','',['id'=>'profile-firstname','class' => 'form-control input-lg','autocomplete' => 'off','placeholder'=>'Enter your firstname..']) !!}                                                    
                                                </div>
												<div class="col-xs-6">
                                                    <label for="profile-lastname">Lastname</label>
													{!! Form::text('lastname','',['id'=>'profile-lastname','class' => 'form-control input-lg','autocomplete' => 'off','placeholder'=>'Enter your lastname..']) !!}                                                    
                                                </div>	
                                            </div> 											  											
                                            <div class="form-group">
                                                <div class="col-sm-12">
                                                    <label for="profile-city">Password</label>
													{!! Form::password('password',['id'=>'profile-city','class' => 'form-control input-lg', 'autocomplete' => 'off']) !!}
												</div>                                                
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
								   {!! Form::submit( ' Save Changes', ['class'=>'btn btn-sm btn-primary']) !!}                                
                                <button class="btn btn-sm btn-warning" type="reset"><i class="fa fa-refresh push-5-r"></i> Reset</button>
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