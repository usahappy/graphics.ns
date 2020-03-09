$(document).ready(function(){
    $(window).on("load", function(){
        var dividerHeight = $(".divider").height();
        var headlineHeight = "calc(100vh - " + dividerHeight + "px)";
        $(".headline").css("height",headlineHeight);
    });
    var dividerHeight = $(".divider").height();
    var headlineHeight = "calc(100vh - " + dividerHeight + "px)";
    $(".headline").css("height",headlineHeight);
    
    
});