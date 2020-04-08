$(document).ready(function(){
    console.log("hello world");
    console.log($(window).scrollTop());
    
    $.getJSON("https://rha.nicholasskelley.com/thanks/cards.json", function(data){
        $.each(data.card, function(key,val){
            var toAppend = "<div class='card'><p id='message'>"+val.message+"</p><p id='name'>"+val.name+"</p><p id='school'>"+ val.school +"</p><p id='gradYear'>"+val.gradYear+"</p></div>";
            $(".cards-container").append(toAppend);
        });
    });
});