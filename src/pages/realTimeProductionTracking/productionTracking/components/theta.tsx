import React from 'react';
import { Chart, Interval, Tooltip, Axis, Coordinate } from 'bizcharts';

const Labelline = () => {
  const data = [
    { item: '订单动态抵达', count: 10 },
    { item: '紧急插单', count: 10 },
    { item: '订单取消', count: 14 },
    { item: '订单变更', count: 5 }
  ];

  return (
    <Chart
      height={400}
      data={data}
      interactions={['element-active']}
      autoFit
    >
      <Coordinate type="theta" radius={0.75} />
      <Tooltip showTitle={false} />
      <Axis visible={false} />
      <Interval
        position="count"
        adjust="stack"
        color="item"
        style={{
          lineWidth: 1,
          stroke: '#fff'
        }}
        label={[
          'item',
          () => {
            return {
              offset: 30,
              content: (data) => {
                return `${data.item} ${data.count}`;
              }
            };
          }
        ]}
      />
    </Chart>
  );
};

export default Labelline;
