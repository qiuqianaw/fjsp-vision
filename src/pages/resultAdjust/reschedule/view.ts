export const data = [
  {
    id: '1',
    rescheduleId: '2022-RS01-015',
    type: '1',
    description: '订单动态抵达',
    date: '2022-12-20',
    schedulerId: 'SC-01-001',
    status: '进行中'
  },
  {
    id: '2',
    rescheduleId: '2022-RS02-020',
    type: '2',
    description: '紧急插单',
    date: '2022-10-11',
    schedulerId: 'SC-01-003',
    status: '正在加工'
  },
  {
    id: '3',
    rescheduleId: '2022-RS04-011',
    type: '4',
    description: '订单取消',
    date: '2022-09-20',
    schedulerId: 'SC-01-008',
    status: '已关闭'
  },
  {
    id: '4',
    rescheduleId: '2022-RS05-001',
    type: '5',
    description: '机器故障',
    date: '2022-08-13',
    schedulerId: 'SC-01-001',
    status: '已关闭'
  }
];

export const rescheduleColumns = [
  {
    title: '序号',
    dataIndex: 'id',
    width: 80
  },
  {
    title: '重调度ID',
    dataIndex: 'rescheduleId'
  },
  {
    title: '事件类型',
    dataIndex: 'type',
    width: 100
  },
  {
    title: '事件描述',
    dataIndex: 'description',
    width: 200
  },
  {
    title: '重调度日期',
    dataIndex: 'date'
  },
  {
    title: '调度预案ID',
    dataIndex: 'schedulerId'
  },
  {
    title: '状态',
    dataIndex: 'status'
  }
];

export const initialValues = {
  type: ['订单动态抵达'],
  orderId: '20221220002',
  name: '行星齿轮',
  arriveDate: '2022-12-20',
  finishDate: '2023-03-30',
  pieces: '20',
  process: '36'
};
