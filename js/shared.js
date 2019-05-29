// MOBILE NAV TOGGLE
$('body').on('click','[data-mobile-menu-control]', function() {
	$('[data-mobile-menu]').toggleClass('active');
});

// MENU ITEM TOGGLE
$('body').on('click','[data-menu-toggle-parent]',function(){
	$(this).parent().toggleClass('active');
	$(this).toggleClass('active');
	$('.site-search-dd .searchInput').focus();
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

// SCROLL CONTROL FOR STICKY HEADER data-sv-header-section
var iScrollPos = 0;
var tippyTop = 92;
$(window).scroll(function () {

	var iCurScrollPos = $(this).scrollTop();
	if (iCurScrollPos > iScrollPos && iScrollPos >= tippyTop) {
		//console.log(iScrollPos + " scrolling down");
		//Scrolling Down
		$('[data-sv-header-section]').removeClass('sticky');
		$('[data-sv-header-section]').removeClass('at-top');
		$('[data-mobile-menu]').removeClass('active');
	} else if (iCurScrollPos < iScrollPos && iScrollPos >= tippyTop) {
		//console.log(iScrollPos + " scrolling up");
		//Scrolling Up
		$('[data-sv-header-section]').addClass('sticky');
	} else {
		//console.log(iScrollPos + " at top");
		//At Top
		$('[data-sv-header-section]').removeClass('sticky');
		$('[data-sv-header-section]').addClass('at-top');
	}

	iScrollPos = iCurScrollPos;
});