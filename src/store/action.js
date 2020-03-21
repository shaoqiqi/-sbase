import {CHANGEINPUT,ADD,SUB,PWTD,PWFTD} from  './actionType'


export function changeInput(payload){
	return {type:CHANGEINPUT,payload}
}
export function add(){
	return {type:ADD}
}
export function sub(){
	return {type:SUB}
}


export function pwtd(){
	return {type:PWTD}
}
export function pwftd(){
	return {type:PWFTD}
}





