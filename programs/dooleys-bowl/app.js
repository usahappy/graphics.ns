$(document).ready(function(){
    /* Read more/read less */
    $(".learn-more-checker").each(function(){
        $(this).parent().find("ul").hide(0,"swing");
        $(this).change(function(event){
            if ($(this).is(":checked")) {
                $(this).parent().find("ul").show(250,"swing");
            } else {
                $(this).parent().find("ul").hide(250,"swing");
            }
        });
    });
    
    /* Winners */
    // positioning arrows
    var arrowWidth = $("#next-winner").width();
    $("#next-winner").css("left","calc(100% - " + (arrowWidth+60) + "px)");
    
    // clicking arrows
    var currentWinner = 2020;
    var minWinner = 2011;
    var recentWinner = 2020;
    var originLeft = "50%";
    
    $("#past-winners i").each(function(){
        $(this).on("click",function(){
            console.log(currentWinner == minWinner);
            if ($(this).is("#next-winner") && currentWinner > minWinner) {
                // advance
                currentWinner -= 1;
                
                $("#winner-" + currentWinner).stop().css("left","+=100px").css("visibility","visible").css("opacity",0);
                
                $("#winner-"+currentWinner).stop().animate({
                    opacity: 1,
                    left: originLeft
                }, 300);
                $("#winner-"+(currentWinner+1)).stop().animate({
                    opacity: 0,
                    left: "calc(" + originLeft + " - 100px)"
                }, 300, "swing", function(){$("#winner-"+(currentWinner+1)).css("left",originLeft).css("opacity","0")});
                
            } else if ($(this).is("#next-winner") && currentWinner == minWinner){
                // reset
                currentWinner = recentWinner;
                
                $("#winner-" + currentWinner).stop().css("left","+=100px").css("opacity",0);
                $("#winner-"+currentWinner).stop().animate({
                    opacity: 1,
                    left: originLeft
                }, 300);
                $("#winner-"+(minWinner)).stop().animate({
                    opacity: 0,
                    left: "calc(" + originLeft + " - 100px)"
                }, 300, "swing", function(){$("#winner-"+(minWinner)).css("left",originLeft).css("opacity","0")});
                
            } else if ($(this).is("#prev-winner") && currentWinner < recentWinner) {
                // go back
                currentWinner += 1;
                
                $("#winner-" + currentWinner).stop().css("left","-=100px").css("visibility","visible").css("opacity",0);
                
                $("#winner-" + currentWinner).stop().animate({
                    left: originLeft,
                    opacity: 1
                }, 300);
                $("#winner-" + (currentWinner - 1)).stop().animate({
                    left: "calc(" + originLeft + " +100px)",
                    opacity: 0
                }, 300, function(){$("#winner-"+(currentWinner-1)).stop().css("left",originLeft).css("opacity","0")});
            }

            if ($("#winner-"+currentWinner).is(".alabama")) {
                $("#past-winners").css("background","#003d82");
                $("#past-winners").removeClass("turmilton-bg");
                
            } else if ($("#winner-"+currentWinner).is(".dobbs")) {
                $("#past-winners").css("background","#FFC907");
                $("#past-winners").removeClass("turmilton-bg");
                
            } else if ($("#winner-"+currentWinner).is(".complex")) {
                $("#past-winners").css("background", "black");
                $("#past-winners").removeClass("turmilton-bg");
                
            } else if ($("#winner-"+currentWinner).is(".turman")) {
                $("#past-winners").css("background","#F05342");
                $("#past-winners").removeClass("turmilton-bg");
                
            } else if ($("#winner-"+currentWinner).is(".turmilton")) {
                $("#past-winners").css("background", "#00B070");
                $("#past-winners").addClass("turmilton-bg"); 
                
            } else if ($("#winner-"+currentWinner).is(".raoul")) {
                $("#past-winners").css("background","#B51218");
                $("#past-winners").removeClass("turmilton-bg");
                
            } else if ($("#winner-"+currentWinner).is(".mctrimble")) {
                $("#past-winners").css("background","#47abd6");
                $("#past-winners").removeClass("turmilton-bg");
            }
        });
    });
});