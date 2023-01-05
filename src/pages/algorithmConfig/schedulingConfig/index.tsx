import React from 'react';
import {
  Button,
  Card,
  Form,
  Input,
  Select,
  Space,
  Typography
  // Checkbox
} from '@arco-design/web-react';
import styles from './style/index.module.less';
const options = [
  '完工时间',
  '机器总负荷',
  '最大负荷机器',
  '提前/延期惩罚',
  '总延期时间',
  '平均流经时间',
  '机器利用率',
  '生产成本'
];
function SchedulingConfig() {
  return (
    <div className={styles.container}>
      <Card style={{ marginBottom: '40px' }}>
        <Typography.Title heading={6}>调度配置</Typography.Title>
        <div className={styles.wrapper}>
          <Form className={styles.form}>
            <Form.Item label={'工件数'} required initialValue="36">
              <div>
                <Input placeholder={'请输入工件数'} />
                {/* <CheckboxGroup
                  direction="vertical"
                  options={['Option A', 'Option B', 'Option C']}
                /> */}
              </div>
            </Form.Item>
            <Form.Item label={'工序数'} required>
              <Input placeholder={'请输入工序数'} />
            </Form.Item>
            <Form.Item label={'工件的工序数'} required>
              <Button type="primary">生成文件</Button>
            </Form.Item>
            <Form.Item label={'机床数'} required>
              <div style={{ display: 'flex' }}>
                <Input
                  style={{ marginRight: '20px' }}
                  placeholder={'请输入机床数'}
                />
                <Button type="primary">选择机床</Button>
              </div>
            </Form.Item>
            <Form.Item label={'工序加工工时'} required>
              <Button type="primary">生成文件</Button>
            </Form.Item>
            <Form.Item label={'单位时间到达平均数'} required initialValue="100">
              <Select>
                <Select.Option value="100">100</Select.Option>
                <Select.Option value="200">200</Select.Option>
                <Select.Option value="300">300</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label={'惩罚系数'} required>
              <Button type="primary">生成文件</Button>
            </Form.Item>
            <Form.Item label={'生产目标'} required>
              <Select
                mode="multiple"
                maxTagCount={{
                  count: 5,
                  render: (invisibleNumber) => `+${invisibleNumber} more`
                }}
                placeholder="请选择生产目标"
                allowClear
              >
                {options.map((option) => (
                  <Select.Option key={option} value={option}>
                    {option}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label={'目标相对重要度'} required>
              <Button type="primary">生成文件</Button>
            </Form.Item>
            <Form.Item label={'选择算法'} required initialValue="100">
              <Select>
                <Select.Option value="100">HRL</Select.Option>
                <Select.Option value="200">200</Select.Option>
                <Select.Option value="300">300</Select.Option>
              </Select>
            </Form.Item>
          </Form>
        </div>
      </Card>
      <div className={styles.actions}>
        <Space>
          <Button size="large">重置</Button>
          <Button size="large">保存</Button>
          <Button type="primary" size="large">
            调度
          </Button>
        </Space>
      </div>
    </div>
  );
}

export default SchedulingConfig;
