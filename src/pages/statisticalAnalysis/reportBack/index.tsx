import React from 'react';
import { Typography, Card } from '@arco-design/web-react';

export default function reportBack() {
  return (
    <Card style={{ height: '80vh' }}>
      <Typography.Title heading={6}>汇报</Typography.Title>
      <Typography.Text>You can add content here :)</Typography.Text>
    </Card>
  );
}
