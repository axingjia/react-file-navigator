import React, { Component } from 'react';
import  {CellComponent} from './CellComponent.js';

export class LevelComponent extends Component{
	constructor(prop){
		super(prop);
		
		
	}
	render(){
		return (
			<div className="level">
	        
	            
	            {/*<div style={{overflowY:"scroll",height:"inherit"}}>}*/}
	            
	            {this.props.arrayOfValue.map(function(current,index){
	                return <CellComponent key={index}value={current.node_name} active={current.active}></CellComponent>;
	            })}
	            {/*</div>*/}
	            
	            {<button style={{position:"absolute",bottom:"0px",right:"0px"}} onClick={this.props.onButtonClick}>+</button>}
	        </div>
			
			
		)
	}
}