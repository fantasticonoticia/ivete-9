$(document).ready(function() {
	// Set URLs
	$('a').attr('href', trackerURL('https://go.perfectpay.com.br/PPU38CK4ENI'));
	
	// Exit Event
	if (window.history && window.history.pushState) {

	    window.history.pushState('forward', null);

	    $(window).on('popstate', function() {
	      location.href = trackerURL('https://go.perfectpay.com.br/PPU38CK4ENI');
	    });

	 }
});