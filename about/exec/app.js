$(document).ready(function(){
    var dividerHeight = $(".divider").height();
    var headlineHeight = "calc(100vh - " + dividerHeight + "px)"
    $(".headline").css("height",headlineHeight);
    
    var done = false;
    $(window).on("scroll", function(){
        var scrollBottom = $(window).scrollTop() + $(window).height();
        var meetBottom = $(".divider").offset().top + $(".divider").height();
        var windowHeight = $(window).height();
        
        var targetBottom = meetBottom + (windowHeight * 0.25);
        if(scrollBottom > targetBottom && !done) {
            done=true;
            $("html, body").stop(true).animate({
                scrollTop : $(".divider").offset().top
            }, 2000);
        }
    });
});