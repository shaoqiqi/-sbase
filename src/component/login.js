import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link,Redirect,Route } from 'react-router-dom';
import Home from './home';
import { DatePicker } from 'antd';
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
   	 this.aaa=5555555
   	
   }
   componentDidMount(){
	   console.log(this)
   }
  aaaw=()=>{
	 // alert(132)
	this.props.history.push({pathname:'reg',state:{aaa:123}})
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
	
	
		
		<p>{this.props.textName.text}</p>
		<p>{this.state.date.toLocaleTimeString()}</p>
		<input  type="text" defaultValue={this.props.textName.name}	onChange={this.props.onChange}/>	
		<p >{this.props.counts}</p>
		<button onClick={this.props.add}>增加 </button>
		<button onClick={this.props.sub}>减小 </button>
		<button onClick={this.aaaw}>主持词</button>
		<Link to={`/reg/${React.$getCodeByb4({aaa:111})}`} style={{textDecoration:'none'}}> <span style={{color:'green'}}>注册</span></Link>
		<Link to={`/login/home`} style={{textDecoration:'none'}}> <span style={{color:'green'}}> 首页</span></Link> 
		{/* <Router>
       
		
       
        <Route path="/home" exact component={Home} />
       
    </Router>  */}
		
	   
		</div>;

	}
}

export default Login