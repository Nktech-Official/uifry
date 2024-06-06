import React from "react";

function FeatureDot({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="601"
      height="493"
      fill="none"
      viewBox="0 0 601 493"
    >
      <g filter="url(#filter0_f_101_95)">
        <ellipse
          cx="179.764"
          cy="94.841"
          fill="#FDE598"
          rx="179.764"
          ry="94.841"
          transform="matrix(1 0 0 -1 104 293.682)"
        ></ellipse>
      </g>
      <g filter="url(#filter1_f_101_95)">
        <ellipse
          cx="176.044"
          cy="94.841"
          fill="#F55"
          rx="176.044"
          ry="94.841"
          transform="matrix(1 0 0 -1 144.911 389.142)"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter0_f_101_95"
          width="565.836"
          height="395.991"
          x="0.845"
          y="0.845"
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
            result="effect1_foregroundBlur_101_95"
            stdDeviation="51.577"
          ></feGaussianBlur>
        </filter>
        <filter
          id="filter1_f_101_95"
          width="558.398"
          height="395.991"
          x="41.757"
          y="96.306"
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
            result="effect1_foregroundBlur_101_95"
            stdDeviation="51.577"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default FeatureDot;
