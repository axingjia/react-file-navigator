import React, { Component } from 'react';
import  {CellComponent} from './CellComponent.js';
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
    addToRoot: (newNodeName) => dispatch(addToRoot(newNodeName))
});

class Main extends Component {

    constructor(props) {
    super(props);
     
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

  


  render() {
	  return (
	  <div>
        <div className="space"> </div>
        <div className="level">
            {}
            <div style={{overflowY:"scroll",height:"inherit"}}>
            
            {this.props.root.folderInFolder.map(function(current,index){
                return <CellComponent key={index}value={current.node_name}></CellComponent>;
            })}
            </div>
            
            {<button style={{position:"absolute",bottom:"0px",right:"0px"}} onClick={()=>{this.props.addToRoot('root','another one');this.forceUpdate()}}>+</button>}
        </div>
      </div>
  );
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);