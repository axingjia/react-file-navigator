export function Node(node_name){
	this.node_name=node_name;
	this.folderInFolder=[];
	this.folder=null;
	this.addInsideFolder=function(newNodeName){
		this.folderInFolder.push(new Node(newNodeName));
	}
	
	
	this.deleteFolderInFolderByName=function(name){
		for(var i=0;i<this.folderInFolder.length;i++){
			if(this.folderInFolder[i].node_name==name){
				this.folderInFolder.splice(i,1);
			}
		}
	}
}
export function appendToNodeNameHelper(root,oldNodeName,newNodeName){
	//recursively search the root and then the children of the root, and then the children of children
	if(root.folderInFolder.length==0 && root.node_name!=oldNodeName){
		return false;
	}else{
		if(oldNodeName==root.node_name){
			var newNode=new Node(newNodeName);
			// newNode.parent=root;
			root.folderInFolder.push(newNode);
			return root;
		}else{
			for(var i=0;i<root.folderInFolder.length;i++){
				appendToNodeNameHelper(root.folderInFolder[i],oldNodeName,newNodeName);
			}
			
		}
		
	}
}
export function addNewNode(oldNodeName,newNodeName){
	var newRoot=appendToNodeNameHelper(root,oldNodeName,newNodeName);
	return newRoot;
}
var root=new Node('root');
root.folderInFolder.push(new Node("children1"));
root.folderInFolder.push(new Node("children2"));
root.folderInFolder.push(new Node("children3"));
export const ROOT=root;
