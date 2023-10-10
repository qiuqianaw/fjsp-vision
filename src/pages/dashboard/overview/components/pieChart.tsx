import React, { useState, useEffect } from 'react';

import { Card, Spin } from '@arco-design/web-react';
import { DonutChart } from 'bizcharts';

const PieChart = (props) => {
  const { data } = props;
  console.log(data)
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState([])

  const fetchData = () => {
    setLoading(true);
    const res = {
      data: [
        {
          type: '工件动态抵达',
          count: 10
          // percent: 0.16
        },
        {
          type: '机器故障',
          count: 15
          // percent: 0.36
        },
        {
          type: '紧急插单',
          count: 20
          // percent: 0.48
        },
        {
          type: '订单取消',
          count: 25
          // percent: 0.48
        },
        {
          type: '交货期变更',
          count: 30
          // percent: 0.48
        }
      ]
    };
    // setData(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    const res = []
    data.map((item, index) => {
      console.log(item)
      res.push({
        type: index,
        count: item.sales
        // percent: 0.48
      })
    })
    console.log(res)
    setChartData(res)
  }, []);

  return (
    <Card>
      {/* <Typography.Title heading={6}>测试数据</Typography.Title> */}
      <Spin loading={loading} style={{ display: 'block' }}>
        <DonutChart
          autoFit
          height={340}
          data={data}
          radius={0.7}
          innerRadius={0.65}
          angleField="sales"
          colorField="year"
          // color={generateColor(data.length)}
          interactions={[
            {
              type: 'element-single-selected'
            }
          ]}
          tooltip={{ showMarkers: false }}
          label={{
            visible: true,
            type: 'spider',
            formatter: (v) => `${(v.percent * 100).toFixed(0)}%`,
            style: {
              fill: '#86909C',
              fontSize: 14
            }
          }}
          legend={{
            position: 'bottom'
          }}
          statistic={{
            title: {
              style: {
                fontSize: '14px',
                lineHeight: 2,
                color: 'rgb(--var(color-text-1))'
              },
              formatter: () => '总数'
            },
            content: {
              style: {
                fontSize: '16px',
                color: 'rgb(--var(color-text-1))'
              },
              formatter: (_, data) => {
                const sum = data.reduce((a, b) => a + b.sales, 0);
                return Number(sum).toLocaleString();
              }
            }
          }}
        />
      </Spin>
    </Card>
  );
};
export default PieChart;
