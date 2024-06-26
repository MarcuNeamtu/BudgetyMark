import React, { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement> & {
  fill?: string
}

const CheckedIcon: React.FC<Props> = ({ fill, ...props }) => {
  return (
    <svg
      viewBox="0 0 11 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.6437 7.84288L0.157101 4.35628C-0.0523671 4.14681 -0.0523671 3.80718 0.157101 3.59769L0.915668 2.8391C1.12514 2.62961 1.46479 2.62961 1.67426 2.8391L4.023 5.18782L9.05374 0.157101C9.26321 -0.0523671 9.60286 -0.0523671 9.81233 0.157101L10.5709 0.915689C10.7804 1.12516 10.7804 1.46479 10.5709 1.67428L4.40229 7.8429C4.1928 8.05237 3.85317 8.05237 3.6437 7.84288Z"
        fill={fill ?? '#fff'}
      />
    </svg>
  )
}

export default CheckedIcon