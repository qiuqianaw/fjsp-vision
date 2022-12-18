import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Card, Skeleton, Tag, Typography } from '@arco-design/web-react';
import useLocale from '@/utils/useLocale';
import locale from './locale';
import styles from './style/announcement.module.less';

function Announcement() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const t = useLocale(locale);

  const fetchData = () => {
    setLoading(true);
    axios
      .get('/api/workplace/announcement')
      .then(() => {
        const res = {
          data: [
            {
              type: 'activity',
              key: '1',
              content: '内容最新优惠活动',
            },
            {
              type: 'info',
              key: '2',
              content: '新增内容尚未通过审核，详情请点击查看。',
            },
            {
              type: 'notice',
              key: '3',
              content: '当前产品试用期即将结束，如需续费请点击查看。',
            },
            {
              type: 'notice',
              key: '4',
              content: '1 月新系统升级计划通知',
            },
            {
              type: 'info',
              key: '5',
              content: '新增内容已经通过审核，详情请点击查看。',
            },
          ],
        };
        setData(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  function getTagColor(type) {
    switch (type) {
      case 'activity':
        return 'orangered';
      case 'info':
        return 'cyan';
      case 'notice':
        return 'arcoblue';
      default:
        return 'arcoblue';
    }
  }

  return (
    <Card>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography.Title heading={6}>
          {t['workplace.announcement']}
        </Typography.Title>
        <Link>{t['workplace.seeMore']}</Link>
      </div>
      <Skeleton loading={loading} text={{ rows: 5, width: '100%' }} animation>
        <div>
          {data.map((d) => (
            <div key={d.key} className={styles.item}>
              <Tag color={getTagColor(d.type)} size="small">
                {t[`workplace.${d.type}`]}
              </Tag>
              <span className={styles.link}>{d.content}</span>
            </div>
          ))}
        </div>
      </Skeleton>
    </Card>
  );
}

export default Announcement;
