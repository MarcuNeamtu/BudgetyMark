import React, { PropsWithChildren, ReactNode } from 'react'
import styled from 'styled-components'

type Props = PropsWithChildren & {
  title?: ReactNode
}

const Card: React.FC<Props> = ({ title, children }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <Content>{children}</Content>
    </Container>
  )
}

export default Card

const Container = styled.div`
  background: ${(p) => p.theme.contentBackground};
  border-radius: 4px;
`

const Content = styled.div`
  padding: ${(p) => p.theme.contentGap / 2 + 'px ' + p.theme.contentGap + 'px'};
  border-radius: 4px;

  & + div {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`

const Title = styled(Content)`
  background: ${(p) => p.theme.contentBackground};
  border-bottom: 1px solid ${(p) => p.theme.colors.border};
  border-radius: 4px 0;
`