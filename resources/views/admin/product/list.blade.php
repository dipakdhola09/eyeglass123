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
                    <!-- Header Tiles -->
                    <div class="row">
                        <div class="col-sm-6 col-md-3">
                            <a class="block block-link-hover3 text-center" href="base_pages_ecom_product_edit.html">
                                <div class="block-content block-content-full">
                                    <div class="h1 font-w700 text-success"><i class="fa fa-plus"></i></div>
                                </div>
                                <div class="block-content block-content-full block-content-mini bg-gray-lighter text-success font-w600">Add New Product</div>
                            </a>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <a class="block block-link-hover3 text-center" href="javascript:void(0)">
                                <div class="block-content block-content-full">
                                    <div class="h1 font-w700 text-danger" data-toggle="countTo" data-to="15"></div>
                                </div>
                                <div class="block-content block-content-full block-content-mini bg-gray-lighter text-danger font-w600">Out of Stock</div>
                            </a>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <a class="block block-link-hover3 text-center" href="javascript:void(0)">
                                <div class="block-content block-content-full">
                                    <div class="h1 font-w700" data-toggle="countTo" data-to="100"></div>
                                </div>
                                <div class="block-content block-content-full block-content-mini bg-gray-lighter text-muted font-w600">Top Sellers</div>
                            </a>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <a class="block block-link-hover3 text-center" href="javascript:void(0)">
                                <div class="block-content block-content-full">
                                    <div class="h1 font-w700" data-toggle="countTo" data-to="8750"></div>
                                </div>
                                <div class="block-content block-content-full block-content-mini bg-gray-lighter text-muted font-w600">All Products</div>
                            </a>
                        </div>
                    </div>
                    <!-- END Header Tiles -->

                    <!-- All Products -->
                    <div class="block">
                        <div class="block-header bg-gray-lighter">
                            <ul class="block-options">
                                <li class="dropdown">
                                    <button type="button" data-toggle="dropdown">Filter <span class="caret"></span></button>
                                    <ul class="dropdown-menu dropdown-menu-right">
                                        <li>
                                            <a tabindex="-1" href="javascript:void(0)"><span class="badge pull-right">90</span>New</a>
                                        </li>
                                        <li>
                                            <a tabindex="-1" href="javascript:void(0)"><span class="badge pull-right">15</span>Out of Stock</a>
                                        </li>
                                        <li>
                                            <a tabindex="-1" href="javascript:void(0)"><span class="badge pull-right">8750</span>All</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <h3 class="block-title">All Products</h3>
                        </div>
                        <div class="block-content">
                            <table class="table table-borderless table-striped table-vcenter">
                                <thead>
                                    <tr>
                                        <th class="text-center" style="width: 100px;">ID</th>
                                        <th class="visible-lg">Product</th>
                                        <th class="hidden-xs text-center">Added</th>
                                        <th>Status</th>
                                        <th class="hidden-xs text-right">Value</th>
                                        <th class="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="text-center">
                                            <a class="font-" href="base_pages_ecom_product_edit.html">
                                                <strong>PID.01535</strong>
                                            </a>
                                        </td>
                                        <td class="visible-lg">
                                            <a href="base_pages_ecom_product_edit.html">Product #35</a>
                                        </td>
                                        <td class="hidden-xs text-center">05/01/2015</td>
                                        <td>
                                            <span class="label label-danger">Out of Stock</span>
                                        </td>
                                        <td class="text-right hidden-xs">
                                            <strong>$16,00</strong>
                                        </td>
                                        <td class="text-center">
                                            <div class="btn-group btn-group-xs">
                                                <a href="base_pages_ecom_product_edit.html" data-toggle="tooltip" title="View" class="btn btn-default"><i class="fa fa-eye"></i></a>
                                                <a href="javascript:void(0)" data-toggle="tooltip" title="Delete" class="btn btn-default"><i class="fa fa-times text-danger"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">
                                            <a class="font-" href="base_pages_ecom_product_edit.html">
                                                <strong>PID.01534</strong>
                                            </a>
                                        </td>
                                        <td class="visible-lg">
                                            <a href="base_pages_ecom_product_edit.html">Product #34</a>
                                        </td>
                                        <td class="hidden-xs text-center">21/06/2015</td>
                                        <td>
                                            <span class="label label-danger">Out of Stock</span>
                                        </td>
                                        <td class="text-right hidden-xs">
                                            <strong>$19,00</strong>
                                        </td>
                                        <td class="text-center">
                                            <div class="btn-group btn-group-xs">
                                                <a href="base_pages_ecom_product_edit.html" data-toggle="tooltip" title="View" class="btn btn-default"><i class="fa fa-eye"></i></a>
                                                <a href="javascript:void(0)" data-toggle="tooltip" title="Delete" class="btn btn-default"><i class="fa fa-times text-danger"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">
                                            <a class="font-" href="base_pages_ecom_product_edit.html">
                                                <strong>PID.01533</strong>
                                            </a>
                                        </td>
                                        <td class="visible-lg">
                                            <a href="base_pages_ecom_product_edit.html">Product #33</a>
                                        </td>
                                        <td class="hidden-xs text-center">14/10/2015</td>
                                        <td>
                                            <span class="label label-success">Available</span>
                                        </td>
                                        <td class="text-right hidden-xs">
                                            <strong>$97,00</strong>
                                        </td>
                                        <td class="text-center">
                                            <div class="btn-group btn-group-xs">
                                                <a href="base_pages_ecom_product_edit.html" data-toggle="tooltip" title="View" class="btn btn-default"><i class="fa fa-eye"></i></a>
                                                <a href="javascript:void(0)" data-toggle="tooltip" title="Delete" class="btn btn-default"><i class="fa fa-times text-danger"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">
                                            <a class="font-" href="base_pages_ecom_product_edit.html">
                                                <strong>PID.01532</strong>
                                            </a>
                                        </td>
                                        <td class="visible-lg">
                                            <a href="base_pages_ecom_product_edit.html">Product #32</a>
                                        </td>
                                        <td class="hidden-xs text-center">09/10/2015</td>
                                        <td>
                                            <span class="label label-success">Available</span>
                                        </td>
                                        <td class="text-right hidden-xs">
                                            <strong>$43,00</strong>
                                        </td>
                                        <td class="text-center">
                                            <div class="btn-group btn-group-xs">
                                                <a href="base_pages_ecom_product_edit.html" data-toggle="tooltip" title="View" class="btn btn-default"><i class="fa fa-eye"></i></a>
                                                <a href="javascript:void(0)" data-toggle="tooltip" title="Delete" class="btn btn-default"><i class="fa fa-times text-danger"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">
                                            <a class="font-" href="base_pages_ecom_product_edit.html">
                                                <strong>PID.01531</strong>
                                            </a>
                                        </td>
                                        <td class="visible-lg">
                                            <a href="base_pages_ecom_product_edit.html">Product #31</a>
                                        </td>
                                        <td class="hidden-xs text-center">16/12/2015</td>
                                        <td>
                                            <span class="label label-danger">Out of Stock</span>
                                        </td>
                                        <td class="text-right hidden-xs">
                                            <strong>$58,00</strong>
                                        </td>
                                        <td class="text-center">
                                            <div class="btn-group btn-group-xs">
                                                <a href="base_pages_ecom_product_edit.html" data-toggle="tooltip" title="View" class="btn btn-default"><i class="fa fa-eye"></i></a>
                                                <a href="javascript:void(0)" data-toggle="tooltip" title="Delete" class="btn btn-default"><i class="fa fa-times text-danger"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">
                                            <a class="font-" href="base_pages_ecom_product_edit.html">
                                                <strong>PID.01530</strong>
                                            </a>
                                        </td>
                                        <td class="visible-lg">
                                            <a href="base_pages_ecom_product_edit.html">Product #30</a>
                                        </td>
                                        <td class="hidden-xs text-center">01/05/2015</td>
                                        <td>
                                            <span class="label label-success">Available</span>
                                        </td>
                                        <td class="text-right hidden-xs">
                                            <strong>$27,00</strong>
                                        </td>
                                        <td class="text-center">
                                            <div class="btn-group btn-group-xs">
                                                <a href="base_pages_ecom_product_edit.html" data-toggle="tooltip" title="View" class="btn btn-default"><i class="fa fa-eye"></i></a>
                                                <a href="javascript:void(0)" data-toggle="tooltip" title="Delete" class="btn btn-default"><i class="fa fa-times text-danger"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">
                                            <a class="font-" href="base_pages_ecom_product_edit.html">
                                                <strong>PID.01529</strong>
                                            </a>
                                        </td>
                                        <td class="visible-lg">
                                            <a href="base_pages_ecom_product_edit.html">Product #29</a>
                                        </td>
                                        <td class="hidden-xs text-center">02/06/2015</td>
                                        <td>
                                            <span class="label label-success">Available</span>
                                        </td>
                                        <td class="text-right hidden-xs">
                                            <strong>$59,00</strong>
                                        </td>
                                        <td class="text-center">
                                            <div class="btn-group btn-group-xs">
                                                <a href="base_pages_ecom_product_edit.html" data-toggle="tooltip" title="View" class="btn btn-default"><i class="fa fa-eye"></i></a>
                                                <a href="javascript:void(0)" data-toggle="tooltip" title="Delete" class="btn btn-default"><i class="fa fa-times text-danger"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">
                                            <a class="font-" href="base_pages_ecom_product_edit.html">
                                                <strong>PID.01528</strong>
                                            </a>
                                        </td>
                                        <td class="visible-lg">
                                            <a href="base_pages_ecom_product_edit.html">Product #28</a>
                                        </td>
                                        <td class="hidden-xs text-center">15/03/2015</td>
                                        <td>
                                            <span class="label label-success">Available</span>
                                        </td>
                                        <td class="text-right hidden-xs">
                                            <strong>$38,00</strong>
                                        </td>
                                        <td class="text-center">
                                            <div class="btn-group btn-group-xs">
                                                <a href="base_pages_ecom_product_edit.html" data-toggle="tooltip" title="View" class="btn btn-default"><i class="fa fa-eye"></i></a>
                                                <a href="javascript:void(0)" data-toggle="tooltip" title="Delete" class="btn btn-default"><i class="fa fa-times text-danger"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">
                                            <a class="font-" href="base_pages_ecom_product_edit.html">
                                                <strong>PID.01527</strong>
                                            </a>
                                        </td>
                                        <td class="visible-lg">
                                            <a href="base_pages_ecom_product_edit.html">Product #27</a>
                                        </td>
                                        <td class="hidden-xs text-center">22/12/2015</td>
                                        <td>
                                            <span class="label label-success">Available</span>
                                        </td>
                                        <td class="text-right hidden-xs">
                                            <strong>$75,00</strong>
                                        </td>
                                        <td class="text-center">
                                            <div class="btn-group btn-group-xs">
                                                <a href="base_pages_ecom_product_edit.html" data-toggle="tooltip" title="View" class="btn btn-default"><i class="fa fa-eye"></i></a>
                                                <a href="javascript:void(0)" data-toggle="tooltip" title="Delete" class="btn btn-default"><i class="fa fa-times text-danger"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">
                                            <a class="font-" href="base_pages_ecom_product_edit.html">
                                                <strong>PID.01526</strong>
                                            </a>
                                        </td>
                                        <td class="visible-lg">
                                            <a href="base_pages_ecom_product_edit.html">Product #26</a>
                                        </td>
                                        <td class="hidden-xs text-center">18/10/2015</td>
                                        <td>
                                            <span class="label label-danger">Out of Stock</span>
                                        </td>
                                        <td class="text-right hidden-xs">
                                            <strong>$54,00</strong>
                                        </td>
                                        <td class="text-center">
                                            <div class="btn-group btn-group-xs">
                                                <a href="base_pages_ecom_product_edit.html" data-toggle="tooltip" title="View" class="btn btn-default"><i class="fa fa-eye"></i></a>
                                                <a href="javascript:void(0)" data-toggle="tooltip" title="Delete" class="btn btn-default"><i class="fa fa-times text-danger"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">
                                            <a class="font-" href="base_pages_ecom_product_edit.html">
                                                <strong>PID.01525</strong>
                                            </a>
                                        </td>
                                        <td class="visible-lg">
                                            <a href="base_pages_ecom_product_edit.html">Product #25</a>
                                        </td>
                                        <td class="hidden-xs text-center">13/03/2015</td>
                                        <td>
                                            <span class="label label-danger">Out of Stock</span>
                                        </td>
                                        <td class="text-right hidden-xs">
                                            <strong>$85,00</strong>
                                        </td>
                                        <td class="text-center">
                                            <div class="btn-group btn-group-xs">
                                                <a href="base_pages_ecom_product_edit.html" data-toggle="tooltip" title="View" class="btn btn-default"><i class="fa fa-eye"></i></a>
                                                <a href="javascript:void(0)" data-toggle="tooltip" title="Delete" class="btn btn-default"><i class="fa fa-times text-danger"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">
                                            <a class="font-" href="base_pages_ecom_product_edit.html">
                                                <strong>PID.01524</strong>
                                            </a>
                                        </td>
                                        <td class="visible-lg">
                                            <a href="base_pages_ecom_product_edit.html">Product #24</a>
                                        </td>
                                        <td class="hidden-xs text-center">03/01/2015</td>
                                        <td>
                                            <span class="label label-success">Available</span>
                                        </td>
                                        <td class="text-right hidden-xs">
                                            <strong>$53,00</strong>
                                        </td>
                                        <td class="text-center">
                                            <div class="btn-group btn-group-xs">
                                                <a href="base_pages_ecom_product_edit.html" data-toggle="tooltip" title="View" class="btn btn-default"><i class="fa fa-eye"></i></a>
                                                <a href="javascript:void(0)" data-toggle="tooltip" title="Delete" class="btn btn-default"><i class="fa fa-times text-danger"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">
                                            <a class="font-" href="base_pages_ecom_product_edit.html">
                                                <strong>PID.01523</strong>
                                            </a>
                                        </td>
                                        <td class="visible-lg">
                                            <a href="base_pages_ecom_product_edit.html">Product #23</a>
                                        </td>
                                        <td class="hidden-xs text-center">24/11/2015</td>
                                        <td>
                                            <span class="label label-success">Available</span>
                                        </td>
                                        <td class="text-right hidden-xs">
                                            <strong>$67,00</strong>
                                        </td>
                                        <td class="text-center">
                                            <div class="btn-group btn-group-xs">
                                                <a href="base_pages_ecom_product_edit.html" data-toggle="tooltip" title="View" class="btn btn-default"><i class="fa fa-eye"></i></a>
                                                <a href="javascript:void(0)" data-toggle="tooltip" title="Delete" class="btn btn-default"><i class="fa fa-times text-danger"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">
                                            <a class="font-" href="base_pages_ecom_product_edit.html">
                                                <strong>PID.01522</strong>
                                            </a>
                                        </td>
                                        <td class="visible-lg">
                                            <a href="base_pages_ecom_product_edit.html">Product #22</a>
                                        </td>
                                        <td class="hidden-xs text-center">18/08/2015</td>
                                        <td>
                                            <span class="label label-danger">Out of Stock</span>
                                        </td>
                                        <td class="text-right hidden-xs">
                                            <strong>$12,00</strong>
                                        </td>
                                        <td class="text-center">
                                            <div class="btn-group btn-group-xs">
                                                <a href="base_pages_ecom_product_edit.html" data-toggle="tooltip" title="View" class="btn btn-default"><i class="fa fa-eye"></i></a>
                                                <a href="javascript:void(0)" data-toggle="tooltip" title="Delete" class="btn btn-default"><i class="fa fa-times text-danger"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">
                                            <a class="font-" href="base_pages_ecom_product_edit.html">
                                                <strong>PID.01521</strong>
                                            </a>
                                        </td>
                                        <td class="visible-lg">
                                            <a href="base_pages_ecom_product_edit.html">Product #21</a>
                                        </td>
                                        <td class="hidden-xs text-center">20/10/2015</td>
                                        <td>
                                            <span class="label label-danger">Out of Stock</span>
                                        </td>
                                        <td class="text-right hidden-xs">
                                            <strong>$87,00</strong>
                                        </td>
                                        <td class="text-center">
                                            <div class="btn-group btn-group-xs">
                                                <a href="base_pages_ecom_product_edit.html" data-toggle="tooltip" title="View" class="btn btn-default"><i class="fa fa-eye"></i></a>
                                                <a href="javascript:void(0)" data-toggle="tooltip" title="Delete" class="btn btn-default"><i class="fa fa-times text-danger"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">
                                            <a class="font-" href="base_pages_ecom_product_edit.html">
                                                <strong>PID.01520</strong>
                                            </a>
                                        </td>
                                        <td class="visible-lg">
                                            <a href="base_pages_ecom_product_edit.html">Product #20</a>
                                        </td>
                                        <td class="hidden-xs text-center">28/05/2015</td>
                                        <td>
                                            <span class="label label-success">Available</span>
                                        </td>
                                        <td class="text-right hidden-xs">
                                            <strong>$87,00</strong>
                                        </td>
                                        <td class="text-center">
                                            <div class="btn-group btn-group-xs">
                                                <a href="base_pages_ecom_product_edit.html" data-toggle="tooltip" title="View" class="btn btn-default"><i class="fa fa-eye"></i></a>
                                                <a href="javascript:void(0)" data-toggle="tooltip" title="Delete" class="btn btn-default"><i class="fa fa-times text-danger"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">
                                            <a class="font-" href="base_pages_ecom_product_edit.html">
                                                <strong>PID.01519</strong>
                                            </a>
                                        </td>
                                        <td class="visible-lg">
                                            <a href="base_pages_ecom_product_edit.html">Product #19</a>
                                        </td>
                                        <td class="hidden-xs text-center">22/10/2015</td>
                                        <td>
                                            <span class="label label-danger">Out of Stock</span>
                                        </td>
                                        <td class="text-right hidden-xs">
                                            <strong>$33,00</strong>
                                        </td>
                                        <td class="text-center">
                                            <div class="btn-group btn-group-xs">
                                                <a href="base_pages_ecom_product_edit.html" data-toggle="tooltip" title="View" class="btn btn-default"><i class="fa fa-eye"></i></a>
                                                <a href="javascript:void(0)" data-toggle="tooltip" title="Delete" class="btn btn-default"><i class="fa fa-times text-danger"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">
                                            <a class="font-" href="base_pages_ecom_product_edit.html">
                                                <strong>PID.01518</strong>
                                            </a>
                                        </td>
                                        <td class="visible-lg">
                                            <a href="base_pages_ecom_product_edit.html">Product #18</a>
                                        </td>
                                        <td class="hidden-xs text-center">27/12/2015</td>
                                        <td>
                                            <span class="label label-danger">Out of Stock</span>
                                        </td>
                                        <td class="text-right hidden-xs">
                                            <strong>$78,00</strong>
                                        </td>
                                        <td class="text-center">
                                            <div class="btn-group btn-group-xs">
                                                <a href="base_pages_ecom_product_edit.html" data-toggle="tooltip" title="View" class="btn btn-default"><i class="fa fa-eye"></i></a>
                                                <a href="javascript:void(0)" data-toggle="tooltip" title="Delete" class="btn btn-default"><i class="fa fa-times text-danger"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">
                                            <a class="font-" href="base_pages_ecom_product_edit.html">
                                                <strong>PID.01517</strong>
                                            </a>
                                        </td>
                                        <td class="visible-lg">
                                            <a href="base_pages_ecom_product_edit.html">Product #17</a>
                                        </td>
                                        <td class="hidden-xs text-center">23/06/2015</td>
                                        <td>
                                            <span class="label label-danger">Out of Stock</span>
                                        </td>
                                        <td class="text-right hidden-xs">
                                            <strong>$63,00</strong>
                                        </td>
                                        <td class="text-center">
                                            <div class="btn-group btn-group-xs">
                                                <a href="base_pages_ecom_product_edit.html" data-toggle="tooltip" title="View" class="btn btn-default"><i class="fa fa-eye"></i></a>
                                                <a href="javascript:void(0)" data-toggle="tooltip" title="Delete" class="btn btn-default"><i class="fa fa-times text-danger"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">
                                            <a class="font-" href="base_pages_ecom_product_edit.html">
                                                <strong>PID.01516</strong>
                                            </a>
                                        </td>
                                        <td class="visible-lg">
                                            <a href="base_pages_ecom_product_edit.html">Product #16</a>
                                        </td>
                                        <td class="hidden-xs text-center">07/03/2015</td>
                                        <td>
                                            <span class="label label-danger">Out of Stock</span>
                                        </td>
                                        <td class="text-right hidden-xs">
                                            <strong>$52,00</strong>
                                        </td>
                                        <td class="text-center">
                                            <div class="btn-group btn-group-xs">
                                                <a href="base_pages_ecom_product_edit.html" data-toggle="tooltip" title="View" class="btn btn-default"><i class="fa fa-eye"></i></a>
                                                <a href="javascript:void(0)" data-toggle="tooltip" title="Delete" class="btn btn-default"><i class="fa fa-times text-danger"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <nav class="text-right">
                                <ul class="pagination pagination-sm">
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
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <!-- END All Products -->
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