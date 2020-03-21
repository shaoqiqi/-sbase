import React from 'react';
import {connect} from 'react-redux';
import myLogin from '../../component/login';
import home from '../../component/home';
import {changeInput,add,sub} from '../action';

function mapStateToProps(state){
	console.log(state)
	
	return {textName:state.textName,
		
			   counts:state.counts,
	      }
}
function mapDispatchToProps(dispatch){
	return {onChange:(e)=>dispatch(changeInput(e.target.value)),
					add:()=>dispatch(add()),
					sub:()=>dispatch(sub()),
	      }
}

 

export default  connect(mapStateToProps,mapDispatchToProps)(myLogin)
