import clsx from "clsx";
import { AnchorHTMLAttributes } from "react";

interface SVGProps extends AnchorHTMLAttributes<HTMLDivElement> {}

export function SVG({ children, ...rest }: SVGProps): JSX.Element {
  return (
    <div  
    className="col-start-1 row-start-1 content-center items-center justify-center self-center text-center align-middle text-4xl font-extrabold tracking-tight text-primary-700 dark:text-white"
    >
      <svg
        className="z-50 mx-auto self-center"
        width="540"
        height="540"
        viewBox="0 0 160 160"
        fill="url(#Gradient2)"
        stroke="#333333aa"
        strokeWidth="2px"
      >
        <defs>
          <linearGradient id="Gradient3" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#94e4ff" stopOpacity="10" />
            <stop offset="60%" stopColor="#0badff" stopOpacity="10" />
            <stop offset="100%" stopColor="#0872A8" stopOpacity="10" />
          </linearGradient>
          <linearGradient id="Gradient2" x1="0" x2="0" y1="1" y2="1">
            <stop offset="0%" stopColor="#00caff" stopOpacity="30" />
            <stop offset="70%" stopColor="#0badff" stopOpacity="80" />
            <stop offset="100%" stopColor="#0872A8" stopOpacity="90" />
          </linearGradient>
          <linearGradient id="Gradient1" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#e9efff" stopOpacity="80" />
            <stop offset="50%" stopColor="#f5143d" stopOpacity="100" />
            <stop offset="100%" stopColor="#feee70" stopOpacity="80" />
          </linearGradient>
        </defs>
        <circle cx="80" cy="80" r="50" fill="url(#Gradient2)" />
        <g transform=" matrix(0.866, -0.5, -0.25, -0.443, 80, 80)">
          <path
            d="M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z"
            fill="url(#Gradient1)"
            stroke="#222222aa"
            strokeWidth="1px"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="360 -10 10"
              to="0 0 0"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>
        </g>
        <path
          d="M 50,0 A 50,50 0 0,0 -50,0Z"
          fill="url(#Gradient3)"
          stroke="#00000000"
          strokeWidth="1px"
          transform="matrix(0.836, -0.495, 0.495, 0.836, 80, 80)"
        />
      </svg>
  </div>
  );
}
