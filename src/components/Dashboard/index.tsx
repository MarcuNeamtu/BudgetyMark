import React from 'react'
import styled from 'styled-components'
import LatestTransactions from './LatestTransactions'
import Overview from './Overview'

const Dashboard: React.FC = () => {
  return (
    <Container>
      <LatestTransactions />
      <Overview />
    </Container>
  )
}

export default Dashboard

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: ${(p) => p.theme.contentGap}px;
`