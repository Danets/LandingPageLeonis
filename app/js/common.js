$(function() {


//Навигация по Landing Page
$(".navbar").on("click","a", function (event) {
event.preventDefault();

var id  = $(this).attr('href'),

top = $(id).offset().top;

$('body,html').animate({scrollTop: top}, 1500);

});

$('.navbar a, .toTop').mPageScroll2id({
	offset: 20,
	speed: 100
});

//Каруселька
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:70,
    dots: true,
    autoplay:true,
    autoplayTimeout:1000,
    responsiveClass:true,
    responsive:{
    	320:{
            items:1,
            nav:false,
            dots: false,
            loop:true
        },
        360:{
            items:1,
            nav:false,
            dots: false,
            loop:true
        },
        768:{
            items:2,
            nav:false,
            loop:true
        },
        1000:{
            items:4,
            nav:false,
            loop:true
        }
    }
})


//equalheight - одинаковая высота колонок
$('.product__wrap > div.content').equalHeights();
$('.product__wrap > div.product__title').equalHeights();
$('.wrap-slider > div.img__title').equalHeights();
$('.wrap-slider > div.about__title').equalHeights();


//Слайдер  bxSlider
$('.bxslider').bxSlider({
  adaptiveHeight: true,
  mode: 'fade'
});

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	/*$("#forma1").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо за сообщение!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});*/

	$("#forma1").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#forma1").trigger("reset");
		});
		return false;
	});

	$("#forma2").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#forma2").trigger("reset");
		});
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




    //Кнопка "Наверх"
    //Документация:
    //http://api.jquery.com/scrolltop/
    //http://api.jquery.com/animate/
    /*$(".toTop").click(function () {
        $("body, html").animate({
            scrollTop: 0
        }, 800);
        return false;
    });*/

	
});
