$(window).load(function() {
        var num = 50;
        console.log("scroll not-working");

        $(window).bind('scroll', function() {
            console.log("working scroll");
            if ($(window).scrollTop() > num) {
                $('.navbar').addClass('fixed');
            } else {
                $('.navbar').removeClass('fixed');
            }
        });
    })
    // Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
