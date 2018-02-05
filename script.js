$(document).ready(function() {
    console.log("rdy")
    $("#entry-div")
        .mouseover(lights_on)
        .mouseout(lights_off);
})

function lights_on() {
    console.log("on");
    $("#eyes").toggleClass("transparent");
    $("#entry-div").css({color: "#ec9341"});
}

function lights_off() {
    console.log("off");
    $("#eyes").toggleClass("transparent");
    $("#entry-div").css({color: "#46abb5"});
}