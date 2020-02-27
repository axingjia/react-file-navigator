import React, { Component } from 'react';
import  {CellComponent} from './CellComponent.js';
import  {LevelComponent} from './LevelComponent.js';
import { addCell,changeName,deleteCell} from '../redux/ActionCreators';
import { connect } from 'react-redux';
import { addToRoot} from '../redux/ActionCreators';


const mapStateToProps = state => {
  return {
    root:state.root
  }
}

const mapDispatchToProps = dispatch => ({
	// addfromRoot: (oldNodeName,newNodeName) => dispatch(postComment(dishId, rating, author, comment)),
    unFlagAllByParent:(parentsName)=>dispatch(unFlagAllByParent(parentsName)),
    addToRoot: (newNodeName) => dispatch(addToRoot(newNodeName))
});

class Main extends Component {

    constructor(props) {
    
        super(props);
        this.addToRoot= this.addToRoot.bind(this);
     
    // this.state = {
    //   dishes: DISHES,
    //   comments: COMMENTS,
    //   promotions: PROMOTIONS,
    //   leaders: LEADERS
    // 
    // };
  }
  componentDidMount() {
    
  }

  addToRoot(){
      this.props.addToRoot('another one');
      this.forceUpdate()
  }
  unFlagAllByParent(){
      this.props.unFlagAllByParent('another one');
      this.forceUpdate()
  }
  


  render() {
	  return (
	  <div>
        <div className="space"> </div>
        {/*<LevelComponent arrayOfValue={this.props.root.folderInFolder} onButtonClick={this.addToRoot} unFlagAllByParent={this.}></LevelComponent>*/}
        <LevelComponent arrayOfValue={this.props.root.folderInFolder} onButtonClick={this.addToRoot}></LevelComponent>
        
      </div>
      
  );
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);