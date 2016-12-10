/*
 *  Document   : app.js
 *  Author     : pixelcave
 *  Description: Setting up and vital functionality for our App
 *
 */
// Create our angular module
var App = angular.module('app', [
    'ngStorage',
    'ui.router',
    'ui.bootstrap',
    'oc.lazyLoad'
]);
// Router configuration
App.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/dashboard');
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'assets/views/dashboard.html',
            })
            .state('OrderList', {
                url: '/orders/OrderList',
                templateUrl: 'assets/views/orderlist.html',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
								'assets/plugins/jqwidgets/jqxcore.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxdata.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxswitchbutton.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxtabs.js',
								'assets/plugins/jqwidgets/jqxtree.js',
								'assets/plugins/jqwidgets/jqxmenu.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxlistbox.js',
								'assets/plugins/jqwidgets/jqxdropdownlist.js',
								'assets/plugins/jqwidgets/jqxgrid.js',
								'assets/plugins/jqwidgets/jqxgrid.sort.js',
								'assets/plugins/jqwidgets/jqxgrid.pager.js',
								'assets/plugins/jqwidgets/jqxgrid.selection.js',
								'assets/plugins/jqwidgets/jqxinput.js',
								'assets/plugins/jqwidgets/jqxgrid.filter.js',
								'assets/plugins/jqwidgets/jqxcalendar.js',
								'assets/plugins/jqwidgets/jqxradiobutton.js',
								'assets/plugins/jqwidgets/jqxnumberinput.js',
								'assets/plugins/jqwidgets/jqxdatetimeinput.js',
								'assets/plugins/jqwidgets/jqxtooltip.js',
								'assets/plugins/jqwidgets/globalization/globalize.js',
								'assets/plugins/jqwidgets/jqxgrid.edit.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxcolorpicker.js',
								'assets/plugins/jqwidgets/jqxwindow.js',
								'assets/plugins/jqwidgets/jqxeditor.js',
								'assets/plugins/jqwidgets/jqxdraw.js',
								'assets/plugins/jqwidgets/jqxchart.core.js',
								'assets/plugins/jqwidgets/jqxgrid.aggregates.js',
								'assets/js/custom.js'
                            ]
                        });
                    }]
                }
            })
			.state('PhoneOrder', {
                url: '/orders/PhoneOrder',
                templateUrl: 'assets/views/phoneorder.html'
            })
			.state('FailedTransaction', {
                url: '/orders/FailedTransaction',
                templateUrl: 'assets/views/failedtransaction.html',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
								'assets/plugins/jqwidgets/jqxcore.js',
								'assets/plugins/jqwidgets/jqxdata.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxmenu.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxlistbox.js',
								'assets/plugins/jqwidgets/jqxdropdownlist.js',
								'assets/plugins/jqwidgets/jqxgrid.js',
								'assets/plugins/jqwidgets/jqxgrid.sort.js',
								'assets/plugins/jqwidgets/jqxgrid.pager.js',
								'assets/plugins/jqwidgets/jqxgrid.selection.js',
								'assets/plugins/jqwidgets/jqxinput.js',
								'assets/plugins/jqwidgets/jqxgrid.filter.js',
								'assets/plugins/jqwidgets/jqxgrid.edit.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/js/custom.js'
                            ]
                        });
                    }]
                }
            })
			.state('ExportOrder', {
                url: '/orders/ExportOrder',
                templateUrl: 'assets/views/exportorder.html'
            })
			.state('FraudIPlist', {
                url: '/orders/FraudIPlist',
                templateUrl: 'assets/views/fraudiplist.html',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
								'assets/plugins/jqwidgets/jqxcore.js',
								'assets/plugins/jqwidgets/jqxdata.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxmenu.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxlistbox.js',
								'assets/plugins/jqwidgets/jqxdropdownlist.js',
								'assets/plugins/jqwidgets/jqxgrid.js',
								'assets/plugins/jqwidgets/jqxgrid.sort.js',
								'assets/plugins/jqwidgets/jqxgrid.pager.js',
								'assets/plugins/jqwidgets/jqxgrid.selection.js',
								'assets/plugins/jqwidgets/jqxinput.js',
								'assets/plugins/jqwidgets/jqxgrid.filter.js',
								'assets/plugins/jqwidgets/jqxgrid.edit.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/js/custom.js'
                            ]
                        });
                    }]
                }
            })

			.state('ViewOldOrders', {
                url: '/orders/ViewOldOrders',
                templateUrl: 'assets/views/viewoldorders.html',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
								'assets/plugins/jqwidgets/jqxcore.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxdata.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxswitchbutton.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxlistbox.js',
								'assets/plugins/jqwidgets/jqxdropdownlist.js',
								'assets/plugins/jqwidgets/jqxgrid.js',
								'assets/plugins/jqwidgets/jqxgrid.sort.js',
								'assets/plugins/jqwidgets/jqxgrid.pager.js',
								'assets/plugins/jqwidgets/jqxgrid.selection.js',
								'assets/plugins/jqwidgets/jqxinput.js',
								'assets/plugins/jqwidgets/jqxgrid.filter.js',
								'assets/plugins/jqwidgets/jqxradiobutton.js',
								'assets/plugins/jqwidgets/jqxnumberinput.js',
								'assets/plugins/jqwidgets/jqxdatetimeinput.js',
								'assets/plugins/jqwidgets/jqxtooltip.js',
								'assets/plugins/jqwidgets/globalization/globalize.js',
								'assets/plugins/jqwidgets/jqxgrid.edit.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxcolorpicker.js',
								'assets/plugins/jqwidgets/jqxwindow.js',
								'assets/plugins/jqwidgets/jqxeditor.js',
								'assets/plugins/jqwidgets/jqxdraw.js',
								'assets/plugins/jqwidgets/jqxgrid.aggregates.js',
								'assets/js/custom.js'
                            ]
                        });
                    }]
                }
            })
			
			
			.state('ProductList', {
                url: '/product/productlist',
                templateUrl: 'assets/views/productlist.html',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
								'assets/plugins/jqwidgets/jqxcore.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxdata.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxswitchbutton.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxtabs.js',
								'assets/plugins/jqwidgets/jqxtree.js',
								'assets/plugins/jqwidgets/jqxmenu.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxlistbox.js',
								'assets/plugins/jqwidgets/jqxdropdownlist.js',
								'assets/plugins/jqwidgets/jqxgrid.js',
								'assets/plugins/jqwidgets/jqxgrid.sort.js',
								'assets/plugins/jqwidgets/jqxgrid.pager.js',
								'assets/plugins/jqwidgets/jqxgrid.selection.js',
								'assets/plugins/jqwidgets/jqxinput.js',
								'assets/plugins/jqwidgets/jqxgrid.filter.js',
								'assets/plugins/jqwidgets/jqxcalendar.js',
								'assets/plugins/jqwidgets/jqxradiobutton.js',
								'assets/plugins/jqwidgets/jqxnumberinput.js',
								'assets/plugins/jqwidgets/jqxdatetimeinput.js',
								'assets/plugins/jqwidgets/jqxtooltip.js',
								'assets/plugins/jqwidgets/globalization/globalize.js',
								'assets/plugins/jqwidgets/jqxgrid.edit.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxcolorpicker.js',
								'assets/plugins/jqwidgets/jqxwindow.js',
								'assets/plugins/jqwidgets/jqxeditor.js',
								'assets/plugins/jqwidgets/jqxdraw.js',
								'assets/plugins/jqwidgets/jqxchart.core.js',
								'assets/plugins/jqwidgets/jqxgrid.aggregates.js',
								'assets/js/custom.js'
                            ]
                        });
                    }]
                }
            })
			.state('AddProduct', {
                url: '/product/addproduct',
                templateUrl: 'assets/views/addproduct.html',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
								'assets/plugins/jqwidgets/jqxcore.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxdata.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxswitchbutton.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxtabs.js',
								'assets/plugins/jqwidgets/jqxtree.js',
								'assets/plugins/jqwidgets/jqxmenu.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxlistbox.js',
								'assets/plugins/jqwidgets/jqxdropdownlist.js',
								'assets/plugins/jqwidgets/jqxgrid.js',
								'assets/plugins/jqwidgets/jqxgrid.sort.js',
								'assets/plugins/jqwidgets/jqxgrid.pager.js',
								'assets/plugins/jqwidgets/jqxgrid.selection.js',
								'assets/plugins/jqwidgets/jqxinput.js',
								'assets/plugins/jqwidgets/jqxgrid.filter.js',
								'assets/plugins/jqwidgets/jqxcalendar.js',
								'assets/plugins/jqwidgets/jqxradiobutton.js',
								'assets/plugins/jqwidgets/jqxnumberinput.js',
								'assets/plugins/jqwidgets/jqxdatetimeinput.js',
								'assets/plugins/jqwidgets/jqxtooltip.js',
								'assets/plugins/jqwidgets/globalization/globalize.js',
								'assets/plugins/jqwidgets/jqxgrid.edit.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxcolorpicker.js',
								'assets/plugins/jqwidgets/jqxwindow.js',
								'assets/plugins/jqwidgets/jqxeditor.js',
								'assets/plugins/jqwidgets/jqxdraw.js',
								'assets/plugins/jqwidgets/jqxchart.core.js',
								'assets/plugins/jqwidgets/jqxgrid.aggregates.js',
								'assets/js/custom.js'
                            ]
                        });
                    }]
                }
            })
			.state('AssemblyProduct', {
                url: '/product/assemblyproduct',
                templateUrl: 'assets/views/assemblyproduct.html',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
								'assets/plugins/jqwidgets/jqxcore.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxdata.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxswitchbutton.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxtabs.js',
								'assets/plugins/jqwidgets/jqxtree.js',
								'assets/plugins/jqwidgets/jqxmenu.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxlistbox.js',
								'assets/plugins/jqwidgets/jqxdropdownlist.js',
								'assets/plugins/jqwidgets/jqxgrid.js',
								'assets/plugins/jqwidgets/jqxgrid.sort.js',
								'assets/plugins/jqwidgets/jqxgrid.pager.js',
								'assets/plugins/jqwidgets/jqxgrid.selection.js',
								'assets/plugins/jqwidgets/jqxinput.js',
								'assets/plugins/jqwidgets/jqxgrid.filter.js',
								'assets/plugins/jqwidgets/jqxcalendar.js',
								'assets/plugins/jqwidgets/jqxradiobutton.js',
								'assets/plugins/jqwidgets/jqxnumberinput.js',
								'assets/plugins/jqwidgets/jqxdatetimeinput.js',
								'assets/plugins/jqwidgets/jqxtooltip.js',
								'assets/plugins/jqwidgets/globalization/globalize.js',
								'assets/plugins/jqwidgets/jqxgrid.edit.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxcolorpicker.js',
								'assets/plugins/jqwidgets/jqxwindow.js',
								'assets/plugins/jqwidgets/jqxeditor.js',
								'assets/plugins/jqwidgets/jqxdraw.js',
								'assets/plugins/jqwidgets/jqxchart.core.js',
								'assets/plugins/jqwidgets/jqxgrid.aggregates.js',
								'assets/js/custom.js'
                            ]
                        });
                    }]
                }
            })
			.state('ProductType', {
                url: '/product/producttype',
                templateUrl: 'assets/views/producttype.html',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
								'assets/plugins/jqwidgets/jqxcore.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxdata.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxswitchbutton.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxtabs.js',
								'assets/plugins/jqwidgets/jqxtree.js',
								'assets/plugins/jqwidgets/jqxmenu.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxlistbox.js',
								'assets/plugins/jqwidgets/jqxdropdownlist.js',
								'assets/plugins/jqwidgets/jqxgrid.js',
								'assets/plugins/jqwidgets/jqxgrid.sort.js',
								'assets/plugins/jqwidgets/jqxgrid.pager.js',
								'assets/plugins/jqwidgets/jqxgrid.selection.js',
								'assets/plugins/jqwidgets/jqxinput.js',
								'assets/plugins/jqwidgets/jqxgrid.filter.js',
								'assets/plugins/jqwidgets/jqxcalendar.js',
								'assets/plugins/jqwidgets/jqxradiobutton.js',
								'assets/plugins/jqwidgets/jqxnumberinput.js',
								'assets/plugins/jqwidgets/jqxdatetimeinput.js',
								'assets/plugins/jqwidgets/jqxtooltip.js',
								'assets/plugins/jqwidgets/globalization/globalize.js',
								'assets/plugins/jqwidgets/jqxgrid.edit.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxcolorpicker.js',
								'assets/plugins/jqwidgets/jqxwindow.js',
								'assets/plugins/jqwidgets/jqxeditor.js',
								'assets/plugins/jqwidgets/jqxdraw.js',
								'assets/plugins/jqwidgets/jqxchart.core.js',
								'assets/plugins/jqwidgets/jqxgrid.aggregates.js',
								'assets/js/custom.js'
                            ]
                        });
                    }]
                }
            })
			
			.state('CategoryList', {
                url: '/product/categorylist',
                templateUrl: 'assets/views/categorylist.html',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
								'assets/plugins/jqwidgets/jqxcore.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxdata.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxswitchbutton.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxtabs.js',
								'assets/plugins/jqwidgets/jqxtree.js',
								'assets/plugins/jqwidgets/jqxmenu.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxlistbox.js',
								'assets/plugins/jqwidgets/jqxdropdownlist.js',
								'assets/plugins/jqwidgets/jqxgrid.js',
								'assets/plugins/jqwidgets/jqxgrid.sort.js',
								'assets/plugins/jqwidgets/jqxgrid.pager.js',
								'assets/plugins/jqwidgets/jqxgrid.selection.js',
								'assets/plugins/jqwidgets/jqxinput.js',
								'assets/plugins/jqwidgets/jqxgrid.filter.js',
								'assets/plugins/jqwidgets/jqxcalendar.js',
								'assets/plugins/jqwidgets/jqxradiobutton.js',
								'assets/plugins/jqwidgets/jqxnumberinput.js',
								'assets/plugins/jqwidgets/jqxdatetimeinput.js',
								'assets/plugins/jqwidgets/jqxtooltip.js',
								'assets/plugins/jqwidgets/globalization/globalize.js',
								'assets/plugins/jqwidgets/jqxgrid.edit.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxcolorpicker.js',
								'assets/plugins/jqwidgets/jqxwindow.js',
								'assets/plugins/jqwidgets/jqxeditor.js',
								'assets/plugins/jqwidgets/jqxdraw.js',
								'assets/plugins/jqwidgets/jqxchart.core.js',
								'assets/plugins/jqwidgets/jqxgrid.aggregates.js',
								'assets/js/custom.js'
                            ]
                        });
                    }]
                }
            })
			.state('EditCategory', {
                url: '/product/categorylist/editcategory',
                templateUrl: 'assets/views/editcategory.html',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
								'assets/plugins/jqwidgets/jqxcore.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxdata.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxswitchbutton.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxtabs.js',
								'assets/plugins/jqwidgets/jqxtree.js',
								'assets/plugins/jqwidgets/jqxmenu.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxlistbox.js',
								'assets/plugins/jqwidgets/jqxdropdownlist.js',
								'assets/plugins/jqwidgets/jqxgrid.js',
								'assets/plugins/jqwidgets/jqxgrid.sort.js',
								'assets/plugins/jqwidgets/jqxgrid.pager.js',
								'assets/plugins/jqwidgets/jqxgrid.selection.js',
								'assets/plugins/jqwidgets/jqxinput.js',
								'assets/plugins/jqwidgets/jqxgrid.filter.js',
								'assets/plugins/jqwidgets/jqxcalendar.js',
								'assets/plugins/jqwidgets/jqxradiobutton.js',
								'assets/plugins/jqwidgets/jqxnumberinput.js',
								'assets/plugins/jqwidgets/jqxdatetimeinput.js',
								'assets/plugins/jqwidgets/jqxtooltip.js',
								'assets/plugins/jqwidgets/globalization/globalize.js',
								'assets/plugins/jqwidgets/jqxgrid.edit.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxcolorpicker.js',
								'assets/plugins/jqwidgets/jqxwindow.js',
								'assets/plugins/jqwidgets/jqxeditor.js',
								'assets/plugins/jqwidgets/jqxdraw.js',
								'assets/plugins/jqwidgets/jqxchart.core.js',
								'assets/plugins/jqwidgets/jqxgrid.aggregates.js',
								'assets/js/custom.js'
                            ]
                        });
                    }]
                }				
            })
			.state('SubCategoriesList', {
                url: '/product/categorylist/subcategorieslist',
                templateUrl: 'assets/views/subcategorieslist.html',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
								'assets/plugins/jqwidgets/jqxcore.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxdata.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxswitchbutton.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxtabs.js',
								'assets/plugins/jqwidgets/jqxtree.js',
								'assets/plugins/jqwidgets/jqxmenu.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxlistbox.js',
								'assets/plugins/jqwidgets/jqxdropdownlist.js',
								'assets/plugins/jqwidgets/jqxgrid.js',
								'assets/plugins/jqwidgets/jqxgrid.sort.js',
								'assets/plugins/jqwidgets/jqxgrid.pager.js',
								'assets/plugins/jqwidgets/jqxgrid.selection.js',
								'assets/plugins/jqwidgets/jqxinput.js',
								'assets/plugins/jqwidgets/jqxgrid.filter.js',
								'assets/plugins/jqwidgets/jqxcalendar.js',
								'assets/plugins/jqwidgets/jqxradiobutton.js',
								'assets/plugins/jqwidgets/jqxnumberinput.js',
								'assets/plugins/jqwidgets/jqxdatetimeinput.js',
								'assets/plugins/jqwidgets/jqxtooltip.js',
								'assets/plugins/jqwidgets/globalization/globalize.js',
								'assets/plugins/jqwidgets/jqxgrid.edit.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxcolorpicker.js',
								'assets/plugins/jqwidgets/jqxwindow.js',
								'assets/plugins/jqwidgets/jqxeditor.js',
								'assets/plugins/jqwidgets/jqxdraw.js',
								'assets/plugins/jqwidgets/jqxchart.core.js',
								'assets/plugins/jqwidgets/jqxgrid.aggregates.js',
								'assets/js/custom.js'
                            ]
                        });
                    }]
                }
            })
			.state('AddCategory', {
                url: '/product/addcategory',
                templateUrl: 'assets/views/addcategory.html',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
								'assets/plugins/jqwidgets/jqxcore.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxdata.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxswitchbutton.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxtabs.js',
								'assets/plugins/jqwidgets/jqxtree.js',
								'assets/plugins/jqwidgets/jqxmenu.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxlistbox.js',
								'assets/plugins/jqwidgets/jqxdropdownlist.js',
								'assets/plugins/jqwidgets/jqxgrid.js',
								'assets/plugins/jqwidgets/jqxgrid.sort.js',
								'assets/plugins/jqwidgets/jqxgrid.pager.js',
								'assets/plugins/jqwidgets/jqxgrid.selection.js',
								'assets/plugins/jqwidgets/jqxinput.js',
								'assets/plugins/jqwidgets/jqxgrid.filter.js',
								'assets/plugins/jqwidgets/jqxcalendar.js',
								'assets/plugins/jqwidgets/jqxradiobutton.js',
								'assets/plugins/jqwidgets/jqxnumberinput.js',
								'assets/plugins/jqwidgets/jqxdatetimeinput.js',
								'assets/plugins/jqwidgets/jqxtooltip.js',
								'assets/plugins/jqwidgets/globalization/globalize.js',
								'assets/plugins/jqwidgets/jqxgrid.edit.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxcolorpicker.js',
								'assets/plugins/jqwidgets/jqxwindow.js',
								'assets/plugins/jqwidgets/jqxeditor.js',
								'assets/plugins/jqwidgets/jqxdraw.js',
								'assets/plugins/jqwidgets/jqxchart.core.js',
								'assets/plugins/jqwidgets/jqxgrid.aggregates.js',
								'assets/js/custom.js'
                            ]
                        });
                    }]
                }
            })
			.state('ManufactureList', {
                url: '/product/manufacturelist',
                templateUrl: 'assets/views/manufacturelist.html',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
								'assets/plugins/jqwidgets/jqxcore.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxdata.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxswitchbutton.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxtabs.js',
								'assets/plugins/jqwidgets/jqxtree.js',
								'assets/plugins/jqwidgets/jqxmenu.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxlistbox.js',
								'assets/plugins/jqwidgets/jqxdropdownlist.js',
								'assets/plugins/jqwidgets/jqxgrid.js',
								'assets/plugins/jqwidgets/jqxgrid.sort.js',
								'assets/plugins/jqwidgets/jqxgrid.pager.js',
								'assets/plugins/jqwidgets/jqxgrid.selection.js',
								'assets/plugins/jqwidgets/jqxinput.js',
								'assets/plugins/jqwidgets/jqxgrid.filter.js',
								'assets/plugins/jqwidgets/jqxcalendar.js',
								'assets/plugins/jqwidgets/jqxradiobutton.js',
								'assets/plugins/jqwidgets/jqxnumberinput.js',
								'assets/plugins/jqwidgets/jqxdatetimeinput.js',
								'assets/plugins/jqwidgets/jqxtooltip.js',
								'assets/plugins/jqwidgets/globalization/globalize.js',
								'assets/plugins/jqwidgets/jqxgrid.edit.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxcolorpicker.js',
								'assets/plugins/jqwidgets/jqxwindow.js',
								'assets/plugins/jqwidgets/jqxeditor.js',
								'assets/plugins/jqwidgets/jqxdraw.js',
								'assets/plugins/jqwidgets/jqxchart.core.js',
								'assets/plugins/jqwidgets/jqxgrid.aggregates.js',
								'assets/js/custom.js'
                            ]
                        });
                    }]
                }
            })
			.state('ProductReviews', {
                url: '/product/productreviews',
                templateUrl: 'assets/views/productreviews.html',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
								'assets/plugins/jqwidgets/jqxcore.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxdata.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxswitchbutton.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxtabs.js',
								'assets/plugins/jqwidgets/jqxtree.js',
								'assets/plugins/jqwidgets/jqxmenu.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxlistbox.js',
								'assets/plugins/jqwidgets/jqxdropdownlist.js',
								'assets/plugins/jqwidgets/jqxgrid.js',
								'assets/plugins/jqwidgets/jqxgrid.sort.js',
								'assets/plugins/jqwidgets/jqxgrid.pager.js',
								'assets/plugins/jqwidgets/jqxgrid.selection.js',
								'assets/plugins/jqwidgets/jqxinput.js',
								'assets/plugins/jqwidgets/jqxgrid.filter.js',
								'assets/plugins/jqwidgets/jqxcalendar.js',
								'assets/plugins/jqwidgets/jqxradiobutton.js',
								'assets/plugins/jqwidgets/jqxnumberinput.js',
								'assets/plugins/jqwidgets/jqxdatetimeinput.js',
								'assets/plugins/jqwidgets/jqxtooltip.js',
								'assets/plugins/jqwidgets/globalization/globalize.js',
								'assets/plugins/jqwidgets/jqxgrid.edit.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxcolorpicker.js',
								'assets/plugins/jqwidgets/jqxwindow.js',
								'assets/plugins/jqwidgets/jqxeditor.js',
								'assets/plugins/jqwidgets/jqxdraw.js',
								'assets/plugins/jqwidgets/jqxchart.core.js',
								'assets/plugins/jqwidgets/jqxgrid.aggregates.js',
								'assets/js/custom.js'
                            ]
                        });
                    }]
                }
            })
			.state('AddProductReviews', {
                url: '/product/productreviews/addproductreviews',
                templateUrl: 'assets/views/addproductreviews.html'
            })
			.state('GenerateGoogleXML', {
                url: '/product/seo/generategooglexml',
                templateUrl: 'assets/views/generategooglexml.html'
            })
			.state('GenerateRSS', {
                url: '/product/seo/generaterss',
                templateUrl: 'assets/views/generaterss.html'
            })
			.state('ExportProducts', {
                url: '/product/importexport/exportproducts',
                templateUrl: 'assets/views/exportproducts.html'
            })
			.state('PIWC', {
                url: '/product/importexport/piwc',
                templateUrl: 'assets/views/piwc.html'
            })
			.state('AmazonPrice', {
                url: '/product/amazonprice',
                templateUrl: 'assets/views/amazonprice.html',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
								'assets/plugins/jqwidgets/jqxcore.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxdata.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxswitchbutton.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxtabs.js',
								'assets/plugins/jqwidgets/jqxtree.js',
								'assets/plugins/jqwidgets/jqxmenu.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxlistbox.js',
								'assets/plugins/jqwidgets/jqxdropdownlist.js',
								'assets/plugins/jqwidgets/jqxgrid.js',
								'assets/plugins/jqwidgets/jqxgrid.sort.js',
								'assets/plugins/jqwidgets/jqxgrid.pager.js',
								'assets/plugins/jqwidgets/jqxgrid.selection.js',
								'assets/plugins/jqwidgets/jqxinput.js',
								'assets/plugins/jqwidgets/jqxgrid.filter.js',
								'assets/plugins/jqwidgets/jqxcalendar.js',
								'assets/plugins/jqwidgets/jqxradiobutton.js',
								'assets/plugins/jqwidgets/jqxnumberinput.js',
								'assets/plugins/jqwidgets/jqxdatetimeinput.js',
								'assets/plugins/jqwidgets/jqxtooltip.js',
								'assets/plugins/jqwidgets/globalization/globalize.js',
								'assets/plugins/jqwidgets/jqxgrid.edit.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxcolorpicker.js',
								'assets/plugins/jqwidgets/jqxwindow.js',
								'assets/plugins/jqwidgets/jqxeditor.js',
								'assets/plugins/jqwidgets/jqxdraw.js',
								'assets/plugins/jqwidgets/jqxchart.core.js',
								'assets/plugins/jqwidgets/jqxgrid.aggregates.js',
								'assets/js/custom.js'
                            ]
                        });
                    }]
                }
            })
			.state('AmazonProductList', {
                url: '/product/amazonproductlist',
                templateUrl: 'assets/views/amazonproductlist.html',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
								'assets/plugins/jqwidgets/jqxcore.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxdata.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxswitchbutton.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxtabs.js',
								'assets/plugins/jqwidgets/jqxtree.js',
								'assets/plugins/jqwidgets/jqxmenu.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxlistbox.js',
								'assets/plugins/jqwidgets/jqxdropdownlist.js',
								'assets/plugins/jqwidgets/jqxgrid.js',
								'assets/plugins/jqwidgets/jqxgrid.sort.js',
								'assets/plugins/jqwidgets/jqxgrid.pager.js',
								'assets/plugins/jqwidgets/jqxgrid.selection.js',
								'assets/plugins/jqwidgets/jqxinput.js',
								'assets/plugins/jqwidgets/jqxgrid.filter.js',
								'assets/plugins/jqwidgets/jqxcalendar.js',
								'assets/plugins/jqwidgets/jqxradiobutton.js',
								'assets/plugins/jqwidgets/jqxnumberinput.js',
								'assets/plugins/jqwidgets/jqxdatetimeinput.js',
								'assets/plugins/jqwidgets/jqxtooltip.js',
								'assets/plugins/jqwidgets/globalization/globalize.js',
								'assets/plugins/jqwidgets/jqxgrid.edit.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxcolorpicker.js',
								'assets/plugins/jqwidgets/jqxwindow.js',
								'assets/plugins/jqwidgets/jqxeditor.js',
								'assets/plugins/jqwidgets/jqxdraw.js',
								'assets/plugins/jqwidgets/jqxchart.core.js',
								'assets/plugins/jqwidgets/jqxgrid.aggregates.js',
								'assets/js/custom.js'
                            ]
                        });
                    }]
                }
            })
			.state('eBayProductList', {
                url: '/product/ebayproductlist',
                templateUrl: 'assets/views/ebayproductlist.html'
            })
			.state('URLRedirect', {
                url: '/product/urlredirect',
                templateUrl: 'assets/views/urlredirect.html',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
								'assets/plugins/jqwidgets/jqxcore.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxdata.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxswitchbutton.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxtabs.js',
								'assets/plugins/jqwidgets/jqxtree.js',
								'assets/plugins/jqwidgets/jqxmenu.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxlistbox.js',
								'assets/plugins/jqwidgets/jqxdropdownlist.js',
								'assets/plugins/jqwidgets/jqxgrid.js',
								'assets/plugins/jqwidgets/jqxgrid.sort.js',
								'assets/plugins/jqwidgets/jqxgrid.pager.js',
								'assets/plugins/jqwidgets/jqxgrid.selection.js',
								'assets/plugins/jqwidgets/jqxinput.js',
								'assets/plugins/jqwidgets/jqxgrid.filter.js',
								'assets/plugins/jqwidgets/jqxcalendar.js',
								'assets/plugins/jqwidgets/jqxradiobutton.js',
								'assets/plugins/jqwidgets/jqxnumberinput.js',
								'assets/plugins/jqwidgets/jqxdatetimeinput.js',
								'assets/plugins/jqwidgets/jqxtooltip.js',
								'assets/plugins/jqwidgets/globalization/globalize.js',
								'assets/plugins/jqwidgets/jqxgrid.edit.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxcolorpicker.js',
								'assets/plugins/jqwidgets/jqxwindow.js',
								'assets/plugins/jqwidgets/jqxeditor.js',
								'assets/plugins/jqwidgets/jqxdraw.js',
								'assets/plugins/jqwidgets/jqxchart.core.js',
								'assets/plugins/jqwidgets/jqxgrid.aggregates.js',
								'assets/js/custom.js'
                            ]
                        });
                    }]
                }
            })
			.state('InventoryPO', {
                url: '/product/inventorypo',
                templateUrl: 'assets/views/inventorypo.html',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
								'assets/plugins/jqwidgets/jqxcore.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxdata.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxswitchbutton.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxtabs.js',
								'assets/plugins/jqwidgets/jqxtree.js',
								'assets/plugins/jqwidgets/jqxmenu.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxlistbox.js',
								'assets/plugins/jqwidgets/jqxdropdownlist.js',
								'assets/plugins/jqwidgets/jqxgrid.js',
								'assets/plugins/jqwidgets/jqxgrid.sort.js',
								'assets/plugins/jqwidgets/jqxgrid.pager.js',
								'assets/plugins/jqwidgets/jqxgrid.selection.js',
								'assets/plugins/jqwidgets/jqxinput.js',
								'assets/plugins/jqwidgets/jqxgrid.filter.js',
								'assets/plugins/jqwidgets/jqxcalendar.js',
								'assets/plugins/jqwidgets/jqxradiobutton.js',
								'assets/plugins/jqwidgets/jqxnumberinput.js',
								'assets/plugins/jqwidgets/jqxdatetimeinput.js',
								'assets/plugins/jqwidgets/jqxtooltip.js',
								'assets/plugins/jqwidgets/globalization/globalize.js',
								'assets/plugins/jqwidgets/jqxgrid.edit.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxcolorpicker.js',
								'assets/plugins/jqwidgets/jqxwindow.js',
								'assets/plugins/jqwidgets/jqxeditor.js',
								'assets/plugins/jqwidgets/jqxdraw.js',
								'assets/plugins/jqwidgets/jqxchart.core.js',
								'assets/plugins/jqwidgets/jqxgrid.aggregates.js',
								'assets/js/custom.js'
                            ]
                        });
                    }]
                }
            })
			.state('AddInventoryPO', {
                url: '/product/addinventorypo',
                templateUrl: 'assets/views/addinventorypo.html'
            })
			
			.state('ClubMembersList', {
                url: '/clubenviromnent/clubmemberslist',
                templateUrl: 'assets/views/clubmemberslist.html'
            })
			.state('CustomerList', {
                url: '/customer/customerlist',
                templateUrl: 'assets/views/customerlist.html',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
								'assets/plugins/jqwidgets/jqxcore.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxdata.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxswitchbutton.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxtabs.js',
								'assets/plugins/jqwidgets/jqxtree.js',
								'assets/plugins/jqwidgets/jqxmenu.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxlistbox.js',
								'assets/plugins/jqwidgets/jqxdropdownlist.js',
								'assets/plugins/jqwidgets/jqxgrid.js',
								'assets/plugins/jqwidgets/jqxgrid.sort.js',
								'assets/plugins/jqwidgets/jqxgrid.pager.js',
								'assets/plugins/jqwidgets/jqxgrid.selection.js',
								'assets/plugins/jqwidgets/jqxinput.js',
								'assets/plugins/jqwidgets/jqxgrid.filter.js',
								'assets/plugins/jqwidgets/jqxcalendar.js',
								'assets/plugins/jqwidgets/jqxradiobutton.js',
								'assets/plugins/jqwidgets/jqxnumberinput.js',
								'assets/plugins/jqwidgets/jqxdatetimeinput.js',
								'assets/plugins/jqwidgets/jqxtooltip.js',
								'assets/plugins/jqwidgets/globalization/globalize.js',
								'assets/plugins/jqwidgets/jqxgrid.edit.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxcolorpicker.js',
								'assets/plugins/jqwidgets/jqxwindow.js',
								'assets/plugins/jqwidgets/jqxeditor.js',
								'assets/plugins/jqwidgets/jqxdraw.js',
								'assets/plugins/jqwidgets/jqxchart.core.js',
								'assets/plugins/jqwidgets/jqxgrid.aggregates.js',
								'assets/js/custom.js'
                            ]
                        });
                    }]
                }
            })
			.state('ExportCustomer', {
                url: '/customer/exportcustomer',
                templateUrl: 'assets/views/exportcustomer.html'
            })
			.state('CustomerQuestions', {
                url: '/customer/customerquestions',
                templateUrl: 'assets/views/customerquestions.html',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
								'assets/plugins/jqwidgets/jqxcore.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxdata.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxswitchbutton.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxtabs.js',
								'assets/plugins/jqwidgets/jqxtree.js',
								'assets/plugins/jqwidgets/jqxmenu.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxlistbox.js',
								'assets/plugins/jqwidgets/jqxdropdownlist.js',
								'assets/plugins/jqwidgets/jqxgrid.js',
								'assets/plugins/jqwidgets/jqxgrid.sort.js',
								'assets/plugins/jqwidgets/jqxgrid.pager.js',
								'assets/plugins/jqwidgets/jqxgrid.selection.js',
								'assets/plugins/jqwidgets/jqxinput.js',
								'assets/plugins/jqwidgets/jqxgrid.filter.js',
								'assets/plugins/jqwidgets/jqxcalendar.js',
								'assets/plugins/jqwidgets/jqxradiobutton.js',
								'assets/plugins/jqwidgets/jqxnumberinput.js',
								'assets/plugins/jqwidgets/jqxdatetimeinput.js',
								'assets/plugins/jqwidgets/jqxtooltip.js',
								'assets/plugins/jqwidgets/globalization/globalize.js',
								'assets/plugins/jqwidgets/jqxgrid.edit.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxcolorpicker.js',
								'assets/plugins/jqwidgets/jqxwindow.js',
								'assets/plugins/jqwidgets/jqxeditor.js',
								'assets/plugins/jqwidgets/jqxdraw.js',
								'assets/plugins/jqwidgets/jqxchart.core.js',
								'assets/plugins/jqwidgets/jqxgrid.aggregates.js',
								'assets/js/custom.js'
                            ]
                        });
                    }]
                }
            })
			.state('AbandonedCart', {
                url: '/customer/abandonedcart',
                templateUrl: 'assets/views/abandonedcart.html',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
								'assets/plugins/jqwidgets/jqxcore.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxdata.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxswitchbutton.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxtabs.js',
								'assets/plugins/jqwidgets/jqxtree.js',
								'assets/plugins/jqwidgets/jqxmenu.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxlistbox.js',
								'assets/plugins/jqwidgets/jqxdropdownlist.js',
								'assets/plugins/jqwidgets/jqxgrid.js',
								'assets/plugins/jqwidgets/jqxgrid.sort.js',
								'assets/plugins/jqwidgets/jqxgrid.pager.js',
								'assets/plugins/jqwidgets/jqxgrid.selection.js',
								'assets/plugins/jqwidgets/jqxinput.js',
								'assets/plugins/jqwidgets/jqxgrid.filter.js',
								'assets/plugins/jqwidgets/jqxcalendar.js',
								'assets/plugins/jqwidgets/jqxradiobutton.js',
								'assets/plugins/jqwidgets/jqxnumberinput.js',
								'assets/plugins/jqwidgets/jqxdatetimeinput.js',
								'assets/plugins/jqwidgets/jqxtooltip.js',
								'assets/plugins/jqwidgets/globalization/globalize.js',
								'assets/plugins/jqwidgets/jqxgrid.edit.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxcolorpicker.js',
								'assets/plugins/jqwidgets/jqxwindow.js',
								'assets/plugins/jqwidgets/jqxeditor.js',
								'assets/plugins/jqwidgets/jqxdraw.js',
								'assets/plugins/jqwidgets/jqxchart.core.js',
								'assets/plugins/jqwidgets/jqxgrid.aggregates.js',
								'assets/js/custom.js'
                            ]
                        });
                    }]
                }
            })
			
			
			.state('CouponManager', {
                url: '/promotion/couponmanager',
                templateUrl: 'assets/views/couponmanager.html',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
								'assets/plugins/jqwidgets/jqxcore.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxdata.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxswitchbutton.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxtabs.js',
								'assets/plugins/jqwidgets/jqxtree.js',
								'assets/plugins/jqwidgets/jqxmenu.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxlistbox.js',
								'assets/plugins/jqwidgets/jqxdropdownlist.js',
								'assets/plugins/jqwidgets/jqxgrid.js',
								'assets/plugins/jqwidgets/jqxgrid.sort.js',
								'assets/plugins/jqwidgets/jqxgrid.pager.js',
								'assets/plugins/jqwidgets/jqxgrid.selection.js',
								'assets/plugins/jqwidgets/jqxinput.js',
								'assets/plugins/jqwidgets/jqxgrid.filter.js',
								'assets/plugins/jqwidgets/jqxcalendar.js',
								'assets/plugins/jqwidgets/jqxradiobutton.js',
								'assets/plugins/jqwidgets/jqxnumberinput.js',
								'assets/plugins/jqwidgets/jqxdatetimeinput.js',
								'assets/plugins/jqwidgets/jqxtooltip.js',
								'assets/plugins/jqwidgets/globalization/globalize.js',
								'assets/plugins/jqwidgets/jqxgrid.edit.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxcolorpicker.js',
								'assets/plugins/jqwidgets/jqxwindow.js',
								'assets/plugins/jqwidgets/jqxeditor.js',
								'assets/plugins/jqwidgets/jqxdraw.js',
								'assets/plugins/jqwidgets/jqxchart.core.js',
								'assets/plugins/jqwidgets/jqxgrid.aggregates.js',
								'assets/js/custom.js'
                            ]
                        });
                    }]
                }
            })
			.state('AddCouponDiscount', {
                url: '/promotion/addcoupondiscount',
                templateUrl: 'assets/views/addcoupondiscount.html',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
								'assets/plugins/jqwidgets/jqxcore.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxdata.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxswitchbutton.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxtabs.js',
								'assets/plugins/jqwidgets/jqxtree.js',
								'assets/plugins/jqwidgets/jqxmenu.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxlistbox.js',
								'assets/plugins/jqwidgets/jqxdropdownlist.js',
								'assets/plugins/jqwidgets/jqxgrid.js',
								'assets/plugins/jqwidgets/jqxgrid.sort.js',
								'assets/plugins/jqwidgets/jqxgrid.pager.js',
								'assets/plugins/jqwidgets/jqxgrid.selection.js',
								'assets/plugins/jqwidgets/jqxinput.js',
								'assets/plugins/jqwidgets/jqxgrid.filter.js',
								'assets/plugins/jqwidgets/jqxcalendar.js',
								'assets/plugins/jqwidgets/jqxradiobutton.js',
								'assets/plugins/jqwidgets/jqxnumberinput.js',
								'assets/plugins/jqwidgets/jqxdatetimeinput.js',
								'assets/plugins/jqwidgets/jqxtooltip.js',
								'assets/plugins/jqwidgets/globalization/globalize.js',
								'assets/plugins/jqwidgets/jqxgrid.edit.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxcolorpicker.js',
								'assets/plugins/jqwidgets/jqxwindow.js',
								'assets/plugins/jqwidgets/jqxeditor.js',
								'assets/plugins/jqwidgets/jqxdraw.js',
								'assets/plugins/jqwidgets/jqxchart.core.js',
								'assets/plugins/jqwidgets/jqxgrid.aggregates.js',
								'assets/js/custom.js'
                            ]
                        });
                    }]
                }
            })
			.state('CustomerLevelDiscount', {
                url: '/promotion/customerleveldiscount',
                templateUrl: 'assets/views/customerleveldiscount.html',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
								'assets/plugins/jqwidgets/jqxcore.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxdata.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxswitchbutton.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxtabs.js',
								'assets/plugins/jqwidgets/jqxtree.js',
								'assets/plugins/jqwidgets/jqxmenu.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxlistbox.js',
								'assets/plugins/jqwidgets/jqxdropdownlist.js',
								'assets/plugins/jqwidgets/jqxgrid.js',
								'assets/plugins/jqwidgets/jqxgrid.sort.js',
								'assets/plugins/jqwidgets/jqxgrid.pager.js',
								'assets/plugins/jqwidgets/jqxgrid.selection.js',
								'assets/plugins/jqwidgets/jqxinput.js',
								'assets/plugins/jqwidgets/jqxgrid.filter.js',
								'assets/plugins/jqwidgets/jqxcalendar.js',
								'assets/plugins/jqwidgets/jqxradiobutton.js',
								'assets/plugins/jqwidgets/jqxnumberinput.js',
								'assets/plugins/jqwidgets/jqxdatetimeinput.js',
								'assets/plugins/jqwidgets/jqxtooltip.js',
								'assets/plugins/jqwidgets/globalization/globalize.js',
								'assets/plugins/jqwidgets/jqxgrid.edit.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxcolorpicker.js',
								'assets/plugins/jqwidgets/jqxwindow.js',
								'assets/plugins/jqwidgets/jqxeditor.js',
								'assets/plugins/jqwidgets/jqxdraw.js',
								'assets/plugins/jqwidgets/jqxchart.core.js',
								'assets/plugins/jqwidgets/jqxgrid.aggregates.js',
								'assets/js/custom.js'
                            ]
                        });
                    }]
                }
            })
			.state('AddCustomerLevelDiscount', {
                url: '/promotion/addcustomerleveldiscount',
                templateUrl: 'assets/views/addcustomerleveldiscount.html',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
								'assets/plugins/jqwidgets/jqxcore.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxdata.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxswitchbutton.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxtabs.js',
								'assets/plugins/jqwidgets/jqxtree.js',
								'assets/plugins/jqwidgets/jqxmenu.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxlistbox.js',
								'assets/plugins/jqwidgets/jqxdropdownlist.js',
								'assets/plugins/jqwidgets/jqxgrid.js',
								'assets/plugins/jqwidgets/jqxgrid.sort.js',
								'assets/plugins/jqwidgets/jqxgrid.pager.js',
								'assets/plugins/jqwidgets/jqxgrid.selection.js',
								'assets/plugins/jqwidgets/jqxinput.js',
								'assets/plugins/jqwidgets/jqxgrid.filter.js',
								'assets/plugins/jqwidgets/jqxcalendar.js',
								'assets/plugins/jqwidgets/jqxradiobutton.js',
								'assets/plugins/jqwidgets/jqxnumberinput.js',
								'assets/plugins/jqwidgets/jqxdatetimeinput.js',
								'assets/plugins/jqwidgets/jqxtooltip.js',
								'assets/plugins/jqwidgets/globalization/globalize.js',
								'assets/plugins/jqwidgets/jqxgrid.edit.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxcolorpicker.js',
								'assets/plugins/jqwidgets/jqxwindow.js',
								'assets/plugins/jqwidgets/jqxeditor.js',
								'assets/plugins/jqwidgets/jqxdraw.js',
								'assets/plugins/jqwidgets/jqxchart.core.js',
								'assets/plugins/jqwidgets/jqxgrid.aggregates.js',
								'assets/js/custom.js'
                            ]
                        });
                    }]
                }
            })
			.state('CheckoutPromotion', {
                url: '/promotion/checkoutpromotion',
                templateUrl: 'assets/views/checkoutpromotion.html',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
								'assets/plugins/jqwidgets/jqxcore.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxdata.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxswitchbutton.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxtabs.js',
								'assets/plugins/jqwidgets/jqxtree.js',
								'assets/plugins/jqwidgets/jqxmenu.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxlistbox.js',
								'assets/plugins/jqwidgets/jqxdropdownlist.js',
								'assets/plugins/jqwidgets/jqxgrid.js',
								'assets/plugins/jqwidgets/jqxgrid.sort.js',
								'assets/plugins/jqwidgets/jqxgrid.pager.js',
								'assets/plugins/jqwidgets/jqxgrid.selection.js',
								'assets/plugins/jqwidgets/jqxinput.js',
								'assets/plugins/jqwidgets/jqxgrid.filter.js',
								'assets/plugins/jqwidgets/jqxcalendar.js',
								'assets/plugins/jqwidgets/jqxradiobutton.js',
								'assets/plugins/jqwidgets/jqxnumberinput.js',
								'assets/plugins/jqwidgets/jqxdatetimeinput.js',
								'assets/plugins/jqwidgets/jqxtooltip.js',
								'assets/plugins/jqwidgets/globalization/globalize.js',
								'assets/plugins/jqwidgets/jqxgrid.edit.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxcolorpicker.js',
								'assets/plugins/jqwidgets/jqxwindow.js',
								'assets/plugins/jqwidgets/jqxeditor.js',
								'assets/plugins/jqwidgets/jqxdraw.js',
								'assets/plugins/jqwidgets/jqxchart.core.js',
								'assets/plugins/jqwidgets/jqxgrid.aggregates.js',
								'assets/js/custom.js'
                            ]
                        });
                    }]
                }
            })
			.state('BuyGetOff', {
                url: '/promotion/buygetoff',
                templateUrl: 'assets/views/buygetoff.html',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
								'assets/plugins/jqwidgets/jqxcore.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxdata.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxswitchbutton.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxtabs.js',
								'assets/plugins/jqwidgets/jqxtree.js',
								'assets/plugins/jqwidgets/jqxmenu.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxlistbox.js',
								'assets/plugins/jqwidgets/jqxdropdownlist.js',
								'assets/plugins/jqwidgets/jqxgrid.js',
								'assets/plugins/jqwidgets/jqxgrid.sort.js',
								'assets/plugins/jqwidgets/jqxgrid.pager.js',
								'assets/plugins/jqwidgets/jqxgrid.selection.js',
								'assets/plugins/jqwidgets/jqxinput.js',
								'assets/plugins/jqwidgets/jqxgrid.filter.js',
								'assets/plugins/jqwidgets/jqxcalendar.js',
								'assets/plugins/jqwidgets/jqxradiobutton.js',
								'assets/plugins/jqwidgets/jqxnumberinput.js',
								'assets/plugins/jqwidgets/jqxdatetimeinput.js',
								'assets/plugins/jqwidgets/jqxtooltip.js',
								'assets/plugins/jqwidgets/globalization/globalize.js',
								'assets/plugins/jqwidgets/jqxgrid.edit.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxcolorpicker.js',
								'assets/plugins/jqwidgets/jqxwindow.js',
								'assets/plugins/jqwidgets/jqxeditor.js',
								'assets/plugins/jqwidgets/jqxdraw.js',
								'assets/plugins/jqwidgets/jqxchart.core.js',
								'assets/plugins/jqwidgets/jqxgrid.aggregates.js',
								'assets/js/custom.js'
                            ]
                        });
                    }]
                }
            })
			
			.state('TopicList', {
                url: '/content/topiclist',
                templateUrl: 'assets/views/topiclist.html',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
								'assets/plugins/jqwidgets/jqxcore.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxdata.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxswitchbutton.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxtabs.js',
								'assets/plugins/jqwidgets/jqxtree.js',
								'assets/plugins/jqwidgets/jqxmenu.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxlistbox.js',
								'assets/plugins/jqwidgets/jqxdropdownlist.js',
								'assets/plugins/jqwidgets/jqxgrid.js',
								'assets/plugins/jqwidgets/jqxgrid.sort.js',
								'assets/plugins/jqwidgets/jqxgrid.pager.js',
								'assets/plugins/jqwidgets/jqxgrid.selection.js',
								'assets/plugins/jqwidgets/jqxinput.js',
								'assets/plugins/jqwidgets/jqxgrid.filter.js',
								'assets/plugins/jqwidgets/jqxcalendar.js',
								'assets/plugins/jqwidgets/jqxradiobutton.js',
								'assets/plugins/jqwidgets/jqxnumberinput.js',
								'assets/plugins/jqwidgets/jqxdatetimeinput.js',
								'assets/plugins/jqwidgets/jqxtooltip.js',
								'assets/plugins/jqwidgets/globalization/globalize.js',
								'assets/plugins/jqwidgets/jqxgrid.edit.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxcolorpicker.js',
								'assets/plugins/jqwidgets/jqxwindow.js',
								'assets/plugins/jqwidgets/jqxeditor.js',
								'assets/plugins/jqwidgets/jqxdraw.js',
								'assets/plugins/jqwidgets/jqxchart.core.js',
								'assets/plugins/jqwidgets/jqxgrid.aggregates.js',
								'assets/js/custom.js'
                            ]
                        });
                    }]
                }
            })
			
			.state('NewsletterSubscription', {
                url: '/content/newslettersubscription',
                templateUrl: 'assets/views/newslettersubscription.html',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
								'assets/plugins/jqwidgets/jqxcore.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxdata.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxswitchbutton.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxtabs.js',
								'assets/plugins/jqwidgets/jqxtree.js',
								'assets/plugins/jqwidgets/jqxmenu.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxlistbox.js',
								'assets/plugins/jqwidgets/jqxdropdownlist.js',
								'assets/plugins/jqwidgets/jqxgrid.js',
								'assets/plugins/jqwidgets/jqxgrid.sort.js',
								'assets/plugins/jqwidgets/jqxgrid.pager.js',
								'assets/plugins/jqwidgets/jqxgrid.selection.js',
								'assets/plugins/jqwidgets/jqxinput.js',
								'assets/plugins/jqwidgets/jqxgrid.filter.js',
								'assets/plugins/jqwidgets/jqxcalendar.js',
								'assets/plugins/jqwidgets/jqxradiobutton.js',
								'assets/plugins/jqwidgets/jqxnumberinput.js',
								'assets/plugins/jqwidgets/jqxdatetimeinput.js',
								'assets/plugins/jqwidgets/jqxtooltip.js',
								'assets/plugins/jqwidgets/globalization/globalize.js',
								'assets/plugins/jqwidgets/jqxgrid.edit.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxcolorpicker.js',
								'assets/plugins/jqwidgets/jqxwindow.js',
								'assets/plugins/jqwidgets/jqxeditor.js',
								'assets/plugins/jqwidgets/jqxdraw.js',
								'assets/plugins/jqwidgets/jqxchart.core.js',
								'assets/plugins/jqwidgets/jqxgrid.aggregates.js',
								'assets/js/custom.js'
                            ]
                        });
                    }]
                }
            })
			
			.state('AdminList', {
                url: '/settings/adminlist',
                templateUrl: 'assets/views/adminlist.html',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
								'assets/plugins/jqwidgets/jqxcore.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxdata.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxswitchbutton.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxtabs.js',
								'assets/plugins/jqwidgets/jqxtree.js',
								'assets/plugins/jqwidgets/jqxmenu.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxlistbox.js',
								'assets/plugins/jqwidgets/jqxdropdownlist.js',
								'assets/plugins/jqwidgets/jqxgrid.js',
								'assets/plugins/jqwidgets/jqxgrid.sort.js',
								'assets/plugins/jqwidgets/jqxgrid.pager.js',
								'assets/plugins/jqwidgets/jqxgrid.selection.js',
								'assets/plugins/jqwidgets/jqxinput.js',
								'assets/plugins/jqwidgets/jqxgrid.filter.js',
								'assets/plugins/jqwidgets/jqxcalendar.js',
								'assets/plugins/jqwidgets/jqxradiobutton.js',
								'assets/plugins/jqwidgets/jqxnumberinput.js',
								'assets/plugins/jqwidgets/jqxdatetimeinput.js',
								'assets/plugins/jqwidgets/jqxtooltip.js',
								'assets/plugins/jqwidgets/globalization/globalize.js',
								'assets/plugins/jqwidgets/jqxgrid.edit.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxcolorpicker.js',
								'assets/plugins/jqwidgets/jqxwindow.js',
								'assets/plugins/jqwidgets/jqxeditor.js',
								'assets/plugins/jqwidgets/jqxdraw.js',
								'assets/plugins/jqwidgets/jqxchart.core.js',
								'assets/plugins/jqwidgets/jqxgrid.aggregates.js',
								'assets/js/custom.js'
                            ]
                        });
                    }]
                }
            })
			
			.state('Report', {
                url: '/report',
                templateUrl: 'assets/views/report.html',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
								'assets/plugins/jqwidgets/jqxcore.js',
								'assets/plugins/jqwidgets/jqxdata.js',
								'assets/plugins/jqwidgets/jqxdraw.js',
								'assets/plugins/jqwidgets/jqxchart.core.js',
								'assets/js/custom.js'
                            ]
                        });
                    }]
                }
            })
			

			.state('StateTaxRate', {
                url: '/configuration/statetaxrate',
                templateUrl: 'assets/views/statetaxrate.html',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
								'assets/plugins/jqwidgets/jqxcore.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxdata.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxswitchbutton.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxtabs.js',
								'assets/plugins/jqwidgets/jqxtree.js',
								'assets/plugins/jqwidgets/jqxmenu.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxlistbox.js',
								'assets/plugins/jqwidgets/jqxdropdownlist.js',
								'assets/plugins/jqwidgets/jqxgrid.js',
								'assets/plugins/jqwidgets/jqxgrid.sort.js',
								'assets/plugins/jqwidgets/jqxgrid.pager.js',
								'assets/plugins/jqwidgets/jqxgrid.selection.js',
								'assets/plugins/jqwidgets/jqxinput.js',
								'assets/plugins/jqwidgets/jqxgrid.filter.js',
								'assets/plugins/jqwidgets/jqxcalendar.js',
								'assets/plugins/jqwidgets/jqxradiobutton.js',
								'assets/plugins/jqwidgets/jqxnumberinput.js',
								'assets/plugins/jqwidgets/jqxdatetimeinput.js',
								'assets/plugins/jqwidgets/jqxtooltip.js',
								'assets/plugins/jqwidgets/globalization/globalize.js',
								'assets/plugins/jqwidgets/jqxgrid.edit.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxcolorpicker.js',
								'assets/plugins/jqwidgets/jqxwindow.js',
								'assets/plugins/jqwidgets/jqxeditor.js',
								'assets/plugins/jqwidgets/jqxdraw.js',
								'assets/plugins/jqwidgets/jqxchart.core.js',
								'assets/plugins/jqwidgets/jqxgrid.aggregates.js',
								'assets/js/custom.js'
                            ]
                        });
                    }]
                }
            })
			.state('Sitemap', {
                url: '/configuration/sitemap',
                templateUrl: 'assets/views/sitemap.html'
            })
			.state('Countrylist', {
                url: '/configuration/countrylist',
                templateUrl: 'assets/views/countrylist.html',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
								'assets/plugins/jqwidgets/jqxcore.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxdata.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxswitchbutton.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxtabs.js',
								'assets/plugins/jqwidgets/jqxtree.js',
								'assets/plugins/jqwidgets/jqxmenu.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxlistbox.js',
								'assets/plugins/jqwidgets/jqxdropdownlist.js',
								'assets/plugins/jqwidgets/jqxgrid.js',
								'assets/plugins/jqwidgets/jqxgrid.sort.js',
								'assets/plugins/jqwidgets/jqxgrid.pager.js',
								'assets/plugins/jqwidgets/jqxgrid.selection.js',
								'assets/plugins/jqwidgets/jqxinput.js',
								'assets/plugins/jqwidgets/jqxgrid.filter.js',
								'assets/plugins/jqwidgets/jqxcalendar.js',
								'assets/plugins/jqwidgets/jqxradiobutton.js',
								'assets/plugins/jqwidgets/jqxnumberinput.js',
								'assets/plugins/jqwidgets/jqxdatetimeinput.js',
								'assets/plugins/jqwidgets/jqxtooltip.js',
								'assets/plugins/jqwidgets/globalization/globalize.js',
								'assets/plugins/jqwidgets/jqxgrid.edit.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxcolorpicker.js',
								'assets/plugins/jqwidgets/jqxwindow.js',
								'assets/plugins/jqwidgets/jqxeditor.js',
								'assets/plugins/jqwidgets/jqxdraw.js',
								'assets/plugins/jqwidgets/jqxchart.core.js',
								'assets/plugins/jqwidgets/jqxgrid.aggregates.js',
								'assets/js/custom.js'
                            ]
                        });
                    }]
                }
            })
			.state('Statelist', {
                url: '/configuration/statelist',
                templateUrl: 'assets/views/statelist.html',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
								'assets/plugins/jqwidgets/jqxcore.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxdata.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxswitchbutton.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxtabs.js',
								'assets/plugins/jqwidgets/jqxtree.js',
								'assets/plugins/jqwidgets/jqxmenu.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxlistbox.js',
								'assets/plugins/jqwidgets/jqxdropdownlist.js',
								'assets/plugins/jqwidgets/jqxgrid.js',
								'assets/plugins/jqwidgets/jqxgrid.sort.js',
								'assets/plugins/jqwidgets/jqxgrid.pager.js',
								'assets/plugins/jqwidgets/jqxgrid.selection.js',
								'assets/plugins/jqwidgets/jqxinput.js',
								'assets/plugins/jqwidgets/jqxgrid.filter.js',
								'assets/plugins/jqwidgets/jqxcalendar.js',
								'assets/plugins/jqwidgets/jqxradiobutton.js',
								'assets/plugins/jqwidgets/jqxnumberinput.js',
								'assets/plugins/jqwidgets/jqxdatetimeinput.js',
								'assets/plugins/jqwidgets/jqxtooltip.js',
								'assets/plugins/jqwidgets/globalization/globalize.js',
								'assets/plugins/jqwidgets/jqxgrid.edit.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxcolorpicker.js',
								'assets/plugins/jqwidgets/jqxwindow.js',
								'assets/plugins/jqwidgets/jqxeditor.js',
								'assets/plugins/jqwidgets/jqxdraw.js',
								'assets/plugins/jqwidgets/jqxchart.core.js',
								'assets/plugins/jqwidgets/jqxgrid.aggregates.js',
								'assets/js/custom.js'
                            ]
                        });
                    }]
                }
            })
			.state('GiftCertificate', {
                url: '/configuration/giftcertificate',
                templateUrl: 'assets/views/giftcertificate.html',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
								'assets/plugins/jqwidgets/jqxcore.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxdata.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxswitchbutton.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxtabs.js',
								'assets/plugins/jqwidgets/jqxtree.js',
								'assets/plugins/jqwidgets/jqxmenu.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxlistbox.js',
								'assets/plugins/jqwidgets/jqxdropdownlist.js',
								'assets/plugins/jqwidgets/jqxgrid.js',
								'assets/plugins/jqwidgets/jqxgrid.sort.js',
								'assets/plugins/jqwidgets/jqxgrid.pager.js',
								'assets/plugins/jqwidgets/jqxgrid.selection.js',
								'assets/plugins/jqwidgets/jqxinput.js',
								'assets/plugins/jqwidgets/jqxgrid.filter.js',
								'assets/plugins/jqwidgets/jqxcalendar.js',
								'assets/plugins/jqwidgets/jqxradiobutton.js',
								'assets/plugins/jqwidgets/jqxnumberinput.js',
								'assets/plugins/jqwidgets/jqxdatetimeinput.js',
								'assets/plugins/jqwidgets/jqxtooltip.js',
								'assets/plugins/jqwidgets/globalization/globalize.js',
								'assets/plugins/jqwidgets/jqxgrid.edit.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxcolorpicker.js',
								'assets/plugins/jqwidgets/jqxwindow.js',
								'assets/plugins/jqwidgets/jqxeditor.js',
								'assets/plugins/jqwidgets/jqxdraw.js',
								'assets/plugins/jqwidgets/jqxchart.core.js',
								'assets/plugins/jqwidgets/jqxgrid.aggregates.js',
								'assets/js/custom.js'
                            ]
                        });
                    }]
                }
            })
			.state('FilterSection', {
                url: '/configuration/filtersection',
                templateUrl: 'assets/views/filtersection.html',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
								'assets/plugins/jqwidgets/jqxcore.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxdata.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxswitchbutton.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxtabs.js',
								'assets/plugins/jqwidgets/jqxtree.js',
								'assets/plugins/jqwidgets/jqxmenu.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxlistbox.js',
								'assets/plugins/jqwidgets/jqxdropdownlist.js',
								'assets/plugins/jqwidgets/jqxgrid.js',
								'assets/plugins/jqwidgets/jqxgrid.sort.js',
								'assets/plugins/jqwidgets/jqxgrid.pager.js',
								'assets/plugins/jqwidgets/jqxgrid.selection.js',
								'assets/plugins/jqwidgets/jqxinput.js',
								'assets/plugins/jqwidgets/jqxgrid.filter.js',
								'assets/plugins/jqwidgets/jqxcalendar.js',
								'assets/plugins/jqwidgets/jqxradiobutton.js',
								'assets/plugins/jqwidgets/jqxnumberinput.js',
								'assets/plugins/jqwidgets/jqxdatetimeinput.js',
								'assets/plugins/jqwidgets/jqxtooltip.js',
								'assets/plugins/jqwidgets/globalization/globalize.js',
								'assets/plugins/jqwidgets/jqxgrid.edit.js',
								'assets/plugins/jqwidgets/jqxbuttons.js',
								'assets/plugins/jqwidgets/jqxcheckbox.js',
								'assets/plugins/jqwidgets/jqxscrollbar.js',
								'assets/plugins/jqwidgets/jqxpanel.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxdropdownbutton.js',
								'assets/plugins/jqwidgets/jqxcolorpicker.js',
								'assets/plugins/jqwidgets/jqxwindow.js',
								'assets/plugins/jqwidgets/jqxeditor.js',
								'assets/plugins/jqwidgets/jqxdraw.js',
								'assets/plugins/jqwidgets/jqxchart.core.js',
								'assets/plugins/jqwidgets/jqxgrid.aggregates.js',
								'assets/js/custom.js'
                            ]
                        });
                    }]
                }
            })
    }
]);

// Tooltips and Popovers configuration
App.config(['$uibTooltipProvider',
    function ($uibTooltipProvider) {
        $uibTooltipProvider.options({
            appendToBody: true
        });
    }
]);

// Custom UI helper functions
App.factory('uiHelpers', function () {
    return {
        // Handles active color theme
        uiHandleColorTheme: function (themeName) {
            var colorTheme = jQuery('#css-theme');

            if (themeName) {
                if (colorTheme.length && (colorTheme.prop('href') !== 'assets/css/themes/' + themeName + '.min.css')) {
                    jQuery('#css-theme').prop('href', 'assets/css/themes/' + themeName + '.min.css');
                } else if (!colorTheme.length) {
                    jQuery('#css-main').after('<link rel="stylesheet" id="css-theme" href="assets/css/themes/' + themeName + '.min.css">');
                }
            } else {
                if (colorTheme.length) {
                    colorTheme.remove();
                }
            }
        },
        // Handles #main-container height resize to push footer to the bottom of the page
        uiHandleMain: function () {
            var lMain       = jQuery('#main-container');
            var hWindow     = jQuery(window).height();
            var hHeader     = jQuery('#header-navbar').outerHeight();
            var hFooter     = jQuery('#page-footer').outerHeight();

            if (jQuery('#page-container').hasClass('header-navbar-fixed')) {
                lMain.css('min-height', hWindow - hFooter);
            } else {
                lMain.css('min-height', hWindow - (hHeader + hFooter));
            }
        },
        // Handles transparent header functionality (solid on scroll - used in frontend pages)
        uiHandleHeader: function () {
            var lPage = jQuery('#page-container');

            if (lPage.hasClass('header-navbar-fixed') && lPage.hasClass('header-navbar-transparent')) {
                jQuery(window).on('scroll', function(){
                    if (jQuery(this).scrollTop() > 20) {
                        lPage.addClass('header-navbar-scroll');
                    } else {
                        lPage.removeClass('header-navbar-scroll');
                    }
                });
            }
        },
        // Handles sidebar and side overlay custom scrolling functionality
        uiHandleScroll: function(mode) {
            var windowW            = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            var lPage              = jQuery('#page-container');
            var lSidebar           = jQuery('#sidebar');
            var lSidebarScroll     = jQuery('#sidebar-scroll');
            var lSideOverlay       = jQuery('#side-overlay');
            var lSideOverlayScroll = jQuery('#side-overlay-scroll');

            // Init scrolling
            if (mode === 'init') {
                // Init scrolling only if required the first time
                uiHandleScroll();
            } else {
                // If screen width is greater than 991 pixels and .side-scroll is added to #page-container
                if (windowW > 991 && lPage.hasClass('side-scroll') && (lSidebar.length || lSideOverlay.length)) {
                    // If sidebar exists
                    if (lSidebar.length) {
                        // Turn sidebar's scroll lock off (slimScroll will take care of it)
                        jQuery(lSidebar).scrollLock('disable');

                        // If sidebar scrolling does not exist init it..
                        if (lSidebarScroll.length && (!lSidebarScroll.parent('.slimScrollDiv').length)) {
                            lSidebarScroll.slimScroll({
                                height: lSidebar.outerHeight(),
                                color: '#fff',
                                size: '5px',
                                opacity : .35,
                                wheelStep : 15,
                                distance : '2px',
                                railVisible: false,
                                railOpacity: 1
                            });
                        }
                        else { // ..else resize scrolling height
                            lSidebarScroll
                                .add(lSidebarScroll.parent())
                                .css('height', lSidebar.outerHeight());
                        }
                    }

                    // If side overlay exists
                    if (lSideOverlay.length) {
                        // Turn side overlay's scroll lock off (slimScroll will take care of it)
                        jQuery(lSideOverlay).scrollLock('disable');

                        // If side overlay scrolling does not exist init it..
                        if (lSideOverlayScroll.length && (!lSideOverlayScroll.parent('.slimScrollDiv').length)) {
                            lSideOverlayScroll.slimScroll({
                                height: lSideOverlay.outerHeight(),
                                color: '#000',
                                size: '5px',
                                opacity : .35,
                                wheelStep : 15,
                                distance : '2px',
                                railVisible: false,
                                railOpacity: 1
                            });
                        }
                        else { // ..else resize scrolling height
                            lSideOverlayScroll
                                .add(lSideOverlayScroll.parent())
                                .css('height', lSideOverlay.outerHeight());
                        }
                    }
                } else {
                    // If sidebar exists
                    if (lSidebar.length) {
                        // If sidebar scrolling exists destroy it..
                        if (lSidebarScroll.length && lSidebarScroll.parent('.slimScrollDiv').length) {
                            lSidebarScroll
                                .slimScroll({destroy: true});
                            lSidebarScroll
                                .attr('style', '');
                        }

                        // Turn sidebars's scroll lock on
                        jQuery(lSidebar).scrollLock('enable');
                    }

                    // If side overlay exists
                    if (lSideOverlay.length) {
                        // If side overlay scrolling exists destroy it..
                        if (lSideOverlayScroll.length && lSideOverlayScroll.parent('.slimScrollDiv').length) {
                            lSideOverlayScroll
                                .slimScroll({destroy: true});
                            lSideOverlayScroll
                                .attr('style', '');
                        }

                        // Turn side overlay's scroll lock on
                        jQuery(lSideOverlay).scrollLock('enable');
                    }
                }
            }
        },
        // Handles page loader functionality
        uiLoader: function (mode) {
            var lBody       = jQuery('body');
            var lpageLoader = jQuery('#page-loader');

            if (mode === 'show') {
                if (lpageLoader.length) {
                    lpageLoader.fadeIn(250);
                } else {
                    lBody.prepend('<div id="page-loader"></div>');
                }
            } else if (mode === 'hide') {
                if (lpageLoader.length) {
                    lpageLoader.fadeOut(250);
                }
            }
        },
        // Handles blocks API functionality
        uiBlocks: function (block, mode, button) {
            // Set default icons for fullscreen and content toggle buttons
            var iconFullscreen         = 'si si-size-fullscreen';
            var iconFullscreenActive   = 'si si-size-actual';
            var iconContent            = 'si si-arrow-up';
            var iconContentActive      = 'si si-arrow-down';

            if (mode === 'init') {
                // Auto add the default toggle icons
                switch(button.data('action')) {
                    case 'fullscreen_toggle':
                        button.html('<i class="' + (button.closest('.block').hasClass('block-opt-fullscreen') ? iconFullscreenActive : iconFullscreen) + '"></i>');
                        break;
                    case 'content_toggle':
                        button.html('<i class="' + (button.closest('.block').hasClass('block-opt-hidden') ? iconContentActive : iconContent) + '"></i>');
                        break;
                    default:
                        return false;
                }
            } else {
                // Get block element
                var elBlock = (block instanceof jQuery) ? block : jQuery(block);

                // If element exists, procceed with blocks functionality
                if (elBlock.length) {
                    // Get block option buttons if exist (need them to update their icons)
                    var btnFullscreen  = jQuery('[data-js-block-option][data-action="fullscreen_toggle"]', elBlock);
                    var btnToggle      = jQuery('[data-js-block-option][data-action="content_toggle"]', elBlock);

                    // Mode selection
                    switch(mode) {
                        case 'fullscreen_toggle':
                            elBlock.toggleClass('block-opt-fullscreen');

                            // Enable/disable scroll lock to block
                            if (elBlock.hasClass('block-opt-fullscreen')) {
                                jQuery(elBlock).scrollLock('enable');
                            } else {
                                jQuery(elBlock).scrollLock('disable');
                            }

                            // Update block option icon
                            if (btnFullscreen.length) {
                                if (elBlock.hasClass('block-opt-fullscreen')) {
                                    jQuery('i', btnFullscreen)
                                        .removeClass(iconFullscreen)
                                        .addClass(iconFullscreenActive);
                                } else {
                                    jQuery('i', btnFullscreen)
                                        .removeClass(iconFullscreenActive)
                                        .addClass(iconFullscreen);
                                }
                            }
                            break;
                        case 'fullscreen_on':
                            elBlock.addClass('block-opt-fullscreen');

                            // Enable scroll lock to block
                            jQuery(elBlock).scrollLock('enable');

                            // Update block option icon
                            if (btnFullscreen.length) {
                                jQuery('i', btnFullscreen)
                                    .removeClass(iconFullscreen)
                                    .addClass(iconFullscreenActive);
                            }
                            break;
                        case 'fullscreen_off':
                            elBlock.removeClass('block-opt-fullscreen');

                            // Disable scroll lock to block
                            jQuery(elBlock).scrollLock('disable');

                            // Update block option icon
                            if (btnFullscreen.length) {
                                jQuery('i', btnFullscreen)
                                    .removeClass(iconFullscreenActive)
                                    .addClass(iconFullscreen);
                            }
                            break;
                        case 'content_toggle':
                            elBlock.toggleClass('block-opt-hidden');

                            // Update block option icon
                            if (btnToggle.length) {
                                if (elBlock.hasClass('block-opt-hidden')) {
                                    jQuery('i', btnToggle)
                                        .removeClass(iconContent)
                                        .addClass(iconContentActive);
                                } else {
                                    jQuery('i', btnToggle)
                                        .removeClass(iconContentActive)
                                        .addClass(iconContent);
                                }
                            }
                            break;
                        case 'content_hide':
                            elBlock.addClass('block-opt-hidden');

                            // Update block option icon
                            if (btnToggle.length) {
                                jQuery('i', btnToggle)
                                    .removeClass(iconContent)
                                    .addClass(iconContentActive);
                            }
                            break;
                        case 'content_show':
                            elBlock.removeClass('block-opt-hidden');

                            // Update block option icon
                            if (btnToggle.length) {
                                jQuery('i', btnToggle)
                                    .removeClass(iconContentActive)
                                    .addClass(iconContent);
                            }
                            break;
                        case 'refresh_toggle':
                            elBlock.toggleClass('block-opt-refresh');

                            // Return block to normal state if the demostration mode is on in the refresh option button - data-action-mode="demo"
                            if (jQuery('[data-js-block-option][data-action="refresh_toggle"][data-action-mode="demo"]', elBlock).length) {
                                setTimeout(function(){
                                    elBlock.removeClass('block-opt-refresh');
                                }, 2000);
                            }
                            break;
                        case 'state_loading':
                            elBlock.addClass('block-opt-refresh');
                            break;
                        case 'state_normal':
                            elBlock.removeClass('block-opt-refresh');
                            break;
                        case 'close':
                            elBlock.hide();
                            break;
                        case 'open':
                            elBlock.show();
                            break;
                        default:
                            return false;
                    }
                }
            }
        }
    };
});

// Run our App
App.run(function($rootScope, uiHelpers) {
    // Access uiHelpers easily from all controllers
    $rootScope.helpers = uiHelpers;

    // On window resize or orientation change resize #main-container & Handle scrolling
    var resizeTimeout;

    jQuery(window).on('resize orientationchange', function () {
        clearTimeout(resizeTimeout);

        resizeTimeout = setTimeout(function(){
            $rootScope.helpers.uiHandleScroll();
            $rootScope.helpers.uiHandleMain();
        }, 150);
    });
});

// Application Main Controller
App.controller('AppCtrl', ['$scope', '$localStorage', '$window',
    function ($scope, $localStorage, $window) {
        // Template Settings
        $scope.oneui = {
            version: '3.0', // Template version
            localStorage: false, // Enable/Disable local storage
            settings: {
                activeColorTheme: false, // Set a color theme of your choice, available: 'amethyst', 'city, 'flat', 'modern' and 'smooth'
                sidebarLeft: true, // true: Left Sidebar and right Side Overlay, false: Right Sidebar and left Side Overlay
                sidebarOpen: true, // Visible Sidebar by default (> 991px)
                sidebarOpenXs: false, // Visible Sidebar by default (< 992px)
                sidebarMini: false, // Mini hoverable Sidebar (> 991px)
                sideOverlayOpen: false, // Visible Side Overlay by default (> 991px)
                sideOverlayHover: false, // Hoverable Side Overlay (> 991px)
                sideScroll: true, // Enables custom scrolling on Sidebar and Side Overlay instead of native scrolling (> 991px)
                headerFixed: true // Enables fixed header
            }
        };

        // If local storage setting is enabled
        if ($scope.oneui.localStorage) {
            // Save/Restore local storage settings
            if ($scope.oneui.localStorage) {
                if (angular.isDefined($localStorage.oneuiSettings)) {
                    $scope.oneui.settings = $localStorage.oneuiSettings;
                } else {
                    $localStorage.oneuiSettings = $scope.oneui.settings;
                }
            }

            // Watch for settings changes
            $scope.$watch('oneui.settings', function () {
                // If settings are changed then save them to localstorage
                $localStorage.oneuiSettings = $scope.oneui.settings;
            }, true);
        }

        // Watch for activeColorTheme variable update
        $scope.$watch('oneui.settings.activeColorTheme', function () {
            // Handle Color Theme
            $scope.helpers.uiHandleColorTheme($scope.oneui.settings.activeColorTheme);
        }, true);

        // Watch for sideScroll variable update
        $scope.$watch('oneui.settings.sideScroll', function () {
            // Handle Scrolling
            setTimeout(function () {
                $scope.helpers.uiHandleScroll();
            }, 150);
        }, true);

        // When view content is loaded
        $scope.$on('$viewContentLoaded', function () {
            // Hide page loader
            $scope.helpers.uiLoader('hide');

            // Resize #main-container
            $scope.helpers.uiHandleMain();
        });
    }
]);

/**Partial views controllers**/

// Side Overlay Controller
App.controller('SideOverlayCtrl', ['$scope', '$localStorage', '$window',
    function ($scope, $localStorage, $window) {
        // When view content is loaded
        $scope.$on('$includeContentLoaded', function () {
            // Handle Scrolling
            $scope.helpers.uiHandleScroll();
        });
    }
]);

// Sidebar Controller
App.controller('SidebarCtrl', ['$scope', '$localStorage', '$window', '$location',
    function ($scope, $localStorage, $window, $location) {
        // When view content is loaded
        $scope.$on('$includeContentLoaded', function () {
            // Handle Scrolling
            $scope.helpers.uiHandleScroll();

            // Get current path to use it for adding active classes to our submenus
            $scope.path = $location.path();
        });
    }
]);

// Header Controller
App.controller('HeaderCtrl', ['$scope', '$localStorage', '$window',
    function ($scope, $localStorage, $window) {
        // When view content is loaded
        $scope.$on('$includeContentLoaded', function () {
            // Transparent header functionality
            $scope.helpers.uiHandleHeader();
        });
    }
]);