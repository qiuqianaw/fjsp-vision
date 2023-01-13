import React, { useRef } from 'react';
import dayjs from 'dayjs';
import {
  Form,
  Input,
  Select,
  DatePicker,
  Button,
  Grid,
  Message
} from '@arco-design/web-react';
import { FormInstance } from '@arco-design/web-react/es/Form';

import { IconRefresh, IconSearch } from '@arco-design/web-react/icon';
import styles from './style/index.module.less';
import { initialValues } from './view';

const { Row, Col } = Grid;

function SearchForm() {
  const formRef = useRef<FormInstance>();

  const handleSubmit = () => {
    formRef.current.validate().then((values) => {
      console.log({ values });
    });
  };

  const handleReset = () => {
    formRef && formRef.current && formRef.current.resetFields();
  };

  return (
    <div className={styles['search-form-wrapper']}>
      <Form
        ref={formRef}
        className={styles['search-form']}
        labelAlign="right"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 19 }}
        layout={'vertical'}
        size={'small'}
        initialValues={initialValues}
      >
        <Row gutter={24}>
          <Col span={24}>
            <Form.Item label="动态事件类别" field="type">
              <Select
                placeholder="请选择动态事件类别"
                allowClear
                options={['订单动态抵达']}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="订单编号" field="orderId">
              <Input placeholder="请输入订单编号" allowClear />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="工件名称" field="name">
              <Input placeholder="请输入工件名称" allowClear />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="到达日期" field="arriveDate">
              <DatePicker
                placeholder="请选择到达日期"
                allowClear
                style={{ width: '100%' }}
                disabledDate={(date) => dayjs(date).isAfter(dayjs())}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="完工日期" field="finishDate">
              <DatePicker
                placeholder="请选择完工日期"
                allowClear
                style={{ width: '100%' }}
                disabledDate={(date) => dayjs(date).isAfter(dayjs())}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="工件数" field="pieces">
              <Input placeholder="请输入工件数" allowClear />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="工序数" field="process">
              <Input placeholder="请输入工序数" allowClear />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="工件的工序数">
              <Button type="outline">数据文件</Button>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="工序加工工时">
              <Button type="outline">数据文件</Button>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="惩罚系数">
              <Button type="outline">数据文件</Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <div className={styles['right-button']}>
        <Button icon={<IconSearch />} onClick={handleSubmit}>
          取消
        </Button>
        <Button type="primary" icon={<IconRefresh />} onClick={handleReset}>
          重调度
        </Button>
      </div>
    </div>
  );
}

export default SearchForm;
