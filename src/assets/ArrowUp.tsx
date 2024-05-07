import React, { SVGProps } from 'react'

const ArrowUp: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 0.0625L4.375 0.40625L7.375 3.40625L6.625 4.125L4.5 1.96875V12H3.5V1.96875L1.375 4.125L0.625 3.40625L3.625 0.40625L4 0.0625Z"
        fill="#6DD230"
      />
    </svg>
  )
}

export default ArrowUp