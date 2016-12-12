@extends('admin.index')
@section('content') 
<style>
#table{width:100% !important;}
</style>
<link href="<?php echo url('/'); ?>/resources/admin/assets/plugins/jqwidgets/styles/jqx.base.css" rel="stylesheet">
<link href="<?php echo url('/'); ?>/resources/admin/assets/plugins/jqwidgets/styles/jqx.bootstrap.css" rel="stylesheet">



            <!-- Main Container -->
              <main id="main-container">
                <!-- Page Content -->
                <div class="content">


                    <!-- All Products -->
                    <div class="block">
                        <div class="block-header bg-gray-lighter">
                            <h3 class="block-title">All Products</h3>
                        </div>
                        <div class="block-content">
                           <!-- jQWidgets core JavaScript --> 
						   <script type="text/javascript" src="<?php echo url('/'); ?>/resources/admin/assets/plugins/jqwidgets/jqxcore.js"></script> 
							<script type="text/javascript" src="<?php echo url('/'); ?>/resources/admin/assets/plugins/jqwidgets/jqxdata.js"></script>
						   <script type="text/javascript" src="<?php echo url('/'); ?>/resources/admin/assets/plugins/jqwidgets/jqxswitchbutton.js"></script> 
							<script type="text/javascript" src="<?php echo url('/'); ?>/resources/admin/assets/plugins/jqwidgets/jqxpanel.js"></script> 
							<script type="text/javascript" src="<?php echo url('/'); ?>/resources/admin/assets/plugins/jqwidgets/jqxtabs.js"></script> 
							<script type="text/javascript" src="<?php echo url('/'); ?>/resources/admin/assets/plugins/jqwidgets/jqxtree.js"></script> 
							<script type="text/javascript" src="<?php echo url('/'); ?>/resources/admin/assets/plugins/jqwidgets/jqxmenu.js"></script> 
							<script type="text/javascript" src="<?php echo url('/'); ?>/resources/admin/assets/plugins/jqwidgets/jqxcheckbox.js"></script> 
							<script type="text/javascript" src="<?php echo url('/'); ?>/resources/admin/assets/plugins/jqwidgets/jqxlistbox.js"></script> 
							<script type="text/javascript" src="<?php echo url('/'); ?>/resources/admin/assets/plugins/jqwidgets/jqxdropdownlist.js"></script> 
							<script type="text/javascript" src="<?php echo url('/'); ?>/resources/admin/assets/plugins/jqwidgets/jqxgrid.js"></script> 
							<script type="text/javascript" src="<?php echo url('/'); ?>/resources/admin/assets/plugins/jqwidgets/jqxgrid.sort.js"></script> 
							<script type="text/javascript" src="<?php echo url('/'); ?>/resources/admin/assets/plugins/jqwidgets/jqxgrid.pager.js"></script> 
							<script type="text/javascript" src="<?php echo url('/'); ?>/resources/admin/assets/plugins/jqwidgets/jqxgrid.selection.js"></script> 
							<script type="text/javascript" src="<?php echo url('/'); ?>/resources/admin/assets/plugins/jqwidgets/jqxinput.js"></script> 
							<script type="text/javascript" src="<?php echo url('/'); ?>/resources/admin/assets/plugins/jqwidgets/jqxgrid.filter.js"></script> 
							<script type="text/javascript" src="<?php echo url('/'); ?>/resources/admin/assets/plugins/jqwidgets/jqxcalendar.js"></script> 
							<script type="text/javascript" src="<?php echo url('/'); ?>/resources/admin/assets/plugins/jqwidgets/jqxradiobutton.js"></script> 
							<script type="text/javascript" src="<?php echo url('/'); ?>/resources/admin/assets/plugins/jqwidgets/jqxnumberinput.js"></script> 
							<script type="text/javascript" src="<?php echo url('/'); ?>/resources/admin/assets/plugins/jqwidgets/jqxdatetimeinput.js"></script> 
							<script type="text/javascript" src="<?php echo url('/'); ?>/resources/admin/assets/plugins/jqwidgets/jqxtooltip.js"></script> 
							<script type="text/javascript" src="<?php echo url('/'); ?>/resources/admin/assets/plugins/jqwidgets/globalization/globalize.js"></script> 
							<script type="text/javascript" src="<?php echo url('/'); ?>/resources/admin/assets/plugins/jqwidgets/jqxgrid.edit.js"></script> 
							<script type="text/javascript" src="<?php echo url('/'); ?>/resources/admin/assets/plugins/jqwidgets/jqxbuttons.js"></script> 
							<script type="text/javascript" src="<?php echo url('/'); ?>/resources/admin/assets/plugins/jqwidgets/jqxcheckbox.js"></script> 
							<script type="text/javascript" src="<?php echo url('/'); ?>/resources/admin/assets/plugins/jqwidgets/jqxscrollbar.js"></script> 
							<script type="text/javascript" src="<?php echo url('/'); ?>/resources/admin/assets/plugins/jqwidgets/jqxpanel.js"></script> 
							<script type="text/javascript" src="<?php echo url('/'); ?>/resources/admin/assets/plugins/jqwidgets/jqxdropdownbutton.js"></script> 
							<script type="text/javascript" src="<?php echo url('/'); ?>/resources/admin/assets/plugins/jqwidgets/jqxdatatable.js"></script> 
						   
						   
							

                           <script type="text/javascript" src="<?php echo url('/'); ?>/resources/admin/assets/js/config.js"></script> 
							<div id="table" style="width:100% !important"></div>
                        </div>
                    </div>
                    <!-- END All Products -->
                </div>
                <!-- END Page Content -->
            </main>
           <!-- END Main Container -->
		   
		   <script type="text/javascript">
    $(document).ready(function () {
        var source = BASE_URL + "product/getMasterProductsList";
        var theme = 'classic';
        var source =
                {
					dataType: "json",
                    datafields: [
                        {name: 'product_id', type: 'int'},
                        {name: 'name', type: 'string'},
                        {name: 'sku', type: 'string'},
                        {name: 'cost', type: 'float'},
						{name: 'stock', type: 'int'},
						{name: 'status', type: 'string'}
                    ],
					id: 'product_id',
                    root: "data",
                    cache: false,
                    url: source,
                   
                };
       var dataAdapter = new $.jqx.dataAdapter(source, {
                downloadComplete: function (data, status, xhr) {
                },
                loadComplete: function (data) {
                },
                loadError: function (xhr, status, error) {
                }
            });
		
		var imageFormatter  = function (row, columnfield, value, defaulthtml, columnproperties) {
			
			if(value != '')
			{
				var str = '<img src="site_images/products/icon/'+value+'" height="50">';
			}   
			else
			{
				var str = '<img src="site_images/products/icon/default.jpg" height="50">';
				
			}
			return "<p class='text-center'>"+str+"</p>";
		}

		var actionFormatter = function (row, columnfield, value, defaulthtml, columnproperties) {
                
			var str = "<p class='text-center'><a href='Products/edit/"+value+"'><i class='fa fa-edit' style='font-size:20px; line-height:47px'></i></a>";
			str += "<p class='text-center'><a href='<Products/delete/"+value+"'><i class='fa fa-times red' style='font-size:20px; line-height:47px'></i></a>";
			return str;
        }
            
        var statusFormatter = function (row, columnfield, value, defaulthtml, columnproperties) {
                
			if (value =='Y') 
				return "<p class='text-center'><i class='fa fa-thumbs-up green' style='font-size:20px; line-height:47px'></i></p>";
		else
			return "<p class='text-center'><i class='fa fa-thumbs-down red' style='font-size:20px; line-height:47px'></i></p>";
		}
				
        $("#table").jqxGrid(
                {
					 width: '100%',
                   source: dataAdapter,
                            pageable: true,
                            autoheight: true,
                            sortable: true,
                            editable: true,
                            selectionmode: 'singlerow',
                             editmode: 'selectedrow',                            
                            altrows: false,
                            enabletooltips: true,
                            showToolbar: true,
                            columnsheight: 50,
                            rowsheight: 50,
                            showfilterrow: true,
                            filterable: true,
                            ready: function () {
                               // addfilter();
                            },
                   
                    filterable: true,
                    sortable: true,
                    columns: [
                        {text: 'Image', editable: false, datafield: 'image', cellsalign: 'center', width: '10%'},
                        {text: 'Name', datafield: 'name', cellsalign: 'left', align: 'left', width: '20%'},
                        {text: 'SKU', datafield: 'sku', cellsalign: 'center', align: 'center', width: '10%'},
						{text: 'Cost', datafield: 'cost', cellsalign: 'center', align: 'center', width: '10%'},
						{text: 'Inventory', datafield: 'stock', cellsalign: 'center', align: 'center', width: '10%'},
						{text: 'StoreName', datafield: 'product_id', cellsalign: 'center', align: 'center', width: '10%'},
						{text: 'Status', datafield: 'status', width: '8%', cellsalign: 'center', align: 'center', cellsrenderer: statusFormatter},

                    ]
                });
       
    });
</script>
			

@endsection