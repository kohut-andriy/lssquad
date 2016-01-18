$('#owl-carousel-first').owlCarousel({
        nav:true,
        autoWidth:true,
        autoHeight:true,
        navText : ["<",">"]
       
    });
$('#owl-carousel_sec').owlCarousel({
   			loop:true,
   			center:true,
  			//autoplay:true,
        autowidth: true,
    		autoplayTimeout:5000,
    		autowidth:true,
    		items:1,
    		navigation: true,
    		controls: true,
		});

$('.button_hover').hover(function (){
$( "#owl-carousel-first" ).slideToggle();
});
$(window).scroll(function() { 
if ($(this).scrollTop() > 50){ 
$( ".trash" ).addClass( "trash_1" );
$( ".trash_1" ).removeClass( "trash" );
$( ".button_hover" ).show();
$( ".back_black" ).addClass( "fixed" );
$(".exit").css("margin", "10px 0 10px 100px");
$("#nav_menu_in_header li:first-child").css("padding", "6px 13px 4px 13px");
$(".trash_1").html("5")
} 
else{ 
$( ".button_hover" ).toggle();
$( ".back_black" ).removeClass( "fixed" );
$( ".trash" ).removeClass( "trash_1" );
$( ".trash_1" ).addClass( "trash" );
$(".exit").css("margin", "10px 0px 10px 125px");
$("#nav_menu_in_header li:first-child").css("padding", "6px 13px 4px 0");
$(".trash").html("Ваша корзина")
$( ".trash" ).removeClass( "trash_1" );

} 
});


var clickActive = function() {
   if ( $(this).hasClass("active")) $(this).removeClass('active'); else  $(this).addClass('active');
}




$(document).ready(function(){
    $("#promo-list").click(clickActive);
    $("#offers-menu").click(clickActive);

    $("#products-nav ul li").click(function(){
      $("#products-nav ul li").removeClass('active');
      $(this).addClass('active');
    });

  });
