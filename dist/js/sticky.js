class navSticky{
	constructor(selector){
		this.pinged = false;
		this.nav = document.querySelector(selector);
		//this.coords = this.nav.getBoundingClientRect();
		// obtenemos la altura del hero-image
		//let stickyScrollPoint = coords.top;
		this.stickyScrollPoint = 40;
		//console.log(this.stickyScrollPoint);
	}
	pingToTop(){
		if (this.pinged) return;

		this.nav.classList.add("pined");

		this.pinged = true;
	}
	unPingFromTop(){
		if (!this.pinged) return;

		this.nav.classList.remove("pined");

		this.pinged = false;
	}
	checkScroll(){
		//console.log(window.scrollY);
		//console.log(this.stickyScrollPoint);
		if(window.scrollY < this.stickyScrollPoint) return this.unPingFromTop();
		/*
		getBoundingClientRect -> me indica las coordenadas del elemento		
		*/
		var coords = this.nav.offsetTop();
		//console.log("ZZZ"+coords.top);
		if (coords.top <= 0) return this.pingToTop();
		//console.log(coords.top);
	}
} 