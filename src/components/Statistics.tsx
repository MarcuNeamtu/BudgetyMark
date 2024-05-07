import React from 'react'
import styled from 'styled-components'

type Props = {
  value: React.ReactNode
  label: React.ReactNode
  size?: 'sm' | 'lg'
}

const Statistic: React.FC<Props> = ({ value, label, size = 'lg' }) => {
  return (
    <div>
      <Value size={size}>{value}</Value>
      <Label>{label}</Label>
    </div>
  )
}

export default Statistic

const Value = styled.div<{ size: Props['size'] }>`
  font-size: ${(p) => (p.size == 'lg' ? '26px' : '22px')};
  color: ${(p) => p.theme.colors.textPrimary};
  margin-bottom: 5px;
`

const Label = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: ${(p) => p.theme.colors.textSecondary};
`