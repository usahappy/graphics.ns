$(document).ready(function(){
    console.log("hello world");
    console.log($(window).scrollTop());
    
    $.getJSON("cards.json", function(data){
        console.log("test");
        console.log(data.cards);
    });
});