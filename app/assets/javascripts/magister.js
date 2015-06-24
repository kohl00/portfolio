// global. currently active menu item 
var current_item = 0;

// few settings
var section_hide_time = 1300;
var section_show_time = 1000;

// jQuery stuff
jQuery(document).ready(function($) {

	//email form
	$('#contact_form').filter( function(){
		$('textarea').on('focus',function(){
				$(this).val('');
			});
		});
	//email form
	$('.contact_form').on('click','#reshow_form', function(){
		$(this).add('h1').remove();
		$('.contact_form').find('#contact_form').fadeIn(section_show_time);
		$('textarea').val('');

	});

	// Switch section
	$("a", '.mainmenu').on('click',function() 
	{
		
		//show hide fadein sections

		if( ! $(this).hasClass('active') ) { 
			current_item = this;
			// close all visible divs with the class of .section
			$('.section:visible').fadeOut( section_hide_time, function() { 
				$('a', '.mainmenu').removeClass( 'active' );  
				$(current_item).addClass( 'active' );
				var new_section = $( $(current_item).attr('href') );
				new_section.fadeIn( section_show_time);
			} );
		}

		return true;
	});	

	//Date Footer
	var date = new Date();
	var $dateNode = $("<p>").addClass("date");
	$("section").find(".container").after($dateNode.text("Built with <3 by Kohl in " + date.getFullYear() + "!"));

});
