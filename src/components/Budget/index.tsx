import React from 'react'
import styled from 'styled-components'
import PlaceholderDesktop from '../../assets/PlaceholderDesktop'
import Button from '../Button'

const Budget: React.FC = () => {
  return (
    <Container>
      <PlaceholderDesktop style={{ width: '100%', maxWidth: '500px' }} />
      <Text>
        You don’t have any budget spendings. Create new limits and budget to see
        your account details
      </Text>
      <Button type="primary" size="large" onClick={() => null}>
        PLAN YOUR BUDGET
      </Button>
    </Container>
  )
}

export default Budget

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  gap: 30px;
`

const Text = styled.div`
  width: 100%;
  max-width: 400px;
  text-align: center;
  font-weight: 300;
  color: ${(p) => p.theme.colors.textSecondary};
`