$(document).ready(function(){
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
	});
});
$(window).scroll(function () {
    const scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".navbar").addClass("scroll");
    } else {
        $(".navbar").removeClass("scroll");
    }
});
