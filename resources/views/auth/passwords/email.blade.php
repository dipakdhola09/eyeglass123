<html class="no-focus" data-ng-app="app" lang="en">
<!--<![endif]-->
<head>
<meta charset="utf-8">
<title>{{ config('app.name')}}</title>
<meta name="description" content="SumoCMS Admin Dashboard">
<meta name="robots" content="noindex, nofollow">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

<!-- Icons -->
<!-- The following icons can be replaced with your own, they are used by desktop and mobile browsers -->
<link rel="apple-touch-icon" sizes="57x57" href="<?php echo url("/");?>/resources/admin/assets/img/favicons/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="<?php echo url("/");?>/resources/admin/assets/img/favicons/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="<?php echo url("/");?>/resources/admin/assets/img/favicons/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="<?php echo url("/");?>/resources/admin/assets/img/favicons/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="<?php echo url("/");?>/resources/admin/assets/img/favicons/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="<?php echo url("/");?>/resources/admin/assets/img/favicons/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="<?php echo url("/");?>/resources/admin/assets/img/favicons/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="<?php echo url("/");?>/resources/admin/assets/img/favicons/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="<?php echo url("/");?>/resources/admin/assets/img/favicons/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192"  href="<?php echo url("/");?>/resources/admin/assets/img/favicons/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="<?php echo url("/");?>/resources/admin/assets/img/favicons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="<?php echo url("/");?>/resources/admin/assets/img/favicons/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="<?php echo url("/");?>/resources/admin/assets/img/favicons/favicon-16x16.png">
<link rel="manifest" href="<?php echo url("/");?>/resources/admin/assets/img/favicons/manifest.json">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="<?php echo url("/");?>/resources/admin/assets/img/favicons/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff">
<!-- END Icons -->

<!-- Stylesheets -->
<!-- Web fonts -->
<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400italic,600,700%7COpen+Sans:300,400,400italic,600,700">
<link rel="stylesheet" href="<?php echo url("/");?>/resources/admin/assets/css/custom.css">
<!-- Bootstrap and Sumo CSS framework -->
<link rel="stylesheet" id="css-bootstrap" href="<?php echo url("/");?>/resources/admin/assets/css/bootstrap.min.css">
<!-- build:remove -->
<link rel="stylesheet" id="css-main" href="<?php echo url("/");?>/resources/admin/assets/css/oneui.css">
<!-- /build -->

<!-- build:template
<link rel="stylesheet" id="css-main" href="assets/css/oneui.min.css">
/build -->
<!-- END Stylesheets -->
</head>
<body>

<div class="login-main">
	<div class="login-center">
		<div class="login-form-box"> 

<div class="block block-themed animated fadeIn">
<div class="block-header bg-primary">
					<ul class="block-options">
						<li> <a class="btn btn-link" href="{{ url('/login') }}">
                                    Back to Login
                                </a> </li>
						<li> <a href="register.html" data-toggle="tooltip" data-placement="left" title="New Account"><i class="si si-plus"></i></a> </li>
					</ul>
					<h3 class="block-title">Reset Password</h3>
				</div>
    
	<div class="block-content block-content-full block-content-narrow"> 
		@if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif
					
					 <form class="form-horizontal" role="form" method="POST" action="{{ url('/password/email') }}">
                        {{ csrf_field() }}

                        <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
						
                              <div class="col-md-12">
                                <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}" placeholder="Enter your email address" required>

                                @if ($errors->has('email'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-12 text-center">
                                <button type="submit" class="btn btn-primary">
                                    Send Password Reset Link
                                </button>
                            </div>
                        </div>
                    </form>
	</div>
	</div>
</div></div></div>
