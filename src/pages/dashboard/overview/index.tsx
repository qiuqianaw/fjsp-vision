import React, { useEffect, useState } from 'react';
import { Card, Space, Grid, Typography } from '@arco-design/web-react';
import PieChart from './components/pieChart';
import BarChart from './components/barChart';

import DataTable from './components/dataTable';
import { Chart, Interval, Tooltip } from 'bizcharts';
import axios from 'axios';

const { Row, Col } = Grid;

function Overview() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9009/api/process/getAllProcess').then((res) => {
      const result = res.data.data;
      const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      result.forEach((e, index) => {
        if (e.machine === '0') arr[0] += 1;
        if (e.machine === '1') arr[1] += 1;
        if (e.machine === '2') arr[2] += 1;
        if (e.machine === '3') arr[3] += 1;
        if (e.machine === '4') arr[4] += 1;
        if (e.machine === '5') arr[5] += 1;
        if (e.machine === '6') arr[6] += 1;
        if (e.machine === '7') arr[7] += 1;
        if (e.machine === '8') arr[8] += 1;
        if (e.machine === '9') arr[9] += 1;
      });
      setData([
        { year: '0', sales: arr[0] },
        { year: '1', sales: arr[1] },
        { year: '2', sales: arr[2] },
        { year: '3', sales: arr[3] },
        { year: '4', sales: arr[4] },
        { year: '5', sales: arr[5] },
        { year: '6', sales: arr[6] },
        { year: '7', sales: arr[7] },
        { year: '8', sales: arr[8] },
        { year: '9', sales: arr[9] }
      ]);
      console.log(arr);
    });
  }, []);
  return (
    <Space size={16} direction="vertical" style={{ width: '100%' }}>
      {/* <Card> */}
      <Row gutter={16}>
        <Col span={12}>
          <Card>
            <Typography.Title heading={6}>机器被选择到的次数</Typography.Title>
            <Chart
              height={400}
              autoFit
              data={data}
              interactions={['active-region']}
              padding={[30, 30, 30, 50]}
            >
              <Interval position="year*sales" />
              <Tooltip shared />
            </Chart>
          </Card>
        </Col>
        <Col span={12}>
          <Card size={'small'}>
            <Typography.Title heading={6}>机器被选择到的概率</Typography.Title>

            <PieChart data={data} />
          </Card>
        </Col>
      </Row>
      {/* </Card> */}
      {/* <Card>
        <DataTable />
      </Card> */}
    </Space>
  );
}

export default Overview;
