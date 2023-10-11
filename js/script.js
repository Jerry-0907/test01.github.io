// 白酒行业规模图

// 基于准备好的dom，初始化echarts实例
// 白酒市场规模chart1
var myChart1 = echarts.init(document.getElementById('liquor'));
    
// 指定图表的配置项和数据
var option;

option = {
title: {
text: '2012-2023年白酒市场规模'
},
tooltip: {
trigger: 'axis',
axisPointer: {
  type: 'cross',
  label: {
    backgroundColor: 'rgb(222, 225, 181)'
  }
}
},
animationEasing: "linear",
animationEasingUpdate: "quadraticIn",  //数据更新时的缓动效果
animationDurationUpdate: 300,  //数据更新动画的时长
animation: true,  //开启动画
legend: {
  textStyle:{color:'black'}
},


toolbox: {
show: true,
feature: {
  dataView: { readOnly: false },
  restore: {},
  saveAsImage: {}
}
},
dataZoom: {
show: false,
start: 0,
end: 100
},
xAxis: {
type: 'category',
name: '',
boundaryGap: true,
data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018','2019','2020','2021','2022','2023'],
axisLabel: {
  color: 'black'
}
},
yAxis: [
{
type: 'value',
axisLabel: {
              formatter: '{value}%',
              color: 'black'
          },
scale: true,
name: '同比增长（%）',
max: 30,
min: -20,
},
{
  type: 'value',
  axisLabel: {
              formatter: '{value}亿元',
              color: 'black'
          },
  scale: true,
  name: '市场规模（亿元）',
  max: 10000,
  min: 0
}],

series: [
{
  data: [4466,5518,5259,5559,6126,5654,5364,5897,5836,6434,6712,7818],
  name: '市场规模（亿元）',
  type: 'bar',
  color: '#ecffdc',
  yAxisIndex:1,
  itemStyle: {
        barBorderRadius: 5
      },
  label: {
    color: 'black'
  }
},
{
  data: [19.2,23.6,-4.7,5.7,10.2,-7.7,-5.1,9.9,-1.0,10.2,4.3,16.5],
  name: '同比增长（%）',
  type: 'line',
  color: 'rgb(248, 143, 84)',
  smooth: true,
  label: {
    show: true,
    color: 'black'
  }
},

]}

// 使用刚指定的配置项和数据显示图表。
myChart1.setOption(option);



// 点击换图
// <!--获取图片对象-->
var picture1 = document.getElementById("图片1")
var flag = true;
// <!--绑定点击事件-->
picture1.onclick = function () {
    if (flag) {
        picture1.src="images/点转1.2.jpg";
        flag=false;
    }
    else{
        picture1.src="images/点转1.1.jpg";
        flag = true;
    }

}
var picture2 = document.getElementById("图片2")
var flag = true;
// <!--绑定点击事件-->
picture2.onclick = function () {
    if (flag) {
        picture2.src="images/点转2.2.jpg";
        flag=false;
    }
    else{
        picture2.src="images/点转2.1.jpg";
        flag = true;
    }

}
var picture3 = document.getElementById("图片3")
var flag = true;
// <!--绑定点击事件-->
picture3.onclick = function () {
    if (flag) {
        picture3.src="images/点转3.2.jpg";
        flag=false;
    }
    else{
        picture3.src="images/点转3.1.jpg";
        flag = true;
    }

}

// 酒香分布开始 chart2
var chartDom = document.getElementById('distribution');
var myChart2 = echarts.init(chartDom);
var option;

option = {
  title: {
    text: '过去一年饮用的白酒香型分布',
    textStyle:
    {fontSize:20}
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {top:'top',left:'right'},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01],
    max: 100,
    axisLabel: {
      formatter: '{value}%',
      color: 'black'
    }
  },
  yAxis: {
    type: 'category',
    name: '白酒香型',
    data: [
      '浓香',
      '酱香',
      '清香',
      '老白干香',
      '米香',
      '兼香',
      '特香',
      '风香',
      '芝麻香',
      '馥郁香'
    ],
    axisLabel:{
    color:'black'}
  },
  series: [
    {
      name: '分布占比',
      type: 'bar',
      data: [67, 67, 59, 21, 20, 18, 15, 13, 10, 9],
      itemStyle: {
        barBorderRadius: 5
      },
      label:{
        show:true
      },
      color:'#dfe1c1',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }
  ]
};

option && myChart2.setOption(option);
// 酒香分布结束

// 旭日图 chart3
var chartDom = document.getElementById('sunburst');
var myChart3 = echarts.init(chartDom);
var option;

var data3 = [
  {
    name: '28岁以上',
    itemStyle: {
      color: '#39604e'
    },
    children: [
      {
        name: '75年前出生',
        itemStyle: {
          color: '#9db2b7'
        },
        children: [
          {
            name: '活血暖身',
            value: 25 * (1.27 / 3.5),
            itemStyle: {
              color: '#80a89d'
            }
          },
          {
            name: '尝新好奇',
            value: 25 * (1.13 / 3.5),
            itemStyle: {
              color: '#5e777b'
            }
          },
          {
            name: '身份地位、体面',
            value: 25 * (1.1 / 3.5),
            itemStyle: {
              color: '#120c0c'
            }
          }
        ]
      },
      {
        name: '75年至84年出生',
        itemStyle: {
          color: '#f8f4dd'
        },
        children: [
          {
            name: '活血暖身',
            value: 23 * (1.38 / 3.63),
            itemStyle: {
              color: '#80a89d'
            }
          },
          {
            name: '融入身边人',
            value: 23 * (1.13 / 3.63),
            itemStyle: {
              color: '#5e777b'
            }
          },
          {
            name: '每日小酌',
            value: 23 * (1.12 / 3.63),
            itemStyle: {
              color: '#120c0c'
            }
          }
        ]
      },
      {
        name: '85年至94年出生',
        itemStyle: {
          color: '#f6cd75'
        },
        children: [
          {
            name: '外出聚餐、交友',
            value: 34 * (1.2 / 3.44),
            itemStyle: {
              color: '#80a89d'
            }
          },
          {
            name: '日常习惯',
            value: 34 * (1.12 / 3.44),
            itemStyle: {
              color: '#5e777b'
            }
          },
          {
            name: '缓解情绪',
            value: 34 * (1.12 / 3.44),
            itemStyle: {
              color: '#120c0c'
            }
          }
        ]
      }
    ]
  },
  {
    name: '28岁以内',
    itemStyle: {
      color: '#c94930'
    },
    children: [
      {
        name: '95年以后出生',
        itemStyle: {
          color: '#88966d'
        },
        children: [
          {
            name: '外出聚餐、交友',
            value: 18 * (1.34 / 3.45),
            itemStyle: {
              color: '#5e777b'
            }
          },
          {
            name: '工作、商务场合增多',
            value: 18 * (1.07 / 3.45),
            itemStyle: {
              color: '#a1743b'
            }
          },
          {
            name: '融入身边人',
            value: 18 * (1.04 / 3.45),
            itemStyle: {
              color: '#120c0c'
            }
          }
        ]
      }
    ]
  }
];
option = {
  title: {
    text: '白酒消费年龄段分布及预期增长的原因',
    textStyle: {
      fontSize: 20,
      align: 'center'
    }
  },
  tooltip: {
    trigger: 'item'
  },
    
  series: {
    type: 'sunburst',
    data: data3,
    radius: [0, '95%'],
    sort: undefined,
    emphasis: {
      focus: 'ancestor'
    },
    levels: [
      {},
      {
        r0: '15%',
        r: '35%',
        itemStyle: {
          borderWidth: 2
        },
        label: {
          rotate: 'tangential'
        }
      },
      {
        r0: '35%',
        r: '70%',
        label: {
          align: 'right'
        }
      },
      {
        r0: '70%',
        r: '72%',
        label: {
          position: 'outside',
          padding: 3,
          silent: false
        },
        itemStyle: {
          borderWidth: 3
        }
      }
    ]
  }
};

option && myChart3.setOption(option);


// 词云chart4
var myChart4 = echarts.init(document.getElementById("wordcloud"));
myChart4.setOption({
    tooltip: {
      formatter: function(params) {                        
        var toolTiphtml = ''
        if (isNaN(params.value)){
        toolTiphtml = params.name + ''
        }else{
        toolTiphtml = params.name + ': ' + params.value + '次'
        }                      
        return toolTiphtml;                   
        }
    },
                series: [ {
                    type: 'wordCloud',
                    shape: 'diamond',
                    gridSize: 5,
                    sizeRange: [30, 70],
                    rotationRange: [-5, 5],
                    shape: 'pentagon',
                    width: 800,
                    height: 600,
                    drawOutOfBound: true,
                    textStyle: {
                        color: function () {
                            return 'rgb(' + [
                                Math.round(Math.random() * 50),
                                Math.round(Math.random() * 100),
                                Math.round(Math.random() * 160)
                            ].join(',') + ')';
                        }
                    },
                    emphasis: {
                        textStyle: {
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    data: [
                        {
                            name: '',
                            value: 1500,
                            textStyle: {
                                color: 'black'
                            },
                            emphasis: {
                                textStyle: {
                                    color: 'red'
                                }
                            }
                        },
                        {
                            name: '酒',
                            value: 1353
                        },
                        {
                            name: '柑橘',
                            value: 471
                        },
                        {
                            name: '味道',
                            value: 428
                        },
                        {
                            name: '啤酒',
                            value: 417
                        },
                        {
                            name: '朋友',
                            value: 356
                        },
                        {
                            name: '酒吧',
                            value: 240
                        },
                        {
                            name: '香气',
                            value: 203
                        },
                        {
                            name: '口感',
                            value: 189
                        },
                        {
                            name: '今天',
                            value: 182
                        },
                        {
                            name: '酒精',
                            value: 179
                        },
                        {
                            name: '价格',
                            value: 161
                        },
                        {
                            name: '白酒',
                            value: 157
                        },
                        {
                            name: '味',
                            value: 150
                        },
                        {
                            name: '金酒',
                            value: 141
                        },
                        {
                            name: '柠檬',
                            value: 132
                        },
                        {
                            name: '水',
                            value: 122
                        },
                        {
                            name: '气泡',
                            value: 122
                        },
                        {
                            name: '红酒',
                            value: 121
                        },
                        {
                            name: '风味',
                            value: 120
                        },
                        {
                            name: '酸',
                            value: 119
                        },
                        {
                            name: '瓶',
                            value: 107
                        },
                        {
                            name: '尝试',
                            value: 106
                        },
                        {
                            name: '口味',
                            value: 103
                        },
                        {
                            name: '冰块',
                            value: 103
                        },
                        {
                            name: '特调',
                            value: 99
                        },
                        {
                            name: '酒鬼',
                            value: 98
                        },
                        {
                            name: '咖啡',
                            value: 98
                        },
                        {
                            name: '度数',
                            value: 98
                        },
                        {
                            name: '调酒',
                            value: 98
                        },
                        {
                            name: '晚上',
                            value: 95
                        },
                        {
                            name: '糖浆',
                            value: 93
                        },
                        {
                            name: '冰',
                            value: 92
                        },
                        {
                            name: '风格',
                            value: 88
                        },
                        {
                            name: '酒精度',
                            value: 84
                        },
                        {
                            name: '水果',
                            value: 82
                        },
                        {
                            name: '个人',
                            value: 82
                        },
                        {
                            name: '酒体',
                            value: 80
                        },
                        {
                            name: '葡萄酒',
                            value: 79
                        },
                        {
                            name: '清酒',
                            value: 79
                        },
                        {
                            name: '葡萄',
                            value: 74
                        },
                        {
                            name: '夏天',
                            value: 73
                        },
                        {
                            name: '注意事项',
                            value: 73
                        },
                        {
                            name: '店',
                            value: 71
                        },
                        {
                            name: '香味',
                            value: 71
                        },
                        {
                            name: '鸡尾酒',
                            value: 70
                        },
                        {
                            name: '时间',
                            value: 69
                        },
                        {
                            name: '开瓶',
                            value: 69
                        },
                        {
                            name: '柠檬汁',
                            value: 69
                        },
                        {
                            name: '活动',
                            value: 68
                        },
                        {
                            name: '试试',
                            value: 67
                        },
                        
                    ]
                } ]
            
})


// 饼图 chart5
var chartDom = document.getElementById('pie1');
var myChart5 = echarts.init(chartDom);
var option;

const data = [
  { value: 300, name: '中国' },
  { value: 85, name: '印度' },
  { value: 61, name: '美国' },
  { value: 42, name: '日本' },
  { value: 31, name: '俄罗斯' },
  { value: 26, name: '巴西' }
];
const defaultPalette = [
  // '#51689b', '#ce5c5c', '#fbc357', '#8fbf8f', '#659d84', '#fb8e6a', '#c77288', '#786090', '#91c4c5', '#6890ba'
    '#023020',
    '#39604e',
    '#8ba87c',
    '#f6cd75',
    '#ccb99b',
    '#b3b68c'
  
];
const radius = ['30%', '80%'];
const pieOption = {
  series: [
    {
      type: 'pie',
      id: 'distribution',
      radius: radius,
      label: {
        show: true
      },
      universalTransition: true,
      animationDurationUpdate: 1000,
      data: data,
    },
],
  color: [
    '#023020',
    '#39604e',
    '#8ba87c',
    '#f6cd75',
    '#ccb99b',
    '#b3b68c'
  ],
  legend:{
    top: 'bottom'
  },
  title: {
    text: '全球癌症死亡人数前六的国家',
    textStyle: {
      fontSize: 20,
      align: 'center'
    },
    left: 150
  },
  tooltip: {
    trigger: 'item',
    formatter: function(params) {                        
      var toolTiphtml = ''
      if (isNaN(params.value)){
      toolTiphtml = params.name + ''
      }else{
      toolTiphtml = params.name + ': ' + params.value + '万人'
      }                      
      return toolTiphtml;                   
      }
}};
const parliamentOption = (function () {
  let sum = data.reduce(function (sum, cur) {
    return sum + cur.value;
  }, 0);
  let angles = [];
  let startAngle = -Math.PI / 2;
  let curAngle = startAngle;
  data.forEach(function (item) {
    angles.push(curAngle);
    curAngle += (item.value / sum) * Math.PI * 2;
  });
  angles.push(startAngle + Math.PI * 2);
  function parliamentLayout(startAngle, endAngle, totalAngle, r0, r1, size) {
    let rowsCount = Math.ceil((r1 - r0) / size);
    let points = [];
    let r = r0;
    for (let i = 0; i < rowsCount; i++) {
      // Recalculate size
      let totalRingSeatsNumber = Math.round((totalAngle * r) / size);
      let newSize = (totalAngle * r) / totalRingSeatsNumber;
      for (
        let k = Math.floor((startAngle * r) / newSize) * newSize;
        k < Math.floor((endAngle * r) / newSize) * newSize - 1e-6;
        k += newSize
      ) {
        let angle = k / r;
        let x = Math.cos(angle) * r;
        let y = Math.sin(angle) * r;
        points.push([x, y]);
      }
      r += size;
    }
    return points;
  }
  return {
    series: {
      type: 'custom',
      id: 'distribution',
      data: data,
      coordinateSystem: undefined,
      universalTransition: true,
      animationDurationUpdate: 1000,
      renderItem: function (params, api) {
        var idx = params.dataIndex;
        var viewSize = Math.min(api.getWidth(), api.getHeight());
        var r0 = ((parseFloat(radius[0]) / 100) * viewSize) / 2;
        var r1 = ((parseFloat(radius[1]) / 100) * viewSize) / 2;
        var cx = api.getWidth() * 0.5;
        var cy = api.getHeight() * 0.5;
        var size = viewSize / 50;
        var points = parliamentLayout(
          angles[idx],
          angles[idx + 1],
          Math.PI * 2,
          r0,
          r1,
          size + 3
        );
        return {
          type: 'group',
          children: points.map(function (pt) {
            return {
              type: 'circle',
              autoBatch: true,
              shape: {
                cx: cx + pt[0],
                cy: cy + pt[1],
                r: size / 2
              },
              style: {
                fill: defaultPalette[idx % defaultPalette.length]
              }
            };
          })
        };
      }
    }
  };
})();
let currentOption = (option = pieOption);
setInterval(function () {
  currentOption = currentOption === pieOption ? parliamentOption : pieOption;
  myChart5.setOption(currentOption);
}, 4000);

option && myChart5.setOption(option);




// 饼图 chart6
var chartDom = document.getElementById('pie2');
var myChart6 = echarts.init(chartDom);
var option;

const data2 = [
  { value: 82, name: '肺癌' },
  { value: 56, name: '结直肠癌' },
  { value: 48, name: '胃癌' },
  { value: 42, name: '乳腺癌' },
  { value: 41, name: '肝癌' },
  { value: 32, name: '食管癌' }
];
const defaultPalette2 = [
  // '#51689b', '#ce5c5c', '#fbc357', '#8fbf8f', '#659d84', '#fb8e6a', '#c77288', '#786090', '#91c4c5', '#6890ba'
    '#023020',
    '#39604e',
    '#8ba87c',
    '#f6cd75',
    '#ccb99b',
    '#b3b68c'
];
const radius2 = ['30%', '80%'];
const pieOption2 = {
  series: [
    {
      type: 'pie',
      id: 'distribution',
      radius: radius,
      label: {
        show: true
      },
      universalTransition: true,
      animationDurationUpdate: 1000,
      data: data2
    }
  ],
  legend:{
    top: 'bottom'
  },
  title: {
    text: '中国癌症新发例数前六的癌症',
    textStyle: {
      fontSize: 20,
      align: 'center'
    },
    left: 160
  },
  color:[
    '#023020',
    '#39604e',
    '#8ba87c',
    '#f6cd75',
    '#ccb99b',
    '#b3b68c'
  ],
  tooltip: {
    trigger: 'item',
    formatter: function(params) {                        
      var toolTiphtml = ''
      if (isNaN(params.value)){
      toolTiphtml = params.name + ''
      }else{
      toolTiphtml = params.name + ': ' + params.value + '万人'
      }                      
      return toolTiphtml;                   
      }
}};
const parliamentOption2 = (function () {
  let sum = data2.reduce(function (sum, cur) {
    return sum + cur.value;
  }, 0);
  let angles = [];
  let startAngle = -Math.PI / 2;
  let curAngle = startAngle;
  data2.forEach(function (item) {
    angles.push(curAngle);
    curAngle += (item.value / sum) * Math.PI * 2;
  });
  angles.push(startAngle + Math.PI * 2);
  function parliamentLayout(startAngle, endAngle, totalAngle, r0, r1, size) {
    let rowsCount = Math.ceil((r1 - r0) / size);
    let points = [];
    let r = r0;
    for (let i = 0; i < rowsCount; i++) {
      // Recalculate size
      let totalRingSeatsNumber = Math.round((totalAngle * r) / size);
      let newSize = (totalAngle * r) / totalRingSeatsNumber;
      for (
        let k = Math.floor((startAngle * r) / newSize) * newSize;
        k < Math.floor((endAngle * r) / newSize) * newSize - 1e-6;
        k += newSize
      ) {
        let angle = k / r;
        let x = Math.cos(angle) * r;
        let y = Math.sin(angle) * r;
        points.push([x, y]);
      }
      r += size;
    }
    return points;
  }
  return {
    series: {
      type: 'custom',
      id: 'distribution',
      data: data2,
      coordinateSystem: undefined,
      universalTransition: true,
      animationDurationUpdate: 1000,
      renderItem: function (params, api) {
        var idx = params.dataIndex;
        var viewSize = Math.min(api.getWidth(), api.getHeight());
        var r0 = ((parseFloat(radius[0]) / 100) * viewSize) / 2;
        var r1 = ((parseFloat(radius[1]) / 100) * viewSize) / 2;
        var cx = api.getWidth() * 0.5;
        var cy = api.getHeight() * 0.5;
        var size = viewSize / 50;
        var points = parliamentLayout(
          angles[idx],
          angles[idx + 1],
          Math.PI * 2,
          r0,
          r1,
          size + 3
        );
        return {
          type: 'group',
          children: points.map(function (pt) {
            return {
              type: 'circle',
              autoBatch: true,
              shape: {
                cx: cx + pt[0],
                cy: cy + pt[1],
                r: size / 2
              },
              style: {
                fill: defaultPalette2[idx % defaultPalette2.length]
              }
            };
          })
        };
      }
    }
  };
})();
let currentOption2 = (option = pieOption2);
setInterval(function () {
  currentOption2 = currentOption2 === pieOption2 ? parliamentOption2 : pieOption2;
  myChart6.setOption(currentOption2);
}, 4000);

option && myChart6.setOption(option);


// 矩形树图
var myChart7 = echarts.init(document.getElementById("treemap"));
	//指定图表的配置项和数据
	function getLevelOption() {
		return [
			{
				itemStyle: {
					borderWidth: 0,
					gapWidth: 5
				}
			},
			{
				itemStyle: {
					gapWidth: 1
				}
			},
			{
				colorSaturation: [0.35, 0.5],
				itemStyle: {
					gapWidth: 1,
					borderColorSaturation: 0.6
				}
			}
		];
	}
	var option = {  //指定图表的配置项和数据
		title: {  //配置标题组件
			text: '面对喝酒众人的做法',
			textStyle: { fontSize:20 }
		},
    tooltip: {
      trigger: 'item',
      formatter: function(params) {                        
        var toolTiphtml = ''
        if (isNaN(params.value)){
        toolTiphtml = params.name + '次'
        }else{
        toolTiphtml = params.name + ': ' + params.value + '次'
        }                      
        return toolTiphtml;                   
        }
    },
    visualMap: {
      min:0,
      max:36,
      inRange:{
        color: ['#f8f4dd','#39604e']
      }
    },
		series: [{
			name: '全部',
			type: 'treemap',
			levels: getLevelOption(),
			data: [{
				name: '倾向于拒绝',  //First tree
				value: 66,
				children: [{
					name: '找理由推脱',  //First leaf of first tree
					value: 15
				}, {
					name: '装醉、一杯倒、酒精过敏',  //Second leaf of first tree
					value: 24
				}, {
					name: '坚持不喝酒',  //third leaf of first tree
					value: 18
				}, {
					name: '躲酒',  //foruth leaf of first tree
					value: 9
				}]
			}, {
				name: '未知',  //First tree
				value: 36,
				children: [{
					name: '其他',  //Second leaf of first tree
					value: 36
				}]
			}, {
				name: '可能不会拒绝',  //First tree
				value: 16,
				children: [{
					name: '视场合而定',  //First leaf of first tree
					value: 14
				}, {
					name: '拼酒',  //First leaf of first tree
					value: 2
				}]
			}]
		}]
	};
	//使用刚指定的配置项和数据显示图表
	myChart7.setOption(option); 
  


  
