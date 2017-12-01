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

methodsBST.contains = function() {
};

methodsBST.depthFirstLog = function() {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
