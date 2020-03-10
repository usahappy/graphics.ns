$(document).ready(function(){
    $(window).on("load", function(){
        var dividerHeight = $(".divider").height();
        var headlineHeight = "calc(100vh - " + dividerHeight + "px)";
        $(".headline").css("height",headlineHeight);
    });
    var dividerHeight = $(".divider").height();
    var headlineHeight = "calc(100vh - " + dividerHeight + "px)";
    $(".headline").css("height",headlineHeight);
    
    var mobileMenuToggle = false;
    var mobileMenuHeight = $(".mobile-navbar #menu").height();
    var mobileTopHeight = $(".mobile-navbar #top").height();
    $(".mobile-navbar #menu").css("height", "calc(100% - " + mobileTopHeight + "px)");
    $(".mobile-navbar #menu").css("top", "-" + mobileMenuHeight + "px");
    
    $(".mobile-navbar #top #toggler").change(function(event){   
        if (mobileMenuToggle) {
            mobileMenuToggle = false;
            $("body").css("overflow","auto");
            $(".mobile-navbar #menu").animate({
                top: "-" + mobileMenuHeight + "px"
            }, 200);
        } else if (!mobileMenuToggle) {
            mobileMenuToggle = true;
            $("body").css("overflow","hidden");
            $(".mobile-navbar #menu").animate({
                top: mobileTopHeight
            }, 200);
        }
    });
});