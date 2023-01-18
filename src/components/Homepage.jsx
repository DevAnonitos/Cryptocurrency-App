import React from 'react';
import { Link } from 'react-router-dom';

import millify from 'millify';

import { Typography, Row, Col, Statistic } from 'antd';

import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import Loader from './Loader';

const { Title } = Typography;

const Homepage = () => {
  return (
    <>
      <Title 
        level={2} 
        className="heading text-emerald-600"
      >
        Global Crypto Stats
      </Title>
      <Row gutter={[32, 32]}>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap:" />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" />
        </Col>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies"/>
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" />
        </Col>
      </Row>
    </>
  )
}

export default Homepage