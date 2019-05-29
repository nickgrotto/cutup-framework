// MOBILE NAV TOGGLE
$('body').on('click','[data-mobile-menu-control]', function() {
	$(this).parent().toggleClass('active');
});

// MENU ITEM TOGGLE
$('body').on('click','[data-menu-toggle-parent]',function(){
	$(this).parent().toggleClass('active');
});

// SEARCH TOGGLE
$('body').on('click', '[data-sv-sitesearch-icon]', function() {
	$('[data-sv-sitesearch-form]').toggleClass('active');
	$(this).toggleClass('active');
	$('.site-search-dd .searchInput').focus();
});

// CONTROL HEIGHT TOGGLE
$('body').on('click', '[data-sv-control-height-controller]', function() {
	$('[data-sv-control-height-container]').toggleClass('active');
});