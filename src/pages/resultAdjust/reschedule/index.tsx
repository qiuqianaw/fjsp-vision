import React from 'react';
import { Table, Card, Typography, Space } from '@arco-design/web-react';
import SearchForm from './form';
import { data, rescheduleColumns } from './view';

function Reschedule() {
  return (
    <Space size={16} direction="vertical" style={{ width: '100%' }}>
      <Card>
        <SearchForm />
        <Typography.Title heading={6}>重调度记录表</Typography.Title>
        <Table
          border={{
            wrapper: true,
            cell: true
          }}
          columns={rescheduleColumns}
          data={data}
        />
      </Card>
    </Space>
  );
}

export default Reschedule;
