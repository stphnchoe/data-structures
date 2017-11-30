var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.queueSize = 0;

};

Queue.prototype.enqueue = function(value) {
  this.storage[this.queueSize] = value;
  this.queueSize++;
};


Queue.prototype.dequeue = function() {
  var dequeueItem = this.storage[0];
  if (this.queueSize > 0) {
    for (var i = 0; i < this.queueSize; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    this.queueSize--;
  }
  return dequeueItem;
};

Queue.prototype.size = function() {
  return this.queueSize;
};