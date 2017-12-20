//var async = require("async");

class AnimationElement{
	constructor(){}
	moveLogo(element){
		var tl;
		tl = new TimelineLite();
		TweenLite.set(element, {
			autoAlpha: 0,
			y: -50
	    });
	    tl.to(element,1.5,{autoAlpha: 1, y: 0,delay: 1,ease:Elastic.easeOut.config(1, 0.2)})
		console.log("moviendo elemento");
	}
}

function navParallax(selector,ev){
	var menu = new navMenu();
	var boxNavA = $('.navOption nav a');
	boxNavA.removeClass('active');
	console.log($(ev).addClass('active'));
	menu.navParallax(selector);	
}

$( document ).ready(function() {
	var logoMain = $("#logoMain");
	var animiation = new AnimationElement();
	var menu = new navMenu();
	var ObjSlider;
	var sticky = new navSticky(".mainContainer");
	var btnmenu = document.getElementById('button-nav');
	ObjSlider = new Slider(".slider",true);
  	animiation.moveLogo(logoMain);

  	/*
		Slider de productos
  	*/

	$('.wrapperSlider').slick({
		dots: false,
		speed: 300,
		autoplay: true,
		responsive: [
		    {
		      breakpoint: 992,
		      settings: {
		        dots: true
		      }
		    }
	    ]
	});

  	btnmenu.addEventListener("click", function(ev){
  		menu.clickMouse(ev);
  	});
  	window.addEventListener("resize", function(){
  		ObjSlider.refresh();
  		menu.refresh();
  	});
  	window.addEventListener("scroll", function(ev){
  		menu.checkScroll();
  	});

  	var controller = new ScrollMagic.Controller({
		vertical : true
	});


	// pin the principal
	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement : '#principal',
		triggerHook : 0,
		duration : '30%'	
	})
	.setPin('#principal',{pushFollowers : false})
	.addTo(controller);


	var pinIntroScene2 = new ScrollMagic.Scene({
		triggerElement : '#about',
		triggerHook : 0.5
	})
	.setPin('#principal',{pushFollowers : false})
	.addTo(controller);



	// loop through each .contentBox element
	$(".contentBox").each(function(){
		// build a scene
		var ourScene = new ScrollMagic.Scene({
			triggerElement : this,
			triggerHook : 0.9
		})
		.setClassToggle(this,'fade-in') // add class to project01
		.addTo(controller)
	});



});