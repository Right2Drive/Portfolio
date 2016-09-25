/**
 * Created by Brad on 2016-09-25.
 */

var QUEUE_MOD = (function() {
   var my = {};

   my.Queue = new function(cardArray) {
       this.size = cardArray.length;
       var queue = cardArray; // TODO check safety

       this.pushLeft = function(item) {
           queue.unshift(item);
           return queue.pop();
       };

       this.pushRight = function(item) {
           queue.push(item);
           return queue.shift();
       };
   }
}());