/**
 * Created by Brad on 2016-09-21.
 */

document.addEventListener("DOMContentLoaded", function(event) {
    var card = new CARD_MOD.Card("testing", null, null, 0);
    card.loadCenter();
    var card = new CARD_MOD.Card("Title", null, null, 0);
    card.loadLeft();
});

// TODO if not supported (ie. IE 8 or below), output a message to user
/*
    FOR:
        CSS VARIABLES
        THE ABOVE EVENT LISTENER
        TBC
 */