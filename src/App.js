import './App.css';
import ReactECharts from 'echarts-for-react';
import ChartContainer from './components/atoms/ChartContainer'

const App = () => {
	const optionLineGraph = {
		title: {
			text: 'Conversion Growth Rate',
			x: '6%',
			y: '5%',
			textStyle: {
				color: '#ffffff',
				opacity: '0.7',
				fontWeight: '400',
				fontFamily: 'poppins',
				fontSize: '18px'
			}
		},
		xAxis: {
			axisTick: {
				show: false,
			},
			type: 'category',
			data: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
			boundaryGap: true
		},
		yAxis: {
			min: 0,
			max: 100,
			type: 'value'
		},
		series: [
			{
				data: [45, 30, 55, 35, 25, 55, 45, 65, 75, 35],
				type: 'line',
				smooth: true,
				color: '#C4D8FF',
				showSymbol: false,
			},
		],
		tooltip: {
			trigger: 'axis',
		},
		backgroundColor: {
			type: 'radial',
			x: 0.3,
			y: 0.3,
			r: 0.8,
			colorStops: [
				{
					offset: 0,
					color: '#122C44'
				},
				{
					offset: 1,
					color: '#133351'
				}
			],
		},
		splitLine: {
			lineStyle: {
				color: '#ffffff',
				opacity: 0.05,
			},
		},
	};

	const optionPieChart = {
		color: [
			'#2B6AA9',
			'#2845AB',
			'#F8FAFF',
			'#4EBDDE'
		],
		title: {
			text: 'Conversation Type',
			left: 'left',
			top: '10%',
			padding: 15,
			textStyle: {
				color: '#ffffff',
				opacity: '0.7',
				fontWeight: '400',
				fontFamily: 'poppins',
				fontSize: '18px'
			}
		},
		tooltip: {
			trigger: 'item'
		},
		legend: {
			itemGap: 10,
			show: true,
			padding: 15,
			orient: 'vertical',
			left: 'left',
			top: '50%',
			itemWidth: 15,
			textStyle: {
				color: '#C4D8FF',
				fontFamily: 'poppins',
				fontSize: '14px'
			}
		},
		series: [
			{
				// name: 'Access From',
				type: 'pie',
				radius: '80%',
				padding: '0',
				left: '160',
				data: [
					{ value: 1048, name: 'FAQs' },
					{ value: 735, name: 'Small Talks' },
					{ value: 580, name: 'Product inquiries' },
					{ value: 484, name: 'Escalate Hop' },
				],
				label: {
					show: false
				},
				emphasis: {
					itemStyle: {
						shadowBlur: 10,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				}
			}
		],
		backgroundColor: {
			type: 'radial',
			x: 0.3,
			y: 0.3,
			r: 0.8,
			colorStops: [
				{
					offset: 0,
					color: '#122C44'
				},
				{
					offset: 1,
					color: '#133351'
				}
			]
		},
	};

	return (
		<div className="App">
			<div className='bg-[#122C44] h-screen p-10'>
				<ChartContainer height='h-[364px]' width='w-[1152px]' customStyles='drop-shadow-lg ' >
					<ReactECharts option={optionLineGraph} />
				</ChartContainer>
				<ChartContainer height='h-[307px]' width='w-[454px]' customStyles='drop-shadow-lg mt-[20px] bg-sky-400' >
					<ReactECharts option={optionPieChart} />
				</ChartContainer>
			</div>
		</div>
	);
}

export default App;
