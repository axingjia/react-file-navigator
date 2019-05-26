// console.log('hello world');

function Node(data) {
	this.data = data;
	this.parent = null;
	this.children = [];
	this.add=function(node){
		this.children.push(node);
		node.parent=this;
	}
	
}

function Tree(data) {
	var node = new Node(data);
	this._root = node;
	this.addToRoot=function(node){
		this._root.children.push(node);
		node.parent=this;
	}
}

var tree = new Tree('CEO');
 
// {data: 'CEO', parent: null, children: []}
tree._root;

var tree = new Tree('one');


tree.addToRoot(new Node('two'));

 
// tree._root.children.push(new Node('three'));
// tree._root.children[1].parent = tree;
tree.addToRoot(new Node('three'));

tree.addToRoot(new Node('four'));
 
tree._root.children[0].add(new Node('five'));
 


tree._root.children[0].add(new Node('six'));
 
tree._root.children[2].add(new Node('seven'));

console.log(tree);
console.log(tree._root.children);