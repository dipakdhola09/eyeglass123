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
<link rel="apple-touch-icon" sizes="57x57" href="resources/admin/assets/img/favicons/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="resources/admin/assets/img/favicons/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="resources/admin/assets/img/favicons/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="resources/admin/assets/img/favicons/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="resources/admin/assets/img/favicons/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="resources/admin/assets/img/favicons/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="resources/admin/assets/img/favicons/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="resources/admin/assets/img/favicons/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="resources/admin/assets/img/favicons/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192"  href="resources/admin/assets/img/favicons/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="resources/admin/assets/img/favicons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="resources/admin/assets/img/favicons/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="resources/admin/assets/img/favicons/favicon-16x16.png">
<link rel="manifest" href="resources/admin/assets/img/favicons/manifest.json">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="resources/admin/assets/img/favicons/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff">
<!-- END Icons -->

<!-- Stylesheets -->
<!-- Web fonts -->
<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400italic,600,700%7COpen+Sans:300,400,400italic,600,700">
<link rel="stylesheet" href="resources/admin/assets/css/custom.css">
<!-- Bootstrap and Sumo CSS framework -->
<link rel="stylesheet" id="css-bootstrap" href="resources/admin/assets/css/bootstrap.min.css">
<!-- build:remove -->
<link rel="stylesheet" id="css-main" href="resources/admin/assets/css/oneui.css">
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
			<!-- Login Block -->
			<div class="block block-themed animated fadeIn">
				<div class="block-header bg-primary">
					<ul class="block-options">
						<li> <a class="btn btn-link" href="{{ url('/password/reset') }}">
                                    Forgot Your Password?
                                </a> </li>
						<li> <a href="register.html" data-toggle="tooltip" data-placement="left" title="New Account"><i class="si si-plus"></i></a> </li>
					</ul>
					<h3 class="block-title">Login</h3>
				</div>
				<div class="block-content block-content-full block-content-narrow"> 
					<!-- Login Title -->
					<h1 class="h2 font-w600 push-30-t push-5">{{ config('app.name')}}</h1>
					<p>Welcome, please login.</p>
					<!-- END Login Title --> 
					
					<!-- Login Form --> 
					<!-- jQuery Validation (.js-validation-login class is initialized in js/pages/base_pages_login.js) --> 
					<!-- For more examples you can check out https://github.com/jzaefferer/jquery-validation -->
					
					{!! Form::open(array('url' => 'login','class'=>'form-horizontal m-t-20','id'=>'myForm')) !!}
					{{ csrf_field() }}
						<div class="form-group">
							<div class="col-xs-12">
								<div class="form-material form-material-primary floating{{ $errors->has('email') ? ' has-error' : '' }}">
								 {!! Form::text('email', null, ['class' => 'form-control','placeholder' => 'Enter Email Id']) !!}
									@if ($errors->has('email')) 
										<span class="help-block"><strong>{{ $errors->first('email') }}</strong></span>
									@endif
									
									
								</div>
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-12">
								<div class="form-material form-material-primary floating{{ $errors->has('password') ? ' has-error' : '' }}">
									 {!! Form::password('password', ['class' => 'form-control','placeholder' => 'Password']) !!}
									@if ($errors->has('password')) 
									<span class="help-block"><strong>{{ $errors->first('password') }}</strong></span> 
									@endif
								</div>
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-12">
								<label class="css-input switch switch-sm switch-primary">
									<input type="checkbox" id="login-remember-me" name="login-remember-me">
									<span></span> Remember Me? </label>
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-12 col-sm-6 col-md-4">
								<button class="btn btn-block btn-primary"><i class="si si-login pull-right"></i> Log in</button>
							</div>
						</div>
					</form>
					<!-- END Login Form --> 
				</div>
			</div>
			<!-- END Login Block --> 
		</div>
	</div>
</div>
<script src="assets/js/core/jquery.min.js"></script> 
<script src="assets/js/core/bootstrap.min.js"></script> 
<script>
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});
</script>


</body>
</html>

