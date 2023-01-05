import React from 'react';
import { Typography, Card, Button, Image, Space } from '@arco-design/web-react';
import styles from './style/index.module.less';

function SchedulingResult() {
  return (
    <div>
      <Card style={{ marginBottom: '40px' }}>
        <div className={styles.topbar}>
          <Typography.Title heading={6}>甘特图</Typography.Title>
          <Button type="outline">生成生产计划表</Button>
        </div>
        <Image
          src="https://picbedd.oss-cn-beijing.aliyuncs.com/%E5%B7%A5%E5%BA%8F%E4%BD%9C%E4%B8%9A%E6%8E%92%E4%BA%A7%E9%A1%B5%E9%9D%A2%E6%8F%92%E5%9B%BE.jpg"
          width={'100%'}
          alt="调度结果"
        />
      </Card>
      <div className={styles.actions}>
        <Space>
          <Button size="large" type="primary">
            工单派发
          </Button>
        </Space>
      </div>
    </div>
  );
}

export default SchedulingResult;
