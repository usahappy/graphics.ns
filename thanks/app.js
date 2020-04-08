$(document).ready(function(){
    $.getJSON("https://rha.nicholasskelley.com/thanks/cards.json", function(data){
        $.each(data.card, function(key,val){
            var toAppend = "<div class='card'><p id='message'>"+val.message+"</p><p id='name'>"+val.name+"</p><p id='school'>"+ val.school +"</p><p id='gradYear'>"+val.gradYear+"</p></div>";
            $(".cards-container").append(toAppend);
        });
    });
    
    window.matchMedia("(prefers-color-scheme:dark)").addListener(function(e) {
        if (e.matches) {
            var newIcon = '<link rel="icon" href="images/white-brandmark@1k.png">';
            $("head").append(newIcon);
        } else if (!e.matches) {
            var newIcon = '<link rel="icon" href="images/black-brandmark@1k.png">';
            $("head").append(newIcon);
        }
    });
});