import React, { useEffect } from 'react';
import {
  Typography,
  Card,
  Notification,
  Button,
  Descriptions,
  Space,
  Tabs,
  Input,
  Select
} from '@arco-design/web-react';
import Labelline from './components/theta';

const TabPane = Tabs.TabPane;
const type = 'rounded';

function ProductionTracking() {
  useEffect(() => {
    const data = [
      {
        label: '订单编号',
        value: '20221220002'
      },
      {
        label: '到达日期',
        value: '2022-12-20'
      },
      {
        label: '完工日期',
        value: '2023-03-30'
      },
      {
        label: '工件数',
        value: '20'
      },
      {
        label: '工件名称：',
        value: '行星齿轮'
      }
    ];
    Notification.warning({
      id: 'hello, world',
      title: '紧急提醒： 订单新到达',
      content: (
        <div>
          <Descriptions
            column={1}
            data={data}
            style={{ margin: '20px 0' }}
            labelStyle={{ paddingRight: 10 }}
          />
        </div>
      ),
      position: 'bottomRight',
      duration: 0,
      btn: (
        <span>
          <Button
            type="secondary"
            size="small"
            onClick={() => Notification.remove('hello, world')}
            style={{ margin: '0 12px' }}
          >
            忽略
          </Button>
          <Button
            type="primary"
            size="small"
            onClick={() => Notification.remove('hello, world')}
          >
            处理
          </Button>
        </span>
      )
    });
  }, []);

  return (
    <Space size={16} direction="vertical" style={{ width: '100%' }}>
      <Card>
        <Typography.Title heading={6}>订单异常情况</Typography.Title>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '20px 0'
          }}
        >
          <Tabs type={type} defaultActiveTab="3">
            <TabPane key="1" title="生产质量" />
            <TabPane key="2" title="生产进度" />
            <TabPane key="3" title="订单情况" />
            <TabPane key="4" title="设备运行" />
            <TabPane key="4" title="人员情况" />
          </Tabs>
          <div>
            <Input.Group compact>
              <Input
                addBefore="刷新: "
                style={{ width: '150px' }}
                placeholder="请输入刷新时间"
                defaultValue="60"
              />
              <Select defaultValue="s" showSearch style={{ width: '60px' }}>
                <Select.Option value="s">秒</Select.Option>
                <Select.Option value="m">分</Select.Option>
                <Select.Option value="h">时</Select.Option>
              </Select>
            </Input.Group>
          </div>
        </div>
        <Labelline />
      </Card>
    </Space>
  );
}

export default ProductionTracking;
