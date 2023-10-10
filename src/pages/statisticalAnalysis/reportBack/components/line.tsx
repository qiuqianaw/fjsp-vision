import React from 'react';
import { Chart, Geom, Axis } from 'bizcharts';


const Curved = ({data}) => {
  const cols = {
    month: {
      range: [0, 1]
    },
    count: {
      min: 0,
      max: 100,
    }
  };
  return (
    <Chart
      height={400}
      data={data}
      // scale={cols}
      autoFit
      onAxisLabelClick={console.log}
    >
      {/* <Axis name="month" /> */}
      {/* <Axis name="count" /> */}
      <Geom
        type="point"
        position="month*count"
        size={4}
        shape={'circle'}
        color={'index'}
        style={{
          stroke: '#fff',
          lineWidth: 1
        }}
      />
      <Geom
        type="line"
        position="month*count"
        size={2}
        color={'index'}
        shape={'line'}
      />
    </Chart>
  );
};

export default Curved;
