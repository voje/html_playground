$(document).ready(function() {
    $("#entry-div")
        .mouseenter(lights_on)
        .mouseleave(lights_off);
})

var delay = 2000;

function lights_on() {
    console.log("on");
    $("#entry-div").animate({
        color: "#ec9341" 
    }, delay);
    $("#bg-eyes").animate({
        opacity: 100
    }, delay);
    setTimeout(function() {
        $("#bg-inv").css({opacity: 100})
    }, 4000)
}

function lights_off() {
    console.log("off");
    $("#entry-div").animate({
        color: "#46abb5" 
    }, delay);
    $("#bg-eyes").animate({
        opacity: 0
    }, delay);
    $("#bg-inv").animate({
        opacity: 0
    }, delay);
}
