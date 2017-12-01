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
  var contained = false;

  var recursiveContain = function() {

    if (this.value === target) {
      contained = true;
      return contained;
    }
debugger;
    for (var i = 0; i < this.children.length; i++) {
      this.children[i].recursiveContain();
    }
  }();
  return contained;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
