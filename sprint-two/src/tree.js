var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; 
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var booleanResult = false;

  var recursiveContains = function(treeNode) {

    if (treeNode.value === target) {
      booleanResult = true;
      return true;
    }
    for (var i = 0; i < treeNode.children.length; i++) {
      recursiveContains(treeNode.children[i]);
    }
  };
  recursiveContains(this);
  return booleanResult;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
