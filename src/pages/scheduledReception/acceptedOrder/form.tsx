import React from 'react';
import dayjs from 'dayjs';
import {
  Form,
  Input,
  Select,
  DatePicker,
  Button,
  Grid
} from '@arco-design/web-react';
import { IconRefresh, IconSearch } from '@arco-design/web-react/icon';
import styles from './style/index.module.less';

const { Row, Col } = Grid;
const { useForm } = Form;

function SearchForm() {
  const [form] = useForm();

  const handleSubmit = () => {
    const values = form.getFieldsValue();
    console.log('values', values);
  };

  const handleReset = () => {
    form.resetFields();
  };

  return (
    <div className={styles['search-form-wrapper']}>
      <Form
        form={form}
        className={styles['search-form']}
        labelAlign="right"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 19 }}
      >
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item label="订单编号" field="orderId">
              <Input placeholder="请输入订单编号" allowClear />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="优先级" field="priority">
              <Select placeholder="请选择优先级" mode="multiple" allowClear />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="状态" field="status">
              <Select placeholder="请选择状态" mode="multiple" allowClear />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="时间" field="createdTime">
              <DatePicker.RangePicker
                allowClear
                style={{ width: '100%' }}
                disabledDate={(date) => dayjs(date).isAfter(dayjs())}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <div className={styles['right-button']}>
        <Button type="primary" icon={<IconSearch />} onClick={handleSubmit}>
          搜索
        </Button>
        <Button icon={<IconRefresh />} onClick={handleReset}>
          重置
        </Button>
      </div>
    </div>
  );
}

export default SearchForm;
