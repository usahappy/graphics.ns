$(document).ready(function(){
    // setting headline height
    var navHeight = $(".navbar").height();
    var headlineHeight = $(".headline").height();
    
    var headlineNormalHeight = headlineHeight - navHeight;
    
    $(".headline").css("height",headlineNormalHeight);
});