// import { DISHES } from '../shared/dishes';
// 
// export const Dishes = (state = DISHES, action) => {
//     switch (action.type) {
//         default:
//           return state;
//       }
// };

import * as ActionTypes from './ActionTypes';
import {addNewNode,appendToNodeNameHelper,unFlagAllByParent,ROOT, Node} from '../shared/node';

var startroot=new Node('root');

export const Root = (state = { root: startroot}, action) => {
	console.log(action);
    switch (action.type) {
        case ActionTypes.ADD_CELL:
			var stateroot=state.root;
			console.log('stateroot',stateroot);
			var root=appendToNodeNameHelper(stateroot, action.payload.oldNodeName,action.payload.newNodeName);
			// root=addNewNode(action.payload.oldNodeName,action.payload.newNodeName);
			console.log('inside tree reducer',root);
            return {...state, root:root};
		case ActionTypes.FLAG_ACTIVE:
			var root=unFlagAllByParent(stateroot,action.payload.parentsName);
			return {...state, root:root};
        default:
            return state;
    }
};