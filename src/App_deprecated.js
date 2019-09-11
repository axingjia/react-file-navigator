import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  {Cell} from './cell.js';
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

var tree = new Tree('one');


tree.addToRoot(new Node('two'));

 
// tree._root.children.push(new Node('three'));
// tree._root.children[1].parent = tree;
tree.addToRoot(new Node('three'));

tree.addToRoot(new Node('four'));
 
tree._root.children[0].add(new Node('five'));
 


tree._root.children[0].add(new Node('six'));
 
tree._root.children[2].add(new Node('seven'));
class App extends Component {
    constructor(prop){
        super(prop);
        this.state={tree:tree};
        this.addItem=this.addItem.bind(this);
        
    }
    
    addItem(event){
      event.stopPropagation();
      // // console.log('addItem');
      // this.setState((prev)=>{
      //   return {initItemNum:prev.initItemNum+1}
      // },()=>{
      //   var tempItemHTML=[];
      //   for(var i=0;i<this.state.initItemNum;i++){
      //     tempItemHTML.push(
      //       <NaviItem level={0} changeParent={this.changeLevelActive.bind(this)} key={i}/>);
      //   }
      //   this.setState((prev)=>{
      //     return {initItemHTML:tempItemHTML}
      //   });
      // });
        tree.addToRoot(new Node("New Folder"));
        this.setState(tree);
      


    }
  render() {
      console.log(this.state);
    return (
      <div>
        <div className="space"> </div>
        <div className="level">
            <div style={{overflowY:"scroll",height:"inherit"}}>
            {this.state.tree._root.children.map(function(current){
                return <Cell value={current.data}></Cell>;
            })}
            </div>
            
            <button style={{position:"absolute",bottom:"0px",right:"0px"}} onClick={this.addItem.bind(this)}>+</button>
        </div>
      </div>
    );
  }
}

export default App;
