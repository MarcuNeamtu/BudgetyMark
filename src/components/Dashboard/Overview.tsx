import React from 'react'
import styled from 'styled-components'
import Card from '../Card'
import Statistic from '../Statistic'
import BalanceChart from '../BalanceChart'
import GreenPie from '../../assets/GreenPie.png'
import OrangePie from '../../assets/OrangePie.png'
import ArrowUp from '../../assets/ArrowUp'
import ArrowDown from '../../assets/ArrowDown'
import QuestionOutlined from '../../assets/QuestionOutlined'

const Overview: React.FC = () => {
  return (
    <Container>
      <Card
        title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span>Latest transactions</span>
            <QuestionOutlined
              onClick={() => {}}
              width={15}
              style={{ marginLeft: 'auto' }}
            />
          </div>
        }
      >
        <Statistic value="$150.000" label="Total balance" />
        <BalanceChart />
      </Card>

      <Card>
        <GridCard>
          <div>
            <SmallText>Funds</SmallText>
            <Statistic
              value={
                <span>
                  <span>$200.000</span> <ArrowUp width={10} />
                </span>
              }
              label="Balance increased"
              size="sm"
            />
          </div>
          <img src={GreenPie} alt="PieChart" />
        </GridCard>
      </Card>

      <Card>
        <GridCard>
          <div>
            <SmallText>Expenses</SmallText>
            <Statistic
              value={
                <span>
                  <span>$50.000</span> <ArrowDown width={10} />
                </span>
              }
              label="Balance decreased"
              size="sm"
            />
          </div>
          <img src={OrangePie} alt="PieChart" />
        </GridCard>
      </Card>
    </Container>
  )
}

export default Overview

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.contentGap}px;
`

const GridCard = styled.div`
  display: flex;
  align-items: center;

  & img {
    margin-left: auto;
  }
`

const SmallText = styled.p`
  font-size: 14px;
  color: ${(p) => p.theme.colors.textSecondary};
  margin-bottom: 15px;
`