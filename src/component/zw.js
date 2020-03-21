import React, { Component } from 'react';
import '../static/scss/zw.scss';
import { Select } from 'antd';
import  {zwData}  from '../service';
const { Option } = Select;

export default class zw extends Component {
	constructor(props) {
		super(props);
		this.state = {
			areaData: [				
			],
			cla:'全宁波',
			zindex: 0
		};
		this.option = {
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				}
			},
			legend: {
				itemGap: 1,
				bottom: '-3%',
				icon: 'rect',
				left: 'center',

				itemWidth: 10,
				itemHeight: 10,
				textStyle: {
					color: '#fff',
					fontSize: 10
				}
			},

			grid: {
				left: '0%',
				right: '0%',
				bottom: '13%',
				top: '10%',
				containLabel: true,
			},
			xAxis: {
				type: 'category',
				axisLabel: {
					interval: 0,
					textStyle: {
						color: '#fff',
						fontSize: 8,
					}
				},
				axisTick: {
					show: false
				},
				axisLine: {
					show: true,
					lineStyle: {
						color: '#fff'
					}

				},
				data: [
					'500千伏',
					'220千伏',
					'110千伏',
					'35千伏',
					'10千伏',
				],
			},
			dataZoom: [{
				type: 'inside'
			}],
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
						color: '#fff',
						fontSize: 10,
					}
				},
				type: 'value'
			},
			series: [{

				name: '停运(总条数)',
				type: 'bar',
				barGap: 0,
				data: [],
				itemStyle: {
					color: '#38915B',
				},
				barWidth: '18%',
				label: {
					show: true,
					position: 'top',
					color: '#fff',
					fontSize: 10,

				},

			},
			{

				name: '跳闸(重合不成功)',
				type: 'bar',
				data: [],
				itemStyle: {
					color: '#9CC46E',
				},
				barWidth: '18%',
				label: {

					show: true,
					position: 'top',
					color: '#fff',
					fontSize: 10,

				},
			},
			{

				name: '跳闸(重合成功)',
				type: 'bar',
				data: [],
				itemStyle: {
					color: '#009BB1',
				},
				barWidth: '18%',
				label: {

					show: true,
					position: 'top',
					color: '#fff',
					fontSize: 10,

				},
			},
			{

				name: '拉停',
				type: 'bar',
				data: [],
				itemStyle: {
					color: '#007777',
				},
				barWidth: '18%',
				label: {

					show: true,
					position: 'top',
					color: '#fff',
					fontSize: 10,

				},
			},
			{

				name: '未恢复',
				type: 'bar',
				data: [],
				itemStyle: {
					color: '#DE722D',
				},
				barWidth: '18%',
				label: {

					show: true,
					position: 'top',
					color: '#fff',
					fontSize: 10,

				},
			}

			]
		};
		this.option1 = {
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				}
			},
			legend: {
				//itemGap: 1,


				bottom: '-3%',
				icon: 'rect',
				left: 'center',
				itemWidth: 10,
				itemHeight: 10,
				textStyle: {
					color: '#fff',
					fontSize: 10
				}
			},

			grid: {
				left: '0%',
				right: '0%',
				bottom: '13%',
				top: '10%',
				containLabel: true,
			},
			xAxis: {
				type: 'category',
				axisLabel: {
					interval: 0,
					textStyle: {
						color: '#fff',
						fontSize: 8,
					}
				},
				axisTick: {
					show: false
				},
				axisLine: {
					show: true,
					lineStyle: {
						color: '#fff'
					}

				},
				data: [
					'线路停运',
					'主动拉停',
					'未恢复'

				],
			},
			dataZoom: [{
				type: 'inside'
			}],
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
						color: '#fff',
						fontSize: 10,
					}
				},
				type: 'value'
			},
			series: [{

				name: '500千伏',
				type: 'bar',
				barGap: 0,
				data: [],
				itemStyle: {
					color: '#38915B',
				},
				barWidth: '18%',
				label: {
					show: true,
					position: 'top',
					color: '#fff',
					fontSize: 10,

				},

			},
			{

				name: '220千伏',
				type: 'bar',
				data: [],
				itemStyle: {
					color: '#9CC46E',
				},
				barWidth: '18%',
				label: {

					show: true,
					position: 'top',
					color: '#fff',
					fontSize: 10,

				},
			},
			{

				name: '110千伏',
				type: 'bar',
				data: [],
				itemStyle: {
					color: '#009BB1',
				},
				barWidth: '18%',
				label: {
					show: true,
					position: 'top',
					color: '#fff',
					fontSize: 10,
				},
			},
			{

				name: '35千伏',
				type: 'bar',
				data: [],
				itemStyle: {
					color: '#007777',
				},
				barWidth: '18%',
				label: {

					show: true,
					position: 'top',
					color: '#fff',
					fontSize: 10,

				},
			},
			{

				name: '10千伏',
				type: 'bar',
				data: [],
				itemStyle: {
					color: '#DE722D',
				},
				barWidth: '18%',
				label: {

					show: true,
					position: 'top',
					color: '#fff',
					fontSize: 10,

				},
			}

			]
		};
	}


	setzIndex(zindex) {
		this.setState({ zindex })
	}
  

	sendzwdata=(date)=>{
		let params = {};
        if(date){
            params = {...date}
        }
		zwData(params)
		.then((res)=>{			
			this.setState({areaData:res.data})
			let zjarea = {
				name: '全宁波',
				'xltz': {
					tyzts: [0, 0, 0, 0, 0],
					tzbcg: [0, 0, 0, 0, 0],
					tzcg: [0, 0, 0, 0, 0],
					lt: [0, 0, 0, 0, 0],
					whf: [0, 0, 0, 0, 0]
				},
				'bdzty': {
					wuqf: [0, 0, 0],
					siqf: [0, 0, 0],
					sanqf: [0, 0, 0],
					erqf: [0, 0, 0],
					yiqf: [0, 0, 0]
				}
			}
	
			for (let i in this.state.areaData) {
				zjarea.xltz.tyzts[0] += this.state.areaData[i].xltz.tyzts[0];
				zjarea.xltz.tyzts[1] += this.state.areaData[i].xltz.tyzts[1];
				zjarea.xltz.tyzts[2] += this.state.areaData[i].xltz.tyzts[2];
				zjarea.xltz.tyzts[3] += this.state.areaData[i].xltz.tyzts[3];
				zjarea.xltz.tyzts[4] += this.state.areaData[i].xltz.tyzts[4];
				zjarea.xltz.tzbcg[0] += this.state.areaData[i].xltz.tzbcg[0];
				zjarea.xltz.tzbcg[1] += this.state.areaData[i].xltz.tzbcg[1];
				zjarea.xltz.tzbcg[2] += this.state.areaData[i].xltz.tzbcg[2];
				zjarea.xltz.tzbcg[3] += this.state.areaData[i].xltz.tzbcg[3];
				zjarea.xltz.tzbcg[4] += this.state.areaData[i].xltz.tzbcg[4];
	
				zjarea.xltz.tzcg[0] += this.state.areaData[i].xltz.tzcg[0];
				zjarea.xltz.tzcg[1] += this.state.areaData[i].xltz.tzcg[1];
				zjarea.xltz.tzcg[2] += this.state.areaData[i].xltz.tzcg[2];
				zjarea.xltz.tzcg[3] += this.state.areaData[i].xltz.tzcg[3];
				zjarea.xltz.tzcg[4] += this.state.areaData[i].xltz.tzcg[4];
	
	
	
				zjarea.xltz.lt[0] += this.state.areaData[i].xltz.lt[0];
				zjarea.xltz.lt[1] += this.state.areaData[i].xltz.lt[1];
				zjarea.xltz.lt[2] += this.state.areaData[i].xltz.lt[2];
				zjarea.xltz.lt[3] += this.state.areaData[i].xltz.lt[3];
				zjarea.xltz.lt[4] += this.state.areaData[i].xltz.lt[4];
				zjarea.xltz.whf[0] += this.state.areaData[i].xltz.whf[0];
				zjarea.xltz.whf[1] += this.state.areaData[i].xltz.whf[1];
				zjarea.xltz.whf[2] += this.state.areaData[i].xltz.whf[2];
				zjarea.xltz.whf[3] += this.state.areaData[i].xltz.whf[3];
				zjarea.xltz.whf[4] += this.state.areaData[i].xltz.whf[4];

				zjarea.bdzty.wuqf[0] += this.state.areaData[i].bdzty.wuqf[0];
				zjarea.bdzty.wuqf[1] += this.state.areaData[i].bdzty.wuqf[1];
				zjarea.bdzty.wuqf[2] += this.state.areaData[i].bdzty.wuqf[2];
				zjarea.bdzty.siqf[0] += this.state.areaData[i].bdzty.siqf[0];
				zjarea.bdzty.siqf[1] += this.state.areaData[i].bdzty.siqf[1];
				zjarea.bdzty.siqf[2] += this.state.areaData[i].bdzty.siqf[2];
				zjarea.bdzty.sanqf[0] += this.state.areaData[i].bdzty.sanqf[0];
				zjarea.bdzty.sanqf[1] += this.state.areaData[i].bdzty.sanqf[1];
				zjarea.bdzty.sanqf[2] += this.state.areaData[i].bdzty.sanqf[2];
				zjarea.bdzty.erqf[0] += this.state.areaData[i].bdzty.erqf[0];
				zjarea.bdzty.erqf[1] += this.state.areaData[i].bdzty.erqf[1];
				zjarea.bdzty.erqf[2] += this.state.areaData[i].bdzty.erqf[2];
				zjarea.bdzty.yiqf[0] += this.state.areaData[i].bdzty.yiqf[0];
				zjarea.bdzty.yiqf[1] += this.state.areaData[i].bdzty.yiqf[1];
				zjarea.bdzty.yiqf[2] += this.state.areaData[i].bdzty.yiqf[2];
	
	
			}
	
			this.state.areaData.unshift(zjarea)
			
	
			this.option.series[0].data = this.state.areaData[0].xltz.tyzts; //替换ajax数据       
			this.option.series[1].data = this.state.areaData[0].xltz.tzbcg; //替换ajax数据 
			this.option.series[2].data = this.state.areaData[0].xltz.tzcg; //替换ajax数据       
			this.option.series[3].data = this.state.areaData[0].xltz.lt; //替换ajax数据 
			this.option.series[4].data = this.state.areaData[0].xltz.whf; //替换ajax数据  
	
			this.option1.series[0].data = this.state.areaData[0].bdzty.wuqf; //替换ajax数据       
			this.option1.series[1].data = this.state.areaData[0].bdzty.siqf; //替换ajax数据 
			this.option1.series[2].data = this.state.areaData[0].bdzty.sanqf; //替换ajax数据       
			this.option1.series[3].data = this.state.areaData[0].bdzty.erqf; //替换ajax数据 
			this.option1.series[4].data = this.state.areaData[0].bdzty.yiqf; //替换ajax数据  
			this.myChart1.setOption(this.option, true);
			this.myChart2.setOption(this.option1, true); 
			this.setState({ areaData: this.state.areaData,zindex:0,cla:'全宁波' })
		})
		let zech1 = document.getElementById("zech1");
		this.myChart1 = React.$echarts.init(zech1);
		let zech2 = document.getElementById("zech2");
		this.myChart2 = React.$echarts.init(zech2);	

	}
	componentDidMount() {	
		this.sendzwdata();
		this.props.getzwfn(this.sendzwdata);
	}
	onChange = (i) => {
		this.option.series[0].data = this.state.areaData[i].xltz.tyzts; //替换ajax数据       
		this.option.series[1].data = this.state.areaData[i].xltz.tzbcg; //替换ajax数据 
		this.option.series[2].data = this.state.areaData[i].xltz.tzcg; //替换ajax数据       
		this.option.series[3].data = this.state.areaData[i].xltz.lt; //替换ajax数据 
		this.option.series[4].data = this.state.areaData[i].xltz.whf; //替换ajax数据  

		this.option1.series[0].data = this.state.areaData[i].bdzty.wuqf; //替换ajax数据       
		this.option1.series[1].data = this.state.areaData[i].bdzty.siqf; //替换ajax数据 
		this.option1.series[2].data = this.state.areaData[i].bdzty.sanqf; //替换ajax数据       
		this.option1.series[3].data = this.state.areaData[i].bdzty.erqf; //替换ajax数据 
		this.option1.series[4].data = this.state.areaData[i].bdzty.yiqf; //替换ajax数据  
		this.myChart1.setOption(this.option, true);
		this.myChart2.setOption(this.option1, true);
		//this.state.areaData[i].name = '海曙';
		this.setState({cla:this.state.areaData[i].name})
		console.log(i)
	}
	render() {
		return (
			<div id="home-zw">
				<div className="zw-i"></div>
				<span className="zw-title">主网</span>
				<div className="selectArea">
					<Select
						style={{ width: '100%', height: '100%', borderRadius: 'normal' }}
						dropdownMenuStyle={{ background: '#007a77' }}
						dropdownStyle={{ color: '#fff' }}
						value={this.state.cla}
						onChange={this.onChange}
						
					>

						{this.state.areaData.map((v, i) =>

							<Option value={i} key={i}>{v.name}</Option>
						)}
					</Select>
				</div>
				<div className="tfxx">
		
						<div className="tfsj"> <font>最新截止时间: <span >{this.props.tfsj}</span></font></div>
				</div>
				<div className={'btnz ' + (0 == this.state.zindex ? 'btnbg' : '')} onClick={this.setzIndex.bind(this, 0)}><span>线路跳闸</span></div>
				<div className={'btny ' + (1 == this.state.zindex ? 'btnbg' : '')} onClick={this.setzIndex.bind(this, 1)}><span>变电站停运</span></div>
				<div id="zecharts" style={{ left: this.state.zindex ? '-100%' : '0%' }}>
					<div id="zech1"></div>
					<div id="zech2"></div>
				</div>
			</div>
		)
	}
}
