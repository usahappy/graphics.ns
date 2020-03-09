$(document).ready(function(){
    var dividerHeight = $(".divider").height();
    var headlineHeight = "calc(100vh - " + dividerHeight + "px)"
    $(".headline").css("height",headlineHeight);
});