/**
 * Created by Brad on 2016-09-21.
 */

document.addEventListener("DOMContentLoaded", function(event) {
    var card = new CARD_MOD.Card("Center Card", null, null, 0);
    card.load(CARD_MOD.Position.CENTER);
    var card2 = new CARD_MOD.Card("Left Card", null, null, 0);
    card2.load(CARD_MOD.Position.LEFT);
    var card3 = new CARD_MOD.Card("Far Left Card", null, null, 0);
    card3.load(CARD_MOD.Position.FAR_LEFT);
});

// TODO if not supported (ie. IE 8 or below), output a message to user
/*
    FOR:
        CSS VARIABLES
        THE ABOVE EVENT LISTENER
        TBC
 */