import React, { SVGProps } from 'react'

const ChevronRight: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.83203 3.08203C4.26172 1.65234 5.98438 0.9375 8 0.9375C10.0156 0.9375 11.7383 1.65234 13.168 3.08203C14.5977 4.51172 15.3125 6.23438 15.3125 8.25C15.3125 10.2656 14.5977 11.9883 13.168 13.418C11.7383 14.8477 10.0156 15.5625 8 15.5625C5.98438 15.5625 4.26172 14.8477 2.83203 13.418C1.40234 11.9883 0.6875 10.2656 0.6875 8.25C0.6875 6.23438 1.40234 4.51172 2.83203 3.08203ZM12.3594 3.89062C11.1641 2.67187 9.71094 2.0625 8 2.0625C6.28906 2.0625 4.82422 2.67187 3.60547 3.89062C2.41016 5.08594 1.8125 6.53906 1.8125 8.25C1.8125 9.96094 2.41016 11.4258 3.60547 12.6445C4.82422 13.8398 6.28906 14.4375 8 14.4375C9.71094 14.4375 11.1641 13.8398 12.3594 12.6445C13.5781 11.4258 14.1875 9.96094 14.1875 8.25C14.1875 6.53906 13.5781 5.08594 12.3594 3.89062ZM7.01562 4.45312L10.3906 7.82812L10.7422 8.25L10.3906 8.67188L7.01562 12.0469L6.17188 11.2031L9.16016 8.25L6.17188 5.29688L7.01562 4.45312Z"
        fill="#778CA2"
      />
    </svg>
  )
}

export default ChevronRight