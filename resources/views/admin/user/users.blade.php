@extends('admin.index')
@section('content') 


 

            <!-- Main Container -->
            <main id="main-container">
                <!-- Page Content -->
                <div class="content">                    
					 @if(Session::has('msg'))
					<p class="alert alert-success">{{ Session::get('msg') }}</p>
					@endif
                    <!-- All Users -->
					
                    <div class="block">
                        <div class="block-header bg-gray-lighter">                          
							 <ul class="block-options">
                                <li class="dropdown">
                                    <div class="text-success font-w600"><i class="fa fa-plus"></i> <a href="{{ url('/user/add')}}">Add Users</a></div>
                                    
                                </li>
                            </ul>
                            <h3 class="block-title">All Users</h3>
                        </div>
						
                        <div class="block-content">
							<div id="dataTable"></div>
							<!--
                            <table class="table table-borderless table-striped table-vcenter">
                                <thead>
                                    <tr>
                                        <th class="text-center" style="width: 100px;">ID</th>
                                        <th class="visible-lg">Name</th>                                        
                                        <th>Status</th>                                        
                                        <th class="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
										@foreach ($users as $user)
											
									 <tr>
										<td class="text-center">
											<a class="font-" href="{{ url('/user/edit/'.$user->id) }}">
												<strong> {{ $user->id }}</strong>
											</a>
										</td>
										<td class="visible-lg">
											<a href="{{ url('/user/edit/'.$user->id) }}">{{ $user->name }}</a>
										</td>                                        
										<td>
											 <span class="label label-success">Active</span>
										</td>

										<td class="text-center">
											<div class="btn-group btn-group-xs">
												<a href="{{ url('/user/edit/'.$user->id) }}" data-toggle="tooltip" title="View" class="btn btn-default"><i class="fa fa-eye"></i></a>
												<a href="{{ url('/user/delete/'.$user->id) }}" onclick="return confirm('Are you sure want to delete?')" data-toggle="tooltip" title="Delete" class="btn btn-default"><i class="fa fa-times text-danger"></i></a>
											</div>
										</td>
									</tr>
									
									@endforeach
									
                                    <tr>
                                        <td class="text-center">
                                            <a class="font-" href="{{ url('/user/edit') }}">
                                                <strong>static id</strong>
                                            </a>
                                        </td>
                                        <td class="visible-lg">
                                            <a href="base_pages_ecom_product_edit.html">Dipak Dhola</a>
                                        </td>                                        
                                        <td>
                                            <span class="label label-danger">Deactivate</span>
                                        </td>
                                        
                                        <td class="text-center">
                                            <div class="btn-group btn-group-xs">
                                                <a href="" data-toggle="tooltip" title="View" class="btn btn-default"><i class="fa fa-eye"></i></a>
                                                <a href="javascript:void(0)" data-toggle="tooltip" title="Delete" class="btn btn-default"><i class="fa fa-times text-danger"></i></a>
                                            </div>
                                        </td>
                                    </tr>                                    
                                </tbody>
                            </table>
                           --->
                        </div>
                    </div>
                    <!-- END All Users -->
					
					
                </div>
                <!-- END Page Content -->
            </main>
           
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
<!---<script type="text/javascript" src="{{asset('resources/admin/assets/js/config.js')}}"></script> --->

<script type="text/javascript">
var that = this;
$(document).ready(function () {
	var BASE_URL = "{{ url('/') }}/";	
    var url = BASE_URL + "user/getUser";
    var theme = 'classic';

    var ordersSource =
            {
                dataFields: [
                    {name: 'id', type: 'int'},
                    {name: 'name', type: 'string'},                    
                    {name: 'email', type: 'string'},
                    {name: 'id_tmp', type: 'int'}
                ],
                root: "data",
                dataType: "json",
                cache: false,
                id: 'id',
                url: url,
                addRow: function (rowID, rowData, position, commit) {
                    // synchronize with the server - send insert command
                    // call commit with parameter true if the synchronization with the server is successful 
                    // and with parameter false if the synchronization failed.
                    // you can pass additional argument to the commit callback which represents the new ID if it is generated from a DB.
                    commit(true);
                },
                updateRow: function (rowID, rowData, commit) {

                    // synchronize with the server - send update command
                    // call commit with parameter true if the synchronization with the server is successful 
                    // and with parameter false if the synchronization failed.
                    commit(true);
                },
                deleteRow: function (rowID, commit) {
                    // synchronize with the server - send delete command
                    // call commit with parameter true if the synchronization with the server is successful 
                    // and with parameter false if the synchronization failed.
                    commit(true);
                }
            };
    var dataAdapter = new $.jqx.dataAdapter(ordersSource, {
        loadComplete: function () {
            // data is loaded.
        }
    });
    this.editrow = -1;


    $("#dataTable").jqxDataTable(
            {
                width: '100%',
                source: dataAdapter,
                pageable: true,
                altRows: true,
                sortable: true,
                filterable: true,
                editable: true,
                editSettings: {saveOnPageChange: true, saveOnBlur: true, saveOnSelectionChange: false, cancelOnEsc: true, saveOnEnter: true, editOnDoubleClick: false, editOnF2: false},
                // called when jqxDataTable is going to be rendered.
                rendering: function ()
                {
                    // destroys all buttons.
                    if ($(".editButtons").length > 0) {
                        $(".editButtons").jqxButton('destroy');
                    }
                    if ($(".cancelButtons").length > 0) {
                        $(".cancelButtons").jqxButton('destroy');
                    }
                },
                // called when jqxDataTable is rendered.
                rendered: function () {
                    if ($(".editButtons").length > 0) {
                        $(".cancelButtons").jqxButton();
                        $(".editButtons").jqxButton();

                        var editClick = function (event) {
                            var target = $(event.target);
                            // get button's value.
                            var value = target.val();
                            // get clicked row.
                            var rowIndex = parseInt(event.target.getAttribute('data-row'));
                            if (isNaN(rowIndex)) {
                                return;
                            }
                            if (value == "Edit") {
                                // begin edit.
                                $("#dataTable").jqxDataTable('beginRowEdit', rowIndex);
                                target.parent().find('.cancelButtons').show();
                                target.val("Save");
                            }
                            else {
                                // end edit and save changes.
                                target.parent().find('.cancelButtons').hide();
                                target.val("Edit");
                                $("#dataTable").jqxDataTable('endRowEdit', rowIndex);
                            }
                        }
                        $(".editButtons").on('click', function (event) {
                            editClick(event);
                        });

                        $(".cancelButtons").click(function (event) {
                            // end edit and cancel changes.
                            var rowIndex = parseInt(event.target.getAttribute('data-row'));
                            if (isNaN(rowIndex)) {
                                return;
                            }
                            $("#dataTable").jqxDataTable('endRowEdit', rowIndex, true);
                        });
                    }
                },
                pagerButtonsCount: 8,
                columns: [
                    {text: 'ID', editable: false, dataField: 'id', width: '10%'},
                    {text: 'First Name', editable: false, dataField: 'name', cellsAlign: 'left', align: 'left', width: '20%'},                    
                    {text: 'Email', editable: false, dataField: 'email', cellsAlign: 'left', align: 'left', width: '30%'},
                    {text: 'Action', dataField: 'id_tmp', cellsAlign: 'center', align: "center", columnType: 'int', width: '20%', minwidth: '80', editable: false, filterable: false, cellsRenderer: function (row, column, value) {

                            actionLink = '<div class="text-center action-icons"><a title="Update Record" href="' + BASE_URL + 'user/edit/' + value + '" class="on-default edit-row text-default"><i class="fa fa-pencil"></i></a><a title="Delete" href="' + BASE_URL + 'user/delete/' + value + '" class="on-default edit-row text-default"><i class="fa fa-delete"></i>Delete</a></div>'
                            return actionLink;
                        }

                    }
                ]
            });
    //set Grid page limit for jqxDataTable
    $('#dataTable').jqxDataTable({
        pageSize: 20,
    });
});
</script>
@stop