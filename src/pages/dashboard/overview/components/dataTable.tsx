import React from 'react';
import { Table, TableColumnProps, Typography } from '@arco-design/web-react';

const columns: TableColumnProps[] = [
  {
    title: '序号',
    dataIndex: 'id'
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
    dataIndex: 'priority'
  },
  {
    title: '完工时间',
    dataIndex: 'finishTime'
  }
];
const data = [
  {
    id: '1',
    orderId: '20230203001',
    arriveTime: '2023-02-03 09:38:24',
    priority: '1',
    finishTime: '2023-03-1'
  },
  {
    id: '2',
    orderId: '20230203011',
    arriveTime: '2023-02-03 16:20:39',
    priority: '2',
    finishTime: '2023-04-15'
  }
];

const DataTable = () => {
  return (
    <div>
      <Typography.Title heading={6}>新订单</Typography.Title>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default DataTable;
