import React from 'react';
import { Table, Card, Typography, Space } from '@arco-design/web-react';
import SearchForm from './form';
import { acceptedOrderColumns } from '@/view/tableColumns';

const data = [
  {
    id: '1',
    orderId: '20221004001',
    arriveTime: '2022-10-04 08:08:24',
    priority: '1',
    finishTime: '2022-11-01',
    status: '已完成'
  },
  {
    id: '2',
    orderId: '20230124007',
    arriveTime: '2023-01-20 11:20:30',
    priority: '1',
    finishTime: '2023-03-15',
    status: '正在加工'
  },
  {
    id: '3',
    orderId: '20230121003',
    arriveTime: '2023-02-10 09:20:21',
    priority: '3',
    finishTime: '2023-04-20',
    status: '待加工'
  },
  {
    id: '4',
    orderId: '20230207011',
    arriveTime: '2023-03-07 11:30:19',
    priority: '2',
    finishTime: '2023-05-8',
    status: '待调度'
  }
];

function acceptedOrder() {
  return (
    <Space size={16} direction="vertical" style={{ width: '100%' }}>
      <Card>
        <SearchForm />
        <Typography.Title heading={6}>已接收订单</Typography.Title>
        <Table
          border={{
            wrapper: true,
            cell: true
          }}
          columns={acceptedOrderColumns}
          data={data}
        />
      </Card>
    </Space>
  );
}

export default acceptedOrder;
