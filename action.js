$(document).ready(function(){
    // setting headline height
    var navHeight = $(".navbar").height();
    var headlineHeight = $(".headline").height();
    var headlineNormalHeight = headlineHeight - navHeight;
    $(".headline").css("height",headlineNormalHeight);
    
    // sticking the navbar
    var navOrigin = $(".navbar").offset().top;
    
    $(window).on("scroll",function(){
        var scrollTop = $(window).scrollTop();
        var scrollBottom = scrollTop + $(window).height();
        
        var navTop = $(".navbar").offset().top;
        
        if (navTop <= scrollTop) {
            $(".navbar").addClass("sticky");
            $(".navbar + .content-container").css("padding-top",navHeight);
        }
        if (navOrigin > scrollTop) {
            $(".navbar").removeClass("sticky");
            $(".navbar + .content-container").css("padding-top","0");
        }
        
    });
    
});