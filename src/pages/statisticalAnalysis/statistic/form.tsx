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
import { initialValues, performanceIndicatorOptions } from './view';

const { Row, Col } = Grid;
const { RangePicker } = DatePicker;
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
        initialValues={initialValues}
        labelAlign="right"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 19 }}
        size={'small'}
      >
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item label="绩效指标" field="performanceIndicator">
              <Select
                mode="multiple"
                placeholder="请选择绩效指标"
                allowClear
                options={performanceIndicatorOptions}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="周期" field="period">
              <RangePicker format="YYYY-MM-DD" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="图表类型" field="type">
              <Select placeholder="请选择图表类型" mode="multiple" allowClear />
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <div className={styles['right-button']}>
        <Button icon={<IconRefresh />} onClick={handleReset}>
          重置
        </Button>
        <Button type="primary" icon={<IconSearch />} onClick={handleSubmit}>
          确定
        </Button>
      </div>
    </div>
  );
}

export default SearchForm;
