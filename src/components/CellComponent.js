import React, { Component } from 'react';

export class CellComponent extends Component{
	constructor(prop){
		super(prop);
		this.state={active:false};
	}
	toggleArrow(){
      
      

      var currentArrow=this.state.active;
      this.setState({active:!currentArrow});
      // self.props.addLevelFn();
      //change parent's state
      this.props.changeParent(!currentArrow);
      

    }
	render(){
		return(
			<div className="item">{this.props.value}</div>
		);
	}
}