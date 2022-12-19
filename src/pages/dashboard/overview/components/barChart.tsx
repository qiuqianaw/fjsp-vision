import React from "react";
import {
  G2,
  Chart,
  Tooltip,
  Interval,
} from "bizcharts";

const data = [
  { name: '已完成', time: '2023-1-28', process: 10 },
  { name: '正在加工', time: '2023-1-28', process: 20 },
  { name: '待加工', time: '2023-1-28', process: 20 },
  { name: '已完成', time: '2023-2-24', process: 20 },
  { name: '正在加工', time: '2023-2-24', process: 15 },
  { name: '待加工', time: '2023-2-24', process: 15 },
];

const PieChart = () => {
  return (
    <Chart height={364} padding="auto" data={data} autoFit>
      <Interval
        adjust={[
         {
            type: 'dodge',
            marginRatio: 0,
          },
        ]}
        color="name"
        position="time*process"
      />
      <Tooltip shared />
    </Chart>
  )
};
export default PieChart;
