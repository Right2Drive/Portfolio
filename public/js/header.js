/**
 * Shrink the header as you scroll down
 */

var HEADER_MOD = (function() {
    var my = {};

    my.headerScroll = function() {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 250,
            header = document.querySelector('header');

        if (distanceY > shrinkOn) {
            header.className = "shrink";
        } else {
            header.className = "expand";
        }
    };

    return my;
}(HEADER_MOD || {}));