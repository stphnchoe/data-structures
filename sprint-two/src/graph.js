

// Instantiate a new graph
var Graph = function() {
  this.graphStorage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if (this.graphStorage[node] === undefined) {
    this.graphStorage[node] = [];
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.graphStorage[node] !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.graphStorage[node].length; i++) {
    this.removeEdge(node, this.graphStorage[node][i]);
  }
  delete this.graphStorage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return _.contains(this.graphStorage[fromNode], toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  
  if (this.contains(fromNode) && this.contains(toNode)) {
    this.graphStorage[fromNode].push(toNode);
    this.graphStorage[toNode].push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.graphStorage[fromNode].splice(_.indexOf(this.graphStorage[fromNode], toNode), 1);
  this.graphStorage[toNode].splice(_.indexOf(this.graphStorage[toNode], fromNode), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.graphStorage) {
    cb(JSON.parse(key));
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


