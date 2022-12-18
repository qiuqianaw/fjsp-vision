import React, { useState, useEffect, useCallback } from 'react';
import { Link, Card, Radio, Table, Typography } from '@arco-design/web-react';
import { IconCaretDown, IconCaretUp } from '@arco-design/web-react/icon';
import axios from 'axios';
import Mock from 'mockjs';
import useLocale from '@/utils/useLocale';
import locale from './locale';
import styles from './style/popular-contents.module.less';

function PopularContent() {
  const t = useLocale(locale);
  const [type, setType] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const fetchData = useCallback(() => {
    setLoading(true);
    axios
      .get(
        `/api/workplace/popular-contents?page=${page}&pageSize=5&category=${type}`
      )
      .then(() => {
        const getList = () => {
          const { list } = Mock.mock({
            'list|100': [
              {
                'rank|+1': 1,
                title: () =>
                  Mock.Random.pick([
                    '经济日报：财政政策要精准提升效能',
                    '“双12”遇冷消费者厌倦了电商平台的促销“套路”',
                    '致敬坚守战“疫”一线的社区工作者',
                    '普高还是职高？家长们陷入选校难题',
                  ]),
                pv: function () {
                  return 500000 - 3200 * this.rank;
                },
                increase: '@float(-1, 1)',
              },
            ],
          });
          return list;
        };
        const listText = getList();
        const listPic = getList();
        const listVideo = getList();
        const list = [listText, listPic, listVideo][Number(type)];
        const res = {
          data: {
            list: list.slice((page - 1) * 5, page * 5),
            total: 100,
          },
        };
        setData(res.data.list);
        setTotal(res.data.total);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page, type]);

  useEffect(() => {
    fetchData();
  }, [page, fetchData]);

  const columns = [
    {
      title: t['workplace.column.rank'],
      dataIndex: 'rank',
      width: 65,
    },
    {
      title: t['workplace.column.title'],
      dataIndex: 'title',
      render: (x) => (
        <Typography.Paragraph style={{ margin: 0 }} ellipsis>
          {x}
        </Typography.Paragraph>
      ),
    },
    {
      title: t['workplace.column.pv'],
      dataIndex: 'pv',
      width: 100,
      render: (text) => {
        return `${text / 1000}k`;
      },
    },
    {
      title: t['workplace.column.increase'],
      dataIndex: 'increase',
      sorter: (a, b) => a.increase - b.increase,
      width: 110,
      render: (text) => {
        return (
          <span>
            {`${(text * 100).toFixed(2)}%`}
            <span className={styles['symbol']}>
              {text < 0 ? (
                <IconCaretUp style={{ color: 'rgb(var(--green-6))' }} />
              ) : (
                <IconCaretDown style={{ color: 'rgb(var(--red-6))' }} />
              )}
            </span>
          </span>
        );
      },
    },
  ];

  return (
    <Card>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography.Title heading={6}>
          {t['workplace.popularContents']}
        </Typography.Title>
        <Link>{t['workplace.seeMore']}</Link>
      </div>
      <Radio.Group
        type="button"
        value={type}
        onChange={setType}
        options={[
          { label: t['workplace.text'], value: 0 },
          { label: t['workplace.image'], value: 1 },
          { label: t['workplace.video'], value: 2 },
        ]}
        style={{ marginBottom: 16 }}
      />
      <Table
        rowKey="rank"
        columns={columns}
        data={data}
        loading={loading}
        tableLayoutFixed
        onChange={(pagination) => {
          setPage(pagination.current);
        }}
        pagination={{ total, current: page, pageSize: 5, simple: true }}
      />
    </Card>
  );
}

export default PopularContent;
