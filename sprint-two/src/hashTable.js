

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var pair = [k, v];
  var limitedIndexStorage = this._storage.get(index);
  limitedIndexStorage === undefined ? limitedIndexStorage = [] : limitedIndexStorage;
  if (this.retrieve(k) !== undefined) {
    for (var i = 0; i < limitedIndexStorage.length; i++) {
      if (limitedIndexStorage[i][0] === k) {
        limitedIndexStorage[i][1] = v;
      }
    }
  } else {
    limitedIndexStorage.push(pair);  
    this._storage.set(index, limitedIndexStorage);
  }
  
};

HashTable.prototype.retrieve = function(k) {
//debugger;
  var index = getIndexBelowMaxForKey(k, this._limit);
  var limitedIndexStorage = this._storage.get(index);
  if (limitedIndexStorage !== undefined) {
    for (var i = 0; i < limitedIndexStorage.length; i++) {
      if (limitedIndexStorage[i][0] === k) {
        return limitedIndexStorage[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var limitedIndexStorage = this._storage.get(index);
  if (limitedIndexStorage !== undefined) {
    for (var i = 0; i < limitedIndexStorage.length; i++) {
      if (limitedIndexStorage[i][0] === k) {
        limitedIndexStorage.splice(i, 1);
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


// write test for retrieving a value with a key that is not in the hash table

// refactor to search limitedIndexStorage for pair with key k

