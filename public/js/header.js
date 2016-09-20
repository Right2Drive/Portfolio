/**
 * Shrink the header as you scroll down
 */

$(document).on("scroll", function(){
    if
    ($(document).scrollTop() > 100){
        $("header").addClass("shrink");
        updateSliderMargin();
    }
    else
    {
        $("header").removeClass("shrink");
        updateSliderMargin();
    }
});

function updateSliderMargin() {
    console.log("Not implemented yet");
}