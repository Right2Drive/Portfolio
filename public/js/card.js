/*
* This is my object oriented method of implementing my cards in javascript
 */

var CARD_MOD = (function() {
    var my = {},
        cardTemplate = createCardTemplate();

    //////////////////////// Private Methods  /////////////////////////////

    function createCardTemplate() {
        var card = document.createElement("DIV");
        card.className = "card mdl-card mdl-shadow--2dp";

        var cardTitleWrapper = document.createElement("DIV");
        cardTitleWrapper.className = "mdl-card__title mdl-card--expand";
        card.appendChild(cardTitleWrapper);

        var cardTitleHeader = document.createElement("H2");
        cardTitleHeader.className = "mdl-card__title-text";
        cardTitleWrapper.appendChild(cardTitleHeader);

        var supportText = document.createElement("DIV");
        supportText.className = "mdl-card__supporting-text";
        supportText.textContent = "this is a test with what is going on I don't know if it will do it the right size or not but I would be prettyy unhapy if it doesn't work sadface";
        card.appendChild(supportText);

        var cardContent = document.createElement("DIV");
        cardContent.className = "mdl-card__actions mdl-card--border";
        card.appendChild(cardContent);

        var cardButton = document.createElement("A");
        cardButton.className = "mdl-button mdl-js-button mdl-js-ripple-effect";
        cardButton.textContent = "See More";
        cardContent.appendChild(cardButton);

        return card;
    }

    ///////////////////////////   Enum   /////////////////////////////////

    my.Position = {
        UNLOADED_LEFT_BACK : "layer-hidden left-back",
        UNLOADED_LEFT_FRONT : "layer-hidden left-front",
        FAR_LEFT : "card-far-left layer-back",
        LEFT : "card-left layer-middle",
        CENTER : "card-center layer-front",
        RIGHT : "card-right layer-middle",
        FAR_RIGHT : "card-far-right layer-back",
        UNLOADED_RIGHT_FRONT : "layer-hidden right-front",
        UNLOADED_RIGHT_BACK : "layer-hidden right-back"
    }

    my.Direction = {
        LEFT : 55,
        RIGHT : 56
    }

    /////////////////////////// Card Object /////////////////////////////////

    my.Card = function(title, image, content, row) {
        this.title = title;
        this.image = image;
        this.content = content;
        this.section = row;
        this.card = null;
        this.position = null;

        this.shift = function(direction) {

        }

        this.load = function(position) {
            var card = cardTemplate.cloneNode(true);
            var newClassName = "card mdl-card " + position;
            if (position === my.Position.CENTER) {
                newClassName += " mdl-shadow--6dp";
            } else if (position === my.Position.LEFT || position === my.Position.RIGHT) {
                newClassName += " mdl-shadow--4dp";
            } else if (position === my.Position.FAR_LEFT || position === my.Position.FAR_RIGHT) {
                newClassName += " mdl-shadow--2dp";
            }
            card.className = newClassName;
            card.childNodes[0].childNodes[0].textContent = title;
            var sections = document.getElementsByClassName('content-section');
            sections[row].appendChild(card);
        }

        function destroy() {
            if (this.card) {
                this.card.parentElement.removeChild(this.card);
            }
        };
    };

    return my;
}());
