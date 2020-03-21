import React, { Component } from 'react';
import '../static/scss/pw.scss';
import  {pwData}  from '../service';
import { message } from 'antd';

export default class pw extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pwdata:{
                datatdList:[100,200,100,200,100,200,100],
                tdList: [
                 { name: '新增', count: 100},
                 { name: '处理', count: 200}, 
                 { name: '修复', count: 300}
                ],
                dataftdList:[100,200,100,200,100,200],
                ftdList: [
                 { name: '新增',   count: 100},
                 { name: '处理',   count: 200},
                 { name: '修复',   count: 300}
                ]
             }             
            }
    }
   
    getTdData = (i) => {
        this.state.pwdata.tdList[i].bg = !this.state.pwdata.tdList[i].bg;
       // this.setState({ pwdata: this.state.pwdata })      
        let ftactData = [];
        let ftactData1 = [];
        for (let j = 0; j <  this.state.pwdata.tdList.length; j++) {
              if(this.state.pwdata.ftdList[j].bg){
                ftactData1.push(this.state.pwdata.ftdList[j].type)                          
              }           
              if(this.state.pwdata.tdList[j].bg){              
               ftactData.push(this.state.pwdata.tdList[j].type)                          
             }
        }
        if(ftactData.length == 0 ){
            this.state.pwdata.tdList[i].bg = !this.state.pwdata.tdList[i].bg;
            message.warning('至少选择一中类型!',2);
            return;
        }
        this.setState({ pwdata: this.state.pwdata })
        let params = {};  
        if(this.props.dateEnd){
            params =  {type: ftactData.join(),type1: ftactData1.join(),TfDate:this.props.dateEnd}
        } else{
            params =  {type: ftactData.join(),type1: ftactData1.join()}
        }  
        pwData(params)
        .then(res => {
          
            this. max =  Math.max(... res.data.datatdList ) + 100;
            this. maxList = [this. max,this. max, this. max, this. max, this. max, this. max, this. max];
            this.option.series[0].data =  this.maxList; 
            this.option.series[1].data = res.data.datatdList;
            this.myChart.setOption(this.option, true);

        })
       

    }

    getFtData = (i) => {
        this.state.pwdata.ftdList[i].bg = !this.state.pwdata.ftdList[i].bg;
       // this.setState({ pwdata: this.state.pwdata })
        let ftactData = [];
        let ftactData1 = [];
        for (let j = 0; j <  this.state.pwdata.ftdList.length; j++) {
               if(this.state.pwdata.ftdList[j].bg){
                 ftactData1.push(this.state.pwdata.ftdList[j].type)                          
               }
               if(this.state.pwdata.tdList[j].bg){
                ftactData.push(this.state.pwdata.tdList[j].type)                          
              }
        }  
        if(ftactData1.length == 0 ){
            this.state.pwdata.ftdList[i].bg = !this.state.pwdata.ftdList[i].bg;
            message.warning('至少选择一中类型!',2);
            return;
        }    
        this.setState({ pwdata: this.state.pwdata })
        let params = {};  
        if(this.props.dateEnd){
            params =  {type: ftactData.join(),type1: ftactData1.join(),TfDate:this.props.dateEnd}
        } else{
            params =  {type: ftactData.join(),type1: ftactData1.join()}
        } 
        pwData(params)
        .then(res => {              
            this. max1 =  Math.max(...res.data.dataftdList) + 20;
            this. maxList1 = [this. max1,this. max1, this. max1, this. max1, this. max1, this. max1];  
            this.option1.series[0].data = this. maxList1;
            this.option1.series[1].data = res.data.dataftdList;
            this.myChart1.setOption(this.option1, true);
        })
    
    }

    componentWillReceiveProps(nprops){
       
       
    }

    sendpwdata=(endDate)=>{
        this.myChart = React.$echarts.init(document.getElementById('pwTdBar'));
        this.myChart1 = React.$echarts.init(document.getElementById('pwFtdBar'));
        // 绘制图表
        let params = {};
        if(endDate){
            params = {type:"wpg,ypg,ycl",type1:"wpg,ypg,ycl",...endDate}
        }else{
            params = {type:"wpg,ypg,ycl",type1:"wpg,ypg,ycl"}
        }
        pwData(params)
        .then(res=>{
        //  this.state.pwdata = res.data;
        this.state.pwdata = res.data
         this.tdData = this.state.pwdata.datatdList;
   
           this. max =  Math.max(...this.state.pwdata.datatdList) + 140;
           this. maxList = [this. max,this. max, this. max, this. max, this. max, this. max, this. max];  
           this.ftdData = this.state.pwdata.dataftdList;
   
           this. max1 =  Math.max(...this.state.pwdata.dataftdList) + 20;
           this. maxList1 = [this. max1,this. max1, this. max1, this. max1, this. max1, this. max1];
      
         this.state.pwdata.ftdList[0].bgc='#ff4e00';
         this.state.pwdata.tdList[0].bgc='#ff4e00';
         this.state.pwdata.ftdList[0].type='wpg';
         this.state.pwdata.tdList[0].type='wpg';       
         this.state.pwdata.ftdList[1].bgc='#ffa800';
         this.state.pwdata.tdList[1].bgc='#ffa800';
         this.state.pwdata.ftdList[1].type='ypg';
         this.state.pwdata.tdList[1].type='ypg';
         this.state.pwdata.ftdList[2].bgc='#01dc79';
         this.state.pwdata.tdList[2].bgc='#01dc79';
         this.state.pwdata.ftdList[2].type='ycl';
         this.state.pwdata.tdList[2].type='ycl';
          for (let j = 0; j < this.state.pwdata.ftdList.length; j++) {
              this.state.pwdata.ftdList[j].bg=true;
              this.state.pwdata.tdList[j].bg=true;
         
          }
         
          this.setState({pwdata:this.state.pwdata})
          this.option = {
            tooltip: {
				trigger: 'axis',             
                formatter: function (v) { 
                    v[1].marker = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#83bff6;"></span>'                   
                    return v[1].marker+v[1].name+v[1].value
                }
			},
              grid: {
                  left: '1%',
                  right: '1%',
                  bottom: '1%',
                  top: '9%',
                  containLabel: true,
              },
              xAxis: {
  
                  data: ['馈线停电', '分线停电', '配电停电', '低压出线', '低压分线', '表箱停电', '单户停电'],
                  axisLabel: {
  
                      interval: 0,
                      textStyle: {
                          color: '#01ffaf',
                          fontSize: 8,
                      }
                  },
                  axisTick: {
                      show: false
                  },
                  axisLine: {
                      show: true,
                      lineStyle: {
                          color: '#01ffaf'
                      }
  
                  },
  
              },
              yAxis: {
                  splitLine: {
                      show: false,
  
                  },
                  axisLine: {
                      show: false
                  },
                  axisTick: {
                      show: false
                  },
                  axisLabel: {
                      textStyle: {
                          color: '#01ffaf',
                          fontSize: 10,
  
                      }
                  }
              },
              dataZoom: [
                  {
                      type: 'inside'
                  }
              ],
              series: [
                  { // For shadow
                      type: 'bar',
                      itemStyle: {
                          normal: { color: '#0e2725' }
                      },
                      barGap: '-100%',
                      barCategoryGap: '60%',
                      data: this. maxList,
                      animation: false
                  },
                  {
                      type: 'bar',
                      label: {
  
                          show: true,
                          position: 'top',
                          color: '#01ffaf',
                          fontSize: 10,
  
                      },
                      itemStyle: {
                          normal: {
                              color: new React.$echarts.graphic.LinearGradient(
                                  0, 0, 0, 1,
                                  [
                                      { offset: 0, color: '#83bff6' },
  
                                      { offset: 1, color: '#01ffaf' }
                                  ]
                              )
                          },
                          emphasis: {
                              color: new React.$echarts.graphic.LinearGradient(
                                  0, 0, 0, 1,
                                  [
                                      { offset: 0, color: '#01ffb4' },
  
                                      { offset: 1, color: '#01ff62' }
                                  ]
                              )
                          }
                      },
                      data: this.tdData
                  }
              ]
          };
  
  
  
  
  
          this. option1 = {
            tooltip: {
				trigger: 'axis',
                formatter: function (v) {  
                    v[1].marker = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#83bff6;"></span>'                                
                    return v[1].marker+v[1].name+v[1].value
                }
			},
              grid: {
                  left: '1%',
                  right: '1%',
                  bottom: '1%',
                  top: '9%',
                  containLabel: true,
              },
              xAxis: {
  
                  data: ['线路接地', '线路过流', '线路缺项', '公变高压缺相', '馈线瞬时停电', '分线瞬时停电'],
                  axisLabel: {
                      interval: 0,
  
                      //textStyle: {
                      color: '#01ffaf',
                      fontSize: 8,
                      // }
                  },
                  axisTick: {
                      show: false
                  },
                  axisLine: {
                      show: true,
                      lineStyle: {
                          color: '#01ffaf'
                      }
  
                  },
  
              },
              yAxis: {
                  splitLine: {
                      show: false,
  
                  },
                  axisLine: {
                      show: false
                  },
                  axisTick: {
                      show: false
                  },
                  axisLabel: {
                      textStyle: {
                          color: '#01ffaf',
                          fontSize: 10,
  
                      }
                  }
              },
              dataZoom: [
                  {
                      type: 'inside'
                  }
              ],
              series: [
                  { // For shadow
                      type: 'bar',
                      itemStyle: {
                          normal: { color: '#0e2725' }
                      },
                      barGap: '-100%',
                      barCategoryGap: '65%',
                      data: this. maxList1,
                      animation: false
                  },
                  {
                      type: 'bar',
                      label: {
  
                          show: true,
                          position: 'top',
                          color: '#01ffaf',
                          fontSize: 10,
  
                      },
                      itemStyle: {
                          normal: {                          
                              color: new React.$echarts.graphic.LinearGradient(
                                  0, 0, 0, 1,
                                  [
                                      { offset: 0, color: '#83bff6' },
  
                                      { offset: 1, color: '#01ffaf' }
                                  ]
                              )
                          },
                          emphasis: {
                              color: new React.$echarts.graphic.LinearGradient(
                                  0, 0, 0, 1,
                                  [
                                      { offset: 0, color: '#01ffb4' },
  
                                      { offset: 1, color: '#01ff62' }
                                  ]
                              )
                          }
                      },
                      data: this.ftdData
                  }
              ]
          };
          this.myChart.setOption(this.option, true);
          this.myChart1.setOption(this.option1, true);
           
        })
    }


    componentDidMount() {
        this.sendpwdata(); 
        this.props.getpwfn(this.sendpwdata);       
    }

    render() {
        return (
            <div id="home-pw">

                <div className="pw-i"></div>
                <span className="pw-title">配网故障研判</span>
                <p className='zs'>停电故障数:<span>{ this.state.pwdata.tdList[0].count + this.state.pwdata.tdList[1].count + this.state.pwdata.tdList[2].count}</span></p>
                <p className='fzs zs'>非停电故障/瞬时停电数:<span>{this.state.pwdata.ftdList[0].count + this.state.pwdata.ftdList[1].count + this.state.pwdata.ftdList[2].count}</span></p>
                {this.state.pwdata.tdList.map((v, i) =>
                    <div key={v.name} className={'td' + i}>

                        <div onClick={this.getTdData.bind(this, i)} className={"tdgz " + "tdbg" + i} style={{ background: v.bg ? v.bgc : 'none' }} ></div>
                        <p className="xz">{v.name}:<span className={'tdcg' + i}>{v.count}</span></p>
                    </div>)}

                {this.state.pwdata.ftdList.map((v, i) =>
                    <div key={v.name} className={'ftd' + i}>
                        <div  onClick={this.getFtData.bind(this, i)} className={"tdgz " + "tdbg" + i} style={{ background: v.bg ? v.bgc : 'none' }}></div>
                        <p className="xz">{v.name}:<span className={'tdcg' + i} >{v.count}</span></p>
                    </div>)}
                <div id="pwTdBar"></div>

                <div id="pwFtdBar"></div>

            </div>
        )
    }
}
