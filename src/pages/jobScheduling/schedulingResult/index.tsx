import React, { useState } from 'react';
import {
  Typography,
  Card,
  Button,
  Image,
  Space,
  Grid,
  Link,
  Modal
} from '@arco-design/web-react';
import styles from './style/index.module.less';
const { Row, Col } = Grid;

const CardRender = (props) => {
  const { item, setShow } = props;
  return (
    <Col span={8}>
      <Card
        title={`历史结果${item}`}
        extra={<Link onClick={() => setShow(true)}>查看</Link>}
        bordered={false}
        style={{
          width: '100%',
          marginBottom: '20px'
        }}
      >
        {item}
      </Card>
    </Col>
  );
};

function SchedulingResult() {
  const [show, setShow] = useState(false);
  return (
    // <div>
    //   <Card style={{ marginBottom: '40px' }}>
    //     <div className={styles.topbar}>
    //       <Typography.Title heading={6}>甘特图</Typography.Title>
    //       <Button type="outline" disabled={true}>生成生产计划表</Button>
    //     </div>
    //     <Image
    //       src="https://picbedd.oss-cn-beijing.aliyuncs.com/%E5%B7%A5%E5%BA%8F%E4%BD%9C%E4%B8%9A%E6%8E%92%E4%BA%A7%E9%A1%B5%E9%9D%A2%E6%8F%92%E5%9B%BE.jpg"
    //       width={'100%'}
    //       alt="调度结果"
    //     />
    //   </Card>
    //   <div className={styles.actions}>
    //     <Space>
    //       <Button size="large" type="primary" disabled={true}>
    //         工单派发
    //       </Button>
    //     </Space>
    //   </div>
    // </div>
    <div
      style={{
        boxSizing: 'border-box',
        width: '100%',
        padding: 40,
        backgroundColor: 'var(--color-fill-2)'
      }}
    >
      <Row gutter={20} style={{ marginBottom: 20 }}>
        {[1, 2, 3, 4, 5].map((item) => (
          <CardRender key={item} item={item} setShow={setShow} />
        ))}
      </Row>
      <Modal
        title={'历史结果'}
        visible={show}
        onOk={() => setShow(false)}
        onCancel={() => setShow(false)}
        autoFocus={false}
        focusLock={true}
      >
        <Image
          src="https://picbedd.oss-cn-beijing.aliyuncs.com/%E5%B7%A5%E5%BA%8F%E4%BD%9C%E4%B8%9A%E6%8E%92%E4%BA%A7%E9%A1%B5%E9%9D%A2%E6%8F%92%E5%9B%BE.jpg"
          width={'100%'}
          alt="调度结果"
        />
      </Modal>
      <div className={styles.actions}>
        <Space>
          <Button size="large" type="primary" disabled={true}>
            工单派发
          </Button>
        </Space>
      </div>
    </div>
  );
}

export default SchedulingResult;
