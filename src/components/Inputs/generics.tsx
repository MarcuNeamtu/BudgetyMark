import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  border: 1px solid #e9eef2;
  border-radius: 4px;
  padding: 16px;
  background: none;
  font-size: 16px;

  &::placeholder {
    color: ${(p) => p.theme.colors.textSecondary};
  }

  outline-color: ${(p) => p.theme.colors.primary};
`

export const Label = styled.div`
  color: #252631;
  font-size: 16px;
  margin-bottom: 8px;
`