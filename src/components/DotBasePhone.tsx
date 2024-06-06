import React from "react";

function DotBasePhone({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="568"
      height="765"
      fill="none"
      viewBox="0 0 568 765"
    >
      <g filter="url(#filter0_d_101_129)">
        <g filter="url(#filter1_f_101_129)">
          <ellipse
            cx="283.618"
            cy="525.068"
            fill="#F55"
            rx="198.714"
            ry="107.054"
            transform="rotate(150 283.618 525.068)"
          ></ellipse>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_101_129"
          width="368.544"
          height="279.789"
          x="99.347"
          y="389.174"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_101_129"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_101_129"
            result="shape"
          ></feBlend>
        </filter>
        <filter
          id="filter1_f_101_129"
          width="566.853"
          height="478.098"
          x="0.192"
          y="286.019"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_101_129"
            stdDeviation="51.577"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default DotBasePhone;
