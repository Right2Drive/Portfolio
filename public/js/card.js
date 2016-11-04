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
        UNLOADED_LEFT_BACK: {
            className: "layer-hidden left-back",
            index: 0
        },
        UNLOADED_LEFT_FRONT: {
            className: "layer-hidden left-front",
            index: 1
        },
        FAR_LEFT: {
            className: "card-far-left layer-back",
            index: 2
        },
        LEFT: {
            className: "card-left layer-middle",
            index: 3
        },
        CENTER: {
            className: "card-center layer-front",
            index: 4
        },
        RIGHT: {
            className: "card-right layer-middle",
            index: 5
        },
        FAR_RIGHT: {
            className: "card-far-right layer-back",
            index: 6
        },
        UNLOADED_RIGHT_FRONT: {
            className: "layer-hidden right-front",
            index: 7
        },
        UNLOADED_RIGHT_BACK: {
            className: "layer-hidden right-back",
            index: 8
        }
    };

    my.Direction = {
        LEFT : 55,
        RIGHT : 56
    };

    /////////////////////////// Card Object /////////////////////////////////

    my.Card = function(row) {
        this.row = row;
        this.card = null;
        this.position = null;

        this.shift = function(position) {
            // Change classname to new position
            this.card.className = getClassName(position);
        };

        this.load = function(position) {
            var card = cardTemplate.cloneNode(true);
            this.card = card;
            this.position = position;
            card.className = getClassName(position);
            var sections = document.getElementsByClassName('content-section');
            sections[row].appendChild(card);
        };

        this.loadContent = function(cardContent) {
            this.card.childNodes[0].childNodes[0].textContent = cardContent.name;
            // TODO images
            // Set text content
            this.card.childNodes[1].textContent = cardContent.content;
            return this.card;
        };

        function destroy() {
            if (this.card) {
                this.card.parentElement.removeChild(this.card);
            }
        }

        function getClassName(position) {
            var newClassName = "card mdl-card " + position.className;
            if (position === my.Position.CENTER) {
                newClassName += " mdl-shadow--6dp";
            } else if (position === my.Position.LEFT || position === my.Position.RIGHT) {
                newClassName += " mdl-shadow--4dp";
            } else if (position === my.Position.FAR_LEFT || position === my.Position.FAR_RIGHT) {
                newClassName += " mdl-shadow--2dp";
            }
            return newClassName;
        }
    };

    return my;
}());
