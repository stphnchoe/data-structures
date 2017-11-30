var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.queueSize = 0;

  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.queueSize] = value;
  this.queueSize++;
};

queueMethods.dequeue = function() {
  var dequeueItem = this.storage[0];
  if (this.queueSize > 0) {
    for (var i = 0; i < this.queueSize; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    this.queueSize--;
  }
  return dequeueItem;
};

queueMethods.size = function() {
  return this.queueSize;
};

