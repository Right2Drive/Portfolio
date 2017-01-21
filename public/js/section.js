/**
 * Created by Brad on 2016-09-23.
 */

var SECTION_MOD = (function () {
    var my = {},
        SECTION_CLASS = 'content-section',
        BREAK_CLASS = 'section-break',
        TITLE_CLASS = 'section-title',
        sectionTemplate = createSectionTemplate(SECTION_CLASS),
        breakTemplate = createBreakTemplate(BREAK_CLASS);

    var NUMBER_OF_CARDS = Object.keys(CARD_MOD.Position).length;

    function createSectionTemplate(className) {
        var section = document.createElement('DIV');
        section.className = className;
        return section;
    }

    function createBreakTemplate(className) {
        var sectionBreak = document.createElement('DIV');
        sectionBreak.className = className;
        return sectionBreak;
    }

    function createButtonTemplate(side) {
        var buttonWrapper = document.createElement('DIV');
        buttonWrapper.className = "button-wrapper button-" + side;

        var button = document.createElement("BUTTON");
        button.className = "mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored";
        buttonWrapper.appendChild(button);

        var buttonImage = document.createElement('I');
        buttonImage.className = "material-icons";
        buttonImage.textContent = "keyboard_arrow_" + side + "_black";
        button.appendChild(buttonImage);
        return buttonWrapper;
    }

    my.Section = function (row, withCards) {
        this.withCards = (typeof (withCards) === 'undefined') ? true : withCards;
        this.row = row;
        this.cards = [];
        this.liveCards = new QUEUE_MOD.Queue(NUMBER_OF_CARDS);
        this.sectionTitle = null;
        
        var that = this;

        this.shiftCards = function(direction, units) {
            console.log("moving cards " + units + " units to the " + direction);

            var i;
            var index;
            var check;

            for (i = 0; i < units; i++) {
                // Determine the index of the card to be added
                check = (direction === CARD_MOD.Direction.LEFT);
                index = check ? this.liveCards.get(0).index : this.liveCards.get(this.liveCards.length - 1).index;
                if (index >= this.cards.length) {
                    index = 0;
                }
                else if (index < 0) {
                    index = this.cards.length - 1;
                }
                (check ? this.liveCards.pushRight(this.cards[index]) : this.liveCards.pushLeft(this.cards[index])).destroy();
            }

            console.log('done');
        }

        this.loadSection = function () {
            var section = sectionTemplate.cloneNode(true);

            // Set section name
            var sectionTitle = document.createElement('SPAN');
            sectionTitle.className = TITLE_CLASS;
            section.appendChild(sectionTitle);
            this.sectionTitle = sectionTitle;
            if (this.withCards) {
                var buttonLeft = createButtonTemplate('left');
                buttonLeft.addEventListener('click', function() {
                    that.shiftCards(CARD_MOD.Direction.LEFT, 1);
                });
                section.appendChild(buttonLeft);
                var buttonRight = createButtonTemplate('right');
                buttonRight.addEventListener('click', function() {
                    that.shiftCards(CARD_MOD.Direction.RIGHT, 1);
                });
                section.appendChild(buttonRight);
            }

            var sectionBreak = breakTemplate.cloneNode(true);
            var contents = document.getElementsByClassName("content");
            if (contents.length !== 1) {
                throw "There is more than one content section";
            }
            if (this.row !== 0) {
                contents[0].appendChild(sectionBreak);
            }
            contents[0].appendChild(section);
            console.log("Section " + this.row + " loaded");
        };

        this.loadCards = function () {

            // Loading cards
            for (var key in CARD_MOD.Position) {
                if (!CARD_MOD.Position.hasOwnProperty(key)) continue;
                var card = new CARD_MOD.Card(this.row, this.cards.length);
                this.cards.push(card);
                this.liveCards.addCard(card);
                card.load(CARD_MOD.Position[key]);
            }
            console.log("Section " + this.row + " cards loaded");
        };

        /**
         * Load the content for the section and the cards it contains
         * @param sectionContent
         */
        this.loadContent = function (sectionContent) {
            // Load section title
            this.sectionTitle.textContent = sectionContent.title;

            // Load cards
            for (var i = 0; i < Object.keys(sectionContent['cards']).length; i++) {
                if (i < Object.keys(CARD_MOD.Position).length) {
                    this.liveCards.get(i).loadContent(sectionContent['cards'][i]);
                } else {
                    var newCard = new CARD_MOD.Card(this.row, this.cards.length);
                    this.cards.push(newCard.loadContent(sectionContent['cards'][i]));
                }
            }
        };

        // Construct the section
        this.loadSection();
        if (this.withCards) {
            this.loadCards();
        }
        // Log the section generation
        console.log("Section " + this.row + " generated");
    };

    return my;
} ());
