document.addEventListener("DOMContentLoaded", function(){
	window.addEventListener('scroll', function() {
		if (window.scrollY > 200) {
			document.getElementById('top-up').classList.add('top');
		} else {
			document.getElementById('top-up').classList.remove('top');
		}
	});
});