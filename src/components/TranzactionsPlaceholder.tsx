import React from 'react'
import styled from 'styled-components'
import PlaceholderOffice from 'assets/PlaceholderOffice'
import Skeleton from 'assets/Skeleton'

const TransactionsPlaceholder: React.FC = () => {
  return (
    <Wrapper>
      <PlaceholderOffice width="300px" />
      <Paragraph>Your transactions will appear here</Paragraph>
      <Wrapper gap={10}>
        <Skeleton width={300} />
        <Skeleton width={300} />
        <Skeleton width={300} />
        <Skeleton width={300} />
      </Wrapper>
    </Wrapper>
  )
}

export default TransactionsPlaceholder

const Wrapper = styled.div<{ gap?: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(p) => p.gap ?? 30}px;
`

const Paragraph = styled.p`
  color: ${(p) => p.theme.colors.textSecondary};
  font-size: 14px;
`