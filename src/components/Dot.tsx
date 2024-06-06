import React from "react";

function Dot() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="517"
      height="430"
      fill="none"
      viewBox="0 0 517 430"
    >
      <g filter="url(#filter0_f_101_132)">
        <ellipse
          cx="245"
          cy="253.5"
          fill="#FDE598"
          rx="145"
          ry="76.5"
        ></ellipse>
      </g>
      <g filter="url(#filter1_f_101_132)">
        <ellipse cx="275" cy="176.5" fill="#F55" rx="142" ry="76.5"></ellipse>
      </g>
      <defs>
        <filter
          id="filter0_f_101_132"
          width="490"
          height="353"
          x="0"
          y="77"
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
            result="effect1_foregroundBlur_101_132"
            stdDeviation="50"
          ></feGaussianBlur>
        </filter>
        <filter
          id="filter1_f_101_132"
          width="484"
          height="353"
          x="33"
          y="0"
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
            result="effect1_foregroundBlur_101_132"
            stdDeviation="50"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Dot;
