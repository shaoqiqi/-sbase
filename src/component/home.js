import React from 'react';
import Header from './header';
import Zw from './zw';
import Pw from './pw';
import Dq from './dq';
import Dqq from './dq1';
import Yxpb from './yxpb';
import Yx from './yx';
import Pb from './pb';
import '../static/scss/home.scss';
import 'antd/dist/antd.css';

class home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            yxObj: {yx:{},bp:{},index:11},
            yxObj1:{index:11},
            actIndex: [0],
            close:true,
            yxData1:[{},{},{},{},{},{},{},{},{},{},{}],
            yxData:[{yx:{},bp:{}},{yx:{},bp:{}},{yx:{},bp:{}},{yx:{},bp:{}},{yx:{},bp:{}},{yx:{},bp:{}},{yx:{},bp:{}},{yx:{},bp:{}},{yx:{},bp:{}},{yx:{},bp:{}},{yx:{},bp:{}}],
           dateEnd:'',
           datejson:this.getDate(),
           datafn:{zwfn(){},pwfn(){},yxfn(){},pbfn(){},yxpbfn(){}},
           tfsj:'',
           tb:{}
        //    zwfn:'',
        //    pwfn:'',
        //    yxfn:'',
        //    pbfn:'',
        //    yxpbfn:''
      
        }
      
    }
 
   setDateEnd=(dateEnd)=>{
       this.state.dateEnd=dateEnd
      // this.setState({dateEnd});
   }
 
   setTfsj = (sj) => {
    this.state.tfsj=sj 
      // this.setState({tfsj:sj});
   }
   setzwfn=(fn)=>{
      this.state.datafn.zwfn = fn;
   }
   setpwfn=(fn)=>{
    this.state.datafn.pwfn = fn;
   }
    setyxfn=(fn)=>{
        this.state.datafn.yxfn = fn;
    }
    setpbfn=(fn)=>{
        this.state.datafn.pbfn = fn;
    }
    setyxpbfn=(fn)=>{
        this.state.datafn.yxpbfn = fn;
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
 ////////////
    getYxData = (v, v1) => {
        // this.defaultData = v;
        //  this.defaultObj = v1;   
        this.setState({ yxData: v, yxObj: v1 })  //全部数据
    }

    
    getYxData1 = (v, v1) => {
       
        this.setState({ yxData1: v, yxObj1: v1 })
    }
    getBpData = (v) => {      
        this.setState({ bpData: v })
    }

    getYxObj = (v, actIndex,tb) => {  
         //  alert(tb)
        this.setState({ yxObj: v,actIndex,tb })  
            
    }

    getYxObj1 = (v, actIndex) => {            
        this.setState({ yxObj1: v,actIndex })       
    }

    setActIndex = (actIndex) => {
      // alert(this.state.actIndex)
        this.setState({actIndex})  
    }
   
    setClose = (close) => {
       // this.state.close=close;
       // this.state.actIndex=[0];
        this.setState({close,actIndex:[0]})  
    } 
    setClose1 = (close) => {
         this.state.close=close;
         this.state.actIndex=[0];
        // this.setState({close,actIndex:[0]})  
     } 

    render() {

        return (<div id="home">
            <Header getDateEnd={this.setDateEnd} aaa={this.setaaa}   getTfsj={this.setTfsj} datafn={this.state.datafn} getClose1= {this.setClose1} />
            <div style={{
                width: '30%',
                height: '89vh', top: '1.5%', position: 'relative', left: '1.5%', float: 'left'
            }}>
                <Zw  tfsj={this.state.tfsj}   datejson={this.state.datejson}  getzwfn = {this.setzwfn} />
                <Pw  dateEnd={this.state.dateEnd} datejson={this.state.datejson}  getpwfn = {this.setpwfn} />
            </div>


              {
              this.state.close? <Dq dqList={this.state.yxData} setActIndex={this.setActIndex} tb={this.state.tb}  actIndex={this.state.actIndex} yxObj={this.state.yxObj} />
                     :
              <Dqq dqList={this.state.yxData1} dqList1={this.state.bpData} actIndex={this.state.actIndex} yxObj={this.state.yxObj1} />
              }
         
        

            


           {this.state.close? <div   style={{
                width: '30%',
                height: '89vh', top: '1.5%', position: 'relative', right: '1.5%', float: 'right'
            }}>             
            <Yxpb  getyxpbfn = {this.setyxpbfn} datejson={this.state.datejson} getClose= {this.setClose} actIndex={this.state.actIndex} yxDate={this.getYxData} yxObj={this.getYxObj} />             
            </div>:
            <div style={{
                width: '30%',
                height: '89vh', top: '1.5%', position: 'relative', right: '1.5%', float: 'right'
            }}>
                <Yx dateEnd={this.state.dateEnd} getyxfn = {this.setyxfn} datejson={this.state.datejson} getClose= {this.setClose} actIndex={this.state.actIndex} yxDate={this.getYxData1} yxObj={this.getYxObj1} />
                <Pb dateEnd={this.state.dateEnd} getpbfn = {this.setpbfn} datejson={this.state.datejson} actIndex={this.state.actIndex} bpDate={this.getBpData} yxObj={this.getYxObj1} />

            </div>}

            {/* <div style={{
                width: '30%',
                height: '89vh', top: '1.5%', position: 'relative', right: '1.5%', float: 'right',display:this.state.open?'block':'none'
            }}>
                <Yx actIndex={this.state.actIndex} yxDate={this.getYxData} yxObj={this.getYxObj} />
                <Pb actIndex={this.state.actIndex} bpDate={this.getBpData} yxObj={this.getYxObj} />

            </div> */}


        </div>);

    }
}

export default home;
