import React from 'react';
import {
  Table,
  Card,
  Typography,
  Space,
  Collapse
} from '@arco-design/web-react';
import SearchForm from './form';
import { data, rescheduleColumns } from './view';
const CollapseItem = Collapse.Item;

function Reschedule() {
  return (
    <Space size={16} direction="vertical" style={{ width: '100%' }}>
      <Card>
        {/* <Collapse expandIconPosition={'right'}>
          <CollapseItem header="过滤器" name="3">
            <SearchForm />
          </CollapseItem>
        </Collapse> */}
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
