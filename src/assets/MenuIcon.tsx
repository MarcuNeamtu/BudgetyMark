import React, { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement> & {
  fill?: string
}

const MenuIcon: React.FC<Props> = ({ fill, ...props }) => {
  return (
    <svg
      viewBox="0 0 18 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.75 0.5625H17.25V1.9375H0.75V0.5625ZM0.75 6.0625H17.25V7.4375H0.75V6.0625ZM0.75 11.5625H17.25V12.9375H0.75V11.5625Z"
        fill={fill ?? '#778CA2'}
      />
    </svg>
  )
}

export default MenuIcon