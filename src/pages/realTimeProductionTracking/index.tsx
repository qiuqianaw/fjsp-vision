import React from 'react';
import { Typography, Card, Space } from '@arco-design/web-react';

function ProductionTracking() {
  return (
    <Space size={16} direction="vertical" style={{ width: '100%' }}>
      <Card style={{ height: '80vh' }}>
        <Typography.Title heading={6}>实时生产跟踪</Typography.Title>
        <Typography.Text>You can add content here :)</Typography.Text>
      </Card>
      <Card style={{ height: '80vh' }}>
        <Typography.Title heading={6}>实时生产跟踪</Typography.Title>
        <Typography.Text>You can add content here :)</Typography.Text>
      </Card>
    </Space>
  );
}

export default ProductionTracking;
