import React from 'react';
import {
  Table,
  TableColumnProps,
  Card,
  Typography
} from '@arco-design/web-react';

const columns: TableColumnProps[] = [
  {
    title: '序号',
    dataIndex: 'id',
    width: 80
  },
  {
    title: '订单编号',
    dataIndex: 'orderId'
  },
  {
    title: '到达时间',
    dataIndex: 'arriveTime'
  },
  {
    title: '优先级',
    dataIndex: 'priority',
    width: 80

  },
  {
    title: '完工日期',
    dataIndex: 'finishTime'
  }
];
const data = [
  {
    id: '1',
    orderId: '20230204001',
    arriveTime: '2023-02-03 09:38:24',
    priority: '1',
    finishTime: '2023-03-1'
  },
  {
    id: '2',
    orderId: '20230204002',
    arriveTime: '2023-02-03 16:20:39',
    priority: '2',
    finishTime: '2023-04-15'
  },
  {
    id: '3',
    orderId: '20230204003',
    arriveTime: '2023-02-03 16:20:39',
    priority: '2',
    finishTime: '2023-04-15'
  },
  {
    id: '4',
    orderId: '20230204005',
    arriveTime: '2023-02-03 16:20:39',
    priority: '2',
    finishTime: '2023-04-15'
  },
  {
    id: '5',
    orderId: '20230205007',
    arriveTime: '2023-02-05 16:20:39',
    priority: '2',
    finishTime: '2023-05-8'
  }
];
function newOrder() {
  return (
    <Card>
      <Typography.Title heading={6}>新订单</Typography.Title>
      <Table
        border={{
          wrapper: true,
          cell: true
        }}
        columns={columns}
        data={data}
      />
    </Card>
  );
}

export default newOrder;
