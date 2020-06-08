import React, { Component } from 'react';
import '../static/scss/pb.scss';
import  {pbData,pbmodal,tpbmodal,pbColor}  from '../service';
import { Modal } from 'antd';
export default class pb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            yx: [{
                name: '海曙',
                'posdqsl': { zb: 18, gb: 28, yhs: 9200,pb:30,shs:20 },
                'posljsl': { zb: 62, gb: 66, yhs: 32083,pb:30,shs:20 }
            },
            {
                name: '江北',
                'posdqsl': { zb: 18, gb: 37, yhs: 16210,pb:30,shs:20 },
                'posljsl': { zb: 20, gb: 17, yhs: 8120,pb:30,shs:20 }
            },
            {
                name: '镇海',
                'posdqsl': { zb: 10, gb: 11, yhs: 6646,pb:30,shs:20 },
                'posljsl': { zb: 19, gb: 21, yhs: 9843,pb:30,shs:20 }
            },
            {
                name: '北仑',
                'posdqsl': { zb: 5, gb: 8, yhs: 4150,pb:30,shs:20 },
                'posljsl': { zb: 28, gb: 12, yhs: 5869,pb:30,shs:20 }
            },
            {
                name: '杭湾',
                'posdqsl': { zb: 8, gb: 10, yhs: 4150,pb:30,shs:20 },
                'posljsl': { zb: 26, gb: 12, yhs: 6050,pb:30,shs:20 }
            },
            {
                name: '鄞州',
                'posdqsl': { zb: 8, gb: 18, yhs: 8270,pb:30,shs:20 },
                'posljsl': { zb: 28, gb: 8, yhs: 3812,pb:30,shs:20 }
            },
            {
                name: '慈溪',
                'posdqsl': { zb: 15, gb: 28, yhs: 1120,pb:30,shs:20 },
                'posljsl': { zb: 14, gb: 20, yhs: 8564,pb:30,shs:20 }
            },
            {
                name: '余姚',
                'posdqsl': { zb: 12, gb: 14, yhs: 6280,pb:30,shs:20 },
                'posljsl': { zb: 11, gb: 10, yhs: 4550,pb:30,shs:20 }
            },
            {
                name: '奉化',
                'posdqsl': { zb: 14, gb: 16, yhs: 3840,pb:30,shs:20 },
                'posljsl': { zb: 9, gb: 7, yhs: 3520,pb:30,shs:20 }
            },
            {
                name: '宁海',
                'posdqsl': { zb: 14, gb: 13, yhs: 5650,pb:30,shs:20 },
                'posljsl': { zb: 26, gb: 11, yhs: 5190,pb:30,shs:20 }
            },
            {
                name: '象山',
                'posdqsl': { zb: 11, gb: 9, yhs: 4290,pb:30,shs:20 },
                'posljsl': { zb: 10, gb: 3, yhs: 2046,pb:30,shs:20 }
            }


            ],
            activeIndex: -1,
            activez:true,
            visible:false,
            title:'',
            pbColor: [{
                'posdqsl': { zb: 0, gb: 2, yhs: 0,pb:0 },
                'posljsl': { zb: 1, gb: 0, yhs: 0,pb:0 }
            },
            {
                'posdqsl': { zb: 0, gb: 0, yhs: 0,pb:0 },
                'posljsl': { zb: 2, gb: 0, yhs: 0,pb:0 }
            },
            {
                'posdqsl': { zb: 0, gb: 0, yhs: 2,pb:0 },
                'posljsl': { zb: 0, gb: 1, yhs: 0,pb:0 }
            },
            {
                'posdqsl': { zb: 0, gb: 0, yhs: 0,pb:0},
                'posljsl': { zb: 0, gb: 0, yhs: 1,pb:0 }
            },
            {
                'posdqsl': { zb: 0, gb: 0, yhs: 0,pb:0 },
                'posljsl': { zb: 1, gb: 0, yhs: 0,pb:0 }
            },
            {
                'posdqsl': { zb: 0, gb: 0, yhs: 0,pb:0 },
                'posljsl': { zb: 0, gb: 0, yhs: 0,pb:0 }
            },
            {
                'posdqsl': { zb: 0, gb: 0, yhs: 0,pb:0 },
                'posljsl': { zb: 0, gb: 2, yhs: 0,pb:0 }
            },
            {
                'posdqsl': { zb: 0, gb: 1, yhs: 0,pb:0 },
                'posljsl': { zb: 0, gb: 0, yhs: 0,pb:0 }
            },
            {
                'posdqsl': { zb: 0, gb: 0, yhs: 0,pb:0},
                'posljsl': { zb: 0, gb: 0, yhs: 0,pb:0 }
            },
            {
                'posdqsl': { zb: 0, gb: 0, yhs: 1,pb:0},
                'posljsl': { zb: 0, gb: 0, yhs: 0,pb:0 }
            },
            {
              
                'posdqsl': { zb: 0, gb: 0, yhs: 0,pb:0 },
                'posljsl': { zb: 2, gb: 0, yhs: 0,pb:0}
            },
            {
              
                'posdqsl': { zb: 0, gb: 0, yhs: 1,pb:0 },
                'posljsl': { zb: 0, gb: 0, yhs: 0,pb:0}
            }

            ]
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
               data: ['2020-11-23 10:00:47','2020-11-24 10:00:47','2020-11-25 10:00:47','2020-11-26 10:00:47','2020-11-27 10:00:47']
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
                    data:[200,400,600,300,400]
                },
                {
                    name:'停电公变',
                    type:'line',
                  
                    data:[100,420,620,340,200]
                },
                {
                    name:'停电配变',
                    type:'line',
                    color:'green',
                    data:[340,420,680,380,480]
                },
                {
                    name:'停电用户数',
                    type:'line',
                  
                    data:[340,610,350,120,260]
                },
                {
                    name:'复电专变',
                    type:'line',
                   
                    data:[250,310,650,180,170]
                },
                {
                    name:'复电公变',
                    type:'line',
                    color:'#59ba12',
                    data:[260,410,270,350,450]
                },
                {
                    name:'复电配变',
                    type:'line',
                    color:'blue',
                    data:[240,360,400,330,230]
                },
                {
                    name:'复电用户数',
                    type:'line',
                    color:'#00f6ff',                
                    data:[220,310,200,350,130]
                }
            ]
        }


    }


    moda=(elem)=>{
        if(!elem){
            return;
        }
      
        this.modalChart = React.$echarts.init(elem); 
       // myChart.setOption(this.modalOption,true) 
    };
    hideModal = () => {
        this.setState({
          visible: false,
        });
      };
    emityxObj(v,i){
        if(v.name == '总计'){
            v.name = '宁波'
        }
        this.setState({activeIndex:i, visible: true,title:v.name+"同比数据"})
        this.props.yxObj({name:v.name,zb:v.posdqsl.zb+v.posljsl.zb, gsl:v.posdqsl.gb+v.posljsl.gb,
        yhs:v.posdqsl.yhs+v.posljsl.yhs,index:i
        },[1])
        
        if(i == 11){
            // tpbmodal()
            // .then(res => {      
            //     for(let i in res.data){
            //         this.modalOption.xAxis.data[i] =  res.data[i].creationTime
            //         this.modalOption.series[0].data[i] =  res.data[i].pb.wfdzb
            //         this.modalOption.series[1].data[i] =  res.data[i].pb.wfdgb
            //         this.modalOption.series[2].data[i] =  res.data[i].pb.wfdpb
            //         this.modalOption.series[3].data[i] =  res.data[i].pb.dyyhs
            //         this.modalOption.series[4].data[i] =  res.data[i].pb.fdzb
            //         this.modalOption.series[5].data[i] =  res.data[i].pb.fdgb
            //         this.modalOption.series[6].data[i] =  res.data[i].pb.fdpb
            //         this.modalOption.series[7].data[i] =  res.data[i].pb.zbdyyhs
            //     }
              
    
            //     this.modalChart.setOption(this.modalOption)
            // })
         }else{
            // pbmodal({dq:v.name})
            // .then(res => {      
            //     for(let i in res.data){
            //         this.modalOption.xAxis.data[i] =  res.data[i].creationTime
            //         this.modalOption.series[0].data[i] =  res.data[i].pb.wfdzb
            //         this.modalOption.series[1].data[i] =  res.data[i].pb.wfdgb
            //         this.modalOption.series[2].data[i] =  res.data[i].pb.wfdpb
            //         this.modalOption.series[3].data[i] =  res.data[i].pb.dyyhs
            //         this.modalOption.series[4].data[i] =  res.data[i].pb.fdzb
            //         this.modalOption.series[5].data[i] =  res.data[i].pb.fdgb
            //         this.modalOption.series[6].data[i] =  res.data[i].pb.fdpb
            //         this.modalOption.series[7].data[i] =  res.data[i].pb.zbdyyhs
            //     }
              
    
            //     this.modalChart.setOption(this.modalOption)
            // })
         }


    }
    componentWillReceiveProps(nprops){
        if( nprops.actIndex == 0){
            this.setState({activeIndex:-1})
        }
      }
      sendpbdata=(date)=>{
        let params = {};
        if(date){
            params = {...date}
        }
        // pbData(params)
        // .then(res => {
        //  this.state.yx = res.data;
            let mapData =    this.state.yx.map( (v,i) =>{

                return {value: v.posdqsl.zb,'name': '停电'}
            });
    
            let mapData1 =  this.state.yx.map( (v,i) =>{
    
                return {value: v.posdqsl.gb,'name': '停电'}
            }); 
           
            let mapData2 =   this.state.yx.map( (v,i) =>{
    
                return {value: v.posljsl.zb,'name': '复电'}
            });
            
           
            let mapData3 =  this.state.yx.map( (v,i) =>{
    
                return {value: v.posljsl.gb,'name': '复电'}
            });
            
            
          
    
    
            let yhData =  this.state.yx.map( (v,i) =>{
    
                return {value: v.posdqsl.yhs,'name': '停电'}
            });
            
            
    
            let yhData1 =this.state.yx.map( (v,i) =>{
    
                return {value: v.posdqsl.shs,'name': '停电'}
            });
            
            
    
            let yhData2 =  this.state.yx.map( (v,i) =>{
    
                return {value: v.posljsl.yhs,'name': '复电'}
            });
    
    
    
            let yhData3 = this.state.yx.map( (v,i) =>{
    
                return {value: v.posljsl.shs,'name': '复电'}
            });
    
    //////////////////////////
            let zjObj = {
                name: '总计',
                'posdqsl': { zb: 0, gb: 0, yhs: 0,pb:0 },
                'posljsl': { zb: 0, gb: 0, yhs: 0,pb:0 }
            }
            let qdList = [];
            for (let i in this.state.yx) {
                zjObj.posdqsl.zb += this.state.yx[i].posdqsl.zb;
                zjObj.posdqsl.gb += this.state.yx[i].posdqsl.gb;
                zjObj.posdqsl.yhs += this.state.yx[i].posdqsl.yhs;
                zjObj.posdqsl.pb += this.state.yx[i].posdqsl.pb;
                zjObj.posljsl.zb += this.state.yx[i].posljsl.zb;
                zjObj.posljsl.gb += this.state.yx[i].posljsl.gb;
                zjObj.posljsl.yhs += this.state.yx[i].posljsl.yhs;
                zjObj.posljsl.pb += this.state.yx[i].posljsl.pb;
                qdList.push({
                    name: this.state.yx[i].name, zsl: this.state.yx[i].posdqsl.zb + this.state.yx[i].posljsl.zb,
                    gsl: this.state.yx[i].posdqsl.gb + this.state.yx[i].posljsl.gb,
                    yhs: this.state.yx[i].posdqsl.yhs + this.state.yx[i].posljsl.yhs
                })
            }
    
            this.state.yx.push(zjObj);
            this.props.bpDate(qdList);
    
            this.setState({ yx: this.state.yx })
            let dom = document.getElementById("pbecharts");
            let myChart = React.$echarts.init(dom);     
            let option = {
                legend: {
                    top: '-1%',
                    icon: 'rect',
                    right: '0%',
                    itemWidth: 8,
                    itemHeight: 8,
                    textStyle: {
                        color: '#fff',
                        fontSize: 10
                    }
                },
    
                grid: [
                    { left: '5%', top: '10%', right: '5%', width: '93%', height: '38%' },
                    { bottom: '10%', left: '5%', right: '5%', width: '95%', height: '38%' },
    
                ],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    },
                    formatter: function (v) {
                        console.log(v)
                        return v.map((v1) =>
                            v1.marker + v1.name + v1.seriesName + ": " + v1.value + "<br/>"
                        ).join("");
                    }
    
                },
                xAxis: [
                    {
    
                        gridIndex: 0,
                        type: 'category',
                        data: ['海曙', '江北', '镇海', '北仑','杭湾', '鄞州', '慈溪', '余姚', '奉化', '宁海', '象山'],
    
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: false,
                            formatter: function (value, index) {
    
                                return value;
                            },
    
    
                            color: '#5793f3',
                            fontSize: 10,
                        },
    
                        axisLine: {
                            show: false,
    
    
                        },
    
    
                    },
    
    
                    {
    
    
                        axisTick: {
                            show: false
                        },
                        gridIndex: 1,
                        type: 'category',
    
                        data: ['海曙', '江北', '镇海', '北仑','杭湾', '鄞州', '慈溪', '余姚', '奉化', '宁海', '象山'],
                        axisLabel: {
                            // show: false,
    
                            formatter: function (value, index) {
    
                                return value;
                            },
    
                            interval: 0,
                            color: '#5793f3',
                            fontSize: 10,
    
                        },
                    }
    
                ],
                yAxis: [
                    {
                        gridIndex: 0,
    
                        type: 'value',
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
                            color: '#59ba12',
                            margin: -11,
                            fontSize: 10,
                        }
                    },
    
    
                    {
                        gridIndex: 1,
                        type: 'value',
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
                            show: false
                        }
                    },
                    {
                        gridIndex: 0,
                        position: 'right',
                        type: 'value',
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
                            color: '#8EE5EE',
                            margin: -11,
                            fontSize: 10,
                        }
                    },
    
                ],
                series: [
                    {
                        color: '#ffa800',
                        name: '专变',
                        type: 'bar',
                        barWidth: '20%',
                        stack: '停电',
                        data: mapData.map(function (itemOpt) {
                            return {
                                name: itemOpt.name,
                                value: itemOpt.value,
                            };
                        }),
                        xAxisIndex: 1, yAxisIndex: 1
                    },
                    {
                        color: '#ff4e00',
                        name: '公变',
                        type: 'bar',
                        stack: '停电',
                        data: mapData1.map(function (itemOpt) {
                            return {
                                name: itemOpt.name,
                                value: itemOpt.value,
                            };
                        }),
                        xAxisIndex: 1, yAxisIndex: 1
                    },
    
    
                    {
                        color: '#ffa800',
                        name: '专变',
                        barWidth: '20%',
                        type: 'bar',
                        stack: '复电',
                        data: mapData2.map(function (itemOpt) {
                            return {
                                name: itemOpt.name,
    
                                value: itemOpt.value,
                            };
                        }),
                        xAxisIndex: 1, yAxisIndex: 1
                    },
                    {
                        color: '#ff4e00',
                        name: '公变',
                        type: 'bar',
                        stack: '复电',
                        data: mapData3.map(function (itemOpt) {
                            return {
                                name: itemOpt.name,
    
                                value: itemOpt.value,
                            };
                        }),
                        xAxisIndex: 1, yAxisIndex: 1
                    },       
                    {
                        xAxisIndex: 0,
                        yAxisIndex: 0,
                        name: '用户数',
                        type: 'line',
    
                        data: yhData.map(function (itemOpt) {
                            return {
                                name: itemOpt.name,
                                value: itemOpt.value,
                            };
                        }),
                        symbol: 'rect',
                        symbolSize: 6,
                        lineStyle: {
                            width: 1
                        },
                        itemStyle: {
    
    
    
                            color: '#59ba12'
    
                        }
    
                    },
                    {
                        xAxisIndex: 0,
                        yAxisIndex: 2,
                        name: '时户数',
                        type: 'line',
    
                        data: yhData1.map(function (itemOpt) {
                            return {
                                name: itemOpt.name,
                                value: itemOpt.value,
                            };
                        }),
                        symbol: 'rect',
                        symbolSize: 6,
                        lineStyle: {
                            width: 1
                        },
                        itemStyle: {
    
    
    
                            color: '#8EE5EE'
    
                        }
    
                    },
    
    
    
                    {
                        xAxisIndex: 0,
                        yAxisIndex: 0,
                        name: '用户数',
                        type: 'line',
    
                        data: yhData2.map(function (itemOpt) {
                            return {
                                name: itemOpt.name,
                                value: itemOpt.value,
                            };
                        }),
                        symbol: 'rect',
                        symbolSize: 6,
                        lineStyle: {
                            width: 1
                        },
                        itemStyle: {
    
    
    
                            color: '#59ba12'
    
                        }
    
                    },
                    {
                        xAxisIndex: 0,
                        yAxisIndex: 2,
                        name: '时户数',
                        type: 'line',
    
                        data: yhData3.map(function (itemOpt) {
                            return {
                                name: itemOpt.name,
                                value: itemOpt.value,
                            };
                        }),
                        symbol: 'rect',
                        symbolSize: 6,
                        lineStyle: {
                            width: 1
                        },
                        itemStyle: {
    
    
    
                            color: '#8EE5EE'
    
                        }
    
                    },
                ]
            };
    
            myChart.setOption(option, true);
        // })

      }
    componentDidMount() {
       this.sendpbdata(this.props.dateEnd);
    //    pbColor()
    //    .then(res => {
       
     
    //        this.setState({
    //            pbColor: res.data,
    //          });
    //    })
      // this.props.getpbfn(this.sendpbdata);
    }
    z = () => {
        this.setState({ left: '0%' ,activez:true})
    }
    y = () => {
        this.setState({ left: '-100%',activez:false })
    }
    render() {
        return (
            <div id="home-pb">
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
                <div className="pb-i"></div>
                <span className="pb-title">配变停电</span>
                <div className={'z '+(this.state.activez?'z1':'')} onClick={this.z} ><span>表格</span></div>
                <div className={'y '+(this.state.activez?'':'y1')} onClick={this.y} ><span>图表</span></div>
                <div className='fanye' style={{ marginLeft: this.state.left }}>
                    <div className="bg">
                        <div className="yx-home pos"></div>
                        <div className="yx-td posdq yx-pos"><span>当前停电</span></div>
                        <div className="yx-td poslj yx-pos"><span>累计复电</span></div>
                        <div className="yx-td-title posdq-title yx-pos">
                            <div className="d1"><span>专变</span></div>
                            <div className="d2"><span>公变</span></div>
                            <div className="d3"><span>配变</span></div>
                            <div className="d4"><span>用户数</span></div>
                        </div>
                        <div className="yx-td-title poslj-title yx-pos">
                            <div className="c1"><span>专变</span></div>
                            <div className="c2"><span>公变</span></div>
                            <div className="c3"><span>配变</span></div>
                            <div className="c4"><span>用户数</span></div>
                        </div>




                        {this.state.yx.map((v, i) =>
                            <div onClick={this.emityxObj.bind(this,v,i)} className={'dqsj yx-pos ' + (i == this.state.activeIndex ? 'a' : '')} style={{top: 22.85 + i * 6.3 + '%' }} key={i}>
                                <div className={'dqname '+(i == this.state.activeIndex ? 'da' : '')} ><span>{v.name}</span></div>

                                <div className="yx-td-title posdq-title yx-pos">
                                    <div className={'d1 '+(i == this.state.activeIndex ? 'dc' : '')}><span>{v.posdqsl.zb}</span>
                                 
                                    <div className="i" style={{borderLeft:this.state.pbColor[i].posdqsl.zb == 0?'5px solid transparent':this.state.pbColor[i].posdqsl.zb == 1?'5px solid red':'5px solid green'}}></div>

                                    </div>
                                    <div className={'d2 '+(i == this.state.activeIndex ? 'dc' : '')} ><span>{v.posdqsl.gb}</span>


                                    <div className="i" style={{borderLeft:this.state.pbColor[i].posdqsl.gb == 0?'5px solid transparent':this.state.pbColor[i].posdqsl.gb == 1?'5px solid red':'5px solid green'}}></div>
                                  
                                    </div>
                                    <div className={'d3 '+(i == this.state.activeIndex ? 'dc' : '')}><span>{v.posdqsl.pb}</span>
                                    <div className="i" style={{borderLeft:this.state.pbColor[i].posdqsl.pb == 0?'5px solid transparent':this.state.pbColor[i].posdqsl.pb == 1?'5px solid red':'5px solid green'}}></div>
                                    </div>
                                    <div className={'d4 '+(i == this.state.activeIndex ? 'dc' : '')}><span>{v.posdqsl.yhs}</span>
                                    <div className="i" style={{borderLeft:this.state.pbColor[i].posdqsl.yhs == 0?'5px solid transparent':this.state.pbColor[i].posdqsl.yhs == 1?'5px solid red':'5px solid green'}}></div>
                                    </div>
                                </div>
                                <div className="yx-td-title poslj-title yx-pos" >
                                    <div className={'c1 '+(i == this.state.activeIndex ? 'dc' : '')} ><span>{v.posljsl.zb}</span>
                                    <div className="i" style={{borderLeft:this.state.pbColor[i].posljsl.zb == 0?'5px solid transparent':this.state.pbColor[i].posljsl.zb == 1?'5px solid red':'5px solid green'}}></div>
                                    </div>
                                    <div className={'c2 '+(i == this.state.activeIndex ? 'dc' : '')} ><span>{v.posljsl.gb}</span>
                                    <div className="i" style={{borderLeft:this.state.pbColor[i].posljsl.gb == 0?'5px solid transparent':this.state.pbColor[i].posljsl.gb == 1?'5px solid red':'5px solid green'}}></div>
                                    </div>
                                    <div className={'c3 '+(i == this.state.activeIndex ? 'dc' : '')} ><span>{v.posljsl.pb}</span>
                                    <div className="i" style={{borderLeft:this.state.pbColor[i].posljsl.pb == 0?'5px solid transparent':this.state.pbColor[i].posljsl.pb == 1?'5px solid red':'5px solid green'}}></div>
                                    </div>
                                    <div className={'c4 '+(i == this.state.activeIndex ? 'dc' : '')} ><span>{v.posljsl.yhs}</span>
                                    <div className="i" style={{borderLeft:this.state.pbColor[i].posljsl.yhs == 0?'5px solid transparent':this.state.pbColor[i].posljsl.yhs == 1?'5px solid red':'5px solid green'}}></div>
                                    </div>
                                </div>
                            </div>
                        )}




                    </div>



                    <div className="tb">
                        <div id="pbecharts" ></div>
                    </div>



                </div>



            </div>
        )
    }
}
