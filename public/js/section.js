/**
 * Created by Brad on 2016-09-23.
 */

var SECTION_MOD = (function() {
   var my = {},
       sectionTemplate = createSectionTemplate(),
       breakTemplate = createBreakTemplate();

    var NUMBER_OF_CARDS = Object.keys(CARD_MOD.Position).length;

   function createSectionTemplate() {
       var section = document.createElement("DIV");
        section.className = "content-section";

       var buttonLeft = createButtonTemplate("left");
       section.appendChild(buttonLeft);
       var buttonRight = createButtonTemplate("right");
       section.appendChild(buttonRight);

       return section;
   }

   function createBreakTemplate() {
       var sectionBreak = document.createElement("DIV");
       sectionBreak.className = "section-break";
       return sectionBreak;
   }

   // TODO remove buttons if not being used
   function createButtonTemplate(side) {
       var buttonWrapper = document.createElement("DIV");
       buttonWrapper.className = "button-wrapper button-" + side;

       var button = document.createElement("BUTTON");
       button.className = "mdl-button mdl-js-button mdl-button--fab";
       buttonWrapper.appendChild(button);

       var buttonImage = document.createElement("I");
       buttonImage.className = "material-icons";
       buttonImage.textContent = "keyboard_arrow_" + side + "_black";
       button.appendChild(buttonImage);
       return buttonWrapper;
   }

    my.Section = function(row, withCards) {
        if (typeof(withCards) === 'undefined') {
            this.withCards = true;
        } else {
            this.withCards = withCards;
        }
        this.row = row;
        this.cards = [];
        this.liveCards = new QUEUE_MOD.Queue(NUMBER_OF_CARDS);
        this.sectionTitle = null;

        this.loadSection = function() {
            var section = sectionTemplate.cloneNode(true);

            // Set section name
            var sectionTitle = document.createElement("SPAN");
            sectionTitle.className = "section-title";
            section.appendChild(sectionTitle);
            this.sectionTitle = sectionTitle;

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

        this.loadCards = function() {

            // Loading cards
            for (var key in CARD_MOD.Position) {
                if (!CARD_MOD.Position.hasOwnProperty(key)) continue;
                var card = new CARD_MOD.Card(this.row);
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
        this.loadContent = function(sectionContent) {
            // Load section title
            this.sectionTitle.textContent = sectionContent.title;

            // Load cards
            for (var i = 0; i < Object.keys(sectionContent['cards']).length; i++) {
                if (i < Object.keys(CARD_MOD.Position).length) {
                    this.liveCards.get(i).loadContent(sectionContent['cards'][i]);
                } else {
                    this.cards.push((new CARD_MOD.Card(this.row)).loadContent(sectionContent['cards'][i]));
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
}());