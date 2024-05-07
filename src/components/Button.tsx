import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import styled, { css } from 'styled-components'

type Props = PropsWithChildren<
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
    type: 'primary' | 'default' | 'dashed' | 'text' | 'link'
    size?: 'large' | 'middle' | 'small'
  }
>

const Button: React.FC<Props> = ({
  onClick,
  type = 'default',
  size = 'middle',
  children,
  ...props
}) => {
  return (
    <StyledButton type={type} onClick={onClick} size={size} {...props}>
      {children}
    </StyledButton>
  )
}

export default Button

const StyledButton = styled.button<Props>`
  display: inline-block;
  padding: 0 15px;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 2px;
  font-weight: 400;
  font-size: 14px;
  white-space: nowrap;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  touch-action: manipulation;
  user-select: none;
  transition: all 0.3s;

  ${({ type }) => buttonStyles[type]}
  ${({ size = 'middle' }) => sizeStyles[size]}
`

const buttonStyles = {
  primary: css`
    background-color: ${(p) => p.theme.colors.primary};
    border: none;
    color: #fff;
  `,
  default: css`
    background-color: white;
    border-color: #d9d9d9;
    color: rgba(0, 0, 0, 0.65);
  `,
  dashed: css`
    background-color: white;
    border: 1px dashed #d9d9d9;
    color: rgba(0, 0, 0, 0.65);
  `,
  text: css`
    border: none;
    color: rgba(0, 0, 0, 0.65);
  `,
  link: css`
    border: none;
    color: ${(p) => p.theme.colors.primary};
    text-decoration: underline;
  `,
}

const sizeStyles = {
  large: css`
    padding: 15px 30px;
    font-size: 14px;
    border-radius: 4px;
  `,
  middle: css`
    padding: 0 15px;
    font-size: 14px;
    border-radius: 2px;
  `,
  small: css`
    padding: 0 7px;
    font-size: 12px;
    border-radius: 2px;
  `,
}