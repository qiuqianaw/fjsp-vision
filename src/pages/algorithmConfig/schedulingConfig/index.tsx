import React, { useEffect, useRef } from 'react';
import {
  Button,
  Card,
  Form,
  Input,
  Message,
  Select,
  Space,
  Typography
} from '@arco-design/web-react';
import { FormInstance } from '@arco-design/web-react/es/Form';

import styles from './style/index.module.less';
import { initialValues, options } from './view';

const SchedulingConfig = () => {
  const formRef = useRef<FormInstance>();

  const handleReset = () => {
    formRef && formRef.current && formRef.current.resetFields();
  };
  const handleSubmit = () => {
    formRef.current.validate().then((values) => {
      Message.success(values);
    });
  };
  const handleSave = () => {
    formRef.current.validate().then((values) => {
      Message.success(values);
    });
  };

  return (
    <div className={styles.container}>
      <Card style={{ marginBottom: '40px' }}>
        <Typography.Title heading={6}>调度配置</Typography.Title>
        <div className={styles.wrapper}>
          <Form
            className={styles.form}
            ref={formRef}
            layout="horizontal"
            initialValues={initialValues}
          >
            <Form.Item field="workPiece" label={'工件数'} required>
              <Select
                mode="multiple"
                maxTagCount={{
                  count: 5,
                  render: (invisibleNumber) => `+${invisibleNumber} more`
                }}
                placeholder="请选择工件类型以计算工件数"
                allowClear
                options={[36]}
              />
            </Form.Item>
            <Form.Item field="processes" label={'工序数'} required>
              <Input placeholder={'请输入工序数'} />
            </Form.Item>
            <Form.Item label={'工件的工序数'} required>
              <Button type="outline">生成文件</Button>
            </Form.Item>
            <Form.Item field="machines" label={'机床数'} required>
              <Select
                mode="multiple"
                maxTagCount={{
                  count: 5,
                  render: (invisibleNumber) => `+${invisibleNumber} more`
                }}
                placeholder="请选择机床以计算工件数"
                allowClear
                options={[10]}
              />
            </Form.Item>
            <Form.Item label={'工序加工工时'} required>
              <Button type="outline">生成文件</Button>
            </Form.Item>
            <Form.Item field="arrivalAvg" label={'单位时间到达平均数'} required>
              <Select placeholder="请选择单位时间到达平均数">
                <Select.Option value="100">100</Select.Option>
                <Select.Option value="200">200</Select.Option>
                <Select.Option value="300">300</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label={'惩罚系数'} required>
              <Button type="outline">生成文件</Button>
            </Form.Item>
            <Form.Item field="productionTarget" label={'生产目标'} required>
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
              <Button type="outline">生成文件</Button>
            </Form.Item>
            <Form.Item field="algorithm" label={'选择算法'} required>
              <Select placeholder="请选择算法">
                <Select.Option value="HRL">HRL</Select.Option>
                <Select.Option value="200">200</Select.Option>
                <Select.Option value="300">300</Select.Option>
              </Select>
            </Form.Item>
          </Form>
        </div>
      </Card>
      <div className={styles.actions}>
        <Space>
          <Button size="large" onClick={handleReset}>
            重置
          </Button>
          <Button size="large" onClick={handleSave}>
            保存
          </Button>
          <Button type="primary" size="large" onClick={handleSubmit}>
            调度
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default SchedulingConfig;
