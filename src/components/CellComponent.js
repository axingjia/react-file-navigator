import React, { Component } from 'react';

export class CellComponent extends Component{
	constructor(prop){
		super(prop);
		this.toggleArrow= this.toggleArrow.bind(this);
		// this.state={active:false};
		this.state={active:this.props.active};
		console.log('thisstate',this.state);
		
	}
	toggleArrow(){
	
	
	
      var currentArrow=this.state.active;
      this.setState({active:!currentArrow});
      // self.props.addLevelFn();
      //change parent's state
      // this.props.changeParent(!currentArrow);
	
	
    }
	render(){
		
		return(
			<div >
			
				<div className={[(this.state.active?'grey':null),'item'].join(' ')} 
					onClick={this.toggleArrow} 
					>
					{this.props.value}
					<div className="arrow" style={{display:this.state.active?'inline-block':'none'}}></div>
				</div>
				
				
			</div>
		);
	}
}