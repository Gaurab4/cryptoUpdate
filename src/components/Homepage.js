import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery ,useGetExchangesQuery } from '../services/cryptoApi';


import styled from 'styled-components'



const { Title } = Typography;


const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const globalStats =data;
 
  

  
  if (isFetching) return "Loading...";;
  return (
    <>
    <Main>
    <Title level={2} className="heading" >Global Crypto Stats </Title>
    </Main>
    
      <Row gutter={[32, 32]}>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value= {globalStats.cryptocurrencies_number} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value= {"3"}/></Col>
        <Col span={12}><Statistic title="Total Market Cap:" value={millify(globalStats.market_cap_usd)}/></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.volume_24h_usd)} /></Col>
        
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Cryptos In The World</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
      </div>
  
      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3}><Link to="/news">Show more</Link></Title>
      </div>

      
    </>
  );
};
const Main = styled.div`
padding-top:10%;
`;

export default Homepage;