import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link,Redirect,Route } from 'react-router-dom';

import { DatePicker, Button } from 'antd';
import 'moment/locale/zh-cn';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;




function onChange(date, dateString) {
	console.log(date, dateString);
  }


class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {date: new Date(),
			ages:555
		
		};
		
	}

   componentWillMount(){
   	 this.aaa=55555564
   	
   }
   componentDidMount(){
	   console.log(this)
   }
  aaaww(a,v,w){
	 // alert(132)
	//this.props.history.push({pathname:'reg',state:{aaa:123}})
	console.log(a,w)
  }
   handleDateChange(){

   }
	render() {	
	  
	   console.log(this)
		let age = '88hk'	
		return <div  
		   >Hello World!
		
		<DatePicker onChange={onChange} />
    <br />
    <MonthPicker onChange={onChange} placeholder="Select month" />
    <br />
    <RangePicker onChange={onChange} />
    <br />
    <WeekPicker onChange={onChange} placeholder="Select week" />



			
		
			  <div style={{width:'100px',height:'100px',background:'red',float:'left'}}> </div>
	
	<Button background={'red'}>213</Button>
		
		<p>{this.props.textNamea.text}</p>
		<p>{this.state.date.toLocaleTimeString()}</p>
		<input  type="text" defaultValue={this.props.textNamea.name}	onChange={this.props.onChange}/>	
		<p >{this.props.counts2}</p>
		<button onClick={this.props.add1}>增加 </button>
		<button onClick={this.props.sub}>减小 </button>
		<span onClick={(e)=>this.aaaww(55,55)}>主持词</span>
		<Link to={`/reg/${React.$getCodeByb4({aaa:111})}`} style={{textDecoration:'none'}}> <span style={{color:'green'}}>注册</span></Link>
		<Link to={`/login/home`} style={{textDecoration:'none'}}> <span style={{color:'green'}}> 首页</span></Link> 
		{/* <Router>
       
		
       
        <Route path="/home" exact component={Home} />
       
    </Router>  */}
		
	   
		</div>;

	}
}

export default Login