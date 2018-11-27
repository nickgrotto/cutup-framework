$(document).ready(function(){

	$('body').on('click', '[data-sv-weathercont]', function() {
		$('[data-sv-weatherdd]').toggleClass('active');
		$('[data-sv-weathercont]').toggleClass('active');
	});

	//Search specific 

	 $('body').on('click', '[data-sv-sitesearch-icon]', function() {
		$('[data-sv-sitesearchdd]').toggleClass('active');
	});
	 $('body').on('click','[data-sv-sitesearchdd]', function() {
		$(this).toggleClass('active');
	});
	 $('body').on('click','[data-sv-sitesearchmobile]', function() {
		$('[data-sv-sitesearchddmobile]').toggleClass('active');
	});
	 $('body').on('click','[data-sv-searchclosemobile]', function() {
		$('[data-sv-sitesearchddmobile]').toggleClass('active');
	});

});