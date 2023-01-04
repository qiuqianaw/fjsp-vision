import React from 'react';
import {
  Table,
  Card,
  Typography
} from '@arco-design/web-react';
import { newOrderColumns } from '@/view/tableColumns';

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
        columns={newOrderColumns}
        data={data}
      />
    </Card>
  );
}

export default newOrder;
