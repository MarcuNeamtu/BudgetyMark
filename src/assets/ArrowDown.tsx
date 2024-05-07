import React, { SVGProps } from 'react'

const ArrowDown: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.5 0H4.5V10.0312L6.625 7.875L7.375 8.59375L4.375 11.5938L4 11.9375L3.625 11.5938L0.625 8.59375L1.375 7.875L3.5 10.0312V0Z"
        fill="#FE4D97"
      />
    </svg>
  )
}

export default ArrowDown