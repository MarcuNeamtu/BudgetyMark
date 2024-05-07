import React from 'react'
import styled from 'styled-components'
import Card from 'components/Card'
import TransactionsPlaceholder from 'components/TransactionsPlaceholder'
import Calendar from 'components/Calendar'

const Transactions: React.FC = () => {
  return (
    <Container>
      <Card title={<span>Search</span>}>
        <TransactionsPlaceholder />
      </Card>

      <Calendar />
    </Container>
  )
}

export default Transactions

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: ${(p) => p.theme.contentGap}px;
`