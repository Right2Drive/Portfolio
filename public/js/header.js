/**
 * Shrink the header as you scroll down
 */

var HEADER_MOD = (function() {
    var my = {};

    my.headerScroll = function() {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 50,
            header = document.querySelector('header');

        header.className = (distanceY > shrinkOn) ? "shrink" : "expand";
    };

    return my;
}());