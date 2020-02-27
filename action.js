$(document).ready(function(){
    // setting headline height
    var navHeight = $(".navbar").height();
    var headlineHeight = $(".headline").height();
    var headlineNormalHeight = headlineHeight - navHeight;
    $(".headline").css("height",headlineNormalHeight);
    
    // sticking the navbar
    var navOrigin = $(".navbar").offset().top;
    
    $(".content-container").each(function(){
        $(this).data("unscrolled",true);
    });
    
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
        
        
        $(".content-container").each(function() {
            var currentTop = $(this).offset().top;
            var currentHeight = $(this).height();
            
            if (currentTop <= (scrollBottom - (currentHeight*.5)) && $(this).data("unscrolled")) {
                $(this).data("unscrolled",false);
                $("html, body").animate({
                    scrollTop: $(this).offset().top - navHeight
                },1500);
            }
        });
    });
    
});