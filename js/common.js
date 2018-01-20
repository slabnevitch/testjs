alert('js');
$(function() {
	alert('js-in');



    $(".toggle-mnu").click(function() {
        $(this).toggleClass("on");
        $(".header nav").toggleClass('active');
        return false;
    });



	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	// Accordeon-----------------------------------
		$('.acordeon-link').click(function(e) {
			e.preventDefault();
			var $currentItem = $(this).closest('.acordeon-item'),
				$mark = $(this).find('.requirements-link__mark');

			$mark.toggleClass('active');
			if($mark.hasClass('active')){
				$mark.text('–');
			}else{
				$mark.text('+');
			}
			if($currentItem.hasClass('acordeon-item-with-sublist')){

				$mark.toggleClass('opened');
				$currentItem.find('.acordeon-sublist')
				.stop(true, true)
				.slideToggle();
				$currentItem.siblings()
				.find('.acordeon-sublist')
				.stop(true, true)
				.slideUp();

				$currentItem.siblings()
				.find('.requirements-link__mark')
				.text('+');


			}else{
				return;
			}
		});
// end Accordeon-----------------------------------
	$(document).ready(function(){
// 	alert($('.tooltip').attr('class');
// 	var calcPopup = $('.tooltip').tooltipster({
// 		interactive: true,
// 		 trigger: 'click',
// 		 arrow: true,
// 		 side: 'bottom',
// 		 contentCloning: true,
// 		 debag: true,
// 		 distance: 12,
// 		 functionInit(instance, helper){
			    
// 			}
// 	});
});

});


$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
	
		
	// Owl
		$('#product-car').owlCarousel({
			items: 1,
			loop: true,
			nav: true,
			navText: [],
			dotd: false,
			responsiveClass: true
			
		});
	// end of Owl
});
