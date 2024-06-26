import React, { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement> & {
  fill?: string
}

const ArrowRightIcon: React.FC<Props> = ({ fill = '#778CA2', ...props }) => {
  return (
    <svg
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.5781 0.359375L17.0781 5.85938L17.5078 6.375L17.0781 6.89062L11.5781 12.3906L10.5469 11.3594L14.8867 7.0625H5.5625C4.61719 7.0625 3.80078 7.40625 3.11328 8.09375C2.45443 8.7526 2.125 9.55469 2.125 10.5C2.125 11.4453 2.45443 12.2617 3.11328 12.9492C3.80078 13.6081 4.61719 13.9375 5.5625 13.9375V15.3125C4.24479 15.3125 3.11328 14.8398 2.16797 13.8945C1.22266 12.9492 0.75 11.8177 0.75 10.5C0.75 9.18229 1.22266 8.05078 2.16797 7.10547C3.11328 6.16016 4.24479 5.6875 5.5625 5.6875H14.8867L10.5469 1.39062L11.5781 0.359375Z"
        fill={fill}
      />
    </svg>
  )
}

export default ArrowRightIcon