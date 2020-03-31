import React from 'react';
import {connect} from 'react-redux';
import myLogin from '../../component/login';

import {changeInput,add,sub} from '../action';

function mapStateToProps(state){
	console.log(state)
	
	return {textNamea:state.textName5,
		
			   counts2:state.counts1,
	      }
}
function mapDispatchToProps(dispatch){
	return {onChange:(e)=>dispatch(changeInput(e.target.value)),
					add1:()=>dispatch({type:'add'}),
					sub:()=>dispatch(sub()),
	      }
}

 

export default  connect(mapStateToProps,mapDispatchToProps)(myLogin)
