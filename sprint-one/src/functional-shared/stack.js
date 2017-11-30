var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = {};
  instance.stackSize = 0;
  _.extend(instance, stackMethods);
  return instance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.stackSize] = value;
  this.stackSize ++; 
}; 

stackMethods.pop = function() {
  if (this.stackSize > 0) {
    this.stackSize --;
  }
  return this.storage[this.stackSize];
};

stackMethods.size = function() {
  return this.stackSize;
};