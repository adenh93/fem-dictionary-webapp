import { HTMLAttributes } from "react";

export default function IconArrowDown(props: HTMLAttributes<SVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="8"
      viewBox="0 0 14 8"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        d="m1 1 6 6 6-6"
      />
    </svg>
  );
}
