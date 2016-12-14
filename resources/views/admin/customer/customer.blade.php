@extends('admin.index')
@section('content') 



            <!-- Main Container -->
            <main id="main-container">
                <!-- Page Content -->
                <div class="content">
                    <!-- All customer -->
                    <div class="block">
                        <div class="block-header bg-gray-lighter">
                            <ul class="block-options">
                                <li class="dropdown">
                                    <div class="text-success font-w600"><i class="fa fa-plus"></i> <a href="{{ url('/admin/customer/create')}}">Add Customer</a></div>
                                    
                                </li>
                            </ul>
                            <h3 class="block-title">All Customer</h3>
                        </div>
                        <div class="block-content">
							 @if(Session::has('msg'))
								<p class="alert alert-success">{{ Session::get('msg') }}</p>
							 @endif

                            <table class="table table-borderless table-striped table-vcenter">
                                <thead>
                                    <tr>
                                        <th class="text-center" style="width: 100px;">ID</th>
                                        <th class="visible-lg">Customer Name</th>
                                        <th class="hidden-xs text-center">Added</th>
                                        <th>Status</th>                                        
                                        <th class="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
									@foreach ($customers as $customer)
                                    <tr>
                                        <td class="text-center">
                                            <a class="font-" href="">
                                                <strong>{{$customer->customer_id}}</strong>
                                            </a>
                                        </td>
                                        <td class="visible-lg">
                                            <a href="">{{$customer->firstname}} {{$customer->lastname}}</a>
                                        </td>
                                        <td class="hidden-xs text-center">{{$customer->created_at}}</td>
                                        <td>
											@if($customer->status==1)
                                            <span class="label label-success">Active</span>
											@else
											<span class="label label-danger">Deactive</span>
											@endif
                                        </td>   
										
										
										
                                        <td class="text-center">
                                            <div class="btn-group btn-group-xs">
                                                					<a href="{{ url('/admin/customer/')}}/{{$customer->customer_id}}/edit" data-toggle="tooltip" title="View" class="btn btn-default"><i class="fa fa-eye"></i></a>
												<a href="{{ url('/admin/customer/')}}/{{$customer->customer_id}}/delete" onclick="return confirm('Are you sure want to delete?')" data-toggle="tooltip" title="Delete" class="btn btn-default"><i class="fa fa-times text-danger"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                   @endforeach 
                                </tbody>
                            </table>
							<nav class="text-left">
								
                                
                            </nav>
                            <nav class="text-right">	
								{{ $customers->links()}}
							<br />	
								
    
   

                                <!--<ul class="pagination pagination-sm">
                                    <li class="active">
                                        <a href="javascript:void(0)">1</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">2</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">3</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">4</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">5</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)"><i class="fa fa-angle-right"></i></a>
                                    </li>
                                </ul> -->
                            </nav>
                        </div>
                    </div>
                    <!-- END All customers -->
                </div>
                <!-- END Page Content -->
            </main>
            <!-- END Main Container -->

           
		<script type="text/javascript" src="{{asset('resources/admin/assets/plugins/jqwidgets/jqxcore.js')}}"></script>
		<!-- jQWidgets core JavaScript --> 
		<script type="text/javascript" src="{{asset('resources/admin/assets/plugins/jqwidgets/jqxdata.js')}}"></script> 
		<script type="text/javascript" src="{{asset('resources/admin/assets/plugins/jqwidgets/jqxmenu.js')}}"></script> 
		<script type="text/javascript" src="{{asset('resources/admin/assets/plugins/jqwidgets/jqxlistbox.js')}}"></script>
		<script type="text/javascript" src="{{asset('resources/admin/assets/plugins/jqwidgets/jqxdropdownlist.js')}}"></script> 
		<script type="text/javascript" src="{{asset('resources/admin/assets/plugins/jqwidgets/jqxgrid.js')}}"></script> 
		<script type="text/javascript" src="{{asset('resources/admin/assets/plugins/jqwidgets/jqxgrid.sort.js')}}"></script> 
		<script type="text/javascript" src="{{asset('resources/admin/assets/plugins/jqwidgets/jqxgrid.pager.js')}}"></script> 
		<script type="text/javascript" src="{{asset('resources/admin/assets/plugins/jqwidgets/jqxgrid.selection.js')}}"></script> 
		<script type="text/javascript" src="{{asset('resources/admin/assets/plugins/jqwidgets/jqxgrid.filter.js')}}"></script> 
		<script type="text/javascript" src="{{asset('resources/admin/assets/plugins/jqwidgets/jqxbuttons.js')}}"></script> 
		<script type="text/javascript" src="{{asset('resources/admin/assets/plugins/jqwidgets/jqxscrollbar.js')}}"></script>
		<script type="text/javascript" src="{{asset('resources/admin/assets/plugins/jqwidgets/jqxdatatable.js')}}"></script>
		<script type="text/javascript" src="{{asset('resources/admin/assets/js/custom.js')}}"></script> 
		<script type="text/javascript" src="{{asset('resources/admin/assets/js/waves.js')}}"></script> 		
		<!-- Page JS Code -->
        <script>
            jQuery(function () {
                // Init page helpers (Appear + CountTo plugins)
                App.initHelpers(['appear', 'appear-countTo']);
            });
        </script>

@stop