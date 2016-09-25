/**
 * Created by Brad on 2016-09-25.
 */

var QUEUE_MOD = (function() {
   var my = {};

   my.Queue = new function(size) {
       this.size = size;
       var queue = []

       this.pushLeft = function(item) {
           queue.unshift(item);
           return queue.pop();
       };

       this.pushRight = function(item) {
           queue.push(item);
           return queue.shift();
       };

       this.addCard = function(card) {
           if (queue.length < size) {
               queue.push(card);
           }
       };
   };
}(QUEUE_MOD || {}));