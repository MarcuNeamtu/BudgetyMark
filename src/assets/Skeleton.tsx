import React, { SVGProps } from 'react'

const Skeleton: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 301 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="57.5076"
        y="26.9231"
        width="123.529"
        height="8.61539"
        fill="#E8ECEF"
      />
      <ellipse
        opacity="0.15"
        cx="21.662"
        cy="21"
        rx="21.5074"
        ry="21"
        fill="#98A9BC"
      />
      <rect
        x="57.5076"
        y="9.69232"
        width="242.647"
        height="8.61539"
        fill="#E8ECEF"
      />
    </svg>
  )
}

export default Skeleton