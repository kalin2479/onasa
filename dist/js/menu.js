class navMenu{
	constructor(){
		this.close = this.close.bind(this);
	}
	close(){
		var el = $('#button-nav');
		var boxNav = $('.navOption nav');
		var line1 = $('.line1');
		var line2 = $('.line2');
		var line3 = $('.line3');
		var tl;
		var tl2;
		var tl3;
		var tl4;
		if (el.hasClass('active')) {
			el.removeClass('active');

			tl = new TimelineLite();
			tl2 = new TimelineLite();
			tl3 = new TimelineLite();
			tl4 = new TimelineLite();
	    	tl
	    		.to(line2,0.1,{autoAlpha: 1});
	    	tl2.to(line1,0.1,{y: 0, rotation: 0,scale: 1});
	    	tl3.to(line3,0.1,{y: 0, rotation: 0,scale: 1});

	    	tl4.to(boxNav,0.1,{onComplete: function(){
	    		boxNav.removeClass('active');
				boxNav.css("height","auto");
	    	}}, 1);
		}
	}
	clickMouse(ev){
		ev.preventDefault();
		var el = $('#button-nav');
		var boxNav = $('.navOption nav');
		var line1 = $('.line1');
		var line2 = $('.line2');
		var line3 = $('.line3');
		var tl;
		var tl2;
		var tl3;
		var h = $(window).height();
		if (el.hasClass('active')) {
			this.close();
		}else{
			el.addClass('active');
			boxNav.addClass('active');
			boxNav.css("height",h);
			console.log('no');
			tl = new TimelineLite();
			tl2 = new TimelineLite();
			tl3 = new TimelineLite();
	    	tl
	    		.to(line2,0.2,{autoAlpha: 0});
	    	tl2.to(line1,0.1,{y: 10, rotation: -45,scale: 0.85});
	    	tl3.to(line3,0.1,{y: -10, rotation: 45,scale: 0.85});
		}
	}
	refresh(){
		var boxNav = $('.navOption nav');
		var el = $('#button-nav');
		var mq_992 = window.matchMedia( "(min-width: 992px)" );
		var tl1;
		var tl2;
		var tl3;
		var line1 = $('.line1');
		var line2 = $('.line2');
		var line3 = $('.line3');
		if (mq_992.matches) {
			el.removeClass('active');
			boxNav.removeClass('active');
			boxNav.css("height","auto");
			tl1 = new TimelineLite();
			tl2 = new TimelineLite();
			tl3 = new TimelineLite();
	    	tl1
	    		.to(line2,0.5,{autoAlpha: 1});
	    	tl2.to(line1,0.5,{y: 0, rotation: 0,scale: 1});
	    	tl3.to(line3,0.5,{y: 0, rotation: 0,scale: 1});
		}
	}
	checkScroll(){
		var menu1 = $('#principal');
		var menu2 = $('#about');
		var menu3 = $('#product');
		var menu4 = $('#puntoventa');
		var menu5 = $('#contact');

		var boxNav = $('.navOption nav a');

		var btnMenu1 = $('#menuPrincipal');
		var btnMenu2 = $('#menuAbout');
		var btnMenu3 = $('#menuProduct');
		var btnMenu4 = $('#menuVenta');
		var btnMenu5 = $('#menuContact');

		var resto = 130;

		var coordMenu1 = menu1.offset().top - resto;
		var coordMenu2 = menu2.offset().top - resto;
		var coordMenu3 = menu3.offset().top - resto;
		var coordMenu4 = menu4.offset().top - resto;
		var coordMenu5 = menu5.offset().top - resto;
		//console.log(window.scrollY);
		//console.log("co2="+coordMenu2);
		//console.log("co3="+coordMenu3);
		if ((window.scrollY>=0) && (window.scrollY<=coordMenu2)){
			boxNav.removeClass('active');
			btnMenu1.addClass('active');
		}
		if ((window.scrollY>coordMenu2) && (window.scrollY<=coordMenu3)){
			boxNav.removeClass('active');
			btnMenu2.addClass('active');
		}
		if ((window.scrollY>coordMenu3) && (window.scrollY<=coordMenu4)){
			boxNav.removeClass('active');
			btnMenu3.addClass('active');
		}
		if ((window.scrollY>coordMenu4) && (window.scrollY<=coordMenu5)){
			boxNav.removeClass('active');
			btnMenu4.addClass('active');
		}
		if (window.scrollY>coordMenu5){
			boxNav.removeClass('active');
			btnMenu5.addClass('active');
		}
		//console.log(coordMenu1.top);
		//console.log(window.scrollY);
	}
	navParallax(sel){
		//console.log($("#"+sel));
		if (sel=="principal")
			TweenLite.to(window, 1, {scrollTo:{y:$('body'), offsetY:70}});
		else
			TweenLite.to(window, 1, {scrollTo:{y:"#"+sel, offsetY:70}});
		this.close();
	}
}