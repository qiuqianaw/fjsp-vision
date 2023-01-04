import React from 'react';
import { Table, Typography } from '@arco-design/web-react';
import { newOrderColumns } from '@/view/tableColumns';

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
      <Table
        border={{
          wrapper: true,
          cell: true
        }}
        columns={newOrderColumns}
        data={data}
      />
    </div>
  );
};

export default DataTable;
