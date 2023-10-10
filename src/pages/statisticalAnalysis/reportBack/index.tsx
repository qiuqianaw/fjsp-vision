/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import {
  Typography,
  Card,
  Tabs,
  Table,
  Modal,
  Message
} from '@arco-design/web-react';
import {
  fjspColumns,
  processColumns,
  schedulingColumns
} from '@/view/tableColumns';
import axios from 'axios';
import Curved from './components/line';

const TabPane = Tabs.TabPane;
const style = {
  textAlign: 'center',
  marginTop: 20
};
export default function reportBack() {
  const [data, setData] = useState([]);
  const [schedulingData, setSchedulingData] = useState([]);
  const [fjspData, setFjspData] = useState([]);
  const [show, setShow] = useState<boolean>(false);
  const [pagination] = useState({
    pageSize: 12
  });

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    loadProcess();
    loadScheduling();
    loadFjsp();
  };

  const loadProcess = () => {
    axios.get('http://localhost:9009/api/process/getAllProcess').then((res) => {
      setData(res.data.data);
    });
  };
  const loadScheduling = () => {
    axios.get('http://localhost:9009/api/scheduling/getAll').then((res) => {
      setSchedulingData(res.data.data);
    });
  };
  const loadFjsp = () => {
    axios.get('http://localhost:9009/api/fjsp/getAllFjsp').then((res) => {
      setFjspData(res.data.data);
    });
  };

  const handleDelFJSP = () => {
    axios
      .delete(`http://localhost:9009/api/fjsp/deleteFjsp/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.code === 200) {
          Message.success(res.data.msg);
          setShow(false);
          fetchData();
        }
      });
  };

  return (
    <Card style={{ height: '80vh' }}>
      <Typography.Title heading={6}>汇报</Typography.Title>
      <Tabs defaultActiveTab="1">
        <TabPane key="1" title="process">
          <Table
            border={{
              wrapper: true,
              cell: true
            }}
            size="small"
            pagination={pagination}
            columns={processColumns}
            data={data}
          />
        </TabPane>
        <TabPane key="2" title="scheduling">
          <Table
            border={{
              wrapper: true,
              cell: true
            }}
            size="small"
            pagination={pagination}
            columns={schedulingColumns(setShow, setChartData)}
            data={schedulingData}
          />
        </TabPane>
        <TabPane key="3" title="fjsp">
          <Table
            border={{
              wrapper: true,
              cell: true
            }}
            size="small"
            pagination={pagination}
            columns={fjspColumns(setShow, setChartData, handleDelFJSP)}
            data={fjspData}
          />
        </TabPane>
      </Tabs>
      <Modal
        title="查看图表"
        visible={show}
        onOk={() => {
          setShow(false);
          setChartData([]);
        }}
        onCancel={() => {
          setShow(false);
          setChartData([]);
        }}
        autoFocus={false}
        focusLock={true}
      >
        <Curved data={chartData}></Curved>
      </Modal>
    </Card>
  );
}
