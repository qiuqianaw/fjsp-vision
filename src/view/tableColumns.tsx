import React from 'react';
import { Button } from '@arco-design/web-react';

export const newOrderColumns = [
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
    title: '完工时间',
    dataIndex: 'finishTime'
  },
  {
    title: '操作',
    render: () => {
      return <Button type="primary">接收</Button>;
    }
  }
];

export const acceptedOrderColumns = [
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
