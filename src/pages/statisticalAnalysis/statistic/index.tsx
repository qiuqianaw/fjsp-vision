import React from 'react';
import { Card, Space, Grid } from '@arco-design/web-react';
import SearchForm from './form';
import Curved from './components/line';

const { Row, Col } = Grid;

// 数据源
const curvedData = [
  [
    {
      month: '一月',
      index: '订单完成率（%）',
      count: 80
    },
    {
      month: '二月',
      index: '订单完成率（%）',
      count: 83
    },
    {
      month: '三月',
      index: '订单完成率（%）',
      count: 98
    }
  ],
  [
    {
      month: '一月',
      index: '机床利用率（%）',
      count: 80
    },
    {
      month: '二月',
      index: '机床利用率（%）',
      count: 81
    },
    {
      month: '三月',
      index: '机床利用率（%）',
      count: 97
    }
  ],
  [
    {
      month: '一月',
      index: '合格率（%）',
      count: 90
    },
    {
      month: '二月',
      index: '合格率（%）',
      count: 93
    },
    {
      month: '三月',
      index: '合格率（%）',
      count: 99
    }
  ]
];

function statistic() {
  return (
    <Space size={16} direction="vertical" style={{ width: '100%' }}>
      <Card>
        <SearchForm />
      </Card>
      <Row gutter={16}>
        {curvedData.map((item) => {
          return (
            <Col span={8} key={Math.random()}>
              <Card>
                <Curved data={item}></Curved>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Space>
  );
}

export default statistic;
