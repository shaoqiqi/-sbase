import React, { Component } from 'react';
import '../static/scss/yxp.scss';
import  {yxpbData,yxpbmodal,tyxpbmodal,tb,tbz,yxpbColor}  from '../service';
import { write } from 'fs';
import { Modal } from 'antd';
export default class yxpb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            yxbp:
            [
              // {
              //   name: '海曙',
              //   yx: {'posdqsl': {zb: 20, gb: 30, yhs: 10200}, 'posljsl': {zb: 70, gb: 80, yhs: 33100}},
              //   pb: {'posdqsl': {zb: 18, gb: 28, yhs: 9200}, 'posljsl': {zb: 62, gb: 66, yhs: 32083}}
              // },
              //   {
              //     name: '江北',
              //     yx: {'posdqsl': {zb: 20, gb: 40, yhs: 17000}, 'posljsl': {zb: 300, gb: 20, yhs: 8300}},
              //     pb: {'posdqsl': {zb: 18, gb: 37, yhs: 16210}, 'posljsl': {zb: 20, gb: 17, yhs: 8120}}
              //   },
              //   {
              //     name: '镇海',
              //     yx: {'posdqsl': {zb: 18, gb: 15, yhs: 6700}, 'posljsl': {zb: 20, gb: 25, yhs: 10800}},
              //     pb: {'posdqsl': {zb: 10, gb: 11, yhs: 6646}, 'posljsl': {zb: 19, gb: 21, yhs: 9843}}
              //   },
              //   {
              //     name: '北仑',
              //     yx: {'posdqsl': {zb: 10, gb: 12, yhs: 5150}, 'posljsl': {zb: 30, gb: 15, yhs: 6450}},
              //     pb: {'posdqsl': {zb: 5, gb: 8, yhs: 4150}, 'posljsl': {zb: 28, gb: 12, yhs: 5869}}
              //   },
              //   {
              //     name: '杭湾',
              //     yx: {'posdqsl': {zb: 8, gb: 10, yhs: 4150}, 'posljsl': {zb: 26, gb: 12, yhs: 6050}},
              //     pb: {'posdqsl': {zb: 8, gb: 10, yhs: 4150}, 'posljsl': {zb: 26, gb: 12, yhs: 6050}}
              //   },
              //   {
              //     name: '鄞州',
              //     yx: {'posdqsl': {zb: 10, gb: 22, yhs: 9270}, 'posljsl': {zb: 30, gb: 10, yhs: 4690}},
              //     pb: {'posdqsl': {zb: 8, gb: 18, yhs: 8270}, 'posljsl': {zb: 28, gb: 8, yhs: 3812}}
              //   },
              //   {
              //     name: '慈溪',
              //     yx: {'posdqsl': {zb: 20, gb: 30, yhs: 12420}, 'posljsl': {zb: 19, gb: 22, yhs: 9210}},
              //     pb: {'posdqsl': {zb: 15, gb: 28, yhs: 1120}, 'posljsl': {zb: 14, gb: 20, yhs: 8564}}
              //   },
              //   {
              //     name: '余姚',
              //     yx: {'posdqsl': {zb: 15, gb: 16, yhs: 7280}, 'posljsl': {zb: 16, gb: 11, yhs: 5150}},
              //     pb: {'posdqsl': {zb: 12, gb: 14, yhs: 6280}, 'posljsl': {zb: 11, gb: 10, yhs: 4550}}
              //   },
              //   {
              //     name: '奉化',
              //     yx: {'posdqsl': {zb: 19, gb: 21, yhs: 4840}, 'posljsl': {zb: 9, gb: 9, yhs: 3920}},
              //     pb: {'posdqsl': {zb: 14, gb: 16, yhs: 3840}, 'posljsl': {zb: 9, gb: 7, yhs: 3520}}
              //   },
              //   {
              //     name: '宁海',
              //     yx: {'posdqsl': {zb: 17, gb: 16, yhs: 6650}, 'posljsl': {zb: 30, gb: 14, yhs: 5890}},
              //     pb: {'posdqsl': {zb: 14, gb: 13, yhs: 5650}, 'posljsl': {zb: 26, gb: 11, yhs: 5190}}
              //   },
              //   {
              //     name: '象山',
              //     yx: {'posdqsl': {zb: 18, gb: 12, yhs: 5290}, 'posljsl': {zb: 15, gb: 7, yhs: 3160}},
              //     pb: {'posdqsl': {zb: 11, gb: 9, yhs: 4290}, 'posljsl': {zb: 10, gb: 3, yhs: 2046}}
              //   }
              ],
            activeIndex: -1,
            visible:false,
            title:'',
            yxpbColor:[{yx:{posdqsl:{zb: 0, gb: 0, yhs: 0},posljsl:{zb: 0, gb: 0, yhs: 0}},
                pb:{posdqsl:{zb: 0, gb: 0, yhs: 0},posljsl:{zb: 0, gb: 0, yhs: 0}}},
                {yx:{posdqsl:{zb: 0, gb: 0, yhs: 0},posljsl:{zb: 0, gb: 0, yhs: 0}},pb:{posdqsl:{zb: 0, gb: 0, yhs: 0},posljsl:{zb: 0, gb: 0, yhs: 0}}},
                {yx:{posdqsl:{zb: 0, gb: 0, yhs: 0},posljsl:{zb: 0, gb: 0, yhs: 0}},pb:{posdqsl:{zb: 0, gb: 0, yhs: 0},posljsl:{zb: 0, gb: 0, yhs: 0}}}
                ,{yx:{posdqsl:{zb: 0, gb: 0, yhs: 0},posljsl:{zb: 0, gb: 0, yhs: 0}},pb:{posdqsl:{zb: 0, gb: 0, yhs: 0},posljsl:{zb: 0, gb: 0, yhs: 0}}},
                {yx:{posdqsl:{zb: 0, gb: 0, yhs: 0},posljsl:{zb: 0, gb: 0, yhs: 0}},pb:{posdqsl:{zb: 0, gb: 0, yhs: 0},posljsl:{zb: 0, gb: 0, yhs: 0}}},
                {yx:{posdqsl:{zb: 0, gb: 0, yhs: 0},posljsl:{zb: 0, gb: 0, yhs: 0}},pb:{posdqsl:{zb: 0, gb: 0, yhs: 0},posljsl:{zb: 0, gb: 0, yhs: 0}}},
                {yx:{posdqsl:{zb: 0, gb: 0, yhs: 0},posljsl:{zb: 0, gb: 0, yhs: 0}},pb:{posdqsl:{zb: 0, gb: 0, yhs: 0},posljsl:{zb: 0, gb: 0, yhs: 0}}},
                {yx:{posdqsl:{zb: 0, gb: 0, yhs: 0},posljsl:{zb: 0, gb: 0, yhs: 0}},pb:{posdqsl:{zb: 0, gb: 0, yhs: 0},posljsl:{zb: 0, gb: 0, yhs: 0}}},
                {yx:{posdqsl:{zb: 0, gb: 0, yhs: 0},posljsl:{zb: 0, gb: 0, yhs: 0}},pb:{posdqsl:{zb: 0, gb: 0, yhs: 0},posljsl:{zb: 0, gb: 0, yhs: 0}}},
                {yx:{posdqsl:{zb: 0, gb: 0, yhs: 0},posljsl:{zb: 0, gb: 0, yhs: 0}},pb:{posdqsl:{zb: 0, gb: 0, yhs: 0},posljsl:{zb: 0, gb: 0, yhs: 0}}},
                {yx:{posdqsl:{zb: 0, gb: 0, yhs: 0},posljsl:{zb: 0, gb: 0, yhs: 0}},pb:{posdqsl:{zb: 0, gb: 0, yhs: 0},posljsl:{zb: 0, gb: 0, yhs: 0}}},
                {yx:{posdqsl:{zb: 0, gb: 0, yhs: 0},posljsl:{zb: 0, gb: 0, yhs: 0}},pb:{posdqsl:{zb: 0, gb: 0, yhs: 0},posljsl:{zb: 0, gb: 0, yhs: 0}}}]
           
        };

        this.modalOption = {
   
            tooltip: {
                trigger: 'axis'
            },
            legend: {
               // data:['停电专变','停电公变','停电用户数','复电专变','复电公变','复电用户数'],
                top: '0%',
                icon: 'circle',               
                itemWidth: 12,
                itemHeight: 12,
                textStyle: {
                    color: '#fff',
                    fontSize: 12
                }
            },
            grid: {
                top:'30px',
                left: '0px',
                right: '0px',
                bottom: '0px',
                containLabel: true
            },
         
            xAxis: {
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#ffffff'
                    },
                    interval: 0,
               },
               axisLine:{
                lineStyle:{
                    color:'#ffffff',
                   
                }
               },
                data: []
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#ffffff'
                    }
               },
               axisLine:{
                lineStyle:{
                    color:'#ffffff',
                   
                }
               },
            },
            series: [
                {
                    name:'停电专变',
                    type:'line',                
                    data:[]
                },
                {
                    name:'停电公变',
                    type:'line',
                  
                    data:[]
                },
                {
                    name:'停电用户数',
                    type:'line',
                  
                    data:[]
                },
                {
                    name:'复电专变',
                    type:'line',
                   
                    data:[]
                },
                {
                    name:'复电公变',
                    type:'line',
                    color:'#59ba12',
                    data:[]
                },
                {
                    name:'复电用户数',
                    type:'line',
                    color:'#00f6ff',                
                    data:[]
                }
            ]
        }

    }
    
    componentWillReceiveProps(nprops){



        
    }

    sendyxpbdata=(date)=>{
        let params = {};
        if(date){
            params = {...date}
        }
        yxpbData(params)
        .then((res)=>{
           console.log(res)
       // this.setState(yxbp)
        this.state.yxbp = res.data;
        
          let zjObj = {
              name: '总计',
              yx: {'posdqsl': {zb: 0, gb: 0, yhs: 0}, 'posljsl': {zb: 0, gb: 0, yhs: 0}},
              pb: {'posdqsl': {zb: 0, gb: 0, yhs: 0}, 'posljsl': {zb: 0, gb: 0, yhs: 0}}          
          }
          let qdList = [];
        
          for (let i in this.state.yxbp) {
              zjObj.yx.posdqsl.zb += this.state.yxbp[i].yx.posdqsl.zb;
              zjObj.yx.posdqsl.gb += this.state.yxbp[i].yx.posdqsl.gb;
              zjObj.yx.posdqsl.yhs += this.state.yxbp[i].yx.posdqsl.yhs;
              zjObj.yx.posljsl.zb += this.state.yxbp[i].yx.posljsl.zb;
              zjObj.yx.posljsl.gb += this.state.yxbp[i].yx.posljsl.gb;
              zjObj.yx.posljsl.yhs += this.state.yxbp[i].yx.posljsl.yhs;
  
              zjObj.pb.posdqsl.zb += this.state.yxbp[i].pb.posdqsl.zb;
              zjObj.pb.posdqsl.gb += this.state.yxbp[i].pb.posdqsl.gb;
              zjObj.pb.posdqsl.yhs += this.state.yxbp[i].pb.posdqsl.yhs;
              zjObj.pb.posljsl.zb += this.state.yxbp[i].pb.posljsl.zb;
              zjObj.pb.posljsl.gb += this.state.yxbp[i].pb.posljsl.gb;
              zjObj.pb.posljsl.yhs += this.state.yxbp[i].pb.posljsl.yhs;
              qdList.push({
                  name: this.state.yxbp[i].name,
                  yx:{
                      zsl: this.state.yxbp[i].yx.posdqsl.zb + this.state.yxbp[i].yx.posljsl.zb,
                      gsl: this.state.yxbp[i].yx.posdqsl.gb + this.state.yxbp[i].yx.posljsl.gb,
                      yhs: this.state.yxbp[i].yx.posdqsl.yhs + this.state.yxbp[i].yx.posljsl.yhs,
                  },
                  bp:{
                      zsl: this.state.yxbp[i].pb.posdqsl.zb + this.state.yxbp[i].pb.posljsl.zb,
                      gsl: this.state.yxbp[i].pb.posdqsl.gb + this.state.yxbp[i].pb.posljsl.gb,
                      yhs: this.state.yxbp[i].pb.posdqsl.yhs + this.state.yxbp[i].pb.posljsl.yhs,
                  }
                  
                  
              })
           }
  
           this.state.yxbp.push(zjObj);
           this.props.yxDate(qdList,
               {
               yx:{
                  zb: zjObj.yx.posdqsl.zb+zjObj.yx.posljsl.zb, gsl: zjObj.yx.posdqsl.gb + zjObj.yx.posljsl.gb,
                  yhs: zjObj.yx.posdqsl.yhs + zjObj.yx.posljsl.yhs
               },
               bp:{
                  zb: zjObj.pb.posdqsl.zb+zjObj.pb.posljsl.zb, gsl: zjObj.pb.posdqsl.gb + zjObj.pb.posljsl.gb,
                  yhs: zjObj.pb.posdqsl.yhs + zjObj.pb.posljsl.yhs
               }, 
               index: 11              
              }
           );
  
          this.setState({ yxpb: this.state.yxbp ,activeIndex:-1})
        })


    }
    componentDidMount() {
     

     
      yxpbColor()
      .then(res => {
         

          // this.state.yxpColor=res.data;
           this.setState({
            yxpbColor: res.data,
          });
      })
      this.sendyxpbdata();
      this.props.getyxpbfn(this.sendyxpbdata);
    }
  
    moda=(elem)=>{
       
        if(!elem){
            return;
        }
     
           this.modalChart = React.$echarts.init(elem); 
          // myChart.setOption(this.modalOption,true) 
      }
        hideModal = () => {
          this.setState({
            visible: false,
          });
        };
    emityxbpObj(v, i,actIndex) {
      


        if(actIndex.length == 2){
            this.setState({ activeIndex: i, visible: true,title:v.name+"同比数据"})
            if(i == 11){
                tyxpbmodal()
                .then(res => {                     
                    for(let i in res.data){
                        this.modalOption.xAxis.data[i] =  res.data[i].creationTime
                        this.modalOption.series[0].data[i] =  res.data[i].yx.zbtds
                        this.modalOption.series[1].data[i] =  res.data[i].yx.gbtds
                        this.modalOption.series[2].data[i] =  res.data[i].yx.dqtdyhs
                        this.modalOption.series[3].data[i] =  res.data[i].yx.zbfds_lj
                        this.modalOption.series[4].data[i] =  res.data[i].yx.gbfds_lj
                        this.modalOption.series[5].data[i] =  res.data[i].yx.ljtdyhs
                    }      
                     this.modalChart.setOption(this.modalOption)
                })
                tbz()
                .then(res => {
                     
                      this.props.yxObj({
                        name: v.name, 
                       yx:{
                          zb: v.yx.posdqsl.zb+v.yx.posljsl.zb, gsl: v.yx.posdqsl.gb + v.yx.posljsl.gb,
                          yhs: v.yx.posdqsl.yhs + v.yx.posljsl.yhs
                       },
                       bp:{
                        zb: v.pb.posdqsl.zb+v.pb.posljsl.zb, gsl: v.pb.posdqsl.gb + v.pb.posljsl.gb,
                        yhs: v.pb.posdqsl.yhs + v.pb.posljsl.yhs
                       },
                       index: i            
                    },actIndex,res.data)
                })
             }else{
                tb({dq:v.name})
                .then(res => {
                    
                      this.props.yxObj({
                        name: v.name, 
                       yx:{
                          zb: v.yx.posdqsl.zb+v.yx.posljsl.zb, gsl: v.yx.posdqsl.gb + v.yx.posljsl.gb,
                          yhs: v.yx.posdqsl.yhs + v.yx.posljsl.yhs
                       },
                       bp:{
                        zb: v.pb.posdqsl.zb+v.pb.posljsl.zb, gsl: v.pb.posdqsl.gb + v.pb.posljsl.gb,
                        yhs: v.pb.posdqsl.yhs + v.pb.posljsl.yhs
                       },
                       index: i            
                    },actIndex,res.data)
                })
                yxpbmodal({dq:v.name})
                .then(res => {      
                    for(let i in res.data){
                        this.modalOption.xAxis.data[i] =  res.data[i].creationTime
                        this.modalOption.series[0].data[i] =  res.data[i].yx.zbtds
                        this.modalOption.series[1].data[i] =  res.data[i].yx.gbtds
                        this.modalOption.series[2].data[i] =  res.data[i].yx.dqtdyhs
                        this.modalOption.series[3].data[i] =  res.data[i].yx.zbfds_lj
                        this.modalOption.series[4].data[i] =  res.data[i].yx.gbfds_lj
                        this.modalOption.series[5].data[i] =  res.data[i].yx.ljtdyhs
                    }       
                    this.modalChart.setOption(this.modalOption)
                })
             }


        }else{
            this.setState({ activeIndex: i })
       
        }

      




   
    }
    open = () => {
        this.props.getClose(false);
    }
    // componentWillReceiveProps(nprops){
    //   if( nprops.actIndex == 1){
    //       this.setState({activeIndex:-1})
    //   }
    // }
 
    render() {
        return (
            <div id="home-yxpb">
                <Modal
                  closeIcon={<div style={{width:'26px',height:'26px',backgroundImage:'url("static/image/cha.png")',margin:'15px',backgroundSize:'100% 100%',backgroundRepeat:'no-repeat'}}>

                    
                  </div>}
                    title={this.state.title}
                    visible={this.state.visible}                 
                    onCancel={this.hideModal}
                    footer={null}
                    style={{paddingBottom: '0px'}}
                    >
                 <div className="modale" ref={this.moda}></div> 
                    </Modal>
                <div className="zw-i"></div>
                <span className="zw-title">营销-配变</span>
              
                <div className="z" onClick={this.open}><span>展开</span></div>  
                 <div className="tip">
                <div className="yxpb-home"></div>
                <div className="yxpb-td">

                <div className="yx-td1">
                <span>当前停电</span>
                </div>
                <div className="yx-td2">
                    <div className="a1"><span>专变</span></div>
                    <div className="a2"><span>公变</span></div>
                    <div className="a3"><span>用户数</span></div> 
                </div>    



                </div>

                <div  className="yxpb-lj ">
                       <div className="yx-td1">
                <span>累计复电</span>
                </div>
                <div  className="yx-td2">
                    <div className="a1"><span>专变</span></div>
                    <div className="a2"><span>公变</span></div>
                    <div className="a3"><span>用户数</span></div> 
                </div> 
                </div>    
                 </div>
                 {/* 'calc('+(17+i*7) + '% +' + (1+i*1)+'px)' */}
               {this.state.yxbp.map((v,i) => 
                     
               <div  className='moddle' style={{ top:'calc('+(15+i*7) + '% + ' + (.5)+'px)'  }}  key={i}>
               <div className="data-name">                         
                   <div className={'title1 ' + (i == this.state.activeIndex ? 'titlebg1' : '')}  onClick={this.emityxbpObj.bind(this,v,i,[0,1])} >
                   <span>{v.name}</span> 
                   </div>
                   <div className="title2">
                             <div className={'t1 ' + (i == this.state.activeIndex && this.props.actIndex.includes(0)? 'tbg1' : '')}   onClick={this.emityxbpObj.bind(this,v,i,[0])}>
                             <span>营销</span> 

                             </div>
                             <div className={'t2 ' + (i == this.state.activeIndex && this.props.actIndex.includes(1)? 'tbg1' : '')}   onClick={this.emityxbpObj.bind(this,v,i,[1])}>
                             <span>配变</span> 
                             </div>
                   </div>
               </div>

                       

               <div className="data-xx">
                  <div className="data-yx"  onClick={this.emityxbpObj.bind(this,v,i,[0])}>
                           <div className="x1">
                            <div  className={'z1 ' + (i == this.state.activeIndex && this.props.actIndex.includes(0)? 'zgybg1' : '')}>
                                <span>{v.yx.posdqsl.zb}</span>
                                <div  className="i" style={{borderLeft:this.state.yxpbColor[i].yx.posdqsl.zb == 0?'5px solid transparent':this.state.yxpbColor[i].yx.posdqsl.zb == 1?'5px solid red':'5px solid green'}}>
                                   
                                </div>
                            </div>
                            <div  className={'g1 ' + (i == this.state.activeIndex && this.props.actIndex.includes(0)? 'zgybg1' : '')}>
                              <span>{v.yx.posdqsl.gb}</span>
                              <div  className="i" style={{borderLeft:this.state.yxpbColor[i].yx.posdqsl.gb == 0?'5px solid transparent':this.state.yxpbColor[i].yx.posdqsl.gb == 1?'5px solid red':'5px solid green'}}>
                                   
                                </div>
                            </div>
                            <div  className={'y1 ' + (i == this.state.activeIndex && this.props.actIndex.includes(0)? 'zgybg1' : '')}>
                               <span>{v.yx.posdqsl.yhs}</span>
                               <div  className="i" style={{borderLeft:this.state.yxpbColor[i].yx.posdqsl.yhs == 0?'5px solid transparent':this.state.yxpbColor[i].yx.posdqsl.yhs == 1?'5px solid red':'5px solid green'}}>
                                   
                                   </div>
                            </div>
                           </div>
                           <div className="x2">
                           <div className={'z1 ' + (i == this.state.activeIndex && this.props.actIndex.includes(0)? 'zgybg1' : '')}>
                                <span>{v.yx.posljsl.zb}</span>
                                <div  className="i" style={{borderLeft:this.state.yxpbColor[i].yx.posljsl.zb == 0?'5px solid transparent':this.state.yxpbColor[i].yx.posljsl.zb == 1?'5px solid red':'5px solid green'}}>
                                   
                                   </div>
                            </div>
                            <div className={'g1 ' + (i == this.state.activeIndex && this.props.actIndex.includes(0)? 'zgybg1' : '')}>
                              <span>{v.yx.posljsl.gb}</span>
                              <div  className="i" style={{borderLeft:this.state.yxpbColor[i].yx.posljsl.gb == 0?'5px solid transparent':this.state.yxpbColor[i].yx.posljsl.gb == 1?'5px solid red':'5px solid green'}}>
                                   
                                   </div>
                            </div>
                            <div className={'y1 ' + (i == this.state.activeIndex && this.props.actIndex.includes(0)? 'zgybg1' : '')}>
                               <span>{v.yx.posljsl.yhs}</span>
                               <div  className="i" style={{borderLeft:this.state.yxpbColor[i].yx.posljsl.yhs == 0?'5px solid transparent':this.state.yxpbColor[i].yx.posljsl.yhs == 1?'5px solid red':'5px solid green'}}>
                                   
                                   </div>
                            </div>
                           </div>
                  </div>

                  <div className="data-pb"  onClick={this.emityxbpObj.bind(this,v,i,[1])}>
                         <div className="x1">
                            <div  className={'z1 ' + (i == this.state.activeIndex && this.props.actIndex.includes(1)? 'zgybg1' : '')}>
                                <span>{v.pb.posdqsl.zb}</span>
                                <div  className="i" style={{borderLeft:this.state.yxpbColor[i].pb.posdqsl.zb == 0?'5px solid transparent':this.state.yxpbColor[i].pb.posdqsl.zb == 1?'5px solid red':'5px solid green'}}>
                                   
                                   </div>
                            </div>
                            <div className={'g1 ' + (i == this.state.activeIndex && this.props.actIndex.includes(1)? 'zgybg1' : '')}>
                              <span>{v.pb.posdqsl.gb}</span>
                              <div  className="i" style={{borderLeft:this.state.yxpbColor[i].pb.posdqsl.gb == 0?'5px solid transparent':this.state.yxpbColor[i].pb.posdqsl.gb == 1?'5px solid red':'5px solid green'}}>
                                   
                                   </div>
                            </div>
                            <div  className={'y1 ' + (i == this.state.activeIndex && this.props.actIndex.includes(1)? 'zgybg1' : '')}>
                               <span>{v.pb.posdqsl.yhs}</span>
                               <div  className="i" style={{borderLeft:this.state.yxpbColor[i].pb.posdqsl.yhs == 0?'5px solid transparent':this.state.yxpbColor[i].pb.posdqsl.yhs == 1?'5px solid red':'5px solid green'}}>
                                   
                                   </div>
                            </div>
                           </div>
                           <div className="x2">
                           <div  className={'z1 ' + (i == this.state.activeIndex && this.props.actIndex.includes(1)? 'zgybg1' : '')}>
                                <span>{v.pb.posljsl.zb}</span>
                                <div  className="i" style={{borderLeft:this.state.yxpbColor[i].pb.posljsl.zb == 0?'5px solid transparent':this.state.yxpbColor[i].pb.posljsl.zb == 1?'5px solid red':'5px solid green'}}>
                                   
                                   </div>
                            </div>
                            <div  className={'g1 ' + (i == this.state.activeIndex && this.props.actIndex.includes(1)? 'zgybg1' : '')}>
                              <span>{v.pb.posljsl.gb}</span>
                              <div  className="i" style={{borderLeft:this.state.yxpbColor[i].pb.posljsl.gb == 0?'5px solid transparent':this.state.yxpbColor[i].pb.posljsl.gb == 1?'5px solid red':'5px solid green'}}>
                                   
                                   </div>
                            </div>
                            <div  className={'y1 ' + (i == this.state.activeIndex && this.props.actIndex.includes(1)? 'zgybg1' : '')}>
                               <span>{v.pb.posljsl.yhs}</span>
                               <div  className="i" style={{borderLeft:this.state.yxpbColor[i].pb.posljsl.yhs == 0?'5px solid transparent':this.state.yxpbColor[i].pb.posljsl.yhs == 1?'5px solid red':'5px solid green'}}>
                                   
                                   </div>
                            </div>
                           </div>

                         </div>

                      </div>
                    </div>        

                )} 



            
              

               {/* {this.state.yx.map((v, i) =>
                    <div onClick={this.emityxObj.bind(this, v, i)} className={'dqsj yx-pos ' + (i == this.state.activeIndex ? 'a' : '')} style={{ top: 22.85 + i * 6.3 + '%' }} key={i}>
                        <div className={'dqname ' + (i == this.state.activeIndex ? 'da' : '')} ><span>{v.name}</span></div>

                        <div className="yx-td-title posdq-title yx-pos">
                            <div className={'d1 ' + (i == this.state.activeIndex ? 'dc' : '')}><span>{v.posdqsl.zb}</span></div>
                            <div className={'d2 ' + (i == this.state.activeIndex ? 'dc' : '')} ><span>{v.posdqsl.gb}</span></div>
                            <div className={'d3 ' + (i == this.state.activeIndex ? 'dc' : '')}><span>{v.posdqsl.yhs}</span></div>
                        </div>
                        <div className="yx-td-title poslj-title yx-pos" >
                            <div className={'c1 ' + (i == this.state.activeIndex ? 'dc' : '')} ><span>{v.posljsl.zb}</span></div>
                            <div className={'c2 ' + (i == this.state.activeIndex ? 'dc' : '')} ><span>{v.posljsl.gb}</span></div>
                            <div className={'c3 ' + (i == this.state.activeIndex ? 'dc' : '')} ><span>{v.posljsl.yhs}</span></div>
                        </div>
                    </div>
                )}  */}




                
                

               
            </div>
        )
    }
}
