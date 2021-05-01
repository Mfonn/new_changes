//to make the navbar sticky
// When the user scrolls the page, execute myFunction


$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 70) {
            $(".navbar").css("backgroundColor", "#032039");
        } else {
            $(".navbar").css("backgroundColor", "transparent");
        }
    })
})




