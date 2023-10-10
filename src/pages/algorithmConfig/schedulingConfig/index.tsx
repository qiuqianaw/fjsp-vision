import React, { useEffect, useState } from 'react';
import {
  Table,
  Card,
  Typography,
  Button,
  Modal,
  Form,
  Input,
  Message
} from '@arco-design/web-react';
import { configColumns } from '@/view/tableColumns';
import axios from 'axios';

const data = [
  {
    id: 1,
    game: 0.95,
    L: 40,
    e_greedy: 0.6,
    e_greedy_decrement: 0.0001
  },
  {
    id: 2,
    game: 0.9,
    L: 80,
    e_greedy: 0.65,
    e_greedy_decrement: 0.0001
  },
  {
    id: 3,
    game: 0.99,
    L: 100,
    e_greedy: 0.65,
    e_greedy_decrement: 0.0001
  }
];
const FormItem = Form.Item;

function newOrder() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://localhost:9009/api/cfg/getAllCfg').then((res) => {
      console.log(res);
      setData(res.data.data);
    });
  };

  const handleAdd = () => {
    const param = form.getFieldsValue();
    axios.post('http://localhost:9009/api/cfg/addCfg', param).then((res) => {
      console.log(res);
      if (res.data.code === 200) {
        Message.success(res.data.msg);
        setShow(false);
        fetchData();
      }
    });
  };

  const handleDel = (id) => {
    axios.delete(`http://localhost:9009/api/cfg/deleteCfg/${id}`).then((res) => {
      console.log(res);
      if (res.data.code === 200) {
        Message.success(res.data.msg);
        setShow(false);
        fetchData();
      }
    });
  }

  return (
    <div>
      <Card>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Typography.Title heading={6}>算法配置</Typography.Title>
          <Button type="primary" onClick={() => setShow(true)}>
            新增
          </Button>
        </div>
        <Table
          border={{
            wrapper: true,
            cell: true
          }}
          columns={configColumns(handleDel)}
          data={data}
        />
      </Card>
      <Modal
        title="新增调度配置"
        visible={show}
        onOk={handleAdd}
        onCancel={() => setShow(false)}
        autoFocus={false}
        focusLock={true}
      >
        <Form autoComplete="off" layout="vertical" form={form}>
          <FormItem label="γ经验折损率" field="game">
            <Input />
          </FormItem>
          <FormItem label="训练集数" field="L">
            <Input />
          </FormItem>
          <FormItem label="e_greedy" field="e_greedy">
            <Input />
          </FormItem>
          <FormItem label="e_greedy_decrement" field="e_greedy_decrement">
            <Input />
          </FormItem>
          <FormItem label="备注" field="remark">
            <Input />
          </FormItem>
        </Form>
      </Modal>
    </div>
  );
}

export default newOrder;
