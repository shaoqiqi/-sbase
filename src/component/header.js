import React, { Component } from 'react';
import  '../static/scss/header.scss';
import { DatePicker,Button,TimePicker,message } from 'antd';
import 'moment/locale/zh-cn';
import moment from 'moment';
import  {tfData}  from '../service';




 
export default class header extends Component {
    constructor(props) {
        super(props);
        this.state = {timeState:false,
                      dateString:'',
                      timeString:'',
                      tfname:'',
                      tfsj:'',
                      open:false
                     };
        
    }
    onChangeT=(f, v)=> {       
        this.state.timeString = v;   
    }
    onChange=(date, dateString)=> {
        this.state.dateString = dateString;           
    }
    getDate(){
        let Dat = new Date(),datejson = {};
        let endDate = Dat.getFullYear()+"-" + (Dat.getMonth()+1) + "-" + Dat.getDate()+" "+Dat.getHours()+ ":00:00";
        let Dat1 =  new Date(endDate);
        Dat1.setHours(Dat1.getHours()-1);
        datejson.endDate = endDate;
        datejson.beginDate = Dat1.getFullYear()+"-" + (Dat1.getMonth()+1) + "-" + Dat1.getDate()+" "+Dat1.getHours()+ ":00:00";                                
         return datejson
     }

    sendDate = () => {
      
        this.props.getClose1(true);
        this.state.timeString = this.state.timeString || this.getDate().endDate.substring(11,13);
        this.state.dateString = this.state.dateString || this.getDate().endDate.substring(0,10);       
        this.props.datafn.zwfn({TfDate:this.state.dateString+' '+this.state.timeString+":00:00"}); 
        this.props.datafn.pwfn({TfDate:this.state.dateString+' '+this.state.timeString+":00:00"});  
        this.props.datafn.yxpbfn({TfDate:this.state.dateString+' '+this.state.timeString+":00:00"});  
      //  this.props.datafn.yxfn({TfDate:this.state.dateString+' '+this.state.timeString+":00:00"});  
      //  this.props.datafn.pbfn({TfDate:this.state.dateString+' '+this.state.timeString+":00:00"}); 
        
       // tfData({TfDate:this.state.dateString+' '+this.state.timeString+":00:00"})
       // .then(res => {
          
                //this.state.tfname = res.data.name;
                // this.props. getTfsj(res.data.deadline);
                // this.props.getDateEnd(this.state.dateString+' '+this.state.timeString+":00:00")
       // }).catch(res => {
        //    message.warning('该时间无历史数据!',2);

       // })

       
    }


    componentDidMount(){
        // tfData()
        // .then(res => {
          
        //         this.state.tfname = res.data.name;
        //         this.props. getTfsj(res.data.deadline)
        // })


    }
    handleOpenChange = open => {
        this.setState({ open });
      };
    handleClose=()=>{
        this.setState({ open:false });
    }

    aaaww(a,v,w){
        // alert(132)
       //this.props.history.push({pathname:'reg',state:{aaa:123}})
     //  w.persist()
       console.log(a,w)
       }

    render() {
        return (
            <div id="home-header">
                <span className="tf-text tf">当前台风:</span>
                <span className="tf-title tf">{'第18号“米娜”台风'}</span>
                {/* <span onClick={(e)=>this.aaaww(55,55,e)}>主持词</span> */}
                <div className="mc-title tf">国网宁波供电公司应急指挥平台</div>             
                <span className="sj-title tf" >时间:</span>
                <DatePicker className="input-year tf"  placeholder="年月日" onChange={this.onChange} />
                <TimePicker  open={this.state.open}   onOpenChange={this.handleOpenChange} className="input-time tf" defaultOpenValue={moment('00', 'HH')} onChange={this.onChangeT} placeholder="时" format={'HH'}
                   addon={() => (
                    <Button size="small" type="primary" onClick={this.handleClose}>
                      确定
                    </Button>
                  )}  />
                <span className="sj-cx tf" onClick={this.sendDate}><span>查询</span></span> 
            </div>
        )
    }
}
