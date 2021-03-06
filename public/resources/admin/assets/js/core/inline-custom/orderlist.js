$(document).ready(function() {
	//Tab1
    var url = "assets/xml/OrderList.xml";
    $.jqx.theme = "custom";
    // prepare the data
    var source = {
        datatype: "xml",
        datafields: [{
            name: 'OrderDateTime',
            type: 'String'
        }, {
            name: 'OrderChannelSite',
            type: 'string'
        }, {
            name: 'OrderID',
            type: 'string'
        }, {
            name: 'sellerstypeStatus',
            type: 'String'
        }, {
            name: 'ProductName',
            type: 'String'
        }, {
            name: 'OrderQTY',
            type: 'String'
        }, {
            name: 'OrderSKU',
            type: 'String'
        }, {
            name: 'OrderExpDel',
            type: 'String'
        }, {
            name: 'OrderByPhone',
            type: 'String'
        }, {
            name: 'OrderRefCode',
            type: 'String'
        }, {
            name: 'OrderPersonName',
            type: 'String'
        }, {
            name: 'OrderPersonAddress',
            type: 'String'
        }, {
            name: 'OrderShippingAddress',
            type: 'String'
        }, {
            name: 'OrderComment',
            type: 'String'
        }, {
            name: 'PaymentType',
            type: 'String'
        }, {
            name: 'OrdershippingStatus',
            type: 'String'
        }, {
            name: 'OrderedPersonIP',
            type: 'String'
        }, {
            name: 'OrderTotal',
            type: 'float'
        }, {
            name: 'Orderstatus',
            type: 'String'
        }, {
			name: 'OrderType',
            type: 'String'
        }, {
            name: 'Action',
            type: 'string'
        }],
        root: "TemplateList",
        record: "Template",
        id: 'TemplateID',
        url: url
    };

	var orderdatetime = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderChannelSite;
		var imgurl = 'img/' + value2 ;
		value1 = '<div class="text-left" style="padding:10px 0 10px 10px;">' + value1 + '</div>';
		value2 = '<div class="text-center"><img width="100" src="' + imgurl + '.png"></div>';
				
		var orderdatetime1 = '<div class="" style="	margin:0px 5px 0 5px;">'+value1 + value2 + '</div>';
		return orderdatetime1+' ';
	}
	var OrderID = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).ProductName;
		var value3 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderQTY;
		var value4 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderSKU;
		var value5 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderExpDel;
		var value6 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderByPhone;
		var value7 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderRefCode;
		var value8 = $('#jqxgrid').jqxGrid('getrowdata', row).sellerstypeStatus;
		if (value8 == 'No') {
			value8 = '<i class="fa fa-circle text-warning m-r-10" style="font-size:13px;"></i>';
		} else {
			value8 = '<i class="fa fa-circle text-success m-r-10" style="font-size:13px;"></i>';
		}
		
		if (value7 == '') {
			value7 = '';
		} else {
			value7 = '<div class="p-t-10 p-l-10" style="font-size: 10px;">(Amazon Ref. Order #:' + value7 + ')</div>';
		}
		
		value1 = '<div class="text-left p-l-r-10 p-t-10 text-default"><a href="order-detail.html" title="" style=" font-size:18px; font-weight:bold;">' + value8 + value1 + '</a></div>' + value7 ;

		value2 = '<div class="text-left text-default p-l-r-10 p-t-10" style="font-weight:bold;">' + value2 + '</div>';
		value3 = '<div class="text-left text-default p-l-r-10 p-t-10">QTY: ' + value3 + '</div>';
		value4 = '<div class="text-left text-default p-l-r-10 p-t-10">SKU: ' + value4 + '</div>';
		value5 = '<div class="text-left text-default p-l-r-10 p-t-10">Expected Delivery By:' + value5 + '</div>';
		value6 = '<div class="text-left text-default p-l-r-10 p-t-10">' + value6 + '</div>';
				
		var OrderID1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + value3 + value4 + value5 + value6 + '</div>';
		return OrderID1+' ';
	}

	var OrderPersonName = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderPersonAddress;
		var value3 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderedPersonIP;

		value1 = '<div class="text-left p-t-10"><a href="#" title="">' + value1 + '</a></div>';
		value2 = '<div class="text-left p-t-10" style="line-height:18px;">' + value2 + '</div>';
		value3 = '<div class="text-left p-t-10"><a href="#" title="">' + value3 + '</a></div>';
				
		var OrderPersonName1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + value3 + '</div>';
		return OrderPersonName1+' ';
	}


	var ShippingAddress = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderShippingAddress;
		var value3 = $('#jqxgrid').jqxGrid('getrowdata', row).OrdershippingStatus;
		var value4 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderComment;
		var value5 = $('#jqxgrid').jqxGrid('getrowdata', row).PaymentType;
		value1 = '<div class="text-left p-t-10"><a href="#" title="">' + value1 + '</a></div>';
		value2 = '<div class="text-left p-t-10" style="line-height:18px;">' + value2 + '</div>';
		value3 = '<div class="text-left p-t-10"><b>' + value3 + '</b></div>';
		value4 = '<div class="text-left p-t-10"><b>' + value4 + '</b></div>';
		value5 = '<div class="text-left p-t-10">Payment via: <span class="text-danger">' + value5 + '</span></div>';

		var ShippingAddress1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + value3 + value4 + value5 +'</div>';
		return ShippingAddress1+' ';
	}



	var OrderStatus = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderType;
		value1 = '<div class="text-left text-warning" style="margin:10px 5px 0 5px;">' + value1 + '</div>';
		value2 = '<div class="text-left text-inverse" style="margin:10px 5px 0 5px;">' + value2 + '</div>';
				
		var OrderStatus1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + '</div>';
		return OrderStatus1;
	}
	
	var actionlink = function(row, columnfield, value, defaulthtml, columnproperties, rowdata) {
        var actionLink = '';

        actionLink = '<div class="text-left action-icons" style=" margin-top:5px;"><a href="#" class="btn btn-success" title="Capture">Capture</a><br><a href="#" class="btn btn-inverse" title="Print Packing Slip">Print Packing Slip</a><br><a href="#" class="btn btn-warning" title="Force Refund">Force Refund</a> <br><a href="#" class="btn btn-danger" title="Refund">Refund</a></div>'

        return actionLink;
    }


    var dataAdapter = new $.jqx.dataAdapter(source, {
        downloadComplete: function(data, status, xhr) {},
        loadComplete: function(data) {},
        loadError: function(xhr, status, error) {}
    });
    // initialize jqxGrid


    $("#jqxgrid").jqxGrid(
        //$("#jqxgrid").jqxDataTable(
        {
            width: '100%',
            //height: '100%',
            source: dataAdapter,
            pageable: true,
            autoheight: true,
            sortable: true,
            altrows: true,
            enabletooltips: true,
            editable: true,
			showstatusbar: true,
			showaggregates: true,
            columnsheight: 50,
            autorowheight: true,
            showfilterrow: false,
            filterable: true,
            selectionmode: 'checkbox',
            columns: [{
                text: 'Order Date',
                datafield: 'OrderDateTime',
                width: '16%',
                editable: false,
				filterable: false,
				minwidth: '170',
                cellsrenderer: orderdatetime
            }, {
                text: 'Order No. / Product Details',
                datafield: 'OrderID',
                editable: false,
                width: '21%',
				filterable: false,
                minwidth: '160',
				cellsrenderer: OrderID

            }, {
                text: 'Customer Name / ZipCode',
                datafield: 'OrderPersonName',
                editable: false,
                width: '13.1%',
				filterable: false,
                minwidth: '200',
				cellsrenderer: OrderPersonName,
				renderer: function (defaultText, alignment, height) {
             		return '<div style="margin-top:10px; margin-left: 5px;">Customer Name /<br>ZipCode</div>';
				},
            },  {
                text: 'Shipping Address',
                datafield: 'ShippingAddress',
                editable: false,
                width: '13%',
				filterable: false,
                minwidth: '200',
				cellsrenderer: ShippingAddress
            },  {
                text: 'Order Total',
                datafield: 'OrderTotal',
                width: '6%',
                minwidth: '50',
				cellsalign: 'right',
				cellsformat: 'c2',
				filterable: false,
                editable: false,
				renderer: function (defaultText, alignment, height) {
             		return '<div style="margin-top:10px; margin-left: 5px;">Order <br>Total</div>';
				},
				aggregates: [{ '<b>Total</b>':
                            function (aggregatedValue, currentValue, column, record) {
                                var total = currentValue;
                                return aggregatedValue + total;
							}
						}]
            },  {
                text: 'Status',
                datafield: 'Orderstatus',
                width: '8%',
                minwidth: '50',
                editable: false,
                filterable: false,
				//filtertype: 'checkedlist',
                cellsrenderer: OrderStatus
            }, {
                text: 'Action',
                datafield: 'Action',
                width: '12%',
                minwidth: '160',
                editable: false,
                filterable: false,
                cellsrenderer: actionlink
            }],
        });
	//Tab2
    var url = "assets/xml/OrderList.xml";
    $.jqx.theme = "custom";
    // prepare the data
    var source = {
        datatype: "xml",
        datafields: [{
            name: 'OrderDateTime',
            type: 'String'
        }, {
            name: 'OrderChannelSite',
            type: 'string'
        }, {
            name: 'OrderID',
            type: 'string'
        }, {
            name: 'sellerstypeStatus',
            type: 'String'
        }, {
            name: 'ProductName',
            type: 'String'
        }, {
            name: 'OrderQTY',
            type: 'String'
        }, {
            name: 'OrderSKU',
            type: 'String'
        }, {
            name: 'OrderExpDel',
            type: 'String'
        }, {
            name: 'OrderByPhone',
            type: 'String'
        }, {
            name: 'OrderRefCode',
            type: 'String'
        }, {
            name: 'OrderPersonName',
            type: 'String'
        }, {
            name: 'OrderPersonAddress',
            type: 'String'
        }, {
            name: 'OrderShippingAddress',
            type: 'String'
        }, {
            name: 'OrderComment',
            type: 'String'
        }, {
            name: 'PaymentType',
            type: 'String'
        }, {
            name: 'OrdershippingStatus',
            type: 'String'
        }, {
            name: 'OrderedPersonIP',
            type: 'String'
        }, {
            name: 'OrderTotal',
            type: 'float'
        }, {
            name: 'Orderstatus',
            type: 'String'
        }, {
			name: 'OrderType',
            type: 'String'
        }, {
            name: 'Action',
            type: 'string'
        }],
        root: "TemplateList",
        record: "Template",
        id: 'TemplateID',
        url: url
    };

	var orderdatetime = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderChannelSite;
		var imgurl = 'img/' + value2 ;
		value1 = '<div class="text-left" style="padding:10px 0 10px 10px;">' + value1 + '</div>';
		value2 = '<div class="text-center"><img width="100" src="' + imgurl + '.png"></div>';
				
		var orderdatetime1 = '<div class="" style="	margin:0px 5px 0 5px;">'+value1 + value2 + '</div>';
		return orderdatetime1+' ';
	}
	var OrderID = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).ProductName;
		var value3 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderQTY;
		var value4 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderSKU;
		var value5 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderExpDel;
		var value6 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderByPhone;
		var value7 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderRefCode;
		var value8 = $('#jqxgrid').jqxGrid('getrowdata', row).sellerstypeStatus;
		if (value8 == 'No') {
			value8 = '<i class="fa fa-circle text-warning m-r-10"></i>';
		} else {
			value8 = '<i class="fa fa-circle text-success m-r-10"></i>';
		}
		
		if (value7 == '') {
			value7 = '';
		} else {
			value7 = '<div class="p-t-10 p-l-10" style="font-size: 10px;">(Amazon Ref. Order #:' + value7 + ')</div>';
		}
		
		value1 = '<div class="text-left p-l-r-10 p-t-10 text-default"><a href="order-detail.html" title="">' + value8 + value1 + '</a></div>' + value7 ;

		value2 = '<div class="text-left text-default p-l-r-10 p-t-10" style="font-weight:bold;">' + value2 + '</div>';
		value3 = '<div class="text-left text-default p-l-r-10 p-t-10">QTY: ' + value3 + '</div>';
		value4 = '<div class="text-left text-default p-l-r-10 p-t-10">SKU: ' + value4 + '</div>';
		value5 = '<div class="text-left text-default p-l-r-10 p-t-10">Expected Delivery By:' + value5 + '</div>';
		value6 = '<div class="text-left text-default p-l-r-10 p-t-10">' + value6 + '</div>';
				
		var OrderID1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + value3 + value4 + value5 + value6 + '</div>';
		return OrderID1+' ';
	}

	var OrderPersonName = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderPersonAddress;
		var value3 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderedPersonIP;

		value1 = '<div class="text-left p-t-10"><a href="#" title="">' + value1 + '</a></div>';
		value2 = '<div class="text-left p-t-10" style="line-height:18px;">' + value2 + '</div>';
		value3 = '<div class="text-left p-t-10"><a href="#" title="">' + value3 + '</a></div>';
				
		var OrderPersonName1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + value3 + '</div>';
		return OrderPersonName1+' ';
	}


	var ShippingAddress = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderShippingAddress;
		var value3 = $('#jqxgrid').jqxGrid('getrowdata', row).OrdershippingStatus;
		var value4 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderComment;
		var value5 = $('#jqxgrid').jqxGrid('getrowdata', row).PaymentType;
		value1 = '<div class="text-left p-t-10"><a href="#" title="">' + value1 + '</a></div>';
		value2 = '<div class="text-left p-t-10" style="line-height:18px;">' + value2 + '</div>';
		value3 = '<div class="text-left p-t-10"><b>' + value3 + '</b></div>';
		value4 = '<div class="text-left p-t-10"><b>' + value4 + '</b></div>';
		value5 = '<div class="text-left p-t-10">Payment via: <span class="text-danger">' + value5 + '</span></div>';

		var ShippingAddress1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + value3 + value4 + value5 +'</div>';
		return ShippingAddress1+' ';
	}



	var OrderStatus = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderType;
		value1 = '<div class="text-left text-warning" style="margin:10px 5px 0 5px;">' + value1 + '</div>';
		value2 = '<div class="text-left text-inverse" style="margin:10px 5px 0 5px;">' + value2 + '</div>';
				
		var OrderStatus1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + '</div>';
		return OrderStatus1;
	}
	

	var actionlink = function(row, columnfield, value, defaulthtml, columnproperties, rowdata) {
        var actionLink = '';

        actionLink = '<div class="text-left action-icons" style=" margin-top:5px;"><a href="#" class="btn btn-inverse" title="Print Packing Slip">Print Packing Slip</a><br><a href="#" class="btn btn-warning" title="Force Refund">Force Refund</a> <br><a href="#" class="btn btn-danger" title="Refund">Refund</a></div>'

        return actionLink;
    }


    var dataAdapter = new $.jqx.dataAdapter(source, {
        downloadComplete: function(data, status, xhr) {},
        loadComplete: function(data) {},
        loadError: function(xhr, status, error) {}
    });
    // initialize jqxGrid


    $("#jqxgrid2").jqxGrid(
        //$("#jqxgrid").jqxDataTable(
        {
            width: '100%',
            //height: '100%',
            source: dataAdapter,
            pageable: true,
            autoheight: true,
            sortable: true,
            altrows: true,
            enabletooltips: true,
            editable: true,
			showstatusbar: true,
			showaggregates: true,
            columnsheight: 50,
            autorowheight: true,
            showfilterrow: false,
            filterable: true,
            selectionmode: 'checkbox',
            columns: [{
                text: 'Order Date',
                datafield: 'OrderDateTime',
                width: '16%',
                editable: false,
				filterable: false,
				minwidth: '170',
                cellsrenderer: orderdatetime
            }, {
                text: 'Order No. / Product Details',
                datafield: 'OrderID',
                editable: false,
                width: '21%',
				filterable: false,
                minwidth: '160',
				cellsrenderer: OrderID

            }, {
                text: 'Customer Name / ZipCode',
                datafield: 'OrderPersonName',
                editable: false,
                width: '13.1%',
				filterable: false,
                minwidth: '200',
				cellsrenderer: OrderPersonName,
				renderer: function (defaultText, alignment, height) {
             		return '<div style="margin-top:10px; margin-left: 5px;">Customer Name /<br>ZipCode</div>';
				},
            },  {
                text: 'Shipping Address',
                datafield: 'ShippingAddress',
                editable: false,
                width: '13%',
				filterable: false,
                minwidth: '200',
				cellsrenderer: ShippingAddress
            },  {
                text: 'Order Total',
                datafield: 'OrderTotal',
                width: '6%',
                minwidth: '50',
				cellsalign: 'right',
				cellsformat: 'c2',
				filterable: false,
                editable: false,
				renderer: function (defaultText, alignment, height) {
             		return '<div style="margin-top:10px; margin-left: 5px;">Order <br>Total</div>';
				},
				aggregates: [{ '<b>Total</b>':
                            function (aggregatedValue, currentValue, column, record) {
                                var total = currentValue;
                                return aggregatedValue + total;
							}
						}]
            },  {
                text: 'Status',
                datafield: 'Orderstatus',
                width: '8%',
                minwidth: '50',
                editable: false,
                filterable: false,
				//filtertype: 'checkedlist',
                cellsrenderer: OrderStatus
            }, {
                text: 'Action',
                datafield: 'Action',
                width: '12%',
                minwidth: '160',
                editable: false,
                filterable: false,
                cellsrenderer: actionlink
            }],
        });
	//Tab3
    var url = "assets/xml/OrderList.xml";
    $.jqx.theme = "custom";
    // prepare the data
    var source = {
        datatype: "xml",
        datafields: [{
            name: 'OrderDateTime',
            type: 'String'
        }, {
            name: 'OrderChannelSite',
            type: 'string'
        }, {
            name: 'OrderID',
            type: 'string'
        }, {
            name: 'sellerstypeStatus',
            type: 'String'
        }, {
            name: 'ProductName',
            type: 'String'
        }, {
            name: 'OrderQTY',
            type: 'String'
        }, {
            name: 'OrderSKU',
            type: 'String'
        }, {
            name: 'OrderExpDel',
            type: 'String'
        }, {
            name: 'OrderByPhone',
            type: 'String'
        }, {
            name: 'OrderRefCode',
            type: 'String'
        }, {
            name: 'OrderPersonName',
            type: 'String'
        }, {
            name: 'OrderPersonAddress',
            type: 'String'
        }, {
            name: 'OrderShippingAddress',
            type: 'String'
        }, {
            name: 'OrderComment',
            type: 'String'
        }, {
            name: 'PaymentType',
            type: 'String'
        }, {
            name: 'OrdershippingStatus',
            type: 'String'
        }, {
            name: 'OrderedPersonIP',
            type: 'String'
        }, {
            name: 'OrderTotal',
            type: 'float'
        }, {
            name: 'Orderstatus',
            type: 'String'
        }, {
			name: 'OrderType',
            type: 'String'
        }, {
            name: 'Action',
            type: 'string'
        }],
        root: "TemplateList",
        record: "Template",
        id: 'TemplateID',
        url: url
    };

	var orderdatetime = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderChannelSite;
		var imgurl = 'img/' + value2 ;
		value1 = '<div class="text-left" style="padding:10px 0 10px 10px;">' + value1 + '</div>';
		value2 = '<div class="text-center"><img width="100" src="' + imgurl + '.png"></div>';
				
		var orderdatetime1 = '<div class="" style="	margin:0px 5px 0 5px;">'+value1 + value2 + '</div>';
		return orderdatetime1+' ';
	}
	var OrderID = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).ProductName;
		var value3 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderQTY;
		var value4 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderSKU;
		var value5 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderExpDel;
		var value6 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderByPhone;
		var value7 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderRefCode;
		var value8 = $('#jqxgrid').jqxGrid('getrowdata', row).sellerstypeStatus;
		if (value8 == 'No') {
			value8 = '<i class="fa fa-circle text-warning m-r-10"></i>';
		} else {
			value8 = '<i class="fa fa-circle text-success m-r-10"></i>';
		}
		
		if (value7 == '') {
			value7 = '';
		} else {
			value7 = '<div class="p-t-10 p-l-10" style="font-size: 10px;">(Amazon Ref. Order #:' + value7 + ')</div>';
		}
		
		value1 = '<div class="text-left p-l-r-10 p-t-10 text-default"><a href="order-detail.html" title="">' + value8 + value1 + '</a></div>' + value7 ;

		value2 = '<div class="text-left text-default p-l-r-10 p-t-10" style="font-weight:bold;">' + value2 + '</div>';
		value3 = '<div class="text-left text-default p-l-r-10 p-t-10">QTY: ' + value3 + '</div>';
		value4 = '<div class="text-left text-default p-l-r-10 p-t-10">SKU: ' + value4 + '</div>';
		value5 = '<div class="text-left text-default p-l-r-10 p-t-10">Expected Delivery By:' + value5 + '</div>';
		value6 = '<div class="text-left text-default p-l-r-10 p-t-10">' + value6 + '</div>';
				
		var OrderID1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + value3 + value4 + value5 + value6 + '</div>';
		return OrderID1+' ';
	}

	var OrderPersonName = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderPersonAddress;
		var value3 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderedPersonIP;

		value1 = '<div class="text-left p-t-10"><a href="#" title="">' + value1 + '</a></div>';
		value2 = '<div class="text-left p-t-10" style="line-height:18px;">' + value2 + '</div>';
		value3 = '<div class="text-left p-t-10"><a href="#" title="">' + value3 + '</a></div>';
				
		var OrderPersonName1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + value3 + '</div>';
		return OrderPersonName1+' ';
	}


	var ShippingAddress = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderShippingAddress;
		var value3 = $('#jqxgrid').jqxGrid('getrowdata', row).OrdershippingStatus;
		var value4 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderComment;
		var value5 = $('#jqxgrid').jqxGrid('getrowdata', row).PaymentType;
		value1 = '<div class="text-left p-t-10"><a href="#" title="">' + value1 + '</a></div>';
		value2 = '<div class="text-left p-t-10" style="line-height:18px;">' + value2 + '</div>';
		value3 = '<div class="text-left p-t-10"><b>' + value3 + '</b></div>';
		value4 = '<div class="text-left p-t-10"><b>' + value4 + '</b></div>';
		value5 = '<div class="text-left p-t-10">Payment via: <span class="text-danger">' + value5 + '</span></div>';

		var ShippingAddress1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + value3 + value4 + value5 +'</div>';
		return ShippingAddress1+' ';
	}



	var OrderStatus = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderType;
		value1 = '<div class="text-left text-warning" style="margin:10px 5px 0 5px;">' + value1 + '</div>';
		value2 = '<div class="text-left text-inverse" style="margin:10px 5px 0 5px;">' + value2 + '</div>';
				
		var OrderStatus1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + '</div>';
		return OrderStatus1;
	}
	
	var actionlink = function(row, columnfield, value, defaulthtml, columnproperties, rowdata) {
        var actionLink = '';

        actionLink = '<div class="text-left action-icons" style=" margin-top:5px;"><a href="#" class="btn btn-success" title="Capture">Capture</a><br><a href="#" class="btn btn-inverse" title="Print Packing Slip">Print Packing Slip</a><br><a href="#" class="btn btn-warning" title="Force Refund">Force Refund</a> <br><a href="#" class="btn btn-danger" title="Refund">Refund</a></div>'

        return actionLink;
    }


    var dataAdapter = new $.jqx.dataAdapter(source, {
        downloadComplete: function(data, status, xhr) {},
        loadComplete: function(data) {},
        loadError: function(xhr, status, error) {}
    });
    // initialize jqxGrid


    $("#jqxgrid3").jqxGrid(
        //$("#jqxgrid").jqxDataTable(
        {
            width: '100%',
            //height: '100%',
            source: dataAdapter,
            pageable: true,
            autoheight: true,
            sortable: true,
            altrows: true,
            enabletooltips: true,
            editable: true,
			showstatusbar: true,
			showaggregates: true,
            columnsheight: 50,
            autorowheight: true,
            showfilterrow: false,
            filterable: true,
            selectionmode: 'checkbox',
            columns: [{
                text: 'Order Date',
                datafield: 'OrderDateTime',
                width: '16%',
                editable: false,
				filterable: false,
				minwidth: '170',
                cellsrenderer: orderdatetime
            }, {
                text: 'Order No. / Product Details',
                datafield: 'OrderID',
                editable: false,
                width: '21%',
				filterable: false,
                minwidth: '160',
				cellsrenderer: OrderID

            }, {
                text: 'Customer Name / ZipCode',
                datafield: 'OrderPersonName',
                editable: false,
                width: '13.1%',
				filterable: false,
                minwidth: '200',
				cellsrenderer: OrderPersonName,
				renderer: function (defaultText, alignment, height) {
             		return '<div style="margin-top:10px; margin-left: 5px;">Customer Name /<br>ZipCode</div>';
				},
            },  {
                text: 'Shipping Address',
                datafield: 'ShippingAddress',
                editable: false,
                width: '13%',
				filterable: false,
                minwidth: '200',
				cellsrenderer: ShippingAddress
            },  {
                text: 'Order Total',
                datafield: 'OrderTotal',
                width: '6%',
                minwidth: '50',
				cellsalign: 'right',
				cellsformat: 'c2',
				filterable: false,
                editable: false,
				renderer: function (defaultText, alignment, height) {
             		return '<div style="margin-top:10px; margin-left: 5px;">Order <br>Total</div>';
				},
				aggregates: [{ '<b>Total</b>':
                            function (aggregatedValue, currentValue, column, record) {
                                var total = currentValue;
                                return aggregatedValue + total;
							}
						}]
            },  {
                text: 'Status',
                datafield: 'Orderstatus',
                width: '8%',
                minwidth: '50',
                editable: false,
                filterable: false,
				//filtertype: 'checkedlist',
                cellsrenderer: OrderStatus
            }, {
                text: 'Action',
                datafield: 'Action',
                width: '12%',
                minwidth: '160',
                editable: false,
                filterable: false,
                cellsrenderer: actionlink
            }],
        });
	//Tab4
    var url = "assets/xml/OrderList.xml";
    $.jqx.theme = "custom";
    // prepare the data
    var source = {
        datatype: "xml",
        datafields: [{
            name: 'OrderDateTime',
            type: 'String'
        }, {
            name: 'OrderChannelSite',
            type: 'string'
        }, {
            name: 'OrderID',
            type: 'string'
        }, {
            name: 'sellerstypeStatus',
            type: 'String'
        }, {
            name: 'ProductName',
            type: 'String'
        }, {
            name: 'OrderQTY',
            type: 'String'
        }, {
            name: 'OrderSKU',
            type: 'String'
        }, {
            name: 'OrderExpDel',
            type: 'String'
        }, {
            name: 'OrderByPhone',
            type: 'String'
        }, {
            name: 'OrderRefCode',
            type: 'String'
        }, {
            name: 'OrderPersonName',
            type: 'String'
        }, {
            name: 'OrderPersonAddress',
            type: 'String'
        }, {
            name: 'OrderShippingAddress',
            type: 'String'
        }, {
            name: 'OrderComment',
            type: 'String'
        }, {
            name: 'PaymentType',
            type: 'String'
        }, {
            name: 'OrdershippingStatus',
            type: 'String'
        }, {
            name: 'OrderedPersonIP',
            type: 'String'
        }, {
            name: 'OrderTotal',
            type: 'float'
        }, {
            name: 'Orderstatus',
            type: 'String'
        }, {
			name: 'OrderType',
            type: 'String'
        }, {
            name: 'Action',
            type: 'string'
        }],
        root: "TemplateList",
        record: "Template",
        id: 'TemplateID',
        url: url
    };

	var orderdatetime = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderChannelSite;
		var imgurl = 'img/' + value2 ;
		value1 = '<div class="text-left" style="padding:10px 0 10px 10px;">' + value1 + '</div>';
		value2 = '<div class="text-center"><img width="100" src="' + imgurl + '.png"></div>';
				
		var orderdatetime1 = '<div class="" style="	margin:0px 5px 0 5px;">'+value1 + value2 + '</div>';
		return orderdatetime1+' ';
	}
	var OrderID = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).ProductName;
		var value3 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderQTY;
		var value4 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderSKU;
		var value5 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderExpDel;
		var value6 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderByPhone;
		var value7 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderRefCode;
		var value8 = $('#jqxgrid').jqxGrid('getrowdata', row).sellerstypeStatus;
		if (value8 == 'No') {
			value8 = '<i class="fa fa-circle text-warning m-r-10"></i>';
		} else {
			value8 = '<i class="fa fa-circle text-success m-r-10"></i>';
		}
		
		if (value7 == '') {
			value7 = '';
		} else {
			value7 = '<div class="p-t-10 p-l-10" style="font-size: 10px;">(Amazon Ref. Order #:' + value7 + ')</div>';
		}
		
		value1 = '<div class="text-left p-l-r-10 p-t-10 text-default"><a href="order-detail.html" title="">' + value8 + value1 + '</a></div>' + value7 ;

		value2 = '<div class="text-left text-default p-l-r-10 p-t-10" style="font-weight:bold;">' + value2 + '</div>';
		value3 = '<div class="text-left text-default p-l-r-10 p-t-10">QTY: ' + value3 + '</div>';
		value4 = '<div class="text-left text-default p-l-r-10 p-t-10">SKU: ' + value4 + '</div>';
		value5 = '<div class="text-left text-default p-l-r-10 p-t-10">Expected Delivery By:' + value5 + '</div>';
		value6 = '<div class="text-left text-default p-l-r-10 p-t-10">' + value6 + '</div>';
				
		var OrderID1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + value3 + value4 + value5 + value6 + '</div>';
		return OrderID1+' ';
	}

	var OrderPersonName = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderPersonAddress;
		var value3 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderedPersonIP;

		value1 = '<div class="text-left p-t-10"><a href="#" title="">' + value1 + '</a></div>';
		value2 = '<div class="text-left p-t-10" style="line-height:18px;">' + value2 + '</div>';
		value3 = '<div class="text-left p-t-10"><a href="#" title="">' + value3 + '</a></div>';
				
		var OrderPersonName1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + value3 + '</div>';
		return OrderPersonName1+' ';
	}


	var ShippingAddress = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderShippingAddress;
		var value3 = $('#jqxgrid').jqxGrid('getrowdata', row).OrdershippingStatus;
		var value4 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderComment;
		var value5 = $('#jqxgrid').jqxGrid('getrowdata', row).PaymentType;
		value1 = '<div class="text-left p-t-10"><a href="#" title="">' + value1 + '</a></div>';
		value2 = '<div class="text-left p-t-10" style="line-height:18px;">' + value2 + '</div>';
		value3 = '<div class="text-left p-t-10"><b>' + value3 + '</b></div>';
		value4 = '<div class="text-left p-t-10"><b>' + value4 + '</b></div>';
		value5 = '<div class="text-left p-t-10">Payment via: <span class="text-danger">' + value5 + '</span></div>';

		var ShippingAddress1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + value3 + value4 + value5 +'</div>';
		return ShippingAddress1+' ';
	}



	var OrderStatus = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderType;
		value1 = '<div class="text-left text-warning" style="margin:10px 5px 0 5px;">' + value1 + '</div>';
		value2 = '<div class="text-left text-inverse" style="margin:10px 5px 0 5px;">' + value2 + '</div>';
				
		var OrderStatus1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + '</div>';
		return OrderStatus1;
	}
	
	var actionlink = function(row, columnfield, value, defaulthtml, columnproperties, rowdata) {
        var actionLink = '';

        actionLink = '<div class="text-left action-icons" style=" margin-top:5px;"><a href="#" class="btn btn-inverse" title="Print Packing Slip">Print Packing Slip</a><br><a href="#" class="btn btn-warning" title="Force Refund">Force Refund</a> <br><a href="#" class="btn btn-danger" title="Refund">Refund</a></div>'

        return actionLink;
    }


    var dataAdapter = new $.jqx.dataAdapter(source, {
        downloadComplete: function(data, status, xhr) {},
        loadComplete: function(data) {},
        loadError: function(xhr, status, error) {}
    });
    // initialize jqxGrid


    $("#jqxgrid4").jqxGrid(
        //$("#jqxgrid").jqxDataTable(
        {
            width: '100%',
            //height: '100%',
            source: dataAdapter,
            pageable: true,
            autoheight: true,
            sortable: true,
            altrows: true,
            enabletooltips: true,
            editable: true,
			showstatusbar: true,
			showaggregates: true,
            columnsheight: 50,
            autorowheight: true,
            showfilterrow: false,
            filterable: true,
            selectionmode: 'checkbox',
            columns: [{
                text: 'Order Date',
                datafield: 'OrderDateTime',
                width: '16%',
                editable: false,
				filterable: false,
				minwidth: '170',
                cellsrenderer: orderdatetime
            }, {
                text: 'Order No. / Product Details',
                datafield: 'OrderID',
                editable: false,
                width: '21%',
				filterable: false,
                minwidth: '160',
				cellsrenderer: OrderID

            }, {
                text: 'Customer Name / ZipCode',
                datafield: 'OrderPersonName',
                editable: false,
                width: '13.1%',
				filterable: false,
                minwidth: '200',
				cellsrenderer: OrderPersonName,
				renderer: function (defaultText, alignment, height) {
             		return '<div style="margin-top:10px; margin-left: 5px;">Customer Name /<br>ZipCode</div>';
				},
            },  {
                text: 'Shipping Address',
                datafield: 'ShippingAddress',
                editable: false,
                width: '13%',
				filterable: false,
                minwidth: '200',
				cellsrenderer: ShippingAddress
            },  {
                text: 'Order Total',
                datafield: 'OrderTotal',
                width: '6%',
                minwidth: '50',
				cellsalign: 'right',
				cellsformat: 'c2',
				filterable: false,
                editable: false,
				renderer: function (defaultText, alignment, height) {
             		return '<div style="margin-top:10px; margin-left: 5px;">Order <br>Total</div>';
				},
				aggregates: [{ '<b>Total</b>':
                            function (aggregatedValue, currentValue, column, record) {
                                var total = currentValue;
                                return aggregatedValue + total;
							}
						}]
            },  {
                text: 'Status',
                datafield: 'Orderstatus',
                width: '8%',
                minwidth: '50',
                editable: false,
                filterable: false,
				//filtertype: 'checkedlist',
                cellsrenderer: OrderStatus
            }, {
                text: 'Action',
                datafield: 'Action',
                width: '12%',
                minwidth: '160',
                editable: false,
                filterable: false,
                cellsrenderer: actionlink
            }],
        });
		
	//Tab5	
	
	var url = "assets/xml/OrderList.xml";
    $.jqx.theme = "custom";
    // prepare the data
    var source = {
        datatype: "xml",
        datafields: [{
            name: 'OrderDateTime',
            type: 'String'
        }, {
            name: 'OrderChannelSite',
            type: 'string'
        }, {
            name: 'OrderID',
            type: 'string'
        }, {
            name: 'sellerstypeStatus',
            type: 'String'
        }, {
            name: 'ProductName',
            type: 'String'
        }, {
            name: 'OrderQTY',
            type: 'String'
        }, {
            name: 'OrderSKU',
            type: 'String'
        }, {
            name: 'OrderExpDel',
            type: 'String'
        }, {
            name: 'OrderByPhone',
            type: 'String'
        }, {
            name: 'OrderRefCode',
            type: 'String'
        }, {
            name: 'OrderPersonName',
            type: 'String'
        }, {
            name: 'OrderPersonAddress',
            type: 'String'
        }, {
            name: 'OrderShippingAddress',
            type: 'String'
        }, {
            name: 'OrderComment',
            type: 'String'
        }, {
            name: 'PaymentType',
            type: 'String'
        }, {
            name: 'OrdershippingStatus',
            type: 'String'
        }, {
            name: 'OrderedPersonIP',
            type: 'String'
        }, {
            name: 'OrderTotal',
            type: 'float'
        }, {
            name: 'Orderstatus',
            type: 'String'
        }, {
			name: 'OrderType',
            type: 'String'
        }, {
            name: 'Action',
            type: 'string'
        }],
        root: "TemplateList",
        record: "Template",
        id: 'TemplateID',
        url: url
    };

	var orderdatetime = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderChannelSite;
		var imgurl = 'img/' + value2 ;
		value1 = '<div class="text-left" style="padding:10px 0 10px 10px;">' + value1 + '</div>';
		value2 = '<div class="text-center"><img width="100" src="' + imgurl + '.png"></div>';
				
		var orderdatetime1 = '<div class="" style="	margin:0px 5px 0 5px;">'+value1 + value2 + '</div>';
		return orderdatetime1+' ';
	}
	var OrderID = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).ProductName;
		var value3 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderQTY;
		var value4 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderSKU;
		var value5 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderExpDel;
		var value6 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderByPhone;
		var value7 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderRefCode;
		var value8 = $('#jqxgrid').jqxGrid('getrowdata', row).sellerstypeStatus;
		if (value8 == 'No') {
			value8 = '<i class="fa fa-circle text-warning m-r-10"></i>';
		} else {
			value8 = '<i class="fa fa-circle text-success m-r-10"></i>';
		}
		
		if (value7 == '') {
			value7 = '';
		} else {
			value7 = '<div class="p-t-10 p-l-10" style="font-size: 10px;">(Amazon Ref. Order #:' + value7 + ')</div>';
		}
		
		value1 = '<div class="text-left p-l-r-10 p-t-10 text-default"><a href="order-detail.html" title="">' + value8 + value1 + '</a></div>' + value7 ;

		value2 = '<div class="text-left text-default p-l-r-10 p-t-10" style="font-weight:bold;">' + value2 + '</div>';
		value3 = '<div class="text-left text-default p-l-r-10 p-t-10">QTY: ' + value3 + '</div>';
		value4 = '<div class="text-left text-default p-l-r-10 p-t-10">SKU: ' + value4 + '</div>';
		value5 = '<div class="text-left text-default p-l-r-10 p-t-10">Expected Delivery By:' + value5 + '</div>';
		value6 = '<div class="text-left text-default p-l-r-10 p-t-10">' + value6 + '</div>';
				
		var OrderID1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + value3 + value4 + value5 + value6 + '</div>';
		return OrderID1+' ';
	}

	var OrderPersonName = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderPersonAddress;
		var value3 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderedPersonIP;

		value1 = '<div class="text-left p-t-10"><a href="#" title="">' + value1 + '</a></div>';
		value2 = '<div class="text-left p-t-10" style="line-height:18px;">' + value2 + '</div>';
		value3 = '<div class="text-left p-t-10"><a href="#" title="">' + value3 + '</a></div>';
				
		var OrderPersonName1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + value3 + '</div>';
		return OrderPersonName1+' ';
	}


	var ShippingAddress = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderShippingAddress;
		var value3 = $('#jqxgrid').jqxGrid('getrowdata', row).OrdershippingStatus;
		var value4 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderComment;
		var value5 = $('#jqxgrid').jqxGrid('getrowdata', row).PaymentType;
		value1 = '<div class="text-left p-t-10"><a href="#" title="">' + value1 + '</a></div>';
		value2 = '<div class="text-left p-t-10" style="line-height:18px;">' + value2 + '</div>';
		value3 = '<div class="text-left p-t-10"><b>' + value3 + '</b></div>';
		value4 = '<div class="text-left p-t-10"><b>' + value4 + '</b></div>';
		value5 = '<div class="text-left p-t-10">Payment via: <span class="text-danger">' + value5 + '</span></div>';

		var ShippingAddress1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + value3 + value4 + value5 +'</div>';
		return ShippingAddress1+' ';
	}



	var OrderStatus = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderType;
		value1 = '<div class="text-left text-warning" style="margin:10px 5px 0 5px;">' + value1 + '</div>';
		value2 = '<div class="text-left text-inverse" style="margin:10px 5px 0 5px;">' + value2 + '</div>';
				
		var OrderStatus1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + '</div>';
		return OrderStatus1;
	}
	
	var actionlink = function(row, columnfield, value, defaulthtml, columnproperties, rowdata) {
        var actionLink = '';

        actionLink = '<div class="text-left action-icons" style=" margin-top:5px;"><a href="#" class="btn btn-success" title="Capture">Capture</a><br><a href="#" class="btn btn-inverse" title="Print Packing Slip">Print Packing Slip</a><br><a href="#" class="btn btn-warning" title="Force Refund">Force Refund</a> <br><a href="#" class="btn btn-danger" title="Refund">Refund</a></div>'

        return actionLink;
    }


    var dataAdapter = new $.jqx.dataAdapter(source, {
        downloadComplete: function(data, status, xhr) {},
        loadComplete: function(data) {},
        loadError: function(xhr, status, error) {}
    });
    // initialize jqxGrid


    $("#jqxgrid5").jqxGrid(
        //$("#jqxgrid").jqxDataTable(
        {
            width: '100%',
            //height: '100%',
            source: dataAdapter,
            pageable: true,
            autoheight: true,
            sortable: true,
            altrows: true,
            enabletooltips: true,
            editable: true,
			showstatusbar: true,
			showaggregates: true,
            columnsheight: 50,
            autorowheight: true,
            showfilterrow: false,
            filterable: true,
            selectionmode: 'checkbox',
            columns: [{
                text: 'Order Date',
                datafield: 'OrderDateTime',
                width: '16%',
                editable: false,
				filterable: false,
				minwidth: '170',
                cellsrenderer: orderdatetime
            }, {
                text: 'Order No. / Product Details',
                datafield: 'OrderID',
                editable: false,
                width: '21%',
				filterable: false,
                minwidth: '160',
				cellsrenderer: OrderID

            }, {
                text: 'Customer Name / ZipCode',
                datafield: 'OrderPersonName',
                editable: false,
                width: '13.1%',
				filterable: false,
                minwidth: '200',
				cellsrenderer: OrderPersonName,
				renderer: function (defaultText, alignment, height) {
             		return '<div style="margin-top:10px; margin-left: 5px;">Customer Name /<br>ZipCode</div>';
				},
            },  {
                text: 'Shipping Address',
                datafield: 'ShippingAddress',
                editable: false,
                width: '13%',
				filterable: false,
                minwidth: '200',
				cellsrenderer: ShippingAddress
            },  {
                text: 'Order Total',
                datafield: 'OrderTotal',
                width: '6%',
                minwidth: '50',
				cellsalign: 'right',
				cellsformat: 'c2',
				filterable: false,
                editable: false,
				renderer: function (defaultText, alignment, height) {
             		return '<div style="margin-top:10px; margin-left: 5px;">Order <br>Total</div>';
				},
				aggregates: [{ '<b>Total</b>':
                            function (aggregatedValue, currentValue, column, record) {
                                var total = currentValue;
                                return aggregatedValue + total;
							}
						}]
            },  {
                text: 'Status',
                datafield: 'Orderstatus',
                width: '8%',
                minwidth: '50',
                editable: false,
                filterable: false,
				//filtertype: 'checkedlist',
                cellsrenderer: OrderStatus
            }, {
                text: 'Action',
                datafield: 'Action',
                width: '12%',
                minwidth: '160',
                editable: false,
                filterable: false,
                cellsrenderer: actionlink
            }],
        });
		
	//Tab6
    var url = "assets/xml/OrderList.xml";
    $.jqx.theme = "custom";
    // prepare the data
    var source = {
        datatype: "xml",
        datafields: [{
            name: 'OrderDateTime',
            type: 'String'
        }, {
            name: 'OrderChannelSite',
            type: 'string'
        }, {
            name: 'OrderID',
            type: 'string'
        }, {
            name: 'sellerstypeStatus',
            type: 'String'
        }, {
            name: 'ProductName',
            type: 'String'
        }, {
            name: 'OrderQTY',
            type: 'String'
        }, {
            name: 'OrderSKU',
            type: 'String'
        }, {
            name: 'OrderExpDel',
            type: 'String'
        }, {
            name: 'OrderByPhone',
            type: 'String'
        }, {
            name: 'OrderRefCode',
            type: 'String'
        }, {
            name: 'OrderPersonName',
            type: 'String'
        }, {
            name: 'OrderPersonAddress',
            type: 'String'
        }, {
            name: 'OrderShippingAddress',
            type: 'String'
        }, {
            name: 'OrderComment',
            type: 'String'
        }, {
            name: 'PaymentType',
            type: 'String'
        }, {
            name: 'OrdershippingStatus',
            type: 'String'
        }, {
            name: 'OrderedPersonIP',
            type: 'String'
        }, {
            name: 'OrderTotal',
            type: 'float'
        }, {
            name: 'Orderstatus',
            type: 'String'
        }, {
			name: 'OrderType',
            type: 'String'
        }, {
            name: 'Action',
            type: 'string'
        }],
        root: "TemplateList",
        record: "Template",
        id: 'TemplateID',
        url: url
    };

	var orderdatetime = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderChannelSite;
		var imgurl = 'img/' + value2 ;
		value1 = '<div class="text-left" style="padding:10px 0 10px 10px;">' + value1 + '</div>';
		value2 = '<div class="text-center"><img width="100" src="' + imgurl + '.png"></div>';
				
		var orderdatetime1 = '<div class="" style="	margin:0px 5px 0 5px;">'+value1 + value2 + '</div>';
		return orderdatetime1+' ';
	}
	var OrderID = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).ProductName;
		var value3 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderQTY;
		var value4 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderSKU;
		var value5 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderExpDel;
		var value6 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderByPhone;
		var value7 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderRefCode;
		var value8 = $('#jqxgrid').jqxGrid('getrowdata', row).sellerstypeStatus;
		if (value8 == 'No') {
			value8 = '<i class="fa fa-circle text-warning m-r-10"></i>';
		} else {
			value8 = '<i class="fa fa-circle text-success m-r-10"></i>';
		}
		
		if (value7 == '') {
			value7 = '';
		} else {
			value7 = '<div class="p-t-10 p-l-10" style="font-size: 10px;">(Amazon Ref. Order #:' + value7 + ')</div>';
		}
		
		value1 = '<div class="text-left p-l-r-10 p-t-10 text-default"><a href="order-detail.html" title="">' + value8 + value1 + '</a></div>' + value7 ;

		value2 = '<div class="text-left text-default p-l-r-10 p-t-10" style="font-weight:bold;">' + value2 + '</div>';
		value3 = '<div class="text-left text-default p-l-r-10 p-t-10">QTY: ' + value3 + '</div>';
		value4 = '<div class="text-left text-default p-l-r-10 p-t-10">SKU: ' + value4 + '</div>';
		value5 = '<div class="text-left text-default p-l-r-10 p-t-10">Expected Delivery By:' + value5 + '</div>';
		value6 = '<div class="text-left text-default p-l-r-10 p-t-10">' + value6 + '</div>';
				
		var OrderID1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + value3 + value4 + value5 + value6 + '</div>';
		return OrderID1+' ';
	}

	var OrderPersonName = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderPersonAddress;
		var value3 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderedPersonIP;

		value1 = '<div class="text-left p-t-10"><a href="#" title="">' + value1 + '</a></div>';
		value2 = '<div class="text-left p-t-10" style="line-height:18px;">' + value2 + '</div>';
		value3 = '<div class="text-left p-t-10"><a href="#" title="">' + value3 + '</a></div>';
				
		var OrderPersonName1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + value3 + '</div>';
		return OrderPersonName1+' ';
	}


	var ShippingAddress = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderShippingAddress;
		var value3 = $('#jqxgrid').jqxGrid('getrowdata', row).OrdershippingStatus;
		var value4 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderComment;
		var value5 = $('#jqxgrid').jqxGrid('getrowdata', row).PaymentType;
		value1 = '<div class="text-left p-t-10"><a href="#" title="">' + value1 + '</a></div>';
		value2 = '<div class="text-left p-t-10" style="line-height:18px;">' + value2 + '</div>';
		value3 = '<div class="text-left p-t-10"><b>' + value3 + '</b></div>';
		value4 = '<div class="text-left p-t-10"><b>' + value4 + '</b></div>';
		value5 = '<div class="text-left p-t-10">Payment via: <span class="text-danger">' + value5 + '</span></div>';

		var ShippingAddress1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + value3 + value4 + value5 +'</div>';
		return ShippingAddress1+' ';
	}



	var OrderStatus = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderType;
		value1 = '<div class="text-left text-warning" style="margin:10px 5px 0 5px;">' + value1 + '</div>';
		value2 = '<div class="text-left text-inverse" style="margin:10px 5px 0 5px;">' + value2 + '</div>';
				
		var OrderStatus1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + '</div>';
		return OrderStatus1;
	}
	
	var actionlink = function(row, columnfield, value, defaulthtml, columnproperties, rowdata) {
        var actionLink = '';

        actionLink = '<div class="text-left action-icons" style=" margin-top:5px;"><a href="#" class="btn btn-inverse" title="Print Packing Slip">Print Packing Slip</a><br><a href="#" class="btn btn-warning" title="Force Refund">Force Refund</a> <br><a href="#" class="btn btn-danger" title="Refund">Refund</a></div>'

        return actionLink;
    }


    var dataAdapter = new $.jqx.dataAdapter(source, {
        downloadComplete: function(data, status, xhr) {},
        loadComplete: function(data) {},
        loadError: function(xhr, status, error) {}
    });
    // initialize jqxGrid


    $("#jqxgrid6").jqxGrid(
        //$("#jqxgrid").jqxDataTable(
        {
            width: '100%',
            //height: '100%',
            source: dataAdapter,
            pageable: true,
            autoheight: true,
            sortable: true,
            altrows: true,
            enabletooltips: true,
            editable: true,
			showstatusbar: true,
			showaggregates: true,
            columnsheight: 50,
            autorowheight: true,
            showfilterrow: false,
            filterable: true,
            selectionmode: 'checkbox',
            columns: [{
                text: 'Order Date',
                datafield: 'OrderDateTime',
                width: '16%',
                editable: false,
				filterable: false,
				minwidth: '170',
                cellsrenderer: orderdatetime
            }, {
                text: 'Order No. / Product Details',
                datafield: 'OrderID',
                editable: false,
                width: '21%',
				filterable: false,
                minwidth: '160',
				cellsrenderer: OrderID

            }, {
                text: 'Customer Name / ZipCode',
                datafield: 'OrderPersonName',
                editable: false,
                width: '13.1%',
				filterable: false,
                minwidth: '200',
				cellsrenderer: OrderPersonName,
				renderer: function (defaultText, alignment, height) {
             		return '<div style="margin-top:10px; margin-left: 5px;">Customer Name /<br>ZipCode</div>';
				},
            },  {
                text: 'Shipping Address',
                datafield: 'ShippingAddress',
                editable: false,
                width: '13%',
				filterable: false,
                minwidth: '200',
				cellsrenderer: ShippingAddress
            },  {
                text: 'Order Total',
                datafield: 'OrderTotal',
                width: '6%',
                minwidth: '50',
				cellsalign: 'right',
				cellsformat: 'c2',
				filterable: false,
                editable: false,
				renderer: function (defaultText, alignment, height) {
             		return '<div style="margin-top:10px; margin-left: 5px;">Order <br>Total</div>';
				},
				aggregates: [{ '<b>Total</b>':
                            function (aggregatedValue, currentValue, column, record) {
                                var total = currentValue;
                                return aggregatedValue + total;
							}
						}]
            },  {
                text: 'Status',
                datafield: 'Orderstatus',
                width: '8%',
                minwidth: '50',
                editable: false,
                filterable: false,
				//filtertype: 'checkedlist',
                cellsrenderer: OrderStatus
            }, {
                text: 'Action',
                datafield: 'Action',
                width: '12%',
                minwidth: '160',
                editable: false,
                filterable: false,
                cellsrenderer: actionlink
            }],
        });
	//Tab7
	var url = "assets/xml/OrderList.xml";
    $.jqx.theme = "custom";
    // prepare the data
    var source = {
        datatype: "xml",
        datafields: [{
            name: 'OrderDateTime',
            type: 'String'
        }, {
            name: 'OrderChannelSite',
            type: 'string'
        }, {
            name: 'OrderID',
            type: 'string'
        }, {
            name: 'sellerstypeStatus',
            type: 'String'
        }, {
            name: 'ProductName',
            type: 'String'
        }, {
            name: 'OrderQTY',
            type: 'String'
        }, {
            name: 'OrderSKU',
            type: 'String'
        }, {
            name: 'OrderExpDel',
            type: 'String'
        }, {
            name: 'OrderByPhone',
            type: 'String'
        }, {
            name: 'OrderRefCode',
            type: 'String'
        }, {
            name: 'OrderPersonName',
            type: 'String'
        }, {
            name: 'OrderPersonAddress',
            type: 'String'
        }, {
            name: 'OrderShippingAddress',
            type: 'String'
        }, {
            name: 'OrderComment',
            type: 'String'
        }, {
            name: 'PaymentType',
            type: 'String'
        }, {
            name: 'OrdershippingStatus',
            type: 'String'
        }, {
            name: 'OrderedPersonIP',
            type: 'String'
        }, {
            name: 'OrderTotal',
            type: 'float'
        }, {
            name: 'Orderstatus',
            type: 'String'
        }, {
			name: 'OrderType',
            type: 'String'
        }, {
            name: 'Action',
            type: 'string'
        }],
        root: "TemplateList",
        record: "Template",
        id: 'TemplateID',
        url: url
    };

	var orderdatetime = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderChannelSite;
		var imgurl = 'img/' + value2 ;
		value1 = '<div class="text-left" style="padding:10px 0 10px 10px;">' + value1 + '</div>';
		value2 = '<div class="text-center"><img width="100" src="' + imgurl + '.png"></div>';
				
		var orderdatetime1 = '<div class="" style="	margin:0px 5px 0 5px;">'+value1 + value2 + '</div>';
		return orderdatetime1+' ';
	}
	var OrderID = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).ProductName;
		var value3 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderQTY;
		var value4 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderSKU;
		var value5 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderExpDel;
		var value6 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderByPhone;
		var value7 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderRefCode;
		var value8 = $('#jqxgrid').jqxGrid('getrowdata', row).sellerstypeStatus;
		if (value8 == 'No') {
			value8 = '<i class="fa fa-circle text-warning m-r-10"></i>';
		} else {
			value8 = '<i class="fa fa-circle text-success m-r-10"></i>';
		}
		
		if (value7 == '') {
			value7 = '';
		} else {
			value7 = '<div class="p-t-10 p-l-10" style="font-size: 10px;">(Amazon Ref. Order #:' + value7 + ')</div>';
		}
		
		value1 = '<div class="text-left p-l-r-10 p-t-10 text-default"><a href="order-detail.html" title="">' + value8 + value1 + '</a></div>' + value7 ;

		value2 = '<div class="text-left text-default p-l-r-10 p-t-10" style="font-weight:bold;">' + value2 + '</div>';
		value3 = '<div class="text-left text-default p-l-r-10 p-t-10">QTY: ' + value3 + '</div>';
		value4 = '<div class="text-left text-default p-l-r-10 p-t-10">SKU: ' + value4 + '</div>';
		value5 = '<div class="text-left text-default p-l-r-10 p-t-10">Expected Delivery By:' + value5 + '</div>';
		value6 = '<div class="text-left text-default p-l-r-10 p-t-10">' + value6 + '</div>';
				
		var OrderID1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + value3 + value4 + value5 + value6 + '</div>';
		return OrderID1+' ';
	}

	var OrderPersonName = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderPersonAddress;
		var value3 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderedPersonIP;

		value1 = '<div class="text-left p-t-10"><a href="#" title="">' + value1 + '</a></div>';
		value2 = '<div class="text-left p-t-10" style="line-height:18px;">' + value2 + '</div>';
		value3 = '<div class="text-left p-t-10"><a href="#" title="">' + value3 + '</a></div>';
				
		var OrderPersonName1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + value3 + '</div>';
		return OrderPersonName1+' ';
	}


	var ShippingAddress = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderShippingAddress;
		var value3 = $('#jqxgrid').jqxGrid('getrowdata', row).OrdershippingStatus;
		var value4 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderComment;
		var value5 = $('#jqxgrid').jqxGrid('getrowdata', row).PaymentType;
		value1 = '<div class="text-left p-t-10"><a href="#" title="">' + value1 + '</a></div>';
		value2 = '<div class="text-left p-t-10" style="line-height:18px;">' + value2 + '</div>';
		value3 = '<div class="text-left p-t-10"><b>' + value3 + '</b></div>';
		value4 = '<div class="text-left p-t-10"><b>' + value4 + '</b></div>';
		value5 = '<div class="text-left p-t-10">Payment via: <span class="text-danger">' + value5 + '</span></div>';

		var ShippingAddress1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + value3 + value4 + value5 +'</div>';
		return ShippingAddress1+' ';
	}



	var OrderStatus = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderType;
		value1 = '<div class="text-left text-warning" style="margin:10px 5px 0 5px;">' + value1 + '</div>';
		value2 = '<div class="text-left text-inverse" style="margin:10px 5px 0 5px;">' + value2 + '</div>';
				
		var OrderStatus1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + '</div>';
		return OrderStatus1;
	}
	
	var actionlink = function(row, columnfield, value, defaulthtml, columnproperties, rowdata) {
        var actionLink = '';

        actionLink = '<div class="text-left action-icons" style=" margin-top:5px;"><a href="#" class="btn btn-success" title="Capture">Capture</a><br><a href="#" class="btn btn-inverse" title="Print Packing Slip">Print Packing Slip</a><br><a href="#" class="btn btn-warning" title="Force Refund">Force Refund</a> <br><a href="#" class="btn btn-danger" title="Refund">Refund</a></div>'

        return actionLink;
    }


    var dataAdapter = new $.jqx.dataAdapter(source, {
        downloadComplete: function(data, status, xhr) {},
        loadComplete: function(data) {},
        loadError: function(xhr, status, error) {}
    });
    // initialize jqxGrid


    $("#jqxgrid7").jqxGrid(
        //$("#jqxgrid").jqxDataTable(
        {
            width: '100%',
            //height: '100%',
            source: dataAdapter,
            pageable: true,
            autoheight: true,
            sortable: true,
            altrows: true,
            enabletooltips: true,
            editable: true,
			showstatusbar: true,
			showaggregates: true,
            columnsheight: 50,
            autorowheight: true,
            showfilterrow: false,
            filterable: true,
            selectionmode: 'checkbox',
            columns: [{
                text: 'Order Date',
                datafield: 'OrderDateTime',
                width: '16%',
                editable: false,
				filterable: false,
				minwidth: '170',
                cellsrenderer: orderdatetime
            }, {
                text: 'Order No. / Product Details',
                datafield: 'OrderID',
                editable: false,
                width: '21%',
				filterable: false,
                minwidth: '160',
				cellsrenderer: OrderID

            }, {
                text: 'Customer Name / ZipCode',
                datafield: 'OrderPersonName',
                editable: false,
                width: '13.1%',
				filterable: false,
                minwidth: '200',
				cellsrenderer: OrderPersonName,
				renderer: function (defaultText, alignment, height) {
             		return '<div style="margin-top:10px; margin-left: 5px;">Customer Name /<br>ZipCode</div>';
				},
            },  {
                text: 'Shipping Address',
                datafield: 'ShippingAddress',
                editable: false,
                width: '13%',
				filterable: false,
                minwidth: '200',
				cellsrenderer: ShippingAddress
            },  {
                text: 'Order Total',
                datafield: 'OrderTotal',
                width: '6%',
                minwidth: '50',
				cellsalign: 'right',
				cellsformat: 'c2',
				filterable: false,
                editable: false,
				renderer: function (defaultText, alignment, height) {
             		return '<div style="margin-top:10px; margin-left: 5px;">Order <br>Total</div>';
				},
				aggregates: [{ '<b>Total</b>':
                            function (aggregatedValue, currentValue, column, record) {
                                var total = currentValue;
                                return aggregatedValue + total;
							}
						}]
            },  {
                text: 'Status',
                datafield: 'Orderstatus',
                width: '8%',
                minwidth: '50',
                editable: false,
                filterable: false,
				//filtertype: 'checkedlist',
                cellsrenderer: OrderStatus
            }, {
                text: 'Action',
                datafield: 'Action',
                width: '12%',
                minwidth: '160',
                editable: false,
                filterable: false,
                cellsrenderer: actionlink
            }],
        });
	//Tab8
	var url = "assets/xml/OrderList.xml";
    $.jqx.theme = "custom";
    // prepare the data
    var source = {
        datatype: "xml",
        datafields: [{
            name: 'OrderDateTime',
            type: 'String'
        }, {
            name: 'OrderChannelSite',
            type: 'string'
        }, {
            name: 'OrderID',
            type: 'string'
        }, {
            name: 'sellerstypeStatus',
            type: 'String'
        }, {
            name: 'ProductName',
            type: 'String'
        }, {
            name: 'OrderQTY',
            type: 'String'
        }, {
            name: 'OrderSKU',
            type: 'String'
        }, {
            name: 'OrderExpDel',
            type: 'String'
        }, {
            name: 'OrderByPhone',
            type: 'String'
        }, {
            name: 'OrderRefCode',
            type: 'String'
        }, {
            name: 'OrderPersonName',
            type: 'String'
        }, {
            name: 'OrderPersonAddress',
            type: 'String'
        }, {
            name: 'OrderShippingAddress',
            type: 'String'
        }, {
            name: 'OrderComment',
            type: 'String'
        }, {
            name: 'PaymentType',
            type: 'String'
        }, {
            name: 'OrdershippingStatus',
            type: 'String'
        }, {
            name: 'OrderedPersonIP',
            type: 'String'
        }, {
            name: 'OrderTotal',
            type: 'float'
        }, {
            name: 'Orderstatus',
            type: 'String'
        }, {
			name: 'OrderType',
            type: 'String'
        }, {
            name: 'Action',
            type: 'string'
        }],
        root: "TemplateList",
        record: "Template",
        id: 'TemplateID',
        url: url
    };

	var orderdatetime = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderChannelSite;
		var imgurl = 'img/' + value2 ;
		value1 = '<div class="text-left" style="padding:10px 0 10px 10px;">' + value1 + '</div>';
		value2 = '<div class="text-center"><img width="100" src="' + imgurl + '.png"></div>';
				
		var orderdatetime1 = '<div class="" style="	margin:0px 5px 0 5px;">'+value1 + value2 + '</div>';
		return orderdatetime1+' ';
	}
	var OrderID = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).ProductName;
		var value3 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderQTY;
		var value4 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderSKU;
		var value5 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderExpDel;
		var value6 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderByPhone;
		var value7 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderRefCode;
		var value8 = $('#jqxgrid').jqxGrid('getrowdata', row).sellerstypeStatus;
		if (value8 == 'No') {
			value8 = '<i class="fa fa-circle text-warning m-r-10"></i>';
		} else {
			value8 = '<i class="fa fa-circle text-success m-r-10"></i>';
		}
		
		if (value7 == '') {
			value7 = '';
		} else {
			value7 = '<div class="p-t-10 p-l-10" style="font-size: 10px;">(Amazon Ref. Order #:' + value7 + ')</div>';
		}
		
		value1 = '<div class="text-left p-l-r-10 p-t-10 text-default"><a href="order-detail.html" title="">' + value8 + value1 + '</a></div>' + value7 ;

		value2 = '<div class="text-left text-default p-l-r-10 p-t-10" style="font-weight:bold;">' + value2 + '</div>';
		value3 = '<div class="text-left text-default p-l-r-10 p-t-10">QTY: ' + value3 + '</div>';
		value4 = '<div class="text-left text-default p-l-r-10 p-t-10">SKU: ' + value4 + '</div>';
		value5 = '<div class="text-left text-default p-l-r-10 p-t-10">Expected Delivery By:' + value5 + '</div>';
		value6 = '<div class="text-left text-default p-l-r-10 p-t-10">' + value6 + '</div>';
				
		var OrderID1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + value3 + value4 + value5 + value6 + '</div>';
		return OrderID1+' ';
	}

	var OrderPersonName = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderPersonAddress;
		var value3 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderedPersonIP;

		value1 = '<div class="text-left p-t-10"><a href="#" title="">' + value1 + '</a></div>';
		value2 = '<div class="text-left p-t-10" style="line-height:18px;">' + value2 + '</div>';
		value3 = '<div class="text-left p-t-10"><a href="#" title="">' + value3 + '</a></div>';
				
		var OrderPersonName1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + value3 + '</div>';
		return OrderPersonName1+' ';
	}


	var ShippingAddress = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderShippingAddress;
		var value3 = $('#jqxgrid').jqxGrid('getrowdata', row).OrdershippingStatus;
		var value4 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderComment;
		var value5 = $('#jqxgrid').jqxGrid('getrowdata', row).PaymentType;
		value1 = '<div class="text-left p-t-10"><a href="#" title="">' + value1 + '</a></div>';
		value2 = '<div class="text-left p-t-10" style="line-height:18px;">' + value2 + '</div>';
		value3 = '<div class="text-left p-t-10"><b>' + value3 + '</b></div>';
		value4 = '<div class="text-left p-t-10"><b>' + value4 + '</b></div>';
		value5 = '<div class="text-left p-t-10">Payment via: <span class="text-danger">' + value5 + '</span></div>';

		var ShippingAddress1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + value3 + value4 + value5 +'</div>';
		return ShippingAddress1+' ';
	}



	var OrderStatus = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderType;
		value1 = '<div class="text-left text-warning" style="margin:10px 5px 0 5px;">' + value1 + '</div>';
		value2 = '<div class="text-left text-inverse" style="margin:10px 5px 0 5px;">' + value2 + '</div>';
				
		var OrderStatus1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + '</div>';
		return OrderStatus1;
	}
	
	var actionlink = function(row, columnfield, value, defaulthtml, columnproperties, rowdata) {
        var actionLink = '';

        actionLink = '<div class="text-left action-icons" style=" margin-top:5px;"><a href="#" class="btn btn-inverse" title="Print Packing Slip">Print Packing Slip</a><br><a href="#" class="btn btn-warning" title="Force Refund">Force Refund</a> <br><a href="#" class="btn btn-danger" title="Refund">Refund</a></div>'

        return actionLink;
    }


    var dataAdapter = new $.jqx.dataAdapter(source, {
        downloadComplete: function(data, status, xhr) {},
        loadComplete: function(data) {},
        loadError: function(xhr, status, error) {}
    });
    // initialize jqxGrid


    $("#jqxgrid8").jqxGrid(
        //$("#jqxgrid").jqxDataTable(
        {
            width: '100%',
            //height: '100%',
            source: dataAdapter,
            pageable: true,
            autoheight: true,
            sortable: true,
            altrows: true,
            enabletooltips: true,
            editable: true,
			showstatusbar: true,
			showaggregates: true,
            columnsheight: 50,
            autorowheight: true,
            showfilterrow: false,
            filterable: true,
            selectionmode: 'checkbox',
            columns: [{
                text: 'Order Date',
                datafield: 'OrderDateTime',
                width: '16%',
                editable: false,
				filterable: false,
				minwidth: '170',
                cellsrenderer: orderdatetime
            }, {
                text: 'Order No. / Product Details',
                datafield: 'OrderID',
                editable: false,
                width: '21%',
				filterable: false,
                minwidth: '160',
				cellsrenderer: OrderID

            }, {
                text: 'Customer Name / ZipCode',
                datafield: 'OrderPersonName',
                editable: false,
                width: '13.1%',
				filterable: false,
                minwidth: '200',
				cellsrenderer: OrderPersonName,
				renderer: function (defaultText, alignment, height) {
             		return '<div style="margin-top:10px; margin-left: 5px;">Customer Name /<br>ZipCode</div>';
				},
            },  {
                text: 'Shipping Address',
                datafield: 'ShippingAddress',
                editable: false,
                width: '13%',
				filterable: false,
                minwidth: '200',
				cellsrenderer: ShippingAddress
            },  {
                text: 'Order Total',
                datafield: 'OrderTotal',
                width: '6%',
                minwidth: '50',
				cellsalign: 'right',
				cellsformat: 'c2',
				filterable: false,
                editable: false,
				renderer: function (defaultText, alignment, height) {
             		return '<div style="margin-top:10px; margin-left: 5px;">Order <br>Total</div>';
				},
				aggregates: [{ '<b>Total</b>':
                            function (aggregatedValue, currentValue, column, record) {
                                var total = currentValue;
                                return aggregatedValue + total;
							}
						}]
            },  {
                text: 'Status',
                datafield: 'Orderstatus',
                width: '8%',
                minwidth: '50',
                editable: false,
                filterable: false,
				//filtertype: 'checkedlist',
                cellsrenderer: OrderStatus
            }, {
                text: 'Action',
                datafield: 'Action',
                width: '12%',
                minwidth: '160',
                editable: false,
                filterable: false,
                cellsrenderer: actionlink
            }],
        });
	//Tab9
	var url = "assets/xml/OrderList.xml";
    $.jqx.theme = "custom";
    // prepare the data
    var source = {
        datatype: "xml",
        datafields: [{
            name: 'OrderDateTime',
            type: 'String'
        }, {
            name: 'OrderChannelSite',
            type: 'string'
        }, {
            name: 'OrderID',
            type: 'string'
        }, {
            name: 'sellerstypeStatus',
            type: 'String'
        }, {
            name: 'ProductName',
            type: 'String'
        }, {
            name: 'OrderQTY',
            type: 'String'
        }, {
            name: 'OrderSKU',
            type: 'String'
        }, {
            name: 'OrderExpDel',
            type: 'String'
        }, {
            name: 'OrderByPhone',
            type: 'String'
        }, {
            name: 'OrderRefCode',
            type: 'String'
        }, {
            name: 'OrderPersonName',
            type: 'String'
        }, {
            name: 'OrderPersonAddress',
            type: 'String'
        }, {
            name: 'OrderShippingAddress',
            type: 'String'
        }, {
            name: 'OrderComment',
            type: 'String'
        }, {
            name: 'PaymentType',
            type: 'String'
        }, {
            name: 'OrdershippingStatus',
            type: 'String'
        }, {
            name: 'OrderedPersonIP',
            type: 'String'
        }, {
            name: 'OrderTotal',
            type: 'float'
        }, {
            name: 'Orderstatus',
            type: 'String'
        }, {
			name: 'OrderType',
            type: 'String'
        }, {
            name: 'Action',
            type: 'string'
        }],
        root: "TemplateList",
        record: "Template",
        id: 'TemplateID',
        url: url
    };

	var orderdatetime = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderChannelSite;
		var imgurl = 'img/' + value2 ;
		value1 = '<div class="text-left" style="padding:10px 0 10px 10px;">' + value1 + '</div>';
		value2 = '<div class="text-center"><img width="100" src="' + imgurl + '.png"></div>';
				
		var orderdatetime1 = '<div class="" style="	margin:0px 5px 0 5px;">'+value1 + value2 + '</div>';
		return orderdatetime1+' ';
	}
	var OrderID = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).ProductName;
		var value3 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderQTY;
		var value4 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderSKU;
		var value5 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderExpDel;
		var value6 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderByPhone;
		var value7 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderRefCode;
		var value8 = $('#jqxgrid').jqxGrid('getrowdata', row).sellerstypeStatus;
		if (value8 == 'No') {
			value8 = '<i class="fa fa-circle text-warning m-r-10"></i>';
		} else {
			value8 = '<i class="fa fa-circle text-success m-r-10"></i>';
		}
		
		if (value7 == '') {
			value7 = '';
		} else {
			value7 = '<div class="p-t-10 p-l-10" style="font-size: 10px;">(Amazon Ref. Order #:' + value7 + ')</div>';
		}
		
		value1 = '<div class="text-left p-l-r-10 p-t-10 text-default"><a href="order-detail.html" title="">' + value8 + value1 + '</a></div>' + value7 ;

		value2 = '<div class="text-left text-default p-l-r-10 p-t-10" style="font-weight:bold;">' + value2 + '</div>';
		value3 = '<div class="text-left text-default p-l-r-10 p-t-10">QTY: ' + value3 + '</div>';
		value4 = '<div class="text-left text-default p-l-r-10 p-t-10">SKU: ' + value4 + '</div>';
		value5 = '<div class="text-left text-default p-l-r-10 p-t-10">Expected Delivery By:' + value5 + '</div>';
		value6 = '<div class="text-left text-default p-l-r-10 p-t-10">' + value6 + '</div>';
				
		var OrderID1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + value3 + value4 + value5 + value6 + '</div>';
		return OrderID1+' ';
	}

	var OrderPersonName = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderPersonAddress;
		var value3 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderedPersonIP;

		value1 = '<div class="text-left p-t-10"><a href="#" title="">' + value1 + '</a></div>';
		value2 = '<div class="text-left p-t-10" style="line-height:18px;">' + value2 + '</div>';
		value3 = '<div class="text-left p-t-10"><a href="#" title="">' + value3 + '</a></div>';
				
		var OrderPersonName1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + value3 + '</div>';
		return OrderPersonName1+' ';
	}


	var ShippingAddress = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderShippingAddress;
		var value3 = $('#jqxgrid').jqxGrid('getrowdata', row).OrdershippingStatus;
		var value4 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderComment;
		var value5 = $('#jqxgrid').jqxGrid('getrowdata', row).PaymentType;
		value1 = '<div class="text-left p-t-10"><a href="#" title="">' + value1 + '</a></div>';
		value2 = '<div class="text-left p-t-10" style="line-height:18px;">' + value2 + '</div>';
		value3 = '<div class="text-left p-t-10"><b>' + value3 + '</b></div>';
		value4 = '<div class="text-left p-t-10"><b>' + value4 + '</b></div>';
		value5 = '<div class="text-left p-t-10">Payment via: <span class="text-danger">' + value5 + '</span></div>';

		var ShippingAddress1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + value3 + value4 + value5 +'</div>';
		return ShippingAddress1+' ';
	}



	var OrderStatus = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderType;
		value1 = '<div class="text-left text-warning" style="margin:10px 5px 0 5px;">' + value1 + '</div>';
		value2 = '<div class="text-left text-inverse" style="margin:10px 5px 0 5px;">' + value2 + '</div>';
				
		var OrderStatus1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + '</div>';
		return OrderStatus1;
	}
	
	var actionlink = function(row, columnfield, value, defaulthtml, columnproperties, rowdata) {
        var actionLink = '';

        actionLink = '<div class="text-left action-icons" style=" margin-top:5px;"><a href="#" class="btn btn-success" title="Capture">Capture</a><br><a href="#" class="btn btn-inverse" title="Print Packing Slip">Print Packing Slip</a><br><a href="#" class="btn btn-warning" title="Force Refund">Force Refund</a> <br><a href="#" class="btn btn-danger" title="Refund">Refund</a></div>'

        return actionLink;
    }


    var dataAdapter = new $.jqx.dataAdapter(source, {
        downloadComplete: function(data, status, xhr) {},
        loadComplete: function(data) {},
        loadError: function(xhr, status, error) {}
    });
    // initialize jqxGrid


    $("#jqxgrid9").jqxGrid(
        //$("#jqxgrid").jqxDataTable(
        {
            width: '100%',
            //height: '100%',
            source: dataAdapter,
            pageable: true,
            autoheight: true,
            sortable: true,
            altrows: true,
            enabletooltips: true,
            editable: true,
			showstatusbar: true,
			showaggregates: true,
            columnsheight: 50,
            autorowheight: true,
            showfilterrow: false,
            filterable: true,
            selectionmode: 'checkbox',
            columns: [{
                text: 'Order Date',
                datafield: 'OrderDateTime',
                width: '16%',
                editable: false,
				filterable: false,
				minwidth: '170',
                cellsrenderer: orderdatetime
            }, {
                text: 'Order No. / Product Details',
                datafield: 'OrderID',
                editable: false,
                width: '21%',
				filterable: false,
                minwidth: '160',
				cellsrenderer: OrderID

            }, {
                text: 'Customer Name / ZipCode',
                datafield: 'OrderPersonName',
                editable: false,
                width: '13.1%',
				filterable: false,
                minwidth: '200',
				cellsrenderer: OrderPersonName,
				renderer: function (defaultText, alignment, height) {
             		return '<div style="margin-top:10px; margin-left: 5px;">Customer Name /<br>ZipCode</div>';
				},
            },  {
                text: 'Shipping Address',
                datafield: 'ShippingAddress',
                editable: false,
                width: '13%',
				filterable: false,
                minwidth: '200',
				cellsrenderer: ShippingAddress
            },  {
                text: 'Order Total',
                datafield: 'OrderTotal',
                width: '6%',
                minwidth: '50',
				cellsalign: 'right',
				cellsformat: 'c2',
				filterable: false,
                editable: false,
				renderer: function (defaultText, alignment, height) {
             		return '<div style="margin-top:10px; margin-left: 5px;">Order <br>Total</div>';
				},
				aggregates: [{ '<b>Total</b>':
                            function (aggregatedValue, currentValue, column, record) {
                                var total = currentValue;
                                return aggregatedValue + total;
							}
						}]
            },  {
                text: 'Status',
                datafield: 'Orderstatus',
                width: '8%',
                minwidth: '50',
                editable: false,
                filterable: false,
				//filtertype: 'checkedlist',
                cellsrenderer: OrderStatus
            }, {
                text: 'Action',
                datafield: 'Action',
                width: '12%',
                minwidth: '160',
                editable: false,
                filterable: false,
                cellsrenderer: actionlink
            }],
        });
	//Tab10
	var url = "assets/xml/OrderList.xml";
    $.jqx.theme = "custom";
    // prepare the data
    var source = {
        datatype: "xml",
        datafields: [{
            name: 'OrderDateTime',
            type: 'String'
        }, {
            name: 'OrderChannelSite',
            type: 'string'
        }, {
            name: 'OrderID',
            type: 'string'
        }, {
            name: 'sellerstypeStatus',
            type: 'String'
        }, {
            name: 'ProductName',
            type: 'String'
        }, {
            name: 'OrderQTY',
            type: 'String'
        }, {
            name: 'OrderSKU',
            type: 'String'
        }, {
            name: 'OrderExpDel',
            type: 'String'
        }, {
            name: 'OrderByPhone',
            type: 'String'
        }, {
            name: 'OrderRefCode',
            type: 'String'
        }, {
            name: 'OrderPersonName',
            type: 'String'
        }, {
            name: 'OrderPersonAddress',
            type: 'String'
        }, {
            name: 'OrderShippingAddress',
            type: 'String'
        }, {
            name: 'OrderComment',
            type: 'String'
        }, {
            name: 'PaymentType',
            type: 'String'
        }, {
            name: 'OrdershippingStatus',
            type: 'String'
        }, {
            name: 'OrderedPersonIP',
            type: 'String'
        }, {
            name: 'OrderTotal',
            type: 'float'
        }, {
            name: 'Orderstatus',
            type: 'String'
        }, {
			name: 'OrderType',
            type: 'String'
        }, {
            name: 'Action',
            type: 'string'
        }],
        root: "TemplateList",
        record: "Template",
        id: 'TemplateID',
        url: url
    };

	var orderdatetime = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderChannelSite;
		var imgurl = 'img/' + value2 ;
		value1 = '<div class="text-left" style="padding:10px 0 10px 10px;">' + value1 + '</div>';
		value2 = '<div class="text-center"><img width="100" src="' + imgurl + '.png"></div>';
				
		var orderdatetime1 = '<div class="" style="	margin:0px 5px 0 5px;">'+value1 + value2 + '</div>';
		return orderdatetime1+' ';
	}
	var OrderID = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).ProductName;
		var value3 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderQTY;
		var value4 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderSKU;
		var value5 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderExpDel;
		var value6 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderByPhone;
		var value7 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderRefCode;
		var value8 = $('#jqxgrid').jqxGrid('getrowdata', row).sellerstypeStatus;
		if (value8 == 'No') {
			value8 = '<i class="fa fa-circle text-warning m-r-10"></i>';
		} else {
			value8 = '<i class="fa fa-circle text-success m-r-10"></i>';
		}
		
		if (value7 == '') {
			value7 = '';
		} else {
			value7 = '<div class="p-t-10 p-l-10" style="font-size: 10px;">(Amazon Ref. Order #:' + value7 + ')</div>';
		}
		
		value1 = '<div class="text-left p-l-r-10 p-t-10 text-default"><a href="order-detail.html" title="">' + value8 + value1 + '</a></div>' + value7 ;

		value2 = '<div class="text-left text-default p-l-r-10 p-t-10" style="font-weight:bold;">' + value2 + '</div>';
		value3 = '<div class="text-left text-default p-l-r-10 p-t-10">QTY: ' + value3 + '</div>';
		value4 = '<div class="text-left text-default p-l-r-10 p-t-10">SKU: ' + value4 + '</div>';
		value5 = '<div class="text-left text-default p-l-r-10 p-t-10">Expected Delivery By:' + value5 + '</div>';
		value6 = '<div class="text-left text-default p-l-r-10 p-t-10">' + value6 + '</div>';
				
		var OrderID1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + value3 + value4 + value5 + value6 + '</div>';
		return OrderID1+' ';
	}

	var OrderPersonName = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderPersonAddress;
		var value3 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderedPersonIP;

		value1 = '<div class="text-left p-t-10"><a href="#" title="">' + value1 + '</a></div>';
		value2 = '<div class="text-left p-t-10" style="line-height:18px;">' + value2 + '</div>';
		value3 = '<div class="text-left p-t-10"><a href="#" title="">' + value3 + '</a></div>';
				
		var OrderPersonName1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + value3 + '</div>';
		return OrderPersonName1+' ';
	}


	var ShippingAddress = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderShippingAddress;
		var value3 = $('#jqxgrid').jqxGrid('getrowdata', row).OrdershippingStatus;
		var value4 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderComment;
		var value5 = $('#jqxgrid').jqxGrid('getrowdata', row).PaymentType;
		value1 = '<div class="text-left p-t-10"><a href="#" title="">' + value1 + '</a></div>';
		value2 = '<div class="text-left p-t-10" style="line-height:18px;">' + value2 + '</div>';
		value3 = '<div class="text-left p-t-10"><b>' + value3 + '</b></div>';
		value4 = '<div class="text-left p-t-10"><b>' + value4 + '</b></div>';
		value5 = '<div class="text-left p-t-10">Payment via: <span class="text-danger">' + value5 + '</span></div>';

		var ShippingAddress1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + value3 + value4 + value5 +'</div>';
		return ShippingAddress1+' ';
	}



	var OrderStatus = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderType;
		value1 = '<div class="text-left text-warning" style="margin:10px 5px 0 5px;">' + value1 + '</div>';
		value2 = '<div class="text-left text-inverse" style="margin:10px 5px 0 5px;">' + value2 + '</div>';
				
		var OrderStatus1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + '</div>';
		return OrderStatus1;
	}
	
	var actionlink = function(row, columnfield, value, defaulthtml, columnproperties, rowdata) {
        var actionLink = '';

        actionLink = '<div class="text-left action-icons" style=" margin-top:5px;"><a href="#" class="btn btn-inverse" title="Print Packing Slip">Print Packing Slip</a><br><a href="#" class="btn btn-warning" title="Force Refund">Force Refund</a> <br><a href="#" class="btn btn-danger" title="Refund">Refund</a></div>'


        return actionLink;
    }


    var dataAdapter = new $.jqx.dataAdapter(source, {
        downloadComplete: function(data, status, xhr) {},
        loadComplete: function(data) {},
        loadError: function(xhr, status, error) {}
    });
    // initialize jqxGrid


    $("#jqxgrid10").jqxGrid(
        //$("#jqxgrid").jqxDataTable(
        {
            width: '100%',
            //height: '100%',
            source: dataAdapter,
            pageable: true,
            autoheight: true,
            sortable: true,
            altrows: true,
            enabletooltips: true,
            editable: true,
			showstatusbar: true,
			showaggregates: true,
            columnsheight: 50,
            autorowheight: true,
            showfilterrow: false,
            filterable: true,
            selectionmode: 'checkbox',
            columns: [{
                text: 'Order Date',
                datafield: 'OrderDateTime',
                width: '16%',
                editable: false,
				filterable: false,
				minwidth: '170',
                cellsrenderer: orderdatetime
            }, {
                text: 'Order No. / Product Details',
                datafield: 'OrderID',
                editable: false,
                width: '21%',
				filterable: false,
                minwidth: '160',
				cellsrenderer: OrderID

            }, {
                text: 'Customer Name / ZipCode',
                datafield: 'OrderPersonName',
                editable: false,
                width: '13.1%',
				filterable: false,
                minwidth: '200',
				cellsrenderer: OrderPersonName,
				renderer: function (defaultText, alignment, height) {
             		return '<div style="margin-top:10px; margin-left: 5px;">Customer Name /<br>ZipCode</div>';
				},
            },  {
                text: 'Shipping Address',
                datafield: 'ShippingAddress',
                editable: false,
                width: '13%',
				filterable: false,
                minwidth: '200',
				cellsrenderer: ShippingAddress
            },  {
                text: 'Order Total',
                datafield: 'OrderTotal',
                width: '6%',
                minwidth: '50',
				cellsalign: 'right',
				cellsformat: 'c2',
				filterable: false,
                editable: false,
				renderer: function (defaultText, alignment, height) {
             		return '<div style="margin-top:10px; margin-left: 5px;">Order <br>Total</div>';
				},
				aggregates: [{ '<b>Total</b>':
                            function (aggregatedValue, currentValue, column, record) {
                                var total = currentValue;
                                return aggregatedValue + total;
							}
						}]
            },  {
                text: 'Status',
                datafield: 'Orderstatus',
                width: '8%',
                minwidth: '50',
                editable: false,
                filterable: false,
				//filtertype: 'checkedlist',
                cellsrenderer: OrderStatus
            }, {
                text: 'Action',
                datafield: 'Action',
                width: '12%',
                minwidth: '160',
                editable: false,
                filterable: false,
                cellsrenderer: actionlink
            }],
        });
	//Tab11
	var url = "assets/xml/OrderList.xml";
    $.jqx.theme = "custom";
    // prepare the data
    var source = {
        datatype: "xml",
        datafields: [{
            name: 'OrderDateTime',
            type: 'String'
        }, {
            name: 'OrderChannelSite',
            type: 'string'
        }, {
            name: 'OrderID',
            type: 'string'
        }, {

            name: 'sellerstypeStatus',
            type: 'String'
        }, {
            name: 'ProductName',
            type: 'String'
        }, {
            name: 'OrderQTY',
            type: 'String'
        }, {
            name: 'OrderSKU',
            type: 'String'
        }, {
            name: 'OrderExpDel',
            type: 'String'
        }, {
            name: 'OrderByPhone',
            type: 'String'
        }, {
            name: 'OrderRefCode',
            type: 'String'
        }, {
            name: 'OrderPersonName',
            type: 'String'
        }, {
            name: 'OrderPersonAddress',
            type: 'String'
        }, {
            name: 'OrderShippingAddress',
            type: 'String'
        }, {
            name: 'OrderComment',
            type: 'String'
        }, {
            name: 'PaymentType',
            type: 'String'
        }, {
            name: 'OrdershippingStatus',
            type: 'String'
        }, {
            name: 'OrderedPersonIP',
            type: 'String'
        }, {
            name: 'OrderTotal',
            type: 'float'
        }, {
            name: 'Orderstatus',
            type: 'String'
        }, {
			name: 'OrderType',
            type: 'String'
        }, {
            name: 'Action',
            type: 'string'
        }],
        root: "TemplateList",
        record: "Template",
        id: 'TemplateID',
        url: url
    };

	var orderdatetime = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderChannelSite;
		var imgurl = 'img/' + value2 ;
		value1 = '<div class="text-left" style="padding:10px 0 10px 10px;">' + value1 + '</div>';
		value2 = '<div class="text-center"><img width="100" src="' + imgurl + '.png"></div>';
				
		var orderdatetime1 = '<div class="" style="	margin:0px 5px 0 5px;">'+value1 + value2 + '</div>';
		return orderdatetime1+' ';
	}
	var OrderID = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).ProductName;
		var value3 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderQTY;
		var value4 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderSKU;
		var value5 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderExpDel;
		var value6 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderByPhone;
		var value7 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderRefCode;
		var value8 = $('#jqxgrid').jqxGrid('getrowdata', row).sellerstypeStatus;
		if (value8 == 'No') {
			value8 = '<i class="fa fa-circle text-warning m-r-10"></i>';
		} else {
			value8 = '<i class="fa fa-circle text-success m-r-10"></i>';
		}
		
		if (value7 == '') {
			value7 = '';
		} else {
			value7 = '<div class="p-t-10 p-l-10" style="font-size: 10px;">(Amazon Ref. Order #:' + value7 + ')</div>';
		}
		
		value1 = '<div class="text-left p-l-r-10 p-t-10 text-default"><a href="order-detail.html" title="">' + value8 + value1 + '</a></div>' + value7 ;

		value2 = '<div class="text-left text-default p-l-r-10 p-t-10" style="font-weight:bold;">' + value2 + '</div>';
		value3 = '<div class="text-left text-default p-l-r-10 p-t-10">QTY: ' + value3 + '</div>';
		value4 = '<div class="text-left text-default p-l-r-10 p-t-10">SKU: ' + value4 + '</div>';
		value5 = '<div class="text-left text-default p-l-r-10 p-t-10">Expected Delivery By:' + value5 + '</div>';
		value6 = '<div class="text-left text-default p-l-r-10 p-t-10">' + value6 + '</div>';
				
		var OrderID1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + value3 + value4 + value5 + value6 + '</div>';
		return OrderID1+' ';
	}

	var OrderPersonName = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderPersonAddress;
		var value3 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderedPersonIP;

		value1 = '<div class="text-left p-t-10"><a href="#" title="">' + value1 + '</a></div>';
		value2 = '<div class="text-left p-t-10" style="line-height:18px;">' + value2 + '</div>';
		value3 = '<div class="text-left p-t-10"><a href="#" title="">' + value3 + '</a></div>';
				
		var OrderPersonName1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + value3 + '</div>';
		return OrderPersonName1+' ';
	}


	var ShippingAddress = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderShippingAddress;
		var value3 = $('#jqxgrid').jqxGrid('getrowdata', row).OrdershippingStatus;
		var value4 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderComment;
		var value5 = $('#jqxgrid').jqxGrid('getrowdata', row).PaymentType;
		value1 = '<div class="text-left p-t-10"><a href="#" title="">' + value1 + '</a></div>';
		value2 = '<div class="text-left p-t-10" style="line-height:18px;">' + value2 + '</div>';
		value3 = '<div class="text-left p-t-10"><b>' + value3 + '</b></div>';
		value4 = '<div class="text-left p-t-10"><b>' + value4 + '</b></div>';
		value5 = '<div class="text-left p-t-10">Payment via: <span class="text-danger">' + value5 + '</span></div>';

		var ShippingAddress1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + value3 + value4 + value5 +'</div>';
		return ShippingAddress1+' ';
	}



	var OrderStatus = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderType;
		value1 = '<div class="text-left text-warning" style="margin:10px 5px 0 5px;">' + value1 + '</div>';
		value2 = '<div class="text-left text-inverse" style="margin:10px 5px 0 5px;">' + value2 + '</div>';
				
		var OrderStatus1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + '</div>';
		return OrderStatus1;
	}
	
	var actionlink = function(row, columnfield, value, defaulthtml, columnproperties, rowdata) {
        var actionLink = '';

        actionLink = '<div class="text-left action-icons" style=" margin-top:5px;"><a href="#" class="btn btn-warning" title="Force Refund">Force Refund</a> <br><a href="#" class="btn btn-danger" title="Refund">Refund</a></div>'

        return actionLink;
    }


    var dataAdapter = new $.jqx.dataAdapter(source, {
        downloadComplete: function(data, status, xhr) {},
        loadComplete: function(data) {},
        loadError: function(xhr, status, error) {}
    });
    // initialize jqxGrid


    $("#jqxgrid11").jqxGrid(
        //$("#jqxgrid").jqxDataTable(
        {
            width: '100%',
            //height: '100%',
            source: dataAdapter,
            pageable: true,
            autoheight: true,
            sortable: true,
            altrows: true,
            enabletooltips: true,
            editable: true,
			showstatusbar: true,
			showaggregates: true,
            columnsheight: 50,
            autorowheight: true,
            showfilterrow: false,
            filterable: true,
            selectionmode: 'checkbox',
            columns: [{
                text: 'Order Date',
                datafield: 'OrderDateTime',
                width: '16%',
                editable: false,
				filterable: false,
				minwidth: '170',
                cellsrenderer: orderdatetime
            }, {
                text: 'Order No. / Product Details',
                datafield: 'OrderID',
                editable: false,
                width: '21%',
				filterable: false,
                minwidth: '160',
				cellsrenderer: OrderID

            }, {
                text: 'Customer Name / ZipCode',
                datafield: 'OrderPersonName',
                editable: false,
                width: '13.1%',
				filterable: false,
                minwidth: '200',
				cellsrenderer: OrderPersonName,
				renderer: function (defaultText, alignment, height) {
             		return '<div style="margin-top:10px; margin-left: 5px;">Customer Name /<br>ZipCode</div>';
				},
            },  {
                text: 'Shipping Address',
                datafield: 'ShippingAddress',
                editable: false,
                width: '13%',
				filterable: false,
                minwidth: '200',
				cellsrenderer: ShippingAddress
            },  {
                text: 'Order Total',
                datafield: 'OrderTotal',
                width: '6%',
                minwidth: '50',
				cellsalign: 'right',
				cellsformat: 'c2',
				filterable: false,
                editable: false,
				renderer: function (defaultText, alignment, height) {
             		return '<div style="margin-top:10px; margin-left: 5px;">Order <br>Total</div>';
				},
				aggregates: [{ '<b>Total</b>':
                            function (aggregatedValue, currentValue, column, record) {
                                var total = currentValue;
                                return aggregatedValue + total;
							}
						}]
            },  {
                text: 'Status',
                datafield: 'Orderstatus',
                width: '8%',
                minwidth: '50',
                editable: false,
                filterable: false,
				//filtertype: 'checkedlist',
                cellsrenderer: OrderStatus
            }, {
                text: 'Action',
                datafield: 'Action',
                width: '12%',
                minwidth: '160',
                editable: false,
                filterable: false,
                cellsrenderer: actionlink
            }],
        });
	//Tab12
	var url = "assets/xml/OrderList.xml";
    $.jqx.theme = "custom";
    // prepare the data
    var source = {
        datatype: "xml",
        datafields: [{
            name: 'OrderDateTime',
            type: 'String'
        }, {
            name: 'OrderChannelSite',
            type: 'string'
        }, {
            name: 'OrderID',
            type: 'string'
        }, {
            name: 'sellerstypeStatus',
            type: 'String'
        }, {
            name: 'ProductName',
            type: 'String'
        }, {
            name: 'OrderQTY',
            type: 'String'
        }, {
            name: 'OrderSKU',
            type: 'String'
        }, {
            name: 'OrderExpDel',
            type: 'String'
        }, {
            name: 'OrderByPhone',
            type: 'String'
        }, {
            name: 'OrderRefCode',
            type: 'String'
        }, {
            name: 'OrderPersonName',
            type: 'String'
        }, {
            name: 'OrderPersonAddress',
            type: 'String'
        }, {
            name: 'OrderShippingAddress',
            type: 'String'
        }, {
            name: 'OrderComment',
            type: 'String'
        }, {
            name: 'PaymentType',
            type: 'String'
        }, {
            name: 'OrdershippingStatus',
            type: 'String'
        }, {
            name: 'OrderedPersonIP',
            type: 'String'
        }, {
            name: 'OrderTotal',
            type: 'float'
        }, {
            name: 'Orderstatus',
            type: 'String'
        }, {
			name: 'OrderType',
            type: 'String'
        }, {
            name: 'Action',
            type: 'string'
        }],
        root: "TemplateList",
        record: "Template",
        id: 'TemplateID',
        url: url
    };

	var orderdatetime = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderChannelSite;
		var imgurl = 'img/' + value2 ;
		value1 = '<div class="text-left" style="padding:10px 0 10px 10px;">' + value1 + '</div>';
		value2 = '<div class="text-center"><img width="100" src="' + imgurl + '.png"></div>';
				
		var orderdatetime1 = '<div class="" style="	margin:0px 5px 0 5px;">'+value1 + value2 + '</div>';
		return orderdatetime1+' ';
	}
	var OrderID = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).ProductName;
		var value3 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderQTY;
		var value4 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderSKU;
		var value5 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderExpDel;
		var value6 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderByPhone;
		var value7 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderRefCode;
		var value8 = $('#jqxgrid').jqxGrid('getrowdata', row).sellerstypeStatus;
		if (value8 == 'No') {
			value8 = '<i class="fa fa-circle text-warning m-r-10"></i>';
		} else {
			value8 = '<i class="fa fa-circle text-success m-r-10"></i>';
		}
		
		if (value7 == '') {
			value7 = '';
		} else {
			value7 = '<div class="p-t-10 p-l-10" style="font-size: 10px;">(Amazon Ref. Order #:' + value7 + ')</div>';
		}
		
		value1 = '<div class="text-left p-l-r-10 p-t-10 text-default"><a href="order-detail.html" title="">' + value8 + value1 + '</a></div>' + value7 ;

		value2 = '<div class="text-left text-default p-l-r-10 p-t-10" style="font-weight:bold;">' + value2 + '</div>';
		value3 = '<div class="text-left text-default p-l-r-10 p-t-10">QTY: ' + value3 + '</div>';
		value4 = '<div class="text-left text-default p-l-r-10 p-t-10">SKU: ' + value4 + '</div>';
		value5 = '<div class="text-left text-default p-l-r-10 p-t-10">Expected Delivery By:' + value5 + '</div>';
		value6 = '<div class="text-left text-default p-l-r-10 p-t-10">' + value6 + '</div>';
				
		var OrderID1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + value3 + value4 + value5 + value6 + '</div>';
		return OrderID1+' ';
	}

	var OrderPersonName = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderPersonAddress;
		var value3 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderedPersonIP;

		value1 = '<div class="text-left p-t-10"><a href="#" title="">' + value1 + '</a></div>';
		value2 = '<div class="text-left p-t-10" style="line-height:18px;">' + value2 + '</div>';
		value3 = '<div class="text-left p-t-10"><a href="#" title="">' + value3 + '</a></div>';
				
		var OrderPersonName1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + value3 + '</div>';
		return OrderPersonName1+' ';
	}


	var ShippingAddress = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderShippingAddress;
		var value3 = $('#jqxgrid').jqxGrid('getrowdata', row).OrdershippingStatus;
		var value4 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderComment;
		var value5 = $('#jqxgrid').jqxGrid('getrowdata', row).PaymentType;
		value1 = '<div class="text-left p-t-10"><a href="#" title="">' + value1 + '</a></div>';
		value2 = '<div class="text-left p-t-10" style="line-height:18px;">' + value2 + '</div>';
		value3 = '<div class="text-left p-t-10"><b>' + value3 + '</b></div>';
		value4 = '<div class="text-left p-t-10"><b>' + value4 + '</b></div>';
		value5 = '<div class="text-left p-t-10">Payment via: <span class="text-danger">' + value5 + '</span></div>';

		var ShippingAddress1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + value3 + value4 + value5 +'</div>';
		return ShippingAddress1+' ';
	}



	var OrderStatus = function (row, columnfield, value) {
		var value1 = value;
		var value2 = $('#jqxgrid').jqxGrid('getrowdata', row).OrderType;
		value1 = '<div class="text-left text-warning" style="margin:10px 5px 0 5px;">' + value1 + '</div>';
		value2 = '<div class="text-left text-inverse" style="margin:10px 5px 0 5px;">' + value2 + '</div>';
				
		var OrderStatus1 = '<div class="" style="margin:0px 5px 0 5px;">'+value1 + value2 + '</div>';
		return OrderStatus1;
	}
	
	var actionlink = function(row, columnfield, value, defaulthtml, columnproperties, rowdata) {
        var actionLink = '';

        actionLink = '<div class="text-left action-icons" style=" margin-top:5px;"><a href="#" class="btn btn-danger" title="Refund">Refund</a></div>'

        return actionLink;
    }


    var dataAdapter = new $.jqx.dataAdapter(source, {
        downloadComplete: function(data, status, xhr) {},

        loadComplete: function(data) {},
        loadError: function(xhr, status, error) {}
    });
    // initialize jqxGrid


    $("#jqxgrid12").jqxGrid(
        //$("#jqxgrid").jqxDataTable(
        {
            width: '100%',
            //height: '100%',
            source: dataAdapter,
            pageable: true,
            autoheight: true,
            sortable: true,
            altrows: true,
            enabletooltips: true,
            editable: true,
			showstatusbar: true,
			showaggregates: true,
            columnsheight: 50,
            autorowheight: true,
            showfilterrow: false,
            filterable: true,
            selectionmode: 'checkbox',
            columns: [{
                text: 'Order Date',
                datafield: 'OrderDateTime',
                width: '16%',
                editable: false,
				filterable: false,
				minwidth: '170',
                cellsrenderer: orderdatetime
            }, {
                text: 'Order No. / Product Details',
                datafield: 'OrderID',
                editable: false,
                width: '21%',
				filterable: false,
                minwidth: '160',
				cellsrenderer: OrderID

            }, {
                text: 'Customer Name / ZipCode',
                datafield: 'OrderPersonName',
                editable: false,
                width: '13.1%',
				filterable: false,
                minwidth: '200',
				cellsrenderer: OrderPersonName,
				renderer: function (defaultText, alignment, height) {
             		return '<div style="margin-top:10px; margin-left: 5px;">Customer Name /<br>ZipCode</div>';
				},
            },  {
                text: 'Shipping Address',
                datafield: 'ShippingAddress',
                editable: false,
                width: '13%',
				filterable: false,
                minwidth: '200',
				cellsrenderer: ShippingAddress
            },  {
                text: 'Order Total',
                datafield: 'OrderTotal',
                width: '6%',
                minwidth: '50',
				cellsalign: 'right',
				cellsformat: 'c2',
				filterable: false,
                editable: false,
				renderer: function (defaultText, alignment, height) {
             		return '<div style="margin-top:10px; margin-left: 5px;">Order <br>Total</div>';
				},
				aggregates: [{ '<b>Total</b>':
                            function (aggregatedValue, currentValue, column, record) {
                                var total = currentValue;
                                return aggregatedValue + total;
							}
						}]
            },  {
                text: 'Status',
                datafield: 'Orderstatus',
                width: '8%',
                minwidth: '50',
                editable: false,
                filterable: false,
				//filtertype: 'checkedlist',
                cellsrenderer: OrderStatus
            }, {
                text: 'Action',
                datafield: 'Action',
                width: '12%',
                minwidth: '160',
                editable: false,
                filterable: false,
                cellsrenderer: actionlink
            }],
        });

	// Create jqxTabs.
    $('#jqxTabs').jqxTabs({
        width: '100%',
        position: 'top'
    });

});