import React, { Component } from 'react';
import '../static/scss/dq.scss';
import axios from 'axios'


export default class dq extends Component {
   componentWillReceiveProps(nprops){
   
    
    var mapData = [{
        'latitude': 29.754452,
        'longitude': 121.199698,
        'name': '海曙',
        
        'zsl': nprops.dqList[0].yx.zsl,
      
    }, 
    {
        'latitude': 29.959391,
        'longitude': 121.389282,
        'name': '江北',
        
        'zsl': nprops.dqList[1].yx.zsl,
    },
    {
        'latitude': 29.999391,
        'longitude': 121.589282,
        'name': '镇海',
        'zsl': nprops.dqList[2].yx.zsl,
    },
    {
        'latitude': 29.889391,
        'longitude': 121.839282,
        'name': '北仑',
        'zsl': nprops.dqList[3].yx.zsl,
    },
    {
        'latitude': 30.299391,
        'longitude': 121.159282,
        'name': '杭湾',
        'zsl': nprops.dqList[4].yx.zsl,
    },
    {
        'latitude': 29.729391,
        'longitude': 121.599282,
        'name': '鄞州',
        'zsl': nprops.dqList[5].yx.zsl,
    },
    {
        'latitude': 30.129391,
        'longitude': 121.389282,
        'name': '慈溪',
        'zsl': nprops.dqList[6].yx.zsl,
    },
    {
        'latitude': 30.188391,
        'longitude': 120.959282,
        'name': '余姚',
        'zsl': nprops.dqList[7].yx.zsl,
    },
    {
        'latitude': 29.579391,
        'longitude': 121.249282,
        'name': '奉化',
        'zsl': nprops.dqList[8].yx.zsl,
    },
    {
        'latitude': 29.279391,
        'longitude': 121.249282,
        'name': '宁海',
        'zsl': nprops.dqList[9].yx.zsl,
    },
    {
        'latitude': 29.429391,
        'longitude': 121.719282,
        'name': '象山',
        'zsl': nprops.dqList[10].yx.zsl,
    }
    ]
    var mapData1 = [{
        'latitude': 29.774452,
        'longitude': 121.289698,
        'name': '海曙区',
        'gsl': nprops.dqList[0].yx.gsl,
      
    }, 
    {
        'latitude': 29.949391,
        'longitude': 121.459282,
        'name': '江北区',
        'gsl': nprops.dqList[1].yx.gsl,
    },
    {
        'latitude': 29.939391,
        'longitude': 121.639282,
        'name': '镇海区',
        'gsl': nprops.dqList[2].yx.gsl,
    },
    {
        'latitude': 29.809391,
        'longitude': 121.889282,
        'name': '北仑区',
        'gsl': nprops.dqList[3].yx.gsl,
    },
    {
        'latitude': 30.299391,
        'longitude': 121.229282,
        'name': '杭湾',
        'zsl': nprops.dqList[4].yx.zsl,
    },
    {
        'latitude': 29.729391,
        'longitude': 121.719282,
        'name': '鄞州区',
        'gsl': nprops.dqList[5].yx.gsl,
    },
    {
        'latitude': 30.079391,
        'longitude': 121.289282,
        'name': '慈溪市',
        'gsl': nprops.dqList[6].yx.gsl,
    },
    {
        'latitude': 30.058391,
        'longitude': 121.049282,
        'name': '余姚市',
        'gsl': nprops.dqList[7].yx.gsl,
    },
    {
        'latitude': 29.559391,
        'longitude': 121.359282,
        'name': '奉化区',
        'gsl': nprops.dqList[8].yx.gsl,
    },
    {
        'latitude': 29.259391,
        'longitude': 121.359282,
        'name': '宁海县',
        'gsl': nprops.dqList[9].yx.gsl,
    },
    {
        'latitude': 29.409391,
        'longitude': 121.799282,
        'name': '象山县',
        'gsl': nprops.dqList[10].yx.gsl,
    }
    ]
    var mapData2 = [{
        'latitude': 29.784452,
        'longitude': 121.429698,
        'name': '海曙区',
        'yhs': nprops.dqList[0].yx.yhs,
      
    }, 
    {
        'latitude': 29.919391,
        'longitude': 121.539282,
        'name': '江北区',
        'yhs': nprops.dqList[1].yx.yhs,
    },
    {
        'latitude': 29.959391,
        'longitude': 121.699282,
        'name': '镇海区',
        'yhs': nprops.dqList[2].yx.yhs,
    },
    {
        'latitude': 29.819391,
        'longitude': 121.999282,
        'name': '北仑区',
        'yhs': nprops.dqList[3].yx.yhs,
    },
    {
        'latitude': 30.299391,
        'longitude': 121.329282,
        'name': '杭湾',
        'zsl': nprops.dqList[4].yx.zsl,
    },
    {
        'latitude': 29.649391,
        'longitude': 121.809282,
        'name': '鄞州区',
        'yhs': nprops.dqList[5].yx.yhs,
    },
    {
        'latitude': 30.189391,
        'longitude': 121.459282,
        'name': '慈溪市',
        'yhs': nprops.dqList[6].yx.yhs,
    },
    {
        'latitude': 30.108391,
        'longitude': 121.129282,
        'name': '余姚市',
        'yhs': nprops.dqList[7].yx.yhs,
    },
    {
        'latitude': 29.559391,
        'longitude': 121.529282,
        'name': '奉化区',
        'yhs': nprops.dqList[8].yx.yhs,
    },
    {
        'latitude': 29.259391,
        'longitude': 121.589282,
        'name': '宁海县',
        'yhs': nprops.dqList[9].yx.yhs,
    },
    {
        'latitude': 29.409391,
        'longitude': 121.909282,
        'name': '象山县',
        'yhs': nprops.dqList[10].yx.yhs,
    }
    ]
    
    if(nprops.actIndex.length == 2){
        for (let i in [0,1,2,3,4,5,6,7,8,9]) {
    		mapData[i].zsl = nprops.dqList[i].yx.zsl + nprops.dqList[i].bp.zsl ;
            mapData1[i].gsl  = nprops.dqList[i].yx.gsl + nprops.dqList[i].bp.gsl;
            mapData2[i].yhs  = nprops.dqList[i].yx.yhs + nprops.dqList[i].bp.yhs;
        }   
    }
    else if(nprops.actIndex.includes(0)){
    	for (let i in [0,1,2,3,4,5,6,7,8,9]) {
    		mapData[i].zsl = nprops.dqList[i].yx.zsl;
            mapData1[i].gsl  = nprops.dqList[i].yx.gsl;
            mapData2[i].yhs  = nprops.dqList[i].yx.yhs;
        }          
    }else if(nprops.actIndex.includes(1)){
    	for (let i in [0,1,2,3,4,5,6,7,8,9]) {
    		mapData[i].zsl = nprops.dqList[i].bp.zsl;
            mapData1[i].gsl  = nprops.dqList[i].bp.gsl;
            mapData2[i].yhs  = nprops.dqList[i].bp.yhs;
        } 
    }
    if(nprops.yxObj.index != 11){     
        mapData = [mapData[nprops.yxObj.index]]
        mapData1 = [mapData1[nprops.yxObj.index]]
        mapData2 = [mapData2[nprops.yxObj.index]]
    }
 
  
 
    var dom = document.getElementById("map");
    var myChart = React.$echarts.init(dom);
    var option1 = null;
    //myChart.showLoading(); //加载动画
    axios.get('static/json/ningb.json')
        .then(function (result) {
            // handle success

            console.log(result)
          //  myChart.hideLoading(); //关闭加载动画

            React.$echarts.registerMap("", result.data); //加载地图数据
            option1 = {
                legend: {
                    top: 'bottom',
                    icon: 'rect',
                    left: 'right',
                    itemWidth: 12,
                    itemHeight: 12,
                    textStyle: {
                        color: '#fff',
                        fontSize: 10
                    }
                },
                // tooltip: {
                //     trigger: 'item',
                //     trigger: 'item',
                //     showDelay: 0,
                //     transitionDuration: 0.2,
                //     formatter: function (params) {
                //         //	console.log(params)
                //         return params.name + '<br/>' + params.value[0] + ',' + params.value[1];
                //     }
                // },
                grid: {

                    containLabel: true,
                },


                geo: {
                    name: '宁波市',
                    type: 'map',
                    aspectScale: 1.1,
                    zoom: 1.2, //地图初始大小，这里是关键，一定要放在 series中  因为geo在series中会加载，所以zoom放在此处
                    roam: false, //可以设置成 缩放'scale' 或者 移动'move'。设置成 true 为都开启
                    label: {
                        normal: {
                            show: true, //是否显示地区名字
                            color: 'black',

                        }

                    },
                    regions: [{
								
                        name: nprops.yxObj.index != 11?mapData[0].name:'宁波',
                        selected: true,
                   }],
                    emphasis: {
                        label: {
                            color: '#fff' //鼠标hove文字颜色
                        },
                        itemStyle: {
                            areaColor: '#009bb1', //鼠标hove区域颜色

                        }

                    },
                    itemStyle: {
                        normal: {
                            borderColor: 'gray', //区域边框颜色
                            areaColor: '#007452', //区域填充颜色
                            borderWidth: 1, //边框宽

                        }

                    },

                },
                series: [{
                    symbol: 'pin',
                    name: '专变',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    itemStyle: {
                        opacity: 0.9,
                    },
                    color: '#ffa800',
                    symbolSize: 50, //散点大小
                    label: {
                        normal: {
                            formatter: function(s){
                               
                                return s.name||0
                            },
                      
                            show: true
                        }
                    },
                    data: mapData.map(function (itemOpt) { //散点生成
                       
                        return {                             
                            name: itemOpt.zsl,
                            value: [
                                itemOpt.longitude,
                                itemOpt.latitude                                  
                            ]       
                        };
                    }),

                },
                {
                    symbol: 'pin',
                    name: '公变',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    itemStyle: {
                        opacity: 0.9,
                    },
                    color: '#ff4e00 ',
                    symbolSize: 50, //散点大小
                    label: {
                        normal: {
                            formatter: function(s){
                               
                            	return s.name||0
                            },

                            show: true
                        }
                    },
                    data: mapData1.map(function (itemOpt) { //散点生成
                        return {
                           
                            name: itemOpt.gsl,
                            value: [
                                itemOpt.longitude,
                                itemOpt.latitude,
                              
                            ],
                        
                         

                        };
                    }),

                },
                {
                    symbol: 'pin',
                    name: '用户数',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    itemStyle: {
                        opacity: 0.9,
                    },
                    color: '#59ba12',
                    symbolSize: 50, //散点大小
                    label: {
                        normal: {
                            formatter: function(s){
                              
                                return s.name||0
                            },

                            show: true
                        }
                    },
                    data: mapData2.map(function (itemOpt) { //散点生成
                        return {
                           
                            name: itemOpt.yhs,
                            value: [
                                itemOpt.longitude,
                                itemOpt.latitude,
                                
                            ],
                             
                         

                        };
                    }),

                }
                ]
            };

            myChart.setOption(option1, true);

            // myChart.on('click', function(params) { //地图区域点击时的联动   根据params的值来联动对应数据
            //     console.log(params); //此处写点击事件内容

            // });
        });
   }
    componentDidMount() {
       
       
    }


    constructor(props) {
        super(props);
        this.state = {
            tdList: [{ name: '新增', count: 150 }, { name: '处理', count: 150 }, { name: '修复', count: 150 }],
            ftdList: [{ name: '新增', count: 150 }, { name: '处理', count: 150 }, { name: '修复', count: 150 }],
            nameList:[{ name:'营销',cls:''},{ name:'配变',cls:'pw'}],   
            actIndex:0,
          
        };
      
    }

    render() {
      
        return (
            <div id="home-dq">
                <div className="pw-i"></div>
                <span className="pw-title">地区停电情况</span>
                {this.state.nameList.map((v,i)=>
                 <span key={i}    className={'yx '+ v.cls+(this.props.actIndex.includes(i)?' img-active':'')}><span>{v.name}</span></span>
                
                )}
              
                <span className="ningb" style={{right: this.props.yxObj.index != 11?'17.5%':'2.5%'}}><span>宁波</span></span>
                <span className="ningb xs" style={{display: this.props.yxObj.index != 11?'table':'none'}}><span>{this.props.yxObj.name}</span></span>

                <span className="yx1 wft">专变停电数:</span>
                <span className="yx1 td">公变停电数:</span>
                <span className="yx1 td1">停电用户数:</span>
    <p className="yx1 wftsl"><span>{this.props.actIndex.length ==2?this.props.yxObj.yx.zb+"/"+this.props.yxObj.bp.zb+"("+this.props.tb.yxZbtds+")"+"("+this.props.tb.pbZbtds+")":this.props.actIndex.includes(0)?this.props.yxObj.yx.zb:this.props.yxObj.bp.zb}</span></p>
                <p className="yx1 tdsl"><span>{this.props.actIndex.length ==2?this.props.yxObj.yx.gsl+"/"+this.props.yxObj.bp.gsl+"("+this.props.tb.yxGbtds+")"+"("+this.props.tb.pbGbtds+")":this.props.actIndex.includes(0)?this.props.yxObj.yx.gsl:this.props.yxObj.bp.gsl}</span></p>
                <p className="yx1 tdsl1"><span>{this.props.actIndex.length ==2?this.props.yxObj.yx.yhs+"/"+this.props.yxObj.bp.yhs+"("+this.props.tb.yxTdyhs+")"+"("+this.props.tb.pbTdyhs+")":this.props.actIndex.includes(0)?this.props.yxObj.yx.yhs:this.props.yxObj.bp.yhs}</span></p>
                <div id="map"></div>
               
            </div>
        )
    }
}
