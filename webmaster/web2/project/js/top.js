document.addEventListener("DOMContentLoaded", function(){
	window.addEventListener('scroll', function() {
		if (window.scrollY > 80) {
			document.getElementById('navbar_top').classList.add('fixed-top');
			document.getElementById('navbar_top').classList.add('shapka-top');
			document.getElementById('nav-link').classList.add('shapka-text');
			document.getElementById('nav-link2').classList.add('shapka-text');
			document.getElementById('nav-link3').classList.add('shapka-text');
			document.getElementById('nav-link4').classList.add('shapka-text');
			document.getElementById('nav-link5').classList.add('shapka-text');
			document.getElementById('nav-link6').classList.add('shapka-text');
			document.getElementById('nav-link7').classList.add('shapka-text');
			document.getElementById('nav-button').classList.add('navbutton');
			document.getElementById('logo').classList.add('logo-top');
		} else {
			document.getElementById('navbar_top').classList.remove('fixed-top');
			document.getElementById('navbar_top').classList.remove('shapka-top');
			document.getElementById('nav-link').classList.remove('shapka-text');
			document.getElementById('nav-link2').classList.remove('shapka-text');
			document.getElementById('nav-link3').classList.remove('shapka-text');
			document.getElementById('nav-link4').classList.remove('shapka-text');
			document.getElementById('nav-link5').classList.remove('shapka-text');
			document.getElementById('nav-link6').classList.remove('shapka-text');
			document.getElementById('nav-link7').classList.remove('shapka-text');
			document.getElementById('nav-button').classList.remove('navbutton');
			document.getElementById('logo').classList.remove('logo-top');
		}
	});
});