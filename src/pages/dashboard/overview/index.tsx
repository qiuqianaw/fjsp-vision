import React from 'react';
import { Card, Space, Grid } from '@arco-design/web-react';
import PieChart from './components/pieChart';
import BarChart from './components/barChart';

import DataTable from './components/dataTable';

const { Row, Col } = Grid;

function Overview() {
  return (
    <Space size={16} direction="vertical" style={{ width: '100%' }}>
      {/* <Card> */}
      <Row gutter={16}>
        <Col span={12}>
          <Card>
            <BarChart />
          </Card>
        </Col>
        <Col span={12}>
          <Card size={'small'}>
            <PieChart />
          </Card>
        </Col>
      </Row>
      {/* </Card> */}
      <Card>
        <DataTable />
      </Card>
    </Space>
  );
}

export default Overview;
