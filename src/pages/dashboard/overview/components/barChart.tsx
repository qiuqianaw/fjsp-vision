import React, { useEffect, useState } from 'react';
import { Chart, Tooltip, Interval, Axis, Legend } from 'bizcharts';
import { Spin } from '@arco-design/web-react';
import CustomTooltip from './customer-tooltip';

const PieChart = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    getChartData();
  }, []);

  const getChartData = () => {
    setLoading(true);
    setData([
      {
        name: '纯文本',
        time: '00:00',
        count: 2796,
        rate: 36
      },
      {
        name: '纯文本',
        time: '02:00',
        count: 4727,
        rate: 80
      },
      {
        name: '纯文本',
        time: '04:00',
        count: 3853,
        rate: 4
      },
      {
        name: '纯文本',
        time: '06:00',
        count: 2708,
        rate: 7
      },
      {
        name: '纯文本',
        time: '08:00',
        count: 4888,
        rate: 30
      },
      {
        name: '纯文本',
        time: '10:00',
        count: 3247,
        rate: 47
      },
      {
        name: '纯文本',
        time: '12:00',
        count: 3466,
        rate: 99
      },
      {
        name: '纯文本',
        time: '14:00',
        count: 3969,
        rate: 64
      },
      {
        name: '纯文本',
        time: '16:00',
        count: 3874,
        rate: 48
      },
      {
        name: '纯文本',
        time: '18:00',
        count: 1040,
        rate: 5
      },
      {
        name: '纯文本',
        time: '20:00',
        count: 3464,
        rate: 49
      },
      {
        name: '纯文本',
        time: '22:00',
        count: 2594,
        rate: 17
      },
      {
        name: '视频类',
        time: '00:00',
        count: 2572,
        rate: 42
      },
      {
        name: '视频类',
        time: '02:00',
        count: 2228,
        rate: 82
      },
      {
        name: '视频类',
        time: '04:00',
        count: 4542,
        rate: 27
      },
      {
        name: '视频类',
        time: '06:00',
        count: 4580,
        rate: 58
      },
      {
        name: '视频类',
        time: '08:00',
        count: 3568,
        rate: 35
      },
      {
        name: '视频类',
        time: '10:00',
        count: 2746,
        rate: 67
      },
      {
        name: '视频类',
        time: '12:00',
        count: 1661,
        rate: 55
      },
      {
        name: '视频类',
        time: '14:00',
        count: 4851,
        rate: 26
      },
      {
        name: '视频类',
        time: '16:00',
        count: 1328,
        rate: 38
      },
      {
        name: '视频类',
        time: '18:00',
        count: 4058,
        rate: 92
      },
      {
        name: '视频类',
        time: '20:00',
        count: 3218,
        rate: 77
      },
      {
        name: '视频类',
        time: '22:00',
        count: 3380,
        rate: 27
      },
      {
        name: '图文类',
        time: '00:00',
        count: 3092,
        rate: 14
      },
      {
        name: '图文类',
        time: '02:00',
        count: 3584,
        rate: 73
      },
      {
        name: '图文类',
        time: '04:00',
        count: 4082,
        rate: 60
      },
      {
        name: '图文类',
        time: '06:00',
        count: 2337,
        rate: 4
      },
      {
        name: '图文类',
        time: '08:00',
        count: 1777,
        rate: 38
      },
      {
        name: '图文类',
        time: '10:00',
        count: 1988,
        rate: 20
      },
      {
        name: '图文类',
        time: '12:00',
        count: 4517,
        rate: 49
      },
      {
        name: '图文类',
        time: '14:00',
        count: 2758,
        rate: 52
      },
      {
        name: '图文类',
        time: '16:00',
        count: 2957,
        rate: 28
      },
      {
        name: '图文类',
        time: '18:00',
        count: 4376,
        rate: 47
      },
      {
        name: '图文类',
        time: '20:00',
        count: 2868,
        rate: 12
      },
      {
        name: '图文类',
        time: '22:00',
        count: 2776,
        rate: 73
      }
    ]);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  };
  return (
    <Spin loading={loading} style={{ width: '100%' }}>
      <Chart
        height={404}
        padding="auto"
        data={data}
        autoFit
        className={'chart-wrapper'}
      >
        <Interval
          adjust="stack"
          color={['name', ['#81E2FF', '#00B2FF', '#246EFF']]}
          position="time*count"
          size={16}
          style={{
            radius: [2, 2, 0, 0]
          }}
        />
        <Tooltip crosshairs={{ type: 'x' }} showCrosshairs shared>
          {(title, items) => {
            return <CustomTooltip title={title} data={items} />;
          }}
        </Tooltip>
        <Axis
          name="count"
          label={{
            formatter(text) {
              return `${Number(text) / 1000}k`;
            }
          }}
        />
        <Legend name="name" marker={{ symbol: 'circle' }} />
      </Chart>
    </Spin>
  );
};
export default PieChart;
