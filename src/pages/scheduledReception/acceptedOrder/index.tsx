import React from 'react';
import {
  Table,
  TableColumnProps,
  Card,
  Typography,
  Space
} from '@arco-design/web-react';
import SearchForm from './form';

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
  },
  {
    title: '状态',
    dataIndex: 'status'
  }
];
const data = [
  {
    id: '1',
    orderId: '20230204001',
    arriveTime: '2023-02-03 09:38:24',
    priority: '1',
    finishTime: '2023-03-1',
    status: '已完成'
  },
  {
    id: '2',
    orderId: '20230124007',
    arriveTime: '2023-02-03 16:20:39',
    priority: '1',
    finishTime: '2023-04-15',
    status: '正在加工'
  },
  {
    id: '3',
    orderId: '20230204003',
    arriveTime: '2023-02-03 16:20:39',
    priority: '3',
    finishTime: '2023-04-15',
    status: '待加工'
  },
  {
    id: '4',
    orderId: '20230207011',
    arriveTime: '2023-02-03 16:20:39',
    priority: '2',
    finishTime: '2023-04-15',
    status: '待调度'
  }
];

function acceptedOrder() {
  return (
    <Space size={16} direction="vertical" style={{ width: '100%' }}>
      {/* <Card>
        <SearchForm />
      </Card> */}
      <Card>
        <SearchForm />
        <Typography.Title heading={6}>已接收订单</Typography.Title>
        <Table
          border={{
            wrapper: true,
            cell: true
          }}
          columns={columns}
          data={data}
        />
      </Card>
    </Space>
  );
}

export default acceptedOrder;
