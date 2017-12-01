var BinarySearchTree = function(value) {

  var instance = Object.create(methodsBST);
  instance.left = null;
  instance.right = null;
  instance.value = value;
  return instance;
};

var methodsBST = {};

methodsBST.insert = function(value) {
  var newTree = new BinarySearchTree(value);
  if (newTree.value > this.value) {
    if (this.right === null) {
      this.right = newTree;
    } else {
      this.right.insert(value);
    }
  }
  if (newTree.value < this.value) {
    if (this.left === null) {
      this.left = newTree;
    } else {
      this.left.insert(value);
    }
  }
};

methodsBST.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  if (this.value < target) {
    if (this.right === null) {
      return false;
    }
    return this.right.contains(target);
  }
  if (this.value > target) {
    if (this.left === null) {
      return false;
    }
    return this.left.contains(target);
  }
};

methodsBST.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(callback);  
  }
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
