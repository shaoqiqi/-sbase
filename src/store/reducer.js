import {CHANGEINPUT,ADD,SUB} from  './actionType'
import {combineReducers} from  'redux'

 function textName5(state = {text:'你好，邵',name:'邵奇'},action){
	
	switch (action.type){
		case CHANGEINPUT: 
		return {...state,name:action.payload,text:'你好，'+action.payload};
		break;
		
	}
	
	return state
}
function counts1(count = 0,action){
	
	switch (action.type){		
		case ADD:
		return count+1;
		break;
		case SUB:
		return count-1;
		break;
	}
	
	return count
}






export default combineReducers({textName5,counts1})