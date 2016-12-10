function one_full(){
	count = count + 1;
	$(".containerpro").append("<div class='m-t-20 outer-box animate-box fadeInUp animated col-md-12'><div class='services'><div class='border-bottom bg-gray-light'><button class='btn btn-add-width' onclick='changewidth(this);' title='Increase width'><i class='fa fa-plus'></i></button><button class='btn btn-reduce-width' onclick='reducewidth(this);' title='Decrease width'><i class='fa fa-minus'></i></button><button class='btn btn-add-section pull-right' onclick='removeone(this);' title='Delete Element'><i class='fa fa-trash'></i></button><button class='btn btn-add-section pull-right' onclick='cloneone(this);' title='Clone Element'><i class='fa fa-clone'></i></button><button class='btn btn-add-section pull-right' onclick='openpop(this);' title='Edit Element'><i class='fa fa-pencil'></i></button><div class='clearfix'></div></div><div class='desc spacer' id='spacer"+count+"'></div></div></div>");
	dragdrop();
	sorting();
}
function one_two(){
	count = count + 1;
	$(".containerpro").append("<div class='m-t-20 outer-box animate-box fadeInUp animated col-md-6'><div class='services'><div class='border-bottom bg-gray-light'><button class='btn btn-add-width' onclick='changewidth(this);' title='Increase width'><i class='fa fa-plus'></i></button><button class='btn btn-reduce-width' onclick='reducewidth(this);' title='Decrease width'><i class='fa fa-minus'></i></button><button class='btn btn-add-section pull-right' onclick='removeone(this);' title='Delete Element'><i class='fa fa-trash'></i></button><button class='btn btn-add-section pull-right' onclick='cloneone(this);' title='Clone Element'><i class='fa fa-clone'></i></button><button class='btn btn-add-section pull-right' onclick='openpop(this);' title='Edit Element'><i class='fa fa-pencil'></i></button><div class='clearfix'></div></div><div class='desc spacer' id='spacer"+count+"'></div></div></div>");
	dragdrop();
	sorting();
}
function one_three(){
	count = count + 1;
	$(".containerpro").append("<div class='m-t-20 outer-box animate-box fadeInUp animated col-md-4'><div class='services'><div class='border-bottom bg-gray-light'><button class='btn btn-add-width' onclick='changewidth(this);' title='Increase width'><i class='fa fa-plus'></i></button><button class='btn btn-reduce-width' onclick='reducewidth(this);' title='Decrease width'><i class='fa fa-minus'></i></button><button class='btn btn-add-section pull-right' onclick='removeone(this);' title='Delete Element'><i class='fa fa-trash'></i></button><button class='btn btn-add-section pull-right' onclick='cloneone(this);' title='Clone Element'><i class='fa fa-clone'></i></button><button class='btn btn-add-section pull-right' onclick='openpop(this);' title='Edit Element'><i class='fa fa-pencil'></i></button><div class='clearfix'></div></div><div class='desc spacer' id='spacer"+count+"'></div></div></div>");
	dragdrop();
	sorting();
}
function two_three(){
	count = count + 1;
	$(".containerpro").append("<div class='m-t-20 outer-box animate-box fadeInUp animated col-md-8'><div class='services'><div class='border-bottom bg-gray-light'><button class='btn btn-add-width' onclick='changewidth(this);' title='Increase width'><i class='fa fa-plus'></i></button><button class='btn btn-reduce-width' onclick='reducewidth(this);' title='Decrease width'><i class='fa fa-minus'></i></button><button class='btn btn-add-section pull-right' onclick='removeone(this);' title='Delete Element'><i class='fa fa-trash'></i></button><button class='btn btn-add-section pull-right' onclick='cloneone(this);' title='Clone Element'><i class='fa fa-clone'></i></button><button class='btn btn-add-section pull-right' onclick='openpop(this);' title='Edit Element'><i class='fa fa-pencil'></i></button><div class='clearfix'></div></div><div class='desc spacer' id='spacer"+count+"'></div></div></div>");
	dragdrop();
	sorting();
}
function one_four(){
	count = count + 1;
	$(".containerpro").append("<div class='m-t-20 outer-box animate-box fadeInUp animated col-md-3'><div class='services'><div class='border-bottom bg-gray-light'><button class='btn btn-add-width' onclick='changewidth(this);' title='Increase width'><i class='fa fa-plus'></i></button><button class='btn btn-reduce-width' onclick='reducewidth(this);' title='Decrease width'><i class='fa fa-minus'></i></button><button class='btn btn-add-section pull-right' onclick='removeone(this);' title='Delete Element'><i class='fa fa-trash'></i></button><button class='btn btn-add-section pull-right' onclick='cloneone(this);' title='Clone Element'><i class='fa fa-clone'></i></button><button class='btn btn-add-section pull-right' onclick='openpop(this);' title='Edit Element'><i class='fa fa-pencil'></i></button><div class='clearfix'></div></div><div class='desc spacer' id='spacer"+count+"'></div></div></div>");
	dragdrop();
	sorting();
}
function three_four(){
	count = count + 1;
	$(".containerpro").append("<div class='m-t-20 outer-box animate-box fadeInUp animated col-md-9'><div class='services'><div class='border-bottom bg-gray-light'><button class='btn btn-add-width' onclick='changewidth(this);' title='Increase width'><i class='fa fa-plus'></i></button><button class='btn btn-reduce-width' onclick='reducewidth(this);' title='Decrease width'><i class='fa fa-minus'></i></button><button class='btn btn-add-section pull-right' onclick='removeone(this);' title='Delete Element'><i class='fa fa-trash'></i></button><button class='btn btn-add-section pull-right' onclick='cloneone(this);' title='Clone Element'><i class='fa fa-clone'></i></button><button class='btn btn-add-section pull-right' onclick='openpop(this);' title='Edit Element'><i class='fa fa-pencil'></i></button><div class='clearfix'></div></div><div class='desc spacer' id='spacer"+count+"'></div></div></div>");
	dragdrop();
	sorting();
}

/*Remove section*/
function removeone(id){
	var curr = $(id).parents('.outer-box');
	$(curr).remove();
}
function removetwo(id) {
	var curr = $(id).parents('.builder-option');
	$(curr).remove();
}
var count = 0;

/*Change Section width*/	
function changewidth(id) {
	var curr = $(id).parents('.outer-box');
	$(curr).removeClass('ui-sortable-handle');
	var test = $(curr).attr('class');
	var subStr1 = test.match("col-md-(.*)");
    var i = subStr1[1];
	if($(curr).hasClass('col-md-'+i)){
		$(curr).removeClass('col-md-'+i);
		if(i<12 && i>=2){
			i++;
		}
		else {
			i;	
		}
		$(curr).addClass('col-md-'+i);
	};
};
function reducewidth(id) {
	var curr = $(id).parents('.outer-box');	
	$(curr).removeClass('ui-sortable-handle');
	var test = $(curr).attr('class');
	var subStr1 = test.match("col-md-(.*)");
    var i = subStr1[1];
	if($(curr).hasClass('col-md-'+i)){
		$(curr).removeClass('col-md-'+i);
		if(i<=12 && i>2){
			i--;
		}
		else {
			i;	
		}
		$(curr).addClass('col-md-'+i);
	};
};	
function cloneone(id) {
	var curr = $(id).parents('.outer-box');
	//$(curr).clone().appendTo(".containerpro");
	$(curr).clone().insertAfter(curr);
};

/*Column and Builder Options*/
function columnoption(id){
	$(id).siblings().removeClass('btn-primary');
	$(id).siblings().addClass('btn-default');
	$(id).removeClass('btn-default');
	$(id).addClass('btn-primary');
	$('.column-option-list').show();
	$('.builder-option-list').hide();
}
function builderoption(id){
	$(id).siblings().removeClass('btn-primary');
	$(id).siblings().addClass('btn-default');
	$(id).removeClass('btn-default');
	$(id).addClass('btn-primary');
	$('.column-option-list').hide();
	$('.builder-option-list').show();
}

function openpop(id){
	alert('yes');
}

function openpopin(id){
	if($(id).parents().hasClass('box_text_block')){
		$("#popup-2").dialog("open");
		$(id).parent().siblings('.in_box_block').addClass('editing');
	}
	if($(id).parents().hasClass('box_title')){
		$("#popup-3").dialog("open");
		$(id).parent().siblings('.in_box_block').addClass('editing');
	}
	if($(id).parents().hasClass('box_image')){
		$("#popup-4").dialog("open");
		$(id).parent().siblings('.in_box_block').addClass('editing');	
	}
}
function content_btn(id) {
	var valu = $('.textareapro').val();
	$('.editing').html("<div class='text'>"+ valu + "</div>");
	$('.textareapro').val('');
	$("#popup-2").dialog("close");
	$('.in_box_block').removeClass('editing');
}

function input_title_btn(id) {
	var valu = $('.inputareapro').val();
	$('.editing').html("<div class='heading'>"+ valu + "</div>");
	$('.inputareapro').val('');
	$("#popup-3").dialog("close");
	$('.in_box_block').removeClass('editing');
}
function imgprott(id) {
    var valu = $(id).html();
	$('.editing').html("<div>"+valu+"</div>");	
	$('.inputareapro').val('');
    $("#popup-4").dialog("close");
	$('.in_box_block').removeClass('editing');
}


function dragdrop(){
	$(function(){
		$(".spacer").sortable({
			revert: true,
		});
		$(".builder-option-list .builder-option").each(function(){
			$(this).draggable({ 
				connectToSortable: '.spacer',
				containment: ".section", 
				cursor: 'move',
				helper: 'clone',
				zIndex: 100,
				stop : function(event, ui){		
                   	box_control();
				},
				revert: false,
				scroll: false,
			});
		});
		$(".spacer").droppable({
			accept: ".builder-option-list .builder-option",
			drop: function(event, ui){
				$(this).append($(ui.draggable).clone());
			}
		});		
	});	
}

function sorting(){
	$('.containerpro').sortable({		
		placeholder: "ui-state-highlight",
	});
	$( ".containerpro" ).disableSelection();
};

function box_control(){
	var curr = $('.spacer').children('.builder-option');
	var	curr1 = $(curr).children();	
	$(curr1).siblings('.box_control').remove();
	$("<div class='box_control'><button class='btn btn-add-section pull-right' onclick='removetwo(this);'><i class='fa fa-trash'></i></button><button class='btn btn-add-section pull-right' onclick='openpopin(this);'><i class='fa fa-pencil'></i></button></div>").insertBefore(curr1);
};

