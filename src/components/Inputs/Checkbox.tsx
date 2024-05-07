import React, { FC } from 'react'
import styled from 'styled-components'
import CheckedIcon from '@/assets/CheckedIcon'

interface Props {
  label: string
  checked: boolean
  onClick: () => unknown
}

const Checkbox: FC<Props> = ({ label, checked, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Box checked={checked}>{checked && <CheckedIcon width={10} />}</Box>
      <span>{label}</span>
    </Container>
  )
}

export default Checkbox

const Container = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 10px;
  color: ${(p) => p.theme.colors.textSecondary};
  font-weight: 300;
  user-select: none;
`

const Box = styled.div<{ checked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 20px;
  border: none;
  border-radius: 4px;
  background-color: ${(p) => (p.checked ? '#778CA2' : '#f2f4f6')};
`