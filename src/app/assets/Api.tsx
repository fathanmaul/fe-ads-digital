export default function Api({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <mask
        id="mask0_2105_2158"
        style={
          {
            maskType: "alpha",
          } as React.CSSProperties
        }
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="17"
        height="17"
      >
        <rect width="17" height="17" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_2105_2158)">
        <path
          d="M8.49997 10.2885L6.71143 8.5L8.49997 6.71146L10.2885 8.5L8.49997 10.2885ZM6.99476 5.59583L4.85205 3.45312L8.49997 -0.194794L12.1479 3.45312L10.0052 5.59583L8.49997 4.09062L6.99476 5.59583ZM3.45309 12.1479L-0.194824 8.5L3.45309 4.85208L5.5958 6.99479L4.09059 8.5L5.5958 10.0052L3.45309 12.1479ZM13.5468 12.1479L11.4041 10.0052L12.9093 8.5L11.4041 6.99479L13.5468 4.85208L17.1948 8.5L13.5468 12.1479ZM8.49997 17.1948L4.85205 13.5469L6.99476 11.4042L8.49997 12.9094L10.0052 11.4042L12.1479 13.5469L8.49997 17.1948Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
