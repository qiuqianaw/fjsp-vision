import React from 'react';
import { Button, Popover } from '@arco-design/web-react';
import getStr from '@/utils/getStr';

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

export const configColumns = (handleDel: any) => [
  {
    title: '序号',
    dataIndex: 'ID'
  },
  {
    title: 'γ经验折损率',
    dataIndex: 'game'
  },
  {
    title: '训练集数',
    dataIndex: 'L'
  },
  {
    title: 'e_greedy',
    dataIndex: 'e_greedy'
  },
  {
    title: 'e_greedy_decrement',
    dataIndex: 'e_greedy_decrement'
  },
  {
    title: '备注',
    dataIndex: 'remark'
  },
  {
    title: '操作',
    render: (_, record) => {
      return (
        <Popover
          title="确认删除？"
          content={
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <Button type="primary" onClick={() => handleDel(record.ID)}>
                确认
              </Button>
            </div>
          }
        >
          <Button type="primary">删除</Button>
        </Popover>
      );
    }
  }
];

export const processColumns = [
  {
    title: 'id',
    dataIndex: 'ID'
  },
  {
    title: '工序',
    dataIndex: 'sequence'
  },
  {
    title: '执行操作',
    dataIndex: 'action'
  },
  {
    title: '工件',
    dataIndex: 'job'
  },
  {
    title: '使用机器',
    dataIndex: 'machine'
  },
  {
    title: '操作',
    render: () => {
      return (
        <Button type="primary" disabled={true}>
          删除
        </Button>
      );
    }
  }
];

export const schedulingColumns = (setShow: any, setChartData: any) => [
  {
    title: 'id',
    dataIndex: 'ID'
  },
  {
    title: 'process开始id',
    dataIndex: 'startId'
  },
  {
    title: 'process结束id',
    dataIndex: 'endId'
  },
  {
    title: 'total_tardiness',
    dataIndex: 'totalTardiness'
  },
  {
    title: 'total_reward',
    dataIndex: 'totalReward'
  },
  {
    title: '操作',
    render: (_, record) => {
      return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            type="primary"
            onClick={() => {
              setShow(true);
              let { K, END, D } = record;
              K = getStr(K).split(',');
              END = getStr(END).split(',');
              D = getStr(D).split(',');
              const data = [];
              K.forEach((element, index) => {
                data.push({
                  month: element,
                  count: END[index]
                });
              });
              setChartData(data);
              console.log(data);
            }}
          >
            查看图表
          </Button>
          <Button type="primary" disabled={true}>
            删除
          </Button>
        </div>
      );
    }
  }
];

export const fjspColumns = (setShow: any, setChartData: any, handleDelFJSP: any) => [
  {
    title: 'id',
    dataIndex: 'ID'
  },
  {
    title: '操作',
    render: (_, record) => {
      return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            type="primary"
            onClick={() => {
              console.log(record);
              setShow(true);
              let { x, totalTard } = record;
              x = getStr(x).split(',');
              totalTard = getStr(totalTard).split(',');
              const data = [];
              x.forEach((element, index) => {
                data.push({
                  month: element,
                  count: totalTard[index]
                });
              });
              setChartData(data);
              console.log(data);
            }}
          >
            查看图表
          </Button>
          <Popover
            title="确认删除？"
            content={
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between'
                }}
              >
                <Button type="primary" onClick={() => handleDelFJSP(record.ID)}>
                  确认
                </Button>
              </div>
            }
          >
            <Button type="primary">删除</Button>
          </Popover>
        </div>
      );
    }
  }
];
